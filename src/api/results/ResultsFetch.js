function toTeam(data) {

    const teams = {
        name: data.team_name,
        rank: data.rank,
        id: data.team_id,
        status: data.status,
        dcp: data.dpc,
        logo: data.team_lgo
    }
    console.log("team team team team", teams)
    return teams;

}

export async function resultsFetch() {
    return fetch("https://raw.githubusercontent.com/casparwikstrom/abios_teams/master/public/results.json")
        .then(response => response.json())
        .then(jsonArray => jsonArray.map(data => {
            return toTeam(data);
        }))
}


/*TEAMS https://raw.githubusercontent.com/casparwikstrom/abios_teams/table/public/mock_teams.json*/

  /*full JSON  "https://raw.githubusercontent.com/casparwikstrom/abios_teams/master/public/series_data.json"*/