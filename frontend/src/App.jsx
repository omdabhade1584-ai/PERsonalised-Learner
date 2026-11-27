
import React, { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      {isLogin ? (
        <Login onRegister={() => setIsLogin(false)} />
      ) : (
        <Register onLogin={() => setIsLogin(true)} />
      )}
    </>
  );
}

export default App;
