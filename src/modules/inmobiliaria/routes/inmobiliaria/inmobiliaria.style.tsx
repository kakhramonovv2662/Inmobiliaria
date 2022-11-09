import styled from 'styled-components';

export const InmobiliariaContainer = styled.div``;

export const HeroMobileVersion = styled.div`
  display: none;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;

  @media (max-width: 950px) {
    display: flex;
  }
`;

export const HeroLightLogo = styled.a`
  display: block;
`;

export const HeroMenu = styled.span`
  display: block;
  height: 2px;
  width: 30px;
  background: #fff;
  display: inline-block;
  position: relative;

  &::before {
    height: 2px;
    width: 20px;
    background: #fff;
    position: absolute;
    top: -6px;
    right: 0;
    content: '';
  }

  &::after {
    height: 2px;
    width: 15px;
    background: #fff;
    position: absolute;
    top: 6px;
    right: 0;
    content: '';
  }
`;

export const HeroTitle = styled.h2`
  font-family: 'Philosopher';
  font-style: italic;
  font-weight: 700;
  font-size: 4.5rem;
  line-height: 78px;
  letter-spacing: 0.02em;
  color: #ffffff;
  background: rgba(30, 30, 30, 0.2);
  border-radius: 0px 30px;
  padding: 10px;
  padding-bottom: 15px;
  text-align: center;

  @media (max-width: 1151px) {
    font-size: 2.9rem;
    line-height: 48px;
  }

  @media (max-width: 690px) {
    font-size: 2.5rem;
  }

  @media (max-width: 461px) {
    font-size: 3.8rem;
    text-align: left;
    line-height: 60px;
  }
`;

export const HeroList = styled.ul`
  min-height: 80px;
  margin: 0;
  padding: 0;
  margin: auto;
  margin-right: auto;
  backdrop-filter: blur(7.5px);
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeroListItem = styled.li`
  font-family: 'Fredoka';
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 23px;
  color: #ffffff;
  border-right: 1px solid #ffffff;
  padding: 10px 50px;
  text-align: center;

  &:last-child {
    border-right: none;
  }

  @media (max-width: 461px) {
    font-size: 12px;
    padding: 0px 10px;
    border: none;
  }
`;
