import Sliders from '../components/Sliders';
import styled from 'styled-components';

export interface sliderSetting {
  dots: boolean;
  arrow?: boolean;
  infinite?: boolean;
  speed?: number;
  slidesToShow?: number;
  slidesToScroll?: number;
  autoplay?: boolean;
  autoplaySpeed?: number;
}
function Main() {
  const settings = {
    dots: true,
    arrow: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 3000,
  };

  return (
    <MainContainer>
      <Sliders
        dots={settings.dots}
        arrow={settings.arrow}
        infinite={settings.infinite}
        speed={settings.speed}
        slidesToShow={settings.slidesToShow}
        slidesToScroll={settings.slidesToScroll}
      />
    </MainContainer>
  );
}
const MainContainer = styled.div`
  margin-top: 170px;
`;

export default Main;
