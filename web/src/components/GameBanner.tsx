import { SwiperSlide } from 'swiper/react';

interface GameBannerProps {
  bannerUrl: string;
  title: string;
  adsCount: number;
  url: string;
}

export default (props: GameBannerProps) => {
  return(
    <SwiperSlide className="relative rounded-[8px] overflow-hidden">
      <img src={props.bannerUrl}/>

      <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0">
        <strong className="text-white">
          {props.title}
        </strong>

        <span className="mt-1 text-zinc-300 block">
          {props.adsCount} Anúncio(s)
        </span>
      </div>
    </SwiperSlide>
  );
}