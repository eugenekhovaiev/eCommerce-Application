import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';

import { Pagination, Navigation, HashNavigation } from 'swiper/modules';
// import ProductMessage from '../../shared/api/productMessage/productMessage';

const ModalSwiper = (): JSX.Element => {
  // const photos = ProductMessage.body.masterVariant.images;
  return (
    <>
      <Swiper
        spaceBetween={30}
        hashNavigation={{
          watchState: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, HashNavigation]}
        className="mySwiper swiper-element"
      >
        {/* {photos.map((photo, index) => (
          <SwiperSlide data-hash="slide1" key={index}>
            <img src={photo.url} />
          </SwiperSlide>
        ))} */}
      </Swiper>
    </>
  );
};

export default ModalSwiper;
