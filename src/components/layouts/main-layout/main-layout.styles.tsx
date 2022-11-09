import { Layout } from 'antd';
import styled from 'styled-components';

const { Sider } = Layout;

export const MainLayoutContainer = styled.div`
  width: 100%;

  .trigger {
    padding: 0 24px;
    font-size: 18px;
    line-height: 64px;
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
      color: #1890ff;
    }
  }

  .site-layout-background {
    background: #fff;
    padding: 0;
    position: relative;
    border-radius: 16px;
    height: 74px;
  }
`;

export const MainLayoutBody = styled(Layout)`
  padding: 24px;
  position: fixed;
  width: 100vw;
  .site-layout-container {
    overflow-y: auto;
    &::-webkit-scrollbar {
      display: none; /* Safari and Chrome */
    }
  }
`;

export const MainLayoutLeftSidebar = styled.div`
  position: relative;
  height: calc(100vh - 35px);
  display: flex;
  .ant-layout-sider {
    background-color: #5555df;
    border-radius: 16px;

    .ant-menu-item-selected {
      border-radius: 12px;
    }
  }

  .ant-menu-dark {
    padding: 12px;
    background-color: transparent;
    .ant-menu-item-selected {
      background-color: #9494ff !important;
    }

    .ant-menu-item {
      position: relative;
      padding-left: 14px !important;
    }
    .ant-menu-submenu-title {
      position: relative;
      padding-left: 14px !important;
      border-radius: 12px;
    }
    .ant-menu-sub {
      background-color: #5555df;
    }

    .ant-menu-submenu-open {
      .ant-menu-submenu-title {
        background-color: #9494ff !important;
      }
    }

    .ant-menu-item-icon {
      position: absolute;
      top: 9px;
      left: 18px;
    }
    .ant-menu-title-content {
      margin-left: 38px;
    }
  }
`;

export const MainLayoutFluidContent = styled.div`
  width: 100%;
  .site-layout-background {
    padding: 0;
    background-color: transparent !important;
    min-height: calc(100vh - 112px);
  }
`;

export const MainLayoutSider = styled(Sider)`
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }

  .logo {
    margin-left: 28px;
  }
`;
export const HeaderOutIcons = styled.div`
  background: #5555df;
  border-radius: 8px;
  box-sizing: content-box;
  border: 4px solid #f1f5f9;
  width: 27px;
  height: 27px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 18px;
  right: -18px;
  color: #fff;

  .trigger:hover {
    color: #fff;
  }
`;
export const MainLayoutSiderLogo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 24px;
  height: 52px;
  .logo-line {
    width: 0px;
    height: 42px;
    opacity: 0.3;
    border: 1px solid #ffffff;
    margin-left: 8px;
    margin-right: 8px;
  }
  .logo-name {
    width: 73.78px;
    left: 41px;
    top: 1px;
    color: #ffffff;
    margin: 0px;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  .ant-input {
    border: none;
    margin-left: 10px;
  }
  .ant-input-affix-wrapper {
    width: 20%;
    border: none;
  }
  .ant-input-affix-wrapper-focused {
    box-shadow: none;
  }
`;

export const HeaderSpan = styled.span`
  font-family: 'Golos';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #808099;
  margin-right: 15px;
`;

export const HeaderNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .main-layout-header-select .ant-select-selector {
    ::after {
      display: none;
    }
    display: flex;
    align-items: center;
    justify-content: center;
    width: 256px;
    height: 44px;
    border: 1px solid #ececf0;
    border-radius: 12px;
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    color: #0b0b41;
    flex: none;
    order: 0;
    flex-grow: 0;
    padding-left: 16px;
  }

  .main-layout-header-button-icon {
    border: none;
    box-shadow: none;
    width: 21.5px;
    height: 21.5px;
    margin-left: 20px;
    padding: 0;
  }
  .main-layout-header-avatar {
    width: 32px;
    height: 32px;
    padding: 0;
    border-radius: 50%;
    margin-right: 24px;
    margin-left: 20px;
    border: none;
  }
`;

export const LanguageButton = styled.span`
  margin-left: 20px;
`;
