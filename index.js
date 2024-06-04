const fs = require('fs-extra');
const path = require('path');
const argv = require('yargs').argv;

const source = argv.source || path.join(__dirname, 'LoginSignUp');
const destination = argv.destination || path.join(process.cwd(), 'src/components/LoginSignUp');

const sourceApp = argv.source || path.join(__dirname, 'App/App.jsx');
const destinationApp = argv.destination || path.join(process.cwd(), 'src/');

const sourceTW = argv.source || path.join(__dirname, 'LoginSignUpTW');
const destinationTW = argv.destination || path.join(process.cwd(), 'src/components/LoginSignUpTW');

const sourceAppTW = argv.source || path.join(__dirname, 'AppTW/App.jsx');
const destinationAppTW = argv.destination || path.join(process.cwd(), 'src/');

const sourcePR = argv.source || path.join(__dirname, 'PrivateRoute/PrivateRoute.jsx');
const destinationPR = argv.destination || path.join(process.cwd(), 'src/components/PrivateRoute');

async function RunReactLoginSignIn() {
    try {
        await fs.copy(source, destination);
        await fs.copy(sourceApp, destinationApp);
        await fs.copy(sourcePR, destinationPR)
        console.log('The Login and SignUp templete Successfully Createed');
    } catch (err) {
        console.error('Error copying folder:', err);
    }
}



async function RunReactLoginSignInTW() {
    try {
        await fs.copy(sourceTW, destinationTW);
        await fs.copy(sourceAppTW, destinationAppTW);
        await fs.copy(sourcePR, destinationPR);
        console.log('The Login and SignUp templete Successfully Createed');
    } catch (err) {
        console.error('Error copying folder:', err);
    }
}

async function RunBackendMysqlNoMVC() {

}

module.exports = {
    RunReactLoginSignIn,
    RunReactLoginSignInTW,
    RunBackendMysqlNoMVC
}