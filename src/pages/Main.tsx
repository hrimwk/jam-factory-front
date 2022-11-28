import Sliders from '../components/Sliders';
import styled from 'styled-components';

import meta_1 from '../assets/images/meta_1.png';
import metaHover_1 from '../assets/images/meta_1_2.png';
import meta_2 from '../assets/images/meta_2.png';
import metaHover_2 from '../assets/images/meta_2_2.png';
import meta_3 from '../assets/images/meta_3.png';
import metaHover_3 from '../assets/images/meta_3_2.png';

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
interface metaBackground {
  backUrl: string;
  hoverUrl: string;
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
  const metaList = [
    { backgroundUrl: meta_1, hoverUrl: metaHover_1, content: 'TRUTHFUL' },
    { backgroundUrl: meta_2, hoverUrl: metaHover_2, content: 'SINCERITY' },
    { backgroundUrl: meta_3, hoverUrl: metaHover_3, content: 'HEALTHY' },
  ];
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
      <div className="meta-icon-area">
        <p className="title">
          대상에프앤비(주)는 <br />
          자연에 감사하는 마음을 담기 위해 노력합니다.
        </p>
        <p className="subtitle">
          정직과 정성이 좋은 제품을 만들고, 사회를 이롭게 한다는
          <br />
          철학을 바탕으로 소비자에게 건강한 가치를 제공하기 위해 노력할 것입니다.
        </p>

        <div className="meta-img-wrap">
          {metaList.map((data) => {
            return (
              <div className="meta-img">
                <MetaImg backUrl={data.backgroundUrl} hoverUrl={data.hoverUrl} />
                <p>{data.content}</p>
              </div>
            );
          })}
        </div>
      </div>
    </MainContainer>
  );
}
const MainContainer = styled.div`
  margin-top: 170px;

  .meta-icon-area {
    text-align: center;
    margin: 10% 20%;
    .title {
      color: #333;
      font-size: 28px;
      line-height: 48px;
      margin-bottom: 30px;
    }

    .subtitle {
      color: #999;
      margin-bottom: 50px;
      line-height: 30px;
    }

    .meta-img-wrap {
      width: 90%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      .meta-img {
        width: 25%;
        cursor: pointer;
        p {
          margin: 10%;
          font-size: 20px;
        }
      }
    }
  }
`;
const MetaImg = styled.div<metaBackground>`
  display: block;
  width: 100%;
  height: 150px;
  background: url(${({ backUrl }) => backUrl}) no-repeat center center;
  background-size: contain;
  &:hover {
    background: url(${({ hoverUrl }) => hoverUrl}) no-repeat center center;
    background-size: contain;
  }
`;
export default Main;
