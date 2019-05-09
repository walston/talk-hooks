import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import { Context } from "./store";

import * as actions from "./store/actions";

type InputEvent = ChangeEvent<HTMLInputElement>;

type StateProps = { loading: boolean; user_name: string };
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

const ConnectedAppHeader = () => {
  const store = useContext(Context);
  const [state, setState] = useState(store.getState());
  useEffect(() => {
    return store.subscribe(() => {
      setState(store.getState());
    });
  }, [store, setState]);

  const signIn = (username: string, password: string) =>
    actions.logIn$({ username, password });
  const signOut = () => actions.logOut$();
  return (
    <AppHeader
      signIn={signIn}
      signOut={signOut}
      loading={state.loading}
      user_name={state.user ? state.user.name : ""}
    />
  );
};

export { ConnectedAppHeader as AppHeader };
