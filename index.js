#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const argv = require('yargs').argv;
const inquirer = require('inquirer');

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

const sourceBackendMongoDBMVC = argv.source || path.join(__dirname, 'BackEndMongoMVC');
const destinationBackendMongoDBMVC = argv.destination || path.join(process.cwd(), '../');

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

async function RunBackendMongoDBMVC() {
    try {
        await fs.copy(sourceBackendMongoDBMVC, destinationBackendMongoDBMVC);
        console.log('Backend Development (MongoDB with MVC) Enviroment Created Successful');
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
          name: 'selection1',
          message: 'Select Your Front End :',
          choices: ['Using TailWindCSS', 'Using Custom CSS'],
        },
        {
            type: 'list',
            name: 'selection2',
            message: 'Select Your BackEnd End :',
            choices: ['Using MySQL without MVC', 'Using MySQL with MVC', 'Using MongoDB with MVC (Recommended)'],
        }
      ]);
  
      const { selection1, selection2 } = answers;

      switch (selection1) {
        case 'Uing TailWindCSS':
            await RunReactLoginSignInTW();
            break;

        case 'Using Custom CSS':
            await RunReactLoginSignIn();       
            break;

        default:
          console.log('Invalid selection.');
      }

      switch (selection2) {
        case 'Using MySQL without MVC':
            await RunBackendMysqlNoMVC();          
            break;

        case 'Using MySQL with MVC':
            await RunBackendMysqlMVC();          
            break;

        case 'Using MongoDB with MVC (Recommended)':
            await RunBackendMongoDBMVC();          
            break;

        default:
          console.log('Invalid selection.');
      }
    } catch (error) {
      console.error(`An error occurred: ${error.message}`);
    }
  }
  
  main();
  


