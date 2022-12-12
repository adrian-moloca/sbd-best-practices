const checkJoinedStatus = (match, id) => {
    let joinedStatus = [0];

    match.pendingPlayers.map(pendingPlayer => {
        if (pendingPlayer.playerId == id) {
            joinedStatus = [1];
        }
    })

    match.joinedPlayers.map(joinedPlayer => {
        if (joinedPlayer.playerId == id) {
            joinedStatus = [2];
        }
    })

    match.acceptedPlayers.map(acceptedPlayer => {
        if (acceptedPlayer.playerId == id) {
            joinedStatus = [2];
        }
    })

    match.invitedPlayers.map(invitedPlayer => {
        if (invitedPlayer.playerId == id) {
            joinedStatus = [2];
        }
    })

    match.teams.map(team => {
        team.players.map(player => {
            if (player.playerId == id) {
                joinedStatus = [2];
            }
        })
    })

    if (match.playerId == id) {
        joinedStatus.push(3);
    }

    return joinedStatus
};

export default checkJoinedStatus;
