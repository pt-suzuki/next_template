import React from "react";
import { DefaultLayout } from "../layouts/DefaultLayout";

export default class Users extends React.Component {
  render(): JSX.Element {
    return (
      <DefaultLayout>
        <div className="container">ユーザー</div>
      </DefaultLayout>
    );
  }
}
