"use client";
import React from "react";
import { useSession } from "next-auth/react";

const page = () => {
  const { data: session } = useSession();

  console.log(session);
  if (session?.user.email === "kminchelle@qq.com") {
    return <p>You are an admin, welcome!</p>;
  }

  return <p>You are not authorized to view this page!</p>;
};

export default page;
