import * as React from "react";
/**
 * Builds the sticky footer
 */
const Footer: React.SFC<{}> = ({}) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-sm">
            &copy;&nbsp;Rajiv Karthik Yanamandra&nbsp; 2018
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
