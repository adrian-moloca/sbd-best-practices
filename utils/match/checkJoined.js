const checkJoined = async (match, id) => {
    let joined = false;

    match.joinedPlayers.map(joinedPlayer => {
        if (joinedPlayer.playerId == id) {
            joined = true;
        }
    })

    match.acceptedPlayers.map(acceptedPlayer => {
        if (acceptedPlayer.playerId == id) {
            joined = true;
        }
    })

    match.invitedPlayers.map(invitedPlayer => {
        if (invitedPlayer.playerId == id) {
            joined = true;
        }
    })

    match.teams.map(team => {
        team.players.map(player => {
            if (player.playerId == id) {
                joined = true;
            }
        })
    })

    return joined;
};

export default checkJoined;
