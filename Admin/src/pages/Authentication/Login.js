import React, { Component, useEffect, useState } from "react";

import {
  Row,
  Col,
  Input,
  Button,
  Alert,
  Container,
  Label,
  FormGroup,
} from "reactstrap";

// Redux
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";

// availity-reactstrap-validation
import { AvForm, AvField } from "availity-reactstrap-validation";

// actions
import { checkLogin, apiError } from "../../actions/actions";

// import images
import logodark from "../../assets/images/logo-dark.png";
import { setLogin } from "../../actions/authAction";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";

const Login = (props) => {
  /* constructor(props) {
     super(props);
     state = { username: "admin@themesdesign.in", password: "123456" };
     handleSubmit = handleSubmit.bind(this);
   }*/
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ereor, setError] = useState("");

  const authReducer = useSelector((state) => state.authReducer);
  const authenticateFromLocal = JSON.parse(localStorage.getItem("UserData"));

  useEffect(() => {
    props.apiError("");
    document.body.classList.add("auth-body-bg");
  }, []);
  useEffect(() => {
    // returned function will be called on component unmount
    return () => {
      document.body.classList.remove("auth-body-bg");
    };
  }, []);

  const userLogin = (e) => {
    //e.preventDefault();
    const user = {
      email: "admin@admin.com",
      password: "123456789",
    };
    dispatch(setLogin(user));
    console.log(authReducer.authenticate, "auth");
  };

  /* const handleSubmit = (event, values) => {
    props.checkLogin(values, props.history);
  };*/
  if (authReducer.authenticate || authenticateFromLocal) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <React.Fragment>
      <div className="home-btn d-none d-sm-block">
        <Link to="/">
          <i className="mdi mdi-home-variant h2 text-white"></i>
        </Link>
      </div>

      <div>
        <Container fluid className="p-0">
          <Row className="no-gutters">
            <Col lg={4}>
              <div className="authentication-page-content p-4 d-flex align-items-center min-vh-100">
                <div className="w-100">
                  <Row className="justify-content-center">
                    <Col lg={9}>
                      <div>
                        <div className="text-center">
                          <div>
                            <Link to="/" className="logo">
                              <img src={logodark} height="20" alt="logo" />
                            </Link>
                          </div>

                          <h4 className="font-size-18 mt-4">Welcome Back !</h4>
                          <p className="text-muted">
                            Sign in to continue to Nazox.
                          </p>
                        </div>

                        {props.loginError && props.loginError ? (
                          <Alert color="danger">{props.loginError}</Alert>
                        ) : null}

                        <div className="p-2 mt-5">
                          <AvForm
                            className="form-horizontal"
                            onValidSubmit={userLogin}
                          >
                            <FormGroup className="auth-form-group-custom mb-4">
                              <i className="ri-user-2-line auti-custom-input-icon"></i>
                              <Label htmlFor="username">Username</Label>
                              <input
                                name="username"
                                value={email}
                                type="text"
                                onChange={(e) => setEmail(e.target.value)}
                                className="form-control"
                                id="username"
                                validate={{ email: true, required: true }}
                                placeholder="Enter username"
                              />
                            </FormGroup>

                            <FormGroup className="auth-form-group-custom mb-4">
                              <i className="ri-lock-2-line auti-custom-input-icon"></i>
                              <Label htmlFor="userpassword">Password</Label>
                              <input
                                name="password"
                                value={password}
                                type="password"
                                className="form-control"
                                id="userpassword"
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter password"
                              />
                            </FormGroup>

                            <div className="custom-control custom-checkbox">
                              <Input
                                type="checkbox"
                                className="custom-control-input"
                                id="customControlInline"
                              />
                              <Label
                                className="custom-control-label"
                                htmlFor="customControlInline"
                              >
                                Remember me
                              </Label>
                            </div>

                            <div className="mt-4 text-center">
                              <Button
                                color="primary"
                                className="w-md waves-effect waves-light"
                                type="submit"
                              >
                                Log In
                              </Button>
                            </div>

                            <div className="mt-4 text-center">
                              <Link
                                to="/forgot-password"
                                className="text-muted"
                              >
                                <i className="mdi mdi-lock mr-1"></i> Forgot
                                your password?
                              </Link>
                            </div>
                          </AvForm>
                        </div>

                        <div className="mt-5 text-center">
                          <p>
                            Don't have an account ?{" "}
                            <Link
                              to="/register"
                              className="font-weight-medium text-primary"
                            >
                              {" "}
                              Register{" "}
                            </Link>{" "}
                          </p>
                          <p>
                            © 2020 Nazox. Crafted with{" "}
                            <i className="mdi mdi-heart text-danger"></i> by
                            Themesdesign
                          </p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
            <Col lg={8}>
              <div className="authentication-bg">
                <div className="bg-overlay"></div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

const mapStatetoProps = (state) => {
  const { loginError } = state.Login;
  return { loginError };
};

export default withRouter(
  connect(mapStatetoProps, { checkLogin, apiError })(Login)
);
