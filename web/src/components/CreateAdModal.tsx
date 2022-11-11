import * as Dialog from '@radix-ui/react-dialog';
import * as Checkbox from '@radix-ui/react-checkbox';

import { FormEvent, useEffect, useState } from 'react';
import { Check, GameController } from "phosphor-react";

import Input from "./Form/Input";
import SelectInput from './CreateSelectInput';
import CreateToggleDays from './CreateToggleDays';
import axios from 'axios';

interface WarningProps{
  onActiveWarning: (newState: boolean) => void;
  onTitleWarning: (newTitle: string) => void;
}

export default ({ onActiveWarning, onTitleWarning }: WarningProps) => {

  const [weekDays, setWeekDays] = useState<string[]>([]);
  const [useVoiceChannel, setUseVoiceChannel] = useState<boolean>(false);
  const [selectGame, setSelectGame] = useState<string>("");

  const [close, setClose] = useState<boolean>(false);

  const handleCreateAd = async (e: FormEvent) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData);

    try {
      axios.post(`http://localhost:3333/games/${selectGame}/ads`, {
      "name": data.name,
      "yearsPlaying": Number(data.yearsPlaying),
      "discord": data.discord,
      "weekDays": weekDays.map(Number),
      "hourStart": data.hourStart,
      "hourEnd": data.hourEnd,
      "useVoiceChannel": useVoiceChannel
      })
      .then(() => {
        onActiveWarning(true);
        onTitleWarning("Anúncio criado com sucesso");
        setClose(true);

        setTimeout(() => {
          onActiveWarning(false);
          onTitleWarning("");
        }, 4000);
      });

    } catch(error) {
      onActiveWarning(true);
      onTitleWarning("Erro ao criar o anúncio, tente novamente");

      setTimeout(() => {
        onActiveWarning(false);
        onTitleWarning("");
      }, 4000);
    }
  }

  return(
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/50 fixed inset-0 z-10"/>

      <Dialog.Content className="w-[320px] md:w-[550px] p-4 md:py-6 md:px-8 fixed bg-[#2A2634] text-white top-1/2 left-1/2
      -translate-x-1/2 -translate-y-1/2 rounded-lg z-10">
        <Dialog.Title className="text-2xl font-black">
          Publique um anúncio
        </Dialog.Title>

        <form onSubmit={handleCreateAd} className="mt-3 md:mt-8 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="game" className="font-semibold text-xs md:text-base">Qual o game?</label>
            
            <SelectInput onSelectGame={setSelectGame}/>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="font-semibold text-xs md:text-base">Seu nome (ou nickname)</label>
            <Input 
              id="name"
              name="name"
              placeholder="Como te chamam dentro do game"
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="flex-1 flex flex-col gap-2">
              <label htmlFor="yearsPlaying" className="font-semibold text-xs md:text-base">Joga a quantos anos?</label>
              <Input 
                type="number"
                name="yearsPlaying"
                id="yearsPlaying"
                placeholder="Tudo bem ser 0 (zero)"
              />
            </div>

            <div className="flex-1 flex flex-col gap-2">
              <label htmlFor="discord" className="font-semibold text-xs md:text-base">Qual seu discord?</label>
              <Input 
                id="discord"
                name="discord"
                placeholder="Usuario#0000"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="weekDays" className="font-semibold text-xs md:text-base">Quando costuma jogar?</label>

              <CreateToggleDays weekDays={weekDays} onWeekDays={setWeekDays} />
            </div>

            <div className="flex-1 flex flex-col gap-2">
              <label htmlFor="hourStart" className="font-semibold text-xs md:text-base">Qual horário do dia?</label>
              <div className="grid grid-cols-2 gap-2">
                <Input type="time" name="hourStart" id="hourStart" placeholder="De"/>

                <Input type="time" name="hourEnd" id="hourEnd" placeholder="Até"/>
              </div>
            </div>
          </div>

          <label className="font-semibold flex items-center gap-2">
            <Checkbox.Root 
              className="w-6 h-6 flex items-center justify-center rounded bg-zinc-900"
              checked={useVoiceChannel}
              onCheckedChange={check => {
                if(check === true){
                  setUseVoiceChannel(true);
                } else{
                  setUseVoiceChannel(false);
                }
              }}
            >
              <Checkbox.Indicator>
                <Check
                  className="w-4 h-4 text-emerald-400"
                  weight="bold"
                />
              </Checkbox.Indicator>
            </Checkbox.Root>

            Constumo me conectar ao chat de voz
          </label>

          <footer className="mt-4 grid grid-cols-2 gap-2">
            <Dialog.Close className="text-semibold bg-zinc-500 px-5 h-12 hover:bg-zinc-600 rounded-md 
            transition-all">
              Cancelar
            </Dialog.Close>

            <button 
              type="submit" 
              className="px-5 h-12 flex items-center justify-center gap-2 text-semibold bg-violet-500 
              hover:bg-violet-600 rounded-md transition-all"
            >
              <GameController
                size={20}
                weight="bold"
              />
              Encontrar duo
            </button>
          </footer>
          
        </form>

      </Dialog.Content>
    </Dialog.Portal>
  );
}