import * as React from "react";

export interface IRowHeaderProps {
  headerText: string;
}
// TODO: Add last updated value
const RowHeader: React.SFC<IRowHeaderProps> = (props: IRowHeaderProps) => {
  return (
    <div className="container pt-4">
      <div className="row">
        <div className=" offset-md-2 col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-left">
          <strong> {props.headerText}</strong>
        </div>
      </div>
    </div>
  );
};

export default RowHeader;
