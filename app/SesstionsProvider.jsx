import React from "react";
import { SessionProvider } from "next-auth/react";

const SesstionsProvider = ({ childern, session }) => {
  return <SessionProvider session={session}>{childern}</SessionProvider>;
};

export default SesstionsProvider;
