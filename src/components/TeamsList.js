import React from "react";

const TeamsList = (props) => {
  return (
    <div className="bg-white mt-6 mx-5 rounded-md">
      <ul className="grid grid-cols-4 p-5">
        {props.teamsList.map((team) => (
          <li key={team.id} className="text-center py-2">{team.teamName}</li>
        ))}
      </ul>
    </div>
  );
};

export default TeamsList;
