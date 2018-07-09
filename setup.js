const fs = require('fs')
const path = require('path')

const templatePackageJSON = require('./package.template.json')

// Utils
const readFile = filename => fs.readFileSync(path.join(__dirname, filename), 'utf8')
const deleteFile = filename => fs.unlinkSync(path.join(__dirname, filename))
const writeFile = (filename, data) =>
  fs.writeFileSync(path.join(__dirname, filename), data)

console.log('🔄 Setting up...')

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

console.log(`✅ Setup completed!`)
