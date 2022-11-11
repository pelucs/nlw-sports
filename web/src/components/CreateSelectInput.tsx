import * as Select from '@radix-ui/react-select';
import axios from 'axios';
import { CaretDown, Check } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { Game } from '../App';

interface SelectGameProps{
  onSelectGame: (newGame: string) => void;
}

export default ({ onSelectGame }: SelectGameProps) => {

  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    axios('http://localhost:3333/games')
    .then(response => {
      setGames(response.data);
    });
  }, []);

  return(
    <Select.Root
      onValueChange={onSelectGame}
    >
      <Select.Trigger className="bg-zinc-900 py-3 px-4 rounded outline-none text-xs md:text-sm 
      text-zinc-500 flex items-center justify-between">
        <Select.Value placeholder="Selecione um jogo que deseja jogar" />
        <CaretDown className="w-4 h-4" weight="bold"/>
      </Select.Trigger>

      <Select.Portal className="relative top-24 left-1 w-full h-auto bg-zinc-900 rounded py-4 px-6">
        <Select.Content>
          <Select.ScrollUpButton>
            <CaretDown className="w-4 h-4" weight="bold"/>
          </Select.ScrollUpButton>

          <Select.Viewport>
            <Select.Group>
              <Select.Label className="text-zinc-500"> 
                Jogos
              </Select.Label>

              { games.map(game => (
                <Select.Item 
                  key={game.id}
                  value={game.id}
                  className="mt-2 py-2 rounded text-white hover:px-4 hover:bg-zinc-800 
                  transition-all cursor-pointer flex items-center"
                >
                  <Select.ItemIndicator className="mr-2">
                    <Check className="w-4 h-4 text-violet-500" weight="bold"/>
                  </Select.ItemIndicator>

                  <Select.ItemText>
                    {game.title}
                  </Select.ItemText>
                </Select.Item>
              )) }

            </Select.Group>
            <Select.Separator />
          </Select.Viewport>
          <Select.ScrollDownButton />
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}