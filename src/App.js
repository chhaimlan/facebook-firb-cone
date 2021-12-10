import Widgets from "./Widgets";
import React from "react";
import "./App.css";
import Feed from "./Feed";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Login from "./Login";
import { useStateValue } from "./Stateprovider";

function App() {
  // const user = null;
  // // "lan chhaim";
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="app_body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
