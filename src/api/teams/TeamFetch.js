function toRoster(data) {
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

export function fetchRoster(id) {
  let url =
    "https://raw.githubusercontent.com/casparwikstrom/abios_teams/master/public/team/" +
    id +
    ".json";
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return toRoster(data);
    });
}
