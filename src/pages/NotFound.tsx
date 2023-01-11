import styled from 'styled-components';

function NotFound() {
  return <NotFoundContainer className="container">해당 서비스는 준비 중 입니다.</NotFoundContainer>;
}
const NotFoundContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  font-size: 20px;
`;

export default NotFound;
