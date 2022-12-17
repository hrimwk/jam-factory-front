import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import slide_1 from '../assets/images/slide_1.jpg';
import slide_2 from '../assets/images/slide_2.jpg';
import slide_3 from '../assets/images/slide_3.jpg';
import slide_4 from '../assets/images/slide_4.jpg';
import slide_5 from '../assets/images/slide_5.jpg';
import { sliderSetting } from '../pages/Main';

function Sliders({ dots, arrow, infinite, speed, slidesToScroll, slidesToShow }: sliderSetting) {
  const settings = {
    dots: dots,
    arrow: arrow,
    infinite: infinite,
    speed: speed,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    //   autoplay: autoplay,
    //   autoplaySpeed: autoplaySpeed,
  };
  const imgList = [slide_1, slide_2, slide_3, slide_4, slide_5];

  return (
    <SliderContainer>
      <Slider {...settings}>
        {imgList.map((data, idx) => {
          return (
            <div key={idx}>
              <h3>
                <img src={data} />
              </h3>
            </div>
          );
        })}
      </Slider>
    </SliderContainer>
  );
}
const SliderContainer = styled.div`
  .slick-dots {
    bottom: 30px;
    z-index: 10;
  }
  .slick-dots li button:before {
    color: #fff;
    opacity: 0.5;
  }
  .slick-dots li.slick-active button:before {
    color: ${(props) => props.theme.colors.mainBrown};
  }
  .slick-prev {
    left: 10px;
    z-index: 1;
  }
  .slick-next {
    right: 10px;
  }
`;
export default Sliders;
