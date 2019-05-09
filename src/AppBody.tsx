import React, { useContext } from "react";

import { UserObject } from "./store/types";
import { Context } from "./store";

type StateProps = { user: null | UserObject };
type Props = StateProps;

class AppBody extends React.Component<Props> {
  render() {
    const { user } = this.props;
    if (!user) {
      return <div />;
    } else {
      return (
        <div>
          <img alt={user.name} src={user.picture} />
          <h1>{user.name}</h1>
          <pre>{user.id}</pre>
          <pre>{user.email}</pre>
        </div>
      );
    }
  }
}

const ConnectedAppBody = () => {
  const store = useContext(Context);
  const state = store.getState();
  return <AppBody user={state.user} />;
};

export { ConnectedAppBody as AppBody };
