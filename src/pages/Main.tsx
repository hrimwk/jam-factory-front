import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import slide_1 from '../assets/images/slide_1.jpg';
import slide_2 from '../assets/images/slide_2.jpg';
import slide_3 from '../assets/images/slide_3.jpg';
import slide_4 from '../assets/images/slide_4.jpg';
import slide_5 from '../assets/images/slide_5.jpg';

function Main() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 3000,
  };
  const imgList = [slide_1, slide_2, slide_3, slide_4, slide_5];

  return (
    <MainContainer>
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
    </MainContainer>
  );
}
const MainContainer = styled.div`
  margin-top: 170px;
`;

export default Main;
