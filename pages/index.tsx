import React from "react";
import { DefaultLayout } from "../layouts/DefaultLayout";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.props;
  }
  render(): JSX.Element {
    return (
      <DefaultLayout>
        <div className="container">ホーム</div>
      </DefaultLayout>
    );
  }
}
