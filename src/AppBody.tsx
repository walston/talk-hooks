import React from "react";
import { connect } from "react-redux";

import { State, UserObject } from "./store/types";

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

const ConnectedAppBody = connect((state: State) => ({
  user: state.user
}))(AppBody);

export { ConnectedAppBody as AppBody };
