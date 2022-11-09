import type { ComponentType, FC, ReactElement } from 'react';
import { Route, Switch } from 'react-router-dom';
import { hoc } from '@utils/hoc';
import { Result } from 'antd';
// import { Loading } from '@components/loading';
import { MainLayout } from '@components/layouts/main-layout';
import { useAppProps } from './app.props';
import { Inmobiliaria } from '@inmobiliaria/routes';
import './app.style.less';

type RouteItem = {
  exact: boolean;
  path: string;
  component: ComponentType;
  layout: FC<{ children: ReactElement }>;
  secure: boolean;
};

const routes: RouteItem[] = [
  {
    exact: true,
    path: '/',
    component: Inmobiliaria,
    layout: MainLayout,
    secure: true
  },
  {
    exact: false,
    path: '*',
    component: () => (
      <Result status='404' title='404' subTitle='Bunday sahifa topilmadi' />
    ),
    layout: MainLayout,
    secure: false
  }
];

const RoutesMap = routes.map(
  ({ component: Component, layout: Layout, secure, exact, path }, i) => {
    const ComponentWithLayout: FC = () => (
      <Layout>
        <Component />
      </Layout>
    );

    ComponentWithLayout.displayName = 'ComponentWithLayout';

    return (
      <Route
        key={path + i}
        path={path}
        exact={exact}
        component={ComponentWithLayout}
      />
    );
  }
);

export const App = hoc(useAppProps, () => {
  return <Switch>{RoutesMap}</Switch>;
});

App.displayName = 'App';
