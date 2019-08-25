const fs = require('fs-extra');
const envVariables = require('./env');

let variables;

function createEnvFile() {
    if (process.argv[2] === "dev") {
        variables = envVariables.dev;
    } else {
        variables = envVariables.prod;
    }

    fs.writeFileSync('../.env', `#${process.argv[2]} environment variables`);

    variables.forEach((variable) => {
        fs.appendFileSync('../.env', `${variable}\n`);
    });
};

createEnvFile();
