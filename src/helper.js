const qs = require('qs');
const axios = require('axios');
const { JsonDB } = require('node-json-db');
const { Config } = require('node-json-db/dist/lib/JsonDBConfig');

function parseQuery(queryStringParameters) {
    return qs.parse(queryStringParameters);
}

function formatResponse(statusCode, body) {
    return {
        statusCode,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    };
}

function getFilterQuery(data) {
    // Validate queryString data
    if (data) {
        const query = [];

        Object.entries(data).forEach((e) => {
            if (data[e[0]]) {
                query.push(e[0], Object.keys(data[e[0]])[0], Object.values(data[e[0]])[0]);
            }
        });

        return query;
    }

    return [];
}

const gistsService = axios.create({
    baseURL: 'https://api.github.com', // process.env.BASE_URL_GISTS,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

function setDataBase() {
    const db = new JsonDB(new Config('data/data', true, true, '/'));

    return db;
}

module.exports = {
    setDataBase,
    formatResponse,
    parseQuery,
    getFilterQuery,
    gistsService,
};
