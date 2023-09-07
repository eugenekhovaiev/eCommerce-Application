import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';
import 'swiper/scss/free-mode';
import 'swiper/scss/navigation';
import 'swiper/scss/thumbs';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Modal, Paper } from '@mui/material';
import ModalSwiper from '../modalSwiper/ModalSwiper';
import { SwiperProps } from '../../shared/types';
import ImageElement from '../../shared/UI/imageElement/ImageElement';
import closeIcon from '../../shared/assets/close.svg';

const SwiperElement = (props: SwiperProps): JSX.Element => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const closeModal = (): void => {
    setModalIsOpen(false);
  };

  const [thumbsSwiper] = useState(null);

  const images = props.images;

  return (
    <>
      <Swiper
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
        onClick={(): void => setModalIsOpen(true)}
        style={{ cursor: 'pointer' }}
      >
        {images.map((photo, index) => (
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
        className="mySwiper mySwiper_small"
      >
        {images.map((photo, index) => (
          <SwiperSlide key={index}>
            <img src={photo.url} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Modal open={modalIsOpen} onClose={closeModal} className="modal mySwiper__modal">
        <Paper className="modal__content">
          <div className="modal__close" onClick={closeModal}>
            <ImageElement src={closeIcon} alt="close-modal" />
          </div>
          <ModalSwiper images={images} />
        </Paper>
      </Modal>
    </>
  );
};

export default SwiperElement;
