import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';
import 'swiper/scss/free-mode';
import 'swiper/scss/navigation';
import 'swiper/scss/thumbs';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Modal, Paper, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ModalSwiper from '../modalSwiper/ModalSwiper';
import { Image } from '@commercetools/platform-sdk';

const SwiperElement = (props: { images: Image[] }): JSX.Element => {
  const [open, setOpen] = useState(false);

  const handleClose = (): void => {
    setOpen(false);
  };
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
        onClick={(): void => setOpen(true)}
        style={{ cursor: 'pointer' }}
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
      <Modal open={open} onClose={handleClose} className="modal-window">
        <Paper>
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
            style={{ position: 'absolute', top: 0, right: 0, padding: '1rem' }}
          >
            <CloseIcon />
          </IconButton>
          <ModalSwiper />
        </Paper>
      </Modal>
    </>
  );
};

export default SwiperElement;
