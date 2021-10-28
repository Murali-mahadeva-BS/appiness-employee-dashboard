import { Box, ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import configureStore from "./redux/store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ProtectedRoute from "./components/ProtectedRoute";
const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <ProtectedRoute exact path="/home" component={Home} />
            {/* <Route exact path="/home" component={Home} /> */}
          </Switch>
        </Router>
      </ChakraProvider>
    </Provider>
  );
}

export default App;
