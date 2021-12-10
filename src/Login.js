import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "./firebase";
import { signInWithPopup } from "firebase/auth";
import "./Login.css";
import { useStateValue } from "./Stateprovider";
import { actionType } from "./reducer";

function Login() {
  const [state, dispatch] = useStateValue();
  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        dispatch({
          type: actionType.SET_USER,
          user: result.user,
        });
      })
      .catch((err) => alert(err.message));
  };
  return (
    <div className="login">
      <div className="login_logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/44/Facebook_Logo.png"
          alt=""
        />
        <img
          src="https://logos-world.net/wp-content/uploads/2020/04/Facebook-Logo.png"
          alt=""
        />
      </div>
      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
}

export default Login;
