import styled from 'styled-components';
import join_1 from '../../assets/images/join_1.png';
import join_2 from '../../assets/images/join_2.png';
import join_3 from '../../assets/images/join_3.png';
import arrow from '../../assets/images/join_4.png';

function StepIcon() {
  const ICON_LIST = [
    { src: join_1, class: 'step-icon', span: '약관동의' },
    { src: arrow, class: 'arrow' },
    { src: join_2, class: 'step-icon', span: '약관동의' },
    { src: arrow, class: 'arrow' },
    { src: join_3, class: 'step-icon', span: '약관동의' },
  ];
  return (
    <StepIconContainer>
      <div className="join">
        {ICON_LIST.map((data) => {
          return (
            <div className={data.class}>
              <img src={data.src} alt="가입약관" />
              {data.span && <span>{data.span}</span>}
            </div>
          );
        })}
      </div>
    </StepIconContainer>
  );
}
const StepIconContainer = styled.div`
  .join {
    width: 40%;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
  }
  .step-icon {
    width: 20%;
    margin: 10px 0;
    text-align: center;
    span {
      font-size: 14px;
      font-weight: bold;
      color: #999690;
    }
  }
  .arrow {
    width: 7%;
    margin: 6.5%;
  }
`;

export default StepIcon;
