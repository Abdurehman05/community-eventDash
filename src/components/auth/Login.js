import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "./Login.css";

export const Login = props => {
  const email = useRef();
  const password = useRef();
  const existDialog = useRef();
  const history = useHistory();

  const existingUserCheck = () => {
    return fetch(`http://localhost:8080/users?email=${email.current.value}`)
      .then(res => res.json())
      .then(user => (user.length ? user[0] : false));
  };

  const handleLogin = e => {
    e.preventDefault();

    existingUserCheck().then(exists => {
      if (exists) {
        localStorage.setItem("active_user", exists.id);
        history.push("/");
      } else {
        existDialog.current.showModal();
      }
    });
  };

  return (
    <main className="container--login">
      <dialog className="dialog dialog--auth" ref={existDialog}>
        <div>User does not exist</div>
        <button
          className="button--close"
          onClick={e => existDialog.current.close()}
        >
          Close
        </button>
      </dialog>

      <section>
        <form className="form--login" onSubmit={handleLogin}>
          <h1>Welcome</h1>
          <h2>Please sign in</h2>

          <label htmlFor="inputEmail"> Email address </label>
          <input
            ref={email}
            type="email"
            id="email"
            className="form-control"
            placeholder="Email address"
            required
            autoFocus
          />
          {/* <label htmlFor="inputPassword"> Password </label>
          <input
            ref={password}
            type="password"
            id="password"
            className="form-control"
            placeholder="Enter your password"
            required
            autoFocus
          /> */}
        </form>

        <button type="submit">Sign in</button>
      </section>
      <section className="link--register">
        <Link to="/register">Register</Link>
      </section>
    </main>
  );
};
