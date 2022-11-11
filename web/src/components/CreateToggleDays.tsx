import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { useState } from 'react';

interface ToggleProps{
  weekDays: string[];
  onWeekDays: (day: string[]) => void;
}

export default ({ onWeekDays, weekDays }: ToggleProps) => {

  return(
    <ToggleGroup.Root 
      type="multiple" 
      className="grid grid-cols-4 md:grid-cols-7 gap-1"
      onValueChange={onWeekDays}
    >
       <ToggleGroup.Item
        value="0"
        className={`w-7 h-7 flex items-center justify-center hover:bg-violet-500 rounded-sm transition-all
        ${weekDays.includes('0') ? 'bg-violet-500' : 'bg-zinc-900'}`}
        title="Domingo"
      >
        D
      </ToggleGroup.Item>

      <ToggleGroup.Item
        value="1"
        className={`w-7 h-7 flex items-center justify-center hover:bg-violet-500 rounded-sm transition-all
        ${weekDays.includes('1') ? 'bg-violet-500' : 'bg-zinc-900'}`}
        title="Segunda"
      >
        S
      </ToggleGroup.Item>

      <ToggleGroup.Item
        value="2"
        className={`w-7 h-7 flex items-center justify-center hover:bg-violet-500 rounded-sm transition-all
        ${weekDays.includes('2') ? 'bg-violet-500' : 'bg-zinc-900'}`}
        title="Terça"
      >
        T
      </ToggleGroup.Item>

      <ToggleGroup.Item
        value="3"
        className={`w-7 h-7 flex items-center justify-center hover:bg-violet-500 rounded-sm transition-all
        ${weekDays.includes('3') ? 'bg-violet-500' : 'bg-zinc-900'}`}
        title="Quarta"
      >
        Q
      </ToggleGroup.Item>

      <ToggleGroup.Item
        value="4"
        className={`w-7 h-7 flex items-center justify-center hover:bg-violet-500 rounded-sm transition-all
        ${weekDays.includes('4') ? 'bg-violet-500' : 'bg-zinc-900'}`} 
        title="Quinta"
      >
        Q
      </ToggleGroup.Item>

      <ToggleGroup.Item
        value="5"
        className={`w-7 h-7 flex items-center justify-center hover:bg-violet-500 rounded-sm transition-all
        ${weekDays.includes('5') ? 'bg-violet-500' : 'bg-zinc-900'}`}
        title="Sexta"
      >
        S
      </ToggleGroup.Item>

      <ToggleGroup.Item
        value="6"
        className={`w-7 h-7 flex items-center justify-center hover:bg-violet-500 rounded-sm transition-all
        ${weekDays.includes('6') ? 'bg-violet-500' : 'bg-zinc-900'}`} 
        title="Sábado"
      >
        S
      </ToggleGroup.Item>

    </ToggleGroup.Root>
  );
}