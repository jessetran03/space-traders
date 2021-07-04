import { useEffect, useState } from "react";
import ApiService from "../services/api-service";

export default function Dashboard() {
  const [user, setUser] = useState();
  const [status, setStatus] = useState();

  useEffect(() => {
    ApiService.getUser()
      .then((user) => setUser(user.user))
      .catch((error) => console.error({ error }));
    ApiService.getStatus()
      .then((status) => setStatus(status.status))
      .catch((error) => console.error({ error }));
  }, []);

  if (!user || !status) {
    return(
      <div className="p-3 m-2 mx-auto bg-white rounded-xl w-max bg-opacity-10">
        loading...
      </div>
    )
  }

  return (
    <div className="relative z-10">
      <header className="p-3 m-2 mx-auto bg-white shadow-md w-max rounded-xl bg-opacity-10">
        <h1>Welcome to Space Traders!</h1>
      </header>

      <div className="p-3 m-2 mx-auto bg-white rounded-xl w-max bg-opacity-10">
        {status}
      </div>

      <div className="max-w-sm p-3 m-2 mx-auto bg-white shadow-md rounded-xl bg-opacity-10">
        <h2>{user.username}</h2>
        <p>Ship Count: {user.shipCount}</p>
        <p>Structure Count: {user.structureCount}</p>
        <p>Credits: {user.credits}</p>
      </div>
    </div>
  );
}
