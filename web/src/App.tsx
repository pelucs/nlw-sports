import * as Dialog from '@radix-ui/react-dialog';
import { useEffect, useState } from 'react';
import { SwiperProps, SwiperSlide } from 'swiper/react';

import CreatAdBanner from './components/CreatAdBanner';

import logo from './assets/logo.svg';
import CreateAdModal from './components/CreateAdModal';
import axios from 'axios';
import Warning from './components/Warning';
import Slide from './components/SlideSettings';

export interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number
  }
}

export default () => {

  const [games, setGames] = useState<Game[]>([]);
  const [activeWarning, setActiveWarning] = useState<boolean>(false);
  const [titleWarning, setTitleWarning] = useState<string>("");
  const [slides, setSlides] = useState<number>(6);

  const sizeWindow = () => {
    if(document.documentElement.clientWidth < 768){
      setSlides(2);
    } else{
      setSlides(6);
    }
  }

  window.addEventListener("resize", () => {
    sizeWindow();
  })

  const settings: SwiperProps = {
    slidesPerView: slides,
    spaceBetween: 10,
  }

  useEffect(() => {
    sizeWindow();

    axios('http://localhost:3333/games')
    .then(response => {
      setGames(response.data);
    })
    .catch(() => console.log("Requisição não encontrada"));
  }, []);

  return(
    <div className="m-5 md:m-20 flex flex-col items-center">
      <Warning active={activeWarning} title={titleWarning}/>

      <img src={logo} className="w-[100px] md:w-[280px]"/>

      <strong className="mt-10 md:mt-20 text-5xl md:text-6xl text-white text-center">
        Seu <span className="text-transparent bg-nlw-gradient bg-clip-text">duo</span> está aqui.
      </strong>

      <Slide settings={settings}>  
        { games.map(game => (
            <SwiperSlide key={game.id} className="w-[360px] relative rounded-[8px] overflow-hidden">
              <img src={game.bannerUrl} className="w-full"/>

              <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0">
                <strong className="text-white">
                  {game.title}
                </strong>

                <span className="mt-1 text-zinc-300 block">
                  {game._count.ads} Anúncio(s)
                </span>
              </div>
            </SwiperSlide>
          ) 
        )}
      </Slide>

      <Dialog.Root>
        <CreatAdBanner/>

        <CreateAdModal onActiveWarning={setActiveWarning} onTitleWarning={setTitleWarning}/>
      </Dialog.Root>
    </div>
  );
}