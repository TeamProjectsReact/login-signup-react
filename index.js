const fs = require('fs-extra');
const path = require('path');
const argv = require('yargs').argv;

const source = argv.source || path.join(__dirname, 'LoginSignUp');
const destination = argv.destination || path.join(process.cwd(), 'src/components/LoginSignUp');

const sourceTW = argv.source || path.join(__dirname, 'LoginSignUpTW');
const destinationTW = argv.destination || path.join(process.cwd(), 'src/components/LoginSignUpTW');


async function RunReactLoginSignIn() {
    try {
        await fs.copy(source, destination);
        console.log('The Login and SignUp templete Successfully Createed');
    } catch (err) {
        console.error('Error copying folder:', err);
    }
}



async function RunReactLoginSignInTW() {
    try {
        await fs.copy(sourceTW, destinationTW);
        console.log('The Login and SignUp templete Successfully Createed');
    } catch (err) {
        console.error('Error copying folder:', err);
    }
}




const args = process.argv.slice(2);

switch (args[0]) {
  case 'CSS':
    RunReactLoginSignIn();
    break;
  case 'TW':
    RunReactLoginSignInTW();
    break;
  default:
    console.log('No valid function name provided.');
}