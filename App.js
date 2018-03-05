// @flow
import React from "react";
import { Provider } from "react-redux";
import SWGame from "./src/app.container";
import store from "./src/redux/store";
export default class App extends React.Component<{}> {
  render() {
    return (
      <Provider store={store}>
        <SWGame />
      </Provider>
    );
  }
}
