import { useEffect, useState } from "react";
import { apiFetch } from "../apiFetch";

function toTeamResult(data) {
  return {
    name: data.team_name,
    rank: data.rank,
    id: data.team_id,
    status: data.status,
    dcp: data.dpc,
    logo: data.team_lgo,
  };
}

const url =
  "https://raw.githubusercontent.com/casparwikstrom/abios_teams/master/public/results.json";

export function useResults() {
  const [teamResults, setTeamsResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    apiFetch(url).then((result) => {
      let parsedTeams = result.map((data) => toTeamResult(data));
      setTeamsResults(parsedTeams);
      setIsLoading(false);
    });
  }, []);
  return { isLoading, teams: teamResults };
}
