import * as Dialog from '@radix-ui/react-dialog';
import { MagnifyingGlassPlus } from "phosphor-react";

export default () => {
  return(
    <div className="w-full mt-8 pt-1 bg-nlw-gradient rounded-lg overflow-hidden">
      <div className="h-full bg-[#2A2634] px-6 py-6 flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <strong className="text-white text-xl md:text-2xl">
            Não encontrou o seu duo?
          </strong>
          
          <p className="text-zinc-400">
            Publique um anúncio para encontrar novos players!
          </p>
        </div>

        <Dialog.Trigger className="w-[200px] mt-5 md:mt-0 flex items-center justify-center gap-2 px-4 py-3 text-white rounded 
        bg-violet-500 hover:bg-violet-600 transition-colors">
          <MagnifyingGlassPlus
            size={24}
            weight="bold"
          />
          Publicar anúncio
        </Dialog.Trigger>
      </div>
    </div>
  );
}