import React, { useEffect, useCallback } from "react";
import Card from "./components/UI/Card";

const NHL_TEAMS_URL = "https://statsapi.web.nhl.com/api/v1/teams";

function App() {

  const fetchTeamsHandler = useCallback(async () => {

    try {
      const response = await fetch(NHL_TEAMS_URL);

      if (!response.ok) {
        throw new Error("Something went wrong!")
      }

      const teamsData = await response.json();

      const nhl_teams = [];
      
      for (const key in teamsData.teams) {
        nhl_teams.push({
          id: teamsData.teams[key].id,
          teamName: teamsData.teams[key].name
        })
      }

      console.log(nhl_teams)

    } catch (error) {
      console.log(error)
    }

  }, []);

  useEffect(() => {
    fetchTeamsHandler();
  }, [fetchTeamsHandler]);

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
