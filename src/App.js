import React from "react";
import Pdf from "react-to-pdf";
import "./App.css";
import Invoice from "./Invoice";
import { Provider } from "react-redux";
import store from "./store/store";

const ref = React.createRef();

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <div ref={ref}>
          <Invoice />
        </div>

        <Pdf targetRef={ref} filename="code-example.pdf">
          {({ toPdf }) => <button onClick={toPdf}>Generate Invoice</button>}
        </Pdf>
      </div>
    </Provider>
  );
}

export default App;
