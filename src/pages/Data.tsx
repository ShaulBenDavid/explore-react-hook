import { Suspense, lazy, useState, useTransition } from "react";
import "../App.css";
const SomeData = lazy(() => wait().then(() => import("../SomeData")));

function Data() {
  const [isPending, startTransition] = useTransition();
  const [showData, setShowData] = useState(false);

  return (
    <div className="App">
      <p className="read-the-docs">Data</p>
      {isPending && <div>loading data....</div>}
      <button
        onClick={() => {
          startTransition(() => {
            setShowData(true);
          });
        }}
      >
        Get data
      </button>

      <Suspense fallback="loading">
        {showData ? <SomeData /> : "No data"}
      </Suspense>
    </div>
  );
}

export default Data;

function wait() {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
}
