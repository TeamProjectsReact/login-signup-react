const fs = require('fs-extra');
const path = require('path');
const argv = require('yargs').argv;

const source = argv.source || path.join(__dirname, 'LoginSignUp');
const destination = argv.destination || path.join(process.cwd(), 'src/components/LoginSignUp');

const sourceApp = argv.source || path.join(__dirname, 'App');
const destinationApp = argv.destination || path.join(process.cwd(), 'src/');

const sourceTW = argv.source || path.join(__dirname, 'LoginSignUpTW');
const destinationTW = argv.destination || path.join(process.cwd(), 'src/components/LoginSignUpTW');

const sourceAppTW = argv.source || path.join(__dirname, 'AppTW');
const destinationAppTW = argv.destination || path.join(process.cwd(), 'src/');

const sourcePR = argv.source || path.join(__dirname, 'PrivateRoute');
const destinationPR = argv.destination || path.join(process.cwd(), 'src/components/PrivateRoute');

const sourceDash = argv.source || path.join(__dirname, 'Dashboard');
const destinationDash = argv.destination || path.join(process.cwd(), 'src/components/Dashboard');

const sourceBackendMysqlNoMVC = argv.source || path.join(__dirname, 'BackEndMysqlNoMVC');
const destinationBackendMysqlNoMVC = argv.destination || path.join(process.cwd(), '../');

const sourceBackendMysqlMVC = argv.source || path.join(__dirname, 'BackEndMysqlMVC');
const destinationBackendMysqlMVC = argv.destination || path.join(process.cwd(), '../');

async function RunReactLoginSignIn() {
    try {
        await fs.copy(source, destination);
        await fs.copy(sourceApp, destinationApp);
        await fs.copy(sourcePR, destinationPR);
        await fs.copy(sourceDash, destinationDash);
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
        await fs.copy(sourceDash, destinationDash);
        console.log('The Login and SignUp templete Successfully Createed');
    } catch (err) {
        console.error('Error copying folder:', err);
    }
}

async function RunBackendMysqlNoMVC() {
    try {
        await fs.copy(sourceBackendMysqlNoMVC, destinationBackendMysqlNoMVC);
        console.log('Backend Development (Mysql without MVC) Enviroment Created Successful');
    } catch (err) {
        console.error('Error copying folder:', err);
    }
}

async function RunBackendMysqlMVC() {
    try {
        await fs.copy(sourceBackendMysqlMVC, destinationBackendMysqlMVC);
        console.log('Backend Development (Mysql with MVC) Enviroment Created Successful');
    } catch (err) {
        console.error('Error copying folder:', err);
    }
}

async function main() {
    try {
      // Prompt the user to select an option from the list
      const answers = await inquirer.prompt([
        {
          type: 'list',
          name: 'selection',
          message: 'Select Your Front End :',
          choices: ['Uing TailWindCSS', 'Using Custom CSS'],
        }
      ]);
  
      const { selection } = answers;

      switch (selection) {
        case 'Uing TailWindCSS':
          await RunReactLoginSignInTW();
          break;
        case 'Using Custom CSS':
          console.log('The Custom CSS is Under Developmrnt Please Select TailWind CSS');          
          break;
        default:
          console.log('Invalid selection.');
      }
    } catch (error) {
      console.error(`An error occurred: ${error.message}`);
    }
  }
  
  main();
  


