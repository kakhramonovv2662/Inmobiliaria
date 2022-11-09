import type { FC } from 'react';
import type { SvgIconContainerProps } from './svg-icon.style';
import { SvgIconContainer } from './svg-icon.style';
import sprite from './sprite.svg';

export type SvgIconProps = {
  iconName: 'fb' | 'insta' | 'in' | 'header-logo' | 'header-light-logo';
};

/**
 * <SvgIcon />
 */
export const SvgIcon: FC<SvgIconContainerProps & SvgIconProps> = ({
  iconName,
  ...props
}) => (
  <SvgIconContainer {...props}>
    <use xlinkHref={`${sprite}#${iconName}`} />
  </SvgIconContainer>
);
