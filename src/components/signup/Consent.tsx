import styled from 'styled-components';

type PropsType = {
  text: string;
};
function Consent(props: PropsType) {
  const { text } = props;
  return (
    <ConsentContainer>
      {text} <input type="checkbox" id="agree" /> <label htmlFor="agree">동의함</label>
      <input type="checkbox" id="disagree" />
      <label htmlFor="disagree">동의하지 않음</label>
    </ConsentContainer>
  );
}
const ConsentContainer = styled.div`
  margin: 10px;
  font-size: 12px;
  line-height: 20px;
`;
export default Consent;
