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

export function resultsFetch() {
  return fetch(
    "https://raw.githubusercontent.com/casparwikstrom/abios_teams/master/public/results.json"
  )
    .then((response) => response.json())
    .then((jsonArray) =>
      jsonArray.map((data) => {
        return toTeamResult(data);
      })
    );
}
