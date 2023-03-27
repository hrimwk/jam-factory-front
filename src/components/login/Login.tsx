import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logo_1 from '../../assets/images/logo_1.png';

function Login() {
  const navigate = useNavigate();
  const toSignup = () => {
    navigate('/signup');
  };
  return (
    <LoginWrapper>
      <div className="modal-inner">
        <div className="loginwrap">
          <h2 className="logo">
            <img src={logo_1} />
          </h2>
          <legend>로그인</legend>
          <form>
            <input type="text" className="login-input" placeholder="아이디" required />
            <input type="password" className="login-input" placeholder="비밀번호" required />
            <button className="login-button" type="submit">
              login
            </button>
          </form>
          <p className="join-question">
            아직 회원이 아니신가요?
            <span className="ml-10" onClick={toSignup}>
              회원가입
            </span>
          </p>
        </div>
      </div>
    </LoginWrapper>
  );
}
const LoginWrapper = styled.div`
  .modal-inner {
    width: 340px;
    max-width: 480px;
    height: 520px;
  }
  .logo {
    width: 200px;
    margin: 0 auto 30px;
    img {
      width: 100%;
    }
  }
  legend {
    text-align: center;
    font-size: 14x;
    color: #666;
    margin-bottom: 20px;
  }
  .login-input {
    width: 100%;
    padding: 10px 15px;
    border: none;
    margin-bottom: 10px;
    border-radius: 8px;
  }
  .login-button {
    width: 100%;
    padding: 10px 15px;
    margin-bottom: 50px;
    border: none;
    border-radius: 8px;
    color: #fff;
    background: ${(props) => props.theme.colors.mainBrown};
  }

  .sns-login {
    display: flex;
    justify-content: space-around;
    margin-bottom: 40px;
  }
  .join-question {
    font-size: 14px;
    color: ${(props) => props.theme.colors.subBrown};
    text-align: center;
  }
  .join-question span {
    color: ${(props) => props.theme.colors.subBrown};
    text-decoration: underline;
    font-weight: bold;
    cursor: pointer;
  }
`;
const SnsIcon = styled.span`
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: url(${({ src }: { src: string }) => src}) no-repeat center center;
  background-size: cover;
`;

export default Login;
