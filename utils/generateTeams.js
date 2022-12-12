const generateTeams = (numberOfTeams) => {
    let teams = [];
    let letter;
    for (let index = 0; index < numberOfTeams; index ++) {
        letter = String.fromCharCode(65 + index);
        let team = {
            teamName: `Team ${letter}`
        }
        teams.push(team);
    }
    return teams;
};

export default generateTeams;
