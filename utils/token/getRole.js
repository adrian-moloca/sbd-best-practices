import SuperAdmin from '../../../models/superAdminModels/superAdminSchema.js';
import Admin from '../../../models/adminModels/adminSchema.js';
import FieldOwner from '../../../models/fieldOwnerModels/fieldOwnerSchema.js';
import Player from '../../../models/playerModels/playerSchema.js';

const getRole = async (tokenResponse) => {
    const role = await tokenResponse.authToken.role;
    const id = await tokenResponse.authToken.id;
    let usedBy;
    switch (role) {
        case "superAdmin":
            usedBy = await SuperAdmin.findById(id);
            break;
        case "admin":
            usedBy = await Admin.findById(id);
            break;
        case "fieldOwner":
            usedBy = await FieldOwner.findById(id);
            break;
        case "player":
            usedBy = await Player.findById(id);
            break;
        default:
            usedBy = null;
    }
    return usedBy;
};

export default getRole;