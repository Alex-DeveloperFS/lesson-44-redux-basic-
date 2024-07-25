import {Provider} from "react-redux"
import store from "./redux/store.ts";
import Counter from "./components/Counter.tsx";

const App = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  )
}

export default App