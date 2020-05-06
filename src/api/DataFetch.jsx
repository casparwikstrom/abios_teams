function toTeam(data) {

    const team = {};

    return team;
}


export async function fetchData() {
    return fetch("https://raw.githubusercontent.com/casparwikstrom/abios_teams/master/public/series_data.json")
        .then(response => response.json())
        .then(jsonArray => jsonArray.map(data => {
            console.log("data", data)
            return toTeam(data);
        }))
}