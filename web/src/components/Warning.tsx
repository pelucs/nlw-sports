interface WarningProps{
  active: boolean;
  title: string;
}

export default ({ active, title }: WarningProps) => {
  return(
    <div className={`w-60 fixed top-5 ${ active ? 'right-5' : '-right-full' } rounded bg-zinc-900 transition-all overflow-hidden ease-linear z-20`}>
      <strong className="px-4 py-3 text-white">
        {title}
      </strong>
    </div>
  );
}