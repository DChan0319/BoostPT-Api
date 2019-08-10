import { bootstrap } from './app';

async function startLocalInstance() {
    const fastifyInstance = await bootstrap();
    fastifyInstance.listen(3000);
};

startLocalInstance();
