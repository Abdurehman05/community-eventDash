import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import "./Login.css";
import { Form, Card } from "semantic-ui-react";

export const Register = props => {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const gender = useRef();
  const zipcode = useRef();
  const usertype = useRef();
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
            gender: `${gender.current.value}`,
            zipcode: `${zipcode.current.value}`,
            usertype: `${usertype.current.value}`
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
    <Card centered>
      <Card.Content>
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

          <Form className="form--login" onSubmit={handleRegister}>
            <h1 className="h3 mb-3 font-weight-normal">Register</h1>
            <fieldset>
              <div>
                <label htmlFor="username">Create Username </label>
                <input
                  ref={username}
                  type="text"
                  name="username"
                  className="form-control"
                  placeholder="Username"
                  autoComplete="current-username"
                  required
                  autoFocus
                />
              </div>
            </fieldset>
            <fieldset>
              <div>
                <label htmlFor="inputEmail">Email Address </label>
                <input
                  ref={email}
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email address"
                  autoComplete="current-email"
                  required
                />
              </div>
            </fieldset>
            <fieldset>
              <label htmlFor="inputPassword"> Password </label>
              <input
                ref={password}
                type="password"
                name="password"
                id="password"
                className="form-control"
                placeholder="Password"
                autoComplete="current-password"
                required
                autoFocus
              />
            </fieldset>
            <fieldset>
              <div>
                <label htmlFor="userGender">Gender </label>
                <input
                  ref={gender}
                  type="text"
                  name="gender"
                  className="form-control"
                  placeholder="Gender"
                  required
                />
              </div>
            </fieldset>
            <fieldset>
              <div>
                <label htmlFor="inputEmail">Zip Code </label>
                <input
                  ref={zipcode}
                  type="zipcode"
                  name="zipcode"
                  className="form-control"
                  placeholder="Zip Code"
                  required
                />
              </div>
            </fieldset>

            <div>
              <label htmlFor="inputAdmin"></label>
              <input
                ref={usertype}
                type="hidden"
                name="usertype"
                defaultValue={false}
                className="form-control"
                required
              />
            </div>

            <button type="submit"> Register </button>
          </Form>
        </main>
      </Card.Content>
    </Card>
  );
};
