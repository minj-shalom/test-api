import { Layout } from "antd";
import React from "react";
import DesktopFooter from "./components/DesktopFooter";
import DesktopHeader from "./components/DesktopHeader";
import "./DesktopLayout.scss";

interface DesktopLayoutProps {
  children: React.ReactNode;
}

const DesktopLayout = ({ children }: DesktopLayoutProps) => {
  const { Content } = Layout;

  return (
    <Layout className="desktop-layout">
      <DesktopHeader />
      <Content className="desktop-content">{children}</Content>
      <DesktopFooter />
    </Layout>
  );
};

export default DesktopLayout;
