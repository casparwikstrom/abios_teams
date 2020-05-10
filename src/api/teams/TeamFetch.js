function toRoster(data) {
    console.log("data", data)
    const team = {
        name: data
    }
    return team;
}

export function fetchRoster(id) {
    let url = "https://raw.githubusercontent.com/casparwikstrom/abios_teams/master/public/team/team_"+id+".json"
    return fetch(url)
        .then(response => response.json())
        .then(data => {
            return toRoster(data);
        });
}
