import 'swiper/css';

import { ReactNode } from 'react';
import { Swiper, SwiperProps } from 'swiper/react';

interface SlideProps{
  children: ReactNode;
  settings: SwiperProps
}

export default ({ children, settings }: SlideProps) => {
  return(
    <Swiper {...settings}>
      {children}
    </Swiper>
  );
}