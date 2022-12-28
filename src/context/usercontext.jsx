import React, { createContext } from "react";

export const UserContext = createContext({
  user: {
    name: "",
    email: "",
    password: "",
  },
  setUser: (user) => {},
});
