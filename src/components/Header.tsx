import styled from 'styled-components';
import logo_1 from '../assets/images/logo_1.png';

function Header() {
  const navList = [
    { link: '/', name: 'about us', subNav: [] },
    { link: '/', name: 'brand', subNav: [] },
    { link: '/', name: 'product', subNav: [] },
    { link: '/', name: 'notice', subNav: [] },
  ];
  return (
    <>
      <HeaderContainer>
        <div className="menu-wrap">
          <div className="logo-area">
            <img src={logo_1} alt="로고" />
          </div>
          <div className="login-area">
            <span className="join ft-12">Join</span>
            <span className="login ft-12">Login</span>
          </div>
        </div>
        <nav id="menu">
          <ul className="d-flex">
            {navList.map((data) => {
              return <li>{data.name}</li>;
            })}
          </ul>
        </nav>
      </HeaderContainer>
    </>
  );
}
const HeaderContainer = styled.div`
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
  height: 170px;
  .ft-12 {
    font-size: 12px;
    font-weight: normal;
    line-height: 18px;
  }

  .menu-wrap {
    position: relative;
    top: 0;
    left: 0;
    background: #ebe6d7;
  }
  .logo-area {
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .join {
    color: rgb(123, 95, 60);
    margin-right: 10px;
  }

  .login {
    color: rgb(123, 95, 60);
  }

  .login-area {
    width: 15%;
    position: absolute;
    right: 0%;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export default Header;
