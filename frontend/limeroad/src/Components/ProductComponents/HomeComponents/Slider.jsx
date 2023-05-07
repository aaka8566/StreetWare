import React from 'react';
import { Box, IconButton, useBreakpointValue } from '@chakra-ui/react';




// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export const Slider1=(props)=> {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '10px' });

  // These are the images used in the slide
  const cards = [
    "https://img1.junaroad.com//assets/images/mobileNotif/img-1681727937261.jpg?crsl_pos=0",
    "https://img0.junaroad.com/images/banners/B2G1_17april2023_1681716456014.jpg?crsl_pos=0",
    "https://img1.junaroad.com//assets/images/mobileNotif/img-1679910119705.jpg?crsl_pos=0",
    "https://img1.junaroad.com//assets/images/mobileNotif/img-1676008328934.jpg?crsl_pos=0",
    "https://img1.junaroad.com//assets/images/mobileNotif/img-1682318881435.jpg?crsl_pos=0",
    "https://img1.junaroad.com//assets/images/mobileNotif/img-1682505821365.jpg?crsl_pos=0",
    "https://img1.junaroad.com//assets/images/mobileNotif/img-1682489933102.jpg?crsl_pos=0",
    "https://img1.junaroad.com//assets/images/mobileNotif/img-1667988209100.jpg?crsl_pos=0",
  ];

  return (
    <Box
      position={'relative'}
      height={'220px'}
      width={'100%'}
      overflow={'hidden'}
      margin="auto">  
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        colorScheme="grey"
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        colorScheme="grey"
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((url, index) => (
          <Box
            key={index}
            height={'220px'}
            width="80%"
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${url})`}
            
          />
        ))}
      </Slider>
    </Box>
  );
}