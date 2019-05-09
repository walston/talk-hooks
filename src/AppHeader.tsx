import React, { ChangeEvent, useState } from "react";

import { useAccountManagement } from "./store/actions";

type InputEvent = ChangeEvent<HTMLInputElement>;

type StateProps = { loading: boolean; user_name: string };
type DispatchProps = {
  signIn: (creds: { username: string; password: string }) => void;
  signOut: () => void;
};
type Props = StateProps & DispatchProps;

function AppHeader(props: Props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event: InputEvent) => {
    setUsername(event.currentTarget.value);
  };

  const handlePasswordChange = (event: InputEvent) => {
    setPassword(event.currentTarget.value);
  };

  const { signIn, signOut, user_name } = props;

  return user_name ? (
    <>
      <div>{user_name}</div>
      <input type="button" value="Sign Out" onClick={() => signOut()} />
    </>
  ) : (
    <>
      <label>
        username:&nbsp;
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>
      <label>
        password:&nbsp;
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </label>
      <input
        type="button"
        value="Sign In"
        onClick={() => {
          signIn({ username, password });
          setUsername("");
          setPassword("");
        }}
      />
    </>
  );
}

const ConnectedAppHeader = () => {
  const { user, loading, signIn, signOut } = useAccountManagement();

  return (
    <AppHeader
      signIn={signIn}
      signOut={signOut}
      loading={loading}
      user_name={user ? user.name : ""}
    />
  );
};

export { ConnectedAppHeader as AppHeader };
