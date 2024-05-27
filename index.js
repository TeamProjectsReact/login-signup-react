const fs = require('fs-extra');
const path = require('path');
const argv = require('yargs').argv;

const source = argv.source || path.join(__dirname, 'template-folder');
const destination = argv.destination || path.join(process.cwd(), 'src/components');

async function copyFolder() {
    try {
        await fs.copy(source, destination);
        console.log('Folder copied successfully!');
    } catch (err) {
        console.error('Error copying folder:', err);
    }
}

copyFolder();
