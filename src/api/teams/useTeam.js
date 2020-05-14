import { useEffect, useState } from "react";
import { apiFetch } from "../apiFetch";

function toTeam(data) {
  console.log("datadatadatadatadatadatadatadata", data);
  return {
    matches: {
      past_matches: data.past_matches,
      upcoming_matches: data.upcoming_matches,
    },
    roster: {
      players: data.players,
    },
    team_info: {
      picture: data.team_data[0].images.default,
      info: data.team_data[0],
    },
  };
}

const url =
  "https://raw.githubusercontent.com/casparwikstrom/abios_teams/master/public/team/";

export function useTeam(id) {
  const [team, setTeam] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  let teamUrl = url + id + ".json";
  useEffect(() => {
    apiFetch(teamUrl).then((result) => {
      let parsedTeam = toTeam(result);
      setTeam(parsedTeam);
      setIsLoading(false);
    });
  }, []);
  return { isLoading, team };
}
