import React from "react";
import * as Flex from "@twilio/flex-ui";
import { Provider } from "react-redux";
import { myReduxStore } from "./store";

class App extends React.Component {
  render() {
    const { manager } = this.props;

    if (!manager) {
      return null;
    }

    return (
      <Provider store={myReduxStore}>
        <Flex.ContextProvider manager={manager}>
          <Flex.RootContainer />
        </Flex.ContextProvider>
      </Provider>
    );
  }
}

export default App;
