function toTeam(data) {

    const teams = {
        name: data.team_name,
        id: data.team_id,
        status: data.status,
        dcp: data.dcp,
        logo: data.img
    }
console.log("teams",teams)
    const matches = {
        data: data,
    };

    return teams;
}

function toRoster(data) {
    const teams = {
        name: data.team_name,
        id: data.team_id,
    }


    const matches = {
        data: data,
    };

    return teams;
}

export function fetchRoster() {
    return fetch("https://raw.githubusercontent.com/casparwikstrom/abios_teams/table/public/mock_teams.json")
        .then(response => response.json())
        .then(jsonArray => jsonArray.map(data => {
            return toTeam(data);
        }))
}

export async function dataFetch() {
    return fetch("https://raw.githubusercontent.com/casparwikstrom/abios_teams/table/public/mock_teams.json")
        .then(response => response.json())
        .then(jsonArray => jsonArray.map(data => {
            return toTeam(data);
        }))
}


/*TEAMS https://raw.githubusercontent.com/casparwikstrom/abios_teams/table/public/mock_teams.json*/

  /*full JSON  "https://raw.githubusercontent.com/casparwikstrom/abios_teams/master/public/series_data.json"*/