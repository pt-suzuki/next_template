import React from "react";

export const ErrorLayout: React.FC = (props) => {
  return (
    <div>
      <main>{props.children}</main>
    </div>
  );
}

export default ErrorLayout;
