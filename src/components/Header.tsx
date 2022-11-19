import styled from 'styled-components';
import logo_1 from '../assets/images/logo_1.png';

function Header() {
  const navList = [
    { link: '/', name: 'ABOUT US', class: 'sub1', subNav: ['대상에프앤비', '연혁', '주요사업'] },
    { link: '/', name: 'BRAND', class: 'sub2', subNav: ['복음자리', '로즈버드'] },
    { link: '/', name: 'PRODUCT', class: 'sub3', subNav: ['잼/스프레드', '커피/차', '간식/베이커리'] },
    { link: '/', name: 'NOTICE', class: 'sub4', subNav: ['공지사항', '이벤트', 'Q&A'] },
  ];
  return (
    <>
      <HeaderContainer>
        <div className="header-wrap">
          <div className="logo-area">
            <img src={logo_1} alt="로고" />
          </div>
          <div className="login-area">
            <span className="join ft-12">Join</span>
            <span className="login ft-12">Login</span>
          </div>
        </div>
        <nav className="menu-wrap">
          <ul className="menu-depth1">
            {navList.map((data) => {
              return (
                <li>
                  <p>{data.name}</p>
                  <div className="menu-depth2">
                    <ul className={data.class}>
                      {data.subNav.map((nav) => {
                        return <li>{nav}</li>;
                      })}
                    </ul>
                  </div>
                </li>
              );
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

  .header-wrap {
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

    margin-right: 10px;
  }

  .login {
 
  }

  .login-area {
    width: 15%;
    position: absolute;
    right: 0%;
    top: 50%;
    transform: translateY(-50%);
  }
  .menu-wrap {
    .menu-depth1 {
      display: flex;
      justify-content: space-around;
    }
    li {
      flex-grow: 1;
      text-align: center;
      cursor: pointer;
      :hover .menu-depth2 {
        display: block !important;
      }
      p {
        padding: 10px;
      }
    }
  }
  .menu-depth2 {
    display: none;
    width: 100%;
    background: #fff;
    position: absolute;
    left: 0;
    width: 100%;
    height: 140px;
    .sub2 {
        position: absolute;
        width: 100%;
        left: 25%;
        background: transparent;
      }
      .sub3 {
        position: absolute;
        width: 100%;
        left: 50%;
        background: transparent;
      }
      .sub4 {
        position: absolute;
        width: 100%;
        left: 75%;
        background: transparent;
      }
    }
    li {
      width: 25%;
      padding: 15px;
    }
  }
`;

export default Header;
