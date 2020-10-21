import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import "./Login.css";

export const Register = props => {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const zip = useRef();
  const admin = useRef();
  const conflictDialog = useRef();
  const history = useHistory();

  const existingUserCheck = () => {
    return fetch(`http://localhost:8080/users?email=${email.current.value}`)
      .then(res => res.json())
      .then(user => !!user.length);
  };

  const handleRegister = e => {
    e.preventDefault();

    existingUserCheck().then(userExists => {
      if (!userExists) {
        fetch("http://localhost:8080/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email: email.current.value,
            username: `${username.current.value}`,
            password: `${password.current.value}`,
            zip: `${zip.current.value}`,
            admin: `${admin.current.value}`
          })
        })
          .then(_ => _.json())
          .then(createdUser => {
            if (createdUser.hasOwnProperty("id")) {
              localStorage.setItem("active_user", createdUser.id);
              history.push("/");
            }
          });
      } else {
        conflictDialog.current.showModal();
      }
    });
  };

  return (
    <main style={{ textAlign: "left" }}>
      <dialog className="dialog dialog--password" ref={conflictDialog}>
        <div>Account with that email address already exists</div>
        <button
          className="button--close"
          onClick={e => conflictDialog.current.close()}
        >
          Close
        </button>
      </dialog>

      <form className="form--login" onSubmit={handleRegister}>
        <h1 className="h3 mb-3 font-weight-normal">Register</h1>

        <div>
          <label htmlFor="username">Create Username </label>
          <input
            ref={username}
            type="text"
            name="username"
            className="form-control"
            placeholder="Username"
            required
            autoFocus
          />
        </div>
        <div>
          <label htmlFor="inputEmail">Email Address </label>
          <input
            ref={email}
            type="email"
            name="email"
            className="form-control"
            placeholder="Email address"
            required
          />
        </div>
        <div>
          <label htmlFor="inputEmail">Password </label>
          <input
            ref={password}
            type="password"
            name="password"
            className="form-control"
            placeholder="Enter your password"
            required
          />
        </div>
        <div>
          <label htmlFor="inputEmail">Zip Code </label>
          <input
            ref={zip}
            type="zip"
            name="zip"
            className="form-control"
            placeholder="Zip Code"
            required
          />
        </div>
        <div>
          <label htmlFor="inputAdmin"></label>
          <input
            defaultValue={false}
            ref={admin}
            type="hidden"
            name="admin"
            className="form-control"
            required
          />
        </div>

        <button type="submit"> Register </button>
      </form>
    </main>
  );
};
