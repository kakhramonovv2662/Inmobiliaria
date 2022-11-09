import { Layout } from 'antd';

import type { FC, ReactElement } from 'react';
import {
  MainLayoutBody,
  MainLayoutContainer,
  MainLayoutFluidContent
} from './main-layout.styles';

// import { Sidebar } from '../sidebar';
import { HeaderLayout } from '../header';

const { Content } = Layout;

const MainLayout: FC<{ children: ReactElement }> = ({ children }) => (
  <MainLayoutBody>
    {/* <Sidebar /> */}
    <MainLayoutContainer className='site-layout-container'>
      <Layout className='site-layout'>
        <HeaderLayout />
        <MainLayoutFluidContent>
          <Content className='site-layout-background'>{children}</Content>
        </MainLayoutFluidContent>
      </Layout>
    </MainLayoutContainer>
  </MainLayoutBody>
);

export { MainLayout };
