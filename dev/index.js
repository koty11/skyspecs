const path = require('path');
const { FakeApiGatewayLambda } = require('fake-api-gateway-lambda');
const { setDataBase } = require('../src/helper');

async function main() {
    const gateway = new FakeApiGatewayLambda({
        port: 8080,
        routes: {
            '/api/v1.0/gist': path.join(__dirname, '..', 'src', 'index.js'),
        },
    });

    await gateway.bootstrap();
    // initialize JSON Database
    setDataBase();

    console.log('API Gateway running on localhost:8080');
}

process.on('unhandledRejection', (err) => {
    throw err;
});
main();
