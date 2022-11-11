import { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

export default (props: Props) => {
  return(
    <input 
      {...props}
      className="bg-zinc-900 py-3 px-4 rounded outline-none text-sm 
      placeholder:text-zinc-500"
    />
  );
}