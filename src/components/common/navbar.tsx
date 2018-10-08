import * as React from "react";

export interface INavbarProps {
  title: string;
}

const Navbar: React.SFC<INavbarProps> = (props: INavbarProps) => {
  return (
    <nav className="navbar fixed-top navbar-dark bg-dark">
      <span className="navbar-brand mb-0 h1">{props.title}</span>
    </nav>
  );
};

export default Navbar;
