const fs = require('fs')
const path = require('path')

const templatePackageJSON = require('./package.template.json')

// Utils
const readFile = filename => fs.readSync(path.join(__dirname, filename))
const deleteFile = filename => fs.unlinkSync(path.join(__dirname, filename))
const writeFile = (filename, data) =>
  fs.writeFileSync(path.join(__dirname, filename), data)

console.log('🔄 Setting up...')

// Merge package.json
const originalPackageJSON = readFile('package.json')
const updatedPackageJSON = Object.assign(
  {},
  originalPackageJSON,
  templatePackageJSON
)
writeFile('package.json', JSON.stringify(updatedPackageJSON, null, 2))

// Delete unnecessary files
deleteFile('.flowconfig')
deleteFile('App.js')
deleteFile('LICENSE')
deleteFile('devDependencies.json')
deleteFile('setup.js')

console.log(`✅ Setup completed!`)
