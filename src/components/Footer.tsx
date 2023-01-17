import { Link } from 'react-router-dom';
import styled from 'styled-components';

import logo_1 from '../assets/images/logo_1.png';
import { FOOTER_NAV } from '../assets/utils/main/footerNav';

function Footer() {
  return (
    <FooterContainer>
      <div className="footer-logo">
        <img src={logo_1} />
      </div>
      {FOOTER_NAV && (
        <ul className="footer-menu">
          {FOOTER_NAV.map((data) => {
            return (
              <li key={data.id}>
                <Link to={data.link}>{data.name}</Link>
              </li>
            );
          })}
        </ul>
      )}
    </FooterContainer>
  );
}
const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  padding: 50px 0;
  background: ${({ theme }) => theme.colors.subIvory};
  .footer-logo {
    width: 170px;
  }
  .footer-menu {
    display: flex;
    justify-content: space-between;
    width: 350px;
  }
  .footer-menu li a {
    font-size: 12px;
    color: ${({ theme }) => theme.colors.subBrown};
  }
`;
export default Footer;
