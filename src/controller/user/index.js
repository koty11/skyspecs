const { gistsService } = require('../../helper');

async function getByUsername(username) {
    try {
        const { data } = await gistsService.get(`/users/${username}/gists`);

        return data;
    } catch (error) {
        throw new Error(error);
    }
}

async function getByGist(gistId) {
    try {
        const { data } = await gistsService.get(`/gists/${gistId}`);

        return data;
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = {
    getByUsername,
    getByGist,

};
