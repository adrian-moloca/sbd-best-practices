import 'dotenv/config';
import axios from 'axios';

const getCoordinates = async (number, street, city, country) => {
    let coordLat, coordLong, errorMsg, errorGet = false;
    const params = [number + ',+', street + ',+', city + ',+', country];
    let geoURL = process.env.GOOGLE_MAPS_BASE_URL;
    const endURL = process.env. GOOGLE_MAPS_API_KEY;

    for (let index = 0 ; index < params.length ; index ++) {
        geoURL += params[index];
    }
    geoURL += endURL;

    try {
        await axios.get(geoURL)
            .then(result => {
                coordLat = result.data.results[0].geometry.location.lat;
                coordLong = result.data.results[0].geometry.location.lng;
            })
            .catch(error => {
                errorGet = true;
                errorMsg = error;
            })
    } catch (error) {
        errorGet = true;
        errorMsg = error;
    }

    return {coordLat, coordLong, errorGet, errorMsg};
};

export default getCoordinates;
