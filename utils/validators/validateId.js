import Admin from '../../../models/adminModels/adminSchema.js';
import FieldOwner from '../../../models/fieldOwnerModels/fieldOwnerSchema.js';
import Player from '../../../models/playerModels/playerSchema.js';
import validateObjectId from './validateObjectId.js';

const validateId = async (role, id) => {
    if (validateObjectId(id) && role === 'admin') {
        const adminExists = await Admin.exists({_id: id});
        if (adminExists) {
            return true;
        } return false;
    } else if (validateObjectId(id) && role === 'fieldOwner') {
        const fieldOwnerExists = await FieldOwner.exists({_id: id});
        if (fieldOwnerExists) {
            return true;
        } return false;
    } else if (validateObjectId(id) && role === 'player') {
        const playerExists = await Player.exists({_id: id});
        if (playerExists) {
            return true;
        } return false;
    }
};

export default validateId;
