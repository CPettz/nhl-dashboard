import React from "react";
import Card from "./components/UI/Card";

function App() {
  return (
    <Card>
      <h1 className="text-3xl">NHL Dashboard</h1>
      <p>
        Keep up with your favorite teams, using the{" "}
        <a
          href="https://github.com/dword4/nhlapi"
          rel="noreferrer"
          target="_blank"
          className="hover:text-red-400"
        >
          NHL API
        </a>
      </p>
    </Card>
  );
}

export default App;
