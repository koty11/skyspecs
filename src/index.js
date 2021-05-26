const {
    formatResponse,
    parseQuery,
    getFilterQuery,
} = require('./helper');

const {
    getByUsername,
    getByGist,
} = require('./controller/user');

const {
    marksFavorite,
} = require('./controller/gist');

module.exports.handler = async (event) => {
    try {
        const { queryStringParameters = false } = event;

        if (!queryStringParameters) {
            return formatResponse(400, 'Wrong filter structure, ex id[eq]=1');
        }

        const searchData = parseQuery(queryStringParameters);
        const filterQuery = getFilterQuery(searchData);

        if (filterQuery.length !== 3) {
            return formatResponse(400, 'Wrong filter structure, ex id[eq]=1');
        }

        let response = {};

        switch (filterQuery[0]) {
            case 'id': response = await getByGist(filterQuery[2]); break;
            case 'username': response = await getByUsername(filterQuery[2]); break;
            case 'favorite': response = marksFavorite(filterQuery[1], filterQuery[2]); break;
            default: response = { data: 'Method not available' };
        }

        return formatResponse(200, response);
    } catch (error) {
        return formatResponse(500, error);
    }
};
