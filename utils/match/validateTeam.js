const validateTeam = async (match, teamId, playerId) => {
    let valid = true;
    const teams = match.teams;
    teams.map(team => {
        if (team._id == teamId) {
            const players = team.players;
            players.map(player => {
                if (player.playerId == playerId) {
                    valid = false;
                }
            })
            if (players.length == match.teamSize) {
                valid = false;
            }
        }
    })
    return valid;
};

export default validateTeam;
