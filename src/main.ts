import { config } from 'dotenv';
import { readFileSync } from 'fs-extra';
import * as path from 'path';
import { bootstrap } from './app';

if (! readFileSync(path.resolve(__dirname, '../.env'))) {
    console.log('.env file must be present in Boost-Api');
    process.exit();
}

config({path: path.resolve(__dirname, '../.env')});

async function startLocalInstance() {
    const fastifyInstance = await bootstrap();
    fastifyInstance.listen(3000);
};

startLocalInstance();
