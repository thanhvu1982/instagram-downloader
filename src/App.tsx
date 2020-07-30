import React, { useEffect } from "react";

// Components
import Header from './components/Header/index';

// Containers
// import Home from './containers/Home/index';
import Error from './containers/Error/index';

// Services
import callApi from "./services/api";

// Styles
import "./styles/App.scss";

const App: React.FC = () => {
  useEffect(() => {
    callApi()
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return <div className="App">
    <Header />
    <Error />
    {/* <Home /> */}
  </div>;
};

export default App;
