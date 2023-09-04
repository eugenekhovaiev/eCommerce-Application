import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';
import 'swiper/scss/free-mode';
import 'swiper/scss/navigation';
import 'swiper/scss/thumbs';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Image } from '@commercetools/platform-sdk';

const SwiperElement = (props: { images: Image[] }): JSX.Element => {
  const [thumbsSwiper] = useState(null);
  const photos = props.images;
  return (
    <>
      <Swiper
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {photos.map((photo, index) => (
          <SwiperSlide key={index}>
            <img src={photo.url} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        // onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {photos.map((photo, index) => (
          <SwiperSlide key={index}>
            <img src={photo.url} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SwiperElement;
