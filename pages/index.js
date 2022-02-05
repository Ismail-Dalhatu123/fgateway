import { useState, useEffect } from "react";
import AppContext from "../contexts/AppContext";
import useClient from "../hooks/useClient";
import styles from "../styles/Home.module.css";
import Login from "./auth/login";
import Head from "next/head";
import Account from "./account";

export default function Home() {
  const [user, setUser] = useState(null);
  const { isLoading, restoreUser } = useClient();

  useEffect(() => {
    (async () => {
      const user = await restoreUser();
      setUser(user);
    })();
  }, []);

  if (isLoading)
    return (
      <div className="loader">
        <h2>Loading...</h2>
      </div>
    );
  return (
    <AppContext.Provider value={{ user, setUser }}>
      {user ? <Account /> : <Login />}
    </AppContext.Provider>
  );
}
