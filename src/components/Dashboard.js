import { useEffect, useState } from "react";
import ApiService from "../services/api-service";

export default function Dashboard() {
  const [user, setUser] = useState();
  const [status, setStatus] = useState();
  const [loans, setLoans] = useState();

  useEffect(() => {
    ApiService.getUser().then((user) => setUser(user.user))
    ApiService.getStatus().then((status) => setStatus(status.status))
    ApiService.getLoans().then((loans) => setLoans(loans.loans))
  }, []);

  if (!user || !status || !loans) {
    return (
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

      {loans.map((loan, index) => (
        <div 
          key={index}
          className="max-w-sm p-3 m-2 mx-auto bg-white shadow-md rounded-xl bg-opacity-10"
        >
          <h2>Available Loans:</h2>
          <p>Type: {loan.type}</p>
          <p>Amount: {loan.amount}</p>
          <p>Rate: {loan.rate}%</p>
          <p>Term: {loan.termInDays} days</p>
          <button 
            onClick={e => console.log("Clicked button")}
            className="bg-white hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded-full shadow"
          >
            Take out this loan
          </button>
        </div>
      ))}

    </div>
  );
}
