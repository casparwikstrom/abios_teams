function toTeam(data) {
    const teams = [
        {
            team_id: 1,
            team_name: "team 1",
            status: "qualified",
            dcp: 3000
        },{
            team_id: 1,
            team_name: "team 1",
            status: "qualified",
            dcp: 3000
        },{
            team_id: 1,
            team_name: "team 1",
            status: "qualified",
            dcp: 3000
        },{
            team_id: 1,
            team_name: "team 1",
            status: "qualified",
            dcp: 3000
        },{
            team_id: 1,
            team_name: "team 1",
            status: "qualified",
            dcp: 3000
        },{
            team_id: 1,
            team_name: "team 1",
            status: "qualified",
            dcp: 3000
        },{
            team_id: 1,
            team_name: "team 1",
            status: "qualified",
            dcp: 3000
        },{
            team_id: 1,
            team_name: "team 1",
            status: "qualified",
            dcp: 3000
        },{
            team_id: 1,
            team_name: "team 1",
            status: "qualified",
            dcp: 3000
        },{
            team_id: 1,
            team_name: "team 1",
            status: "qualified",
            dcp: 3000
        },{
            team_id: 1,
            team_name: "team 1",
            status: "qualified",
            dcp: 3000
        },{
            team_id: 1,
            team_name: "team 1",
            status: "qualified",
            dcp: 3000
        },{
            team_id: 1,
            team_name: "team 1",
            status: "qualified",
            dcp: 3000
        },{
            team_id: 1,
            team_name: "team 1",
            status: "qualified",
            dcp: 3000
        },{
            team_id: 1,
            team_name: "team 1",
            status: "qualified",
            dcp: 3000
        },{
            team_id: 1,
            team_name: "team 1",
            status: "qualified",
            dcp: 3000
        },


    ];

    const matches = {
        data: data,
    };

    return teams;
}

export async function dataFetch() {
    return fetch("https://raw.githubusercontent.com/casparwikstrom/abios_teams/master/public/series_data.json")
        .then(response => response.json())
        .then(jsonArray => jsonArray.map(data => {
            return toTeam(data);
        }))
}