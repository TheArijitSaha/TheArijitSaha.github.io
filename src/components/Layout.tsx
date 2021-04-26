import React, { FC, ReactNode } from "react";
import { Helmet } from "react-helmet";

import Header from "./Header";

type LayoutProps = {
  headerTitle?: string;
  children: ReactNode[] | ReactNode;
};

const Layout: FC<LayoutProps> = ({ children, headerTitle }) => (
  <div>
    <Helmet title={`Arijit Saha | ${headerTitle ?? "Home"}`} />
    {/* TODO: make activePage a prop here and its type to be global*/}
    <Header activePage="Home" />
    <main className="">{children}</main>
  </div>
);

export default Layout;
