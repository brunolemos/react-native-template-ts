const fs = require('fs')
const path = require('path')

const templatePackageJSON = require('./package.template.json')

console.log('🔄 Finishing TypeScript project setup...')

// Utils
const readFile = filename => fs.readFileSync(path.join(__dirname, filename), 'utf8')

const deleteFile = filename => {
  try {
    return fs.unlinkSync(path.join(__dirname, filename))
  } catch (error) {}
}

const writeFile = (filename, data) => fs.writeFileSync(path.join(__dirname, filename), data)

// Merge package.json
const packageJSON = JSON.parse(readFile('package.json'))
const updatedPackageJSON = Object.assign({}, packageJSON, templatePackageJSON)
delete updatedPackageJSON.jest
writeFile('package.json', JSON.stringify(updatedPackageJSON, null, 2))

// Delete unnecessary files
deleteFile('.flowconfig')
deleteFile('App.js')
deleteFile('LICENSE')
deleteFile('README.md')
deleteFile('devDependencies.json')
deleteFile('package.template.json')
deleteFile('setup.js')

// Remove setup script from index.js
const index = readFile('rn-cli.config.js')
const updatedIndex = index.replace("require('./setup')\n\n", '')
writeFile('rn-cli.config.js', updatedIndex)

console.log(`✅ Setup completed.`)
