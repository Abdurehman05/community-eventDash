import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "./Login.css";

export const Login = props => {
  const email = useRef();
  const password = useRef();
  const existDialog = useRef();
  const passwordDialog = useRef();
  const history = useHistory();

  const existingUserCheck = () => {
    return fetch(`http://localhost:8080/users?email=${email.current.value}`)
      .then(res => res.json())
      .then(user => (user.length ? user[0] : false));
  };

  const handleLogin = e => {
    e.preventDefault();

    existingUserCheck().then(exists => {
      if (exists && exists.password === password.current.value) {
        localStorage.setItem("active_user", exists.id);
        history.push("/");
      } else if (exists && exists.password !== password.current.value) {
        passwordDialog.current.showModal();
      } else if (!exists) {
        existDialog.current.showModal();
      }
    });
  };

  return (
    <main className="container--login">
      <dialog className="dialog dialog--auth" ref={existDialog}>
        <div>Member does not exist</div>
        <button
          className="button--close"
          onClick={e => existDialog.current.close()}
        >
          Close
        </button>
      </dialog>

      <dialog className="dialog dialog--password" ref={passwordDialog}>
        <div>Password does not match</div>
        <button
          className="button--close"
          onClick={e => passwordDialog.current.close()}
        >
          Close
        </button>
      </dialog>

      <section className="login">
        <form className="form--login" onSubmit={handleLogin}>
          <h1>Welcome</h1>
          <h2>Please sign in</h2>

          <fieldset>
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
          </fieldset>

          <fieldset>
            <label htmlFor="inputPassword"> Password </label>
            <input
              ref={password}
              type="text"
              id="password"
              className="form-control"
              placeholder="Password"
              required
              autoFocus
            />
          </fieldset>

          <fieldset>
            <button type="submit">Sign in</button>
          </fieldset>
        </form>
      </section>
      <section className="link--register">
        <Link to="/register">Be a member</Link>
      </section>
    </main>
  );
};
