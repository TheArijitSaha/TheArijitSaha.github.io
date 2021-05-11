import React, { FC, ReactNode } from "react";
import { Helmet } from "react-helmet";

import Header, { PageName } from "./Header";

type LayoutProps = {
  headerTitle?: string;
  children?: ReactNode[] | ReactNode;
  activePage?: PageName;
};

const Layout: FC<LayoutProps> = ({ children, headerTitle, activePage }) => (
  <div>
    <Helmet title={`Arijit Saha | ${headerTitle ?? "Home"}`} />
    <Header activePage={activePage} />
    <main className="">{children}</main>
  </div>
);

export default Layout;
