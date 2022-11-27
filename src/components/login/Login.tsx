import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo_1 from '../../assets/images/logo_1.png';

function Login() {
  const snsIcon = [
    {
      id: '1',
      link: '/',
      src: '../../src/assets/images/login_sns1.png',
    },
    {
      id: '2',
      link: '/',
      src: '../../src/assets/images/login_sns2.png',
    },
    {
      id: '3',
      link: '/',
      src: '../../src/assets/images/login_sns3.png',
    },
    {
      id: '4',
      link: '/',
      src: '../../src/assets/images/login_sns4.png',
    },
  ];
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

          <legend>SNS 로그인</legend>
          <ul className="sns-login">
            {snsIcon.map((data) => {
              return (
                <li key={data.id}>
                  <Link to={data.link}>
                    <SnsIcon src={data.src} />
                  </Link>
                </li>
              );
            })}
          </ul>
          <p className="join-question">
            아직 회원이 아니신가요?
            <span className="ml-10">
              <Link to="/">회원가입</Link>
            </span>
          </p>
          <div className="close">Close</div>
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
  .close {
    position: absolute;
    right: -16px;
    top: -16px;
  }
  .close:after {
    content: 'x';
    position: absolute;
    top: 0;
    left: 0;
    width: 32px;
    height: 32px;
    text-align: center;
    line-height: 32px;
    color: #fff;
    font-weight: 800;
    background: ${(props) => props.theme.colors.mainBrown};
    border: 2px solid ${(props) => props.theme.colors.subIvory};
    border-radius: 50%;
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
  .join-question span a {
    color: ${(props) => props.theme.colors.subBrown};
    text-decoration: underline;
    font-weight: bold;
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
