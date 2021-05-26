const { addData, getData, deleteData } = require('../../model/gist');

function marksFavorite(method, gistId) {
    try {
        let response = {};

        switch (method) {
            case 'add': response = addData(gistId); break;
            case 'delete': response = deleteData(gistId); break;
            case 'get': response = Object.keys(getData()); break;
            default: response = { data: 'Method not available' };
        }

        return response;
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = {
    marksFavorite,
};
