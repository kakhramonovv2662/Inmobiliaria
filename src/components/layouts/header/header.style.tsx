import styled from 'styled-components';

export const Header = styled.header`
  background-color: #313131;
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  padding: 10px;

  @media (max-width: 950px) {
    display: none;
  }
`;

export const HeaderList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: end;
`;

export const HeaderListItem = styled.li`
  margin-right: 3rem;
  margin-left: 3rem;
  :last-child {
    margin-right: 6rem;
  }
`;

export const HeaderItemLinks = styled.a`
  text-decoration: none;
  font-weight: 400;
  font-size: 1rem;
  line-height: 19px;
  color: #f5f5f5;
  :hover {
    text-decoration: underline;
    color: #f5f5f5;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-top: 4rem;
  padding-bottom: 0.7rem;
  background-color: #fff;

  @media (max-width: 950px) {
    display: none;
  }
`;

export const HeaderNav = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
`;

export const HeaderNavItem = styled.li`
  margin-right: 2rem;
  margin-left: 2rem;
`;

export const HeaderNavLink = styled.a`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
  text-decoration: none;

  :hover {
    text-decoration: underline;
    opacity: 0.8;
    color: #000000;
  }
`;

export const HeaderNavBtn = styled.button`
  border: none;
  background-color: transparent;
  padding: 12px 18px;
  background: #0066ff;
  border-radius: 10px 0px;
  color: #fff;
  cursor: pointer;
  box-shadow: 0 0 3px 0px #0066ff;
  border: 1px solid transparent;
  transition: all 0.3s ease;

  :hover {
    color: #0066ff;
    background-color: #fff;
    border: 1px solid #0066ff;
  }

  :active {
    border: 1px solid transparent;
    background: #0066ff;
    color: #fff;
    box-shadow: none;
    transition: all 0.3s ease;
  }
`;
