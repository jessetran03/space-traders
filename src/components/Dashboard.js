import { useEffect, useState } from "react";
import ApiService from '../services/api-service';

export default function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    ApiService.getData()
      .then((data) => setData(data))
      .catch((error) => console.error({ error }));
  }, []);

  return (
    <div className="relative z-10">
      <header className="p-3 m-2 mx-auto bg-white shadow-md w-max rounded-xl bg-opacity-10">
        <h1>Welcome to Space Traders!</h1>
      </header>

      <div className="p-3 m-2 mx-auto bg-white rounded-xl w-max bg-opacity-10">
        {data.length > 0 && data.status}
      </div>

      <div className="max-w-sm p-3 m-2 mx-auto bg-white shadow-md rounded-xl bg-opacity-10">
        <h2>{data.length > 0 && data.user.username}</h2>
        <p>Ship Count: {data.length > 0 && data.user.shipCount}</p>
        <p>Structure Count: {data.length > 0 && data.user.structureCount}</p>
        <p>Credits: {data.length > 0 && data.user.credits}</p>
      </div>
    </div>
  );
}
