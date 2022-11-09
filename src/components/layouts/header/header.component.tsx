import { hoc } from '@utils/hoc';
import { useHeaderProps } from './header.props';
import {
  Header,
  HeaderContainer,
  HeaderItemLinks,
  HeaderList,
  HeaderListItem,
  HeaderNav,
  HeaderNavBtn,
  HeaderNavItem,
  HeaderNavLink
} from './header.style';
import { SvgIcon } from '@components/svg-icon';

/**
 * <Header />
 */

export const HeaderLayout = hoc(useHeaderProps, () => (
  <div>
    <Header>
      <HeaderList>
        <HeaderListItem>
          <HeaderItemLinks href='tel:+998971062662'>
            +998 97 106-26-62
          </HeaderItemLinks>
        </HeaderListItem>
        <HeaderListItem>
          <HeaderItemLinks>info@tuempresa.com</HeaderItemLinks>
        </HeaderListItem>
        <HeaderListItem>
          <HeaderItemLinks>
            <SvgIcon iconName='fb' width='35' height='35' />
          </HeaderItemLinks>
        </HeaderListItem>
        <HeaderListItem>
          <HeaderItemLinks>
            <SvgIcon iconName='insta' width='35' height='35' />
          </HeaderItemLinks>
        </HeaderListItem>
        <HeaderListItem>
          <HeaderItemLinks>
            <SvgIcon iconName='in' width='35' height='35' />
          </HeaderItemLinks>
        </HeaderListItem>
      </HeaderList>
    </Header>

    <HeaderContainer>
      <HeaderItemLinks>
        <SvgIcon iconName='header-logo' size='219' height='90' />
      </HeaderItemLinks>
      <HeaderNav>
        <HeaderNavItem>
          <HeaderNavLink>Propiedades</HeaderNavLink>
        </HeaderNavItem>
        <HeaderNavItem>
          <HeaderNavLink>Tasaciones</HeaderNavLink>
        </HeaderNavItem>
        <HeaderNavItem>
          <HeaderNavLink>Nuestros Asesores</HeaderNavLink>
        </HeaderNavItem>
        <HeaderNavItem>
          <HeaderNavBtn>Contacto</HeaderNavBtn>
        </HeaderNavItem>
      </HeaderNav>
    </HeaderContainer>
  </div>
));
