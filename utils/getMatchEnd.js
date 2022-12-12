import timeConvert from "./timeConvert.js";

const getMatchEnd = (matchStart, duration) => {
    const matchStartH = parseInt(matchStart.split(':')[0]);
    const matchStartM = parseInt(matchStart.split(':')[1]);
    const matchStartMinutes = matchStartH * 60 + matchStartM;
    const matchEndMinutes = matchStartMinutes + duration;
    const matchEnd = timeConvert(matchEndMinutes);
    return matchEnd;
};

export default getMatchEnd;
