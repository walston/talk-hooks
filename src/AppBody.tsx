import React, { useContext, useState, useEffect } from "react";

import { UserObject } from "./store/types";
import { useAccountManagement } from "./store/actions";

type StateProps = { user: null | UserObject };
type Props = StateProps;

function AppBody(props: Props) {
  const { user } = props;
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

const ConnectedAppBody = () => {
  const user = useAccountManagement();
  return <AppBody user={user} />;
};

export { ConnectedAppBody as AppBody };
