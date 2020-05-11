function toRoster(data) {
    console.log("data", data)
    const team = {
        matches: {
            past_matches: data.past_matches,
            upcoming_matches: data.upcoming_matches
        },
        roster : {
            players: data.players
        }
    }
    return team;
}

export function fetchRoster(id) {

    let url = "https://raw.githubusercontent.com/casparwikstrom/abios_teams/master/public/team/"+id+".json"
    return fetch(url)
        .then(response => response.json())
        .then(data => {
            return toRoster(data);
        });
}
