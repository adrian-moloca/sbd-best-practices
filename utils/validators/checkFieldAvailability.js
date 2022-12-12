const checkFieldAvailability = (matchMoment, fieldSchedule, fieldReservation) => {
    const matchDate = new Date(matchMoment.date);

    if (fieldSchedule.workingDays.includes(matchDate.getDay())) {
        const matchStarts = new Date(matchMoment.date + "T" + matchMoment.start);
        const matchEnds = new Date(matchMoment.date + "T" + matchMoment.end);
        const fieldOpenHours = new Date(matchMoment.date + "T" + fieldSchedule.openHours);
        const fieldCloseHours = new Date (matchMoment.date + "T" + fieldSchedule.closeHours);

        if (matchStarts.getTime() >= fieldOpenHours.getTime() && matchEnds.getTime() <= fieldCloseHours.getTime()) {
            if ((typeof fieldReservation) !== 'undefined') {
                const reservedMatchStarts = new Date(fieldReservation.date + "T" + fieldReservation.start);
                const reservedMatchEnds = new Date(fieldReservation.date + "T" + fieldReservation.end);

                if (matchStarts.getTime() < reservedMatchStarts.getTime() && matchEnds.getTime() <= reservedMatchStarts.getTime() || matchStarts.getTime() >= reservedMatchEnds.getTime()) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return true;
            }
        } else {
            return false;
        }
    } else {
        return false;
    }
};

export default checkFieldAvailability;
