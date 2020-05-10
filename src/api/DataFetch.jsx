function toTeam(data) {

    const teams = {
        name: data.team_name,
        id: data.team_id,
        status: data.status,
        dcp: data.dcp,
        logo: data.img
    }

    const matches = {
        data: data,
    };

    return teams;
}

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

export async function dataFetch() {
    return fetch("https://raw.githubusercontent.com/casparwikstrom/abios_teams/table/public/mock_teams.json")
        .then(response => response.json())
        .then(jsonArray => jsonArray.map(data => {
            return toTeam(data);
        }))
}


/*TEAMS https://raw.githubusercontent.com/casparwikstrom/abios_teams/table/public/mock_teams.json*/

  /*full JSON  "https://raw.githubusercontent.com/casparwikstrom/abios_teams/master/public/series_data.json"*/