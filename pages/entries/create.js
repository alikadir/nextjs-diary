import React, { useContext } from "react";
import { AuthenticationContext } from "../../contexts/AuthenticationContext";

export default props => {
  const context = useContext(AuthenticationContext);

  return <div>create {JSON.stringify(context)}</div>;
};
