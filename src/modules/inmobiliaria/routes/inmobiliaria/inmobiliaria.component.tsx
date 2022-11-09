import { SvgIcon } from '@components/svg-icon';
import { hoc } from '@utils/hoc';
import { useInmobiliariaProps } from './inmobiliaria.props';
import {
  HeroLightLogo,
  HeroList,
  HeroListItem,
  HeroMenu,
  HeroMobileVersion,
  HeroTitle,
  InmobiliariaContainer
} from './inmobiliaria.style';

import './style.css';

/**
 * <Inmobiliaria />
 */

export const Inmobiliaria = hoc(useInmobiliariaProps, () => (
  <InmobiliariaContainer>
    <div className='hero'>
      <HeroMobileVersion>
        <HeroLightLogo>
          <SvgIcon iconName='header-light-logo' size='100' height='62' />
        </HeroLightLogo>
        <HeroMenu></HeroMenu>
      </HeroMobileVersion>
      <div className='hero-content'>
        <div className='hero-wrap'>
          <HeroTitle>Encontra tu lugar Ideal</HeroTitle>
          <HeroList>
            <HeroListItem>Quiero Comprar</HeroListItem>
            <HeroListItem>Quiero Vender</HeroListItem>
            <HeroListItem>Quiero Alquilar</HeroListItem>
          </HeroList>
        </div>
      </div>
    </div>
  </InmobiliariaContainer>
));
