import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo_1 from '../assets/images/logo_1.png';
import { navList } from '../assets/utils/navList';
import Login from './login/Login';
import Modal from './modal/Modal';

function Header() {
  const [visible, setVisible] = useState<boolean>(false);
  const login = <Login />;

  return (
    <>
      <HeaderContainer>
        <div className="header-wrap">
          <div className="logo-area">
            <div className="logo-img">
              <Link to="/">
                <img src={logo_1} alt="로고" />
              </Link>
            </div>
          </div>
          <div className="login-area">
            <span className="join ft-12">Join</span>
            <span className="login ft-12">Login</span>
          </div>
          <Modal visible={visible} modalIn={login} />
        </div>
        <nav className="menu-wrap">
          <ul className="menu-depth1">
            {navList.map((data) => {
              return (
                <li className="level1">
                  <Link to={data.link}>{data.name}</Link>
                  <div className="menu-depth2">
                    <ul className={data.class}>
                      {data.subNav.map((nav) => {
                        return (
                          <li>
                            <Link to={nav.link}>{nav.name}</Link>
                          </li>
                        );
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

  .header-wrap {
    position: relative;
    top: 0;
    left: 0;
    background: ${(props) => props.theme.colors.subIvory};
  }
  .logo-area {
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    .logo-img {
      width: 170px;
    }
  }
  .join {
    color: ${(props) => props.theme.colors.mainBrown};
    margin-right: 10px;
  }

  .login {
    color: ${(props) => props.theme.colors.mainBrown};
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
      background: #fff;
    }
    li {
      width: 25%;
      a {
        flex-grow: 1;
        text-align: center;
        display: block;
        padding: 17px;
        flex-grow: 1;
        text-align: center;
        color: ${(props) => props.theme.colors.subBrown};
        :hover {
          color: ${(props) => props.theme.colors.mainBrown};
        }
      }
      :hover .menu-depth2 {
        display: block !important;
      }
    }
  }
  .menu-depth2 {
    display: none;
    position: absolute;
    left: 0;
    width: 100%;
    height: 160px;
    background: #fff;
    ul {
      width: 100%;
      background: transparent;
      li {
        a {
          font-size: 14px;
          color: ${(props) => props.theme.colors.subBrown};
          :hover {
            color: ${(props) => props.theme.colors.mainBrown};
          }
        }
      }
    }
    .sub2 {
      position: absolute;
      left: 25%;
    }
    .sub3 {
      position: absolute;
      left: 50%;
    }
    .sub4 {
      position: absolute;
      left: 75%;
    }
  }
`;

export default Header;
