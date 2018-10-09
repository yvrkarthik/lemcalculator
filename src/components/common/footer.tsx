import * as React from "react";
/**
 * Builds the sticky footer
 */
const Footer: React.SFC<{}> = ({}) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-12">
            <a href="https://www.linkedin.com/in/rajivkarthikyanamandra">
              &copy;&nbsp;Rajiv Karthik Yanamandra&nbsp; 2018
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
