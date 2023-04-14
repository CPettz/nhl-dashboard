import React, { useEffect, useCallback, Fragment, useState } from "react";
import Card from "./components/UI/Card";
import TeamsList from "./components/TeamsList";

// this is probably what's broken, using this fixed URL reference

function App() {
  const [teams, setTeams] = useState([]);

  const fetchTeamsHandler = useCallback(async () => {
    const NHL_TEAMS_URL = "https://statsapi.web.nhl.com/api/v1/teams";
    try {
      const response = await fetch(NHL_TEAMS_URL);

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const teamsData = await response.json();

      const teamsList = [];

      for (const key in teamsData.teams) {
        teamsList.push({
          id: teamsData.teams[key].id,
          teamName: teamsData.teams[key].name,
        });
      }

      setTeams(teamsList);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchTeamsHandler();
  }, [fetchTeamsHandler]);


  return (
    <Fragment>
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
      <TeamsList teamsList={teams}></TeamsList>
    </Fragment>
  );
}

export default App;
