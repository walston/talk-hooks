import React, { ChangeEvent } from "react";
import { connect } from "react-redux";

import { State } from "./store/types";
import * as actions from "./store/actions";

type InputEvent = ChangeEvent<HTMLInputElement>;

type StateProps = { user_name: null | string };
type DispatchProps = {
  signIn: (username: string, password: string) => void;
  signOut: () => void;
};
type Props = StateProps & DispatchProps;

class AppHeader extends React.Component<Props> {
  state = { username: "", password: "" };

  handleUsernameChange = (event: InputEvent) => {
    this.setState({ username: event.currentTarget.value });
  };

  handlePasswordChange = (event: InputEvent) => {
    this.setState({ password: event.currentTarget.value });
  };

  render() {
    const { signIn, signOut, user_name } = this.props;
    const { username, password } = this.state;

    return user_name ? (
      <>
        <div>{user_name}</div>
        <input type="button" value="Sign Out" onClick={() => signOut()} />
      </>
    ) : (
      <>
        <label>
          username:&nbsp;
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleUsernameChange}
          />
        </label>
        <label>
          password:&nbsp;
          <input
            type="password"
            value={this.state.password}
            onChange={this.handlePasswordChange}
          />
        </label>
        <input
          type="button"
          value="Sign In"
          onClick={() => {
            signIn(username, password);
            this.setState({ username: "", password: "" });
          }}
        />
      </>
    );
  }
}

const ConnectedAppHeader = connect(
  (state: State) => ({
    loading: state.loading,
    user_name: state.user ? state.user.name : null
  }),
  (dispatch: any) => ({
    signIn: (username: string, password: string) => {
      dispatch(actions.logIn$({ username, password }));
    },
    signOut: () => {
      dispatch(actions.logOut$());
    }
  })
)(AppHeader);

export { ConnectedAppHeader as AppHeader };
