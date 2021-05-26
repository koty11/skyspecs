const { JsonDB } = require('node-json-db');

function addData(gistId) {
    try {
        const db = new JsonDB('data/data', true, true, '/');

        const data = db.push(`/${gistId}`, true);

        return data;
    } catch (error) {
        throw new Error(error);
    }
}

function deleteData(gistId) {
    try {
        const db = new JsonDB('data/data', true, true, '/');

        const data = db.delete(`/${gistId}`);

        return data;
    } catch (error) {
        throw new Error(error);
    }
}

function getData() {
    try {
        const db = new JsonDB('data/data', true, true, '/');

        const data = db.getData('/');

        return data;
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = {
    addData,
    getData,
    deleteData,
};
