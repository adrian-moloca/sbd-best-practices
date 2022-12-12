const timeConvert = (minutes) => {
    const mins = minutes % 60;
    const hours = Math.floor(minutes / 60);

    return `${padTo2Digits(hours)}:${padTo2Digits(mins)}`;
}

function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
}

export default timeConvert;
