import React, { Component, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { logoutUser } from "../../actions/actions";

const Logout = (props) => {
  /* constructor(props) {
    super(props);
    this.state = {};
  }
*/

  useEffect(() => {
    // returned function will be called on component unmount
    props.logoutUser(props.history);
  }, []);

  return (
    <React.Fragment>
      <h1 className="logout">&nbsp;</h1>
    </React.Fragment>
  );
};

export default withRouter(connect(null, { logoutUser })(Logout));
