const fs = require('fs')
const path = require('path')

const packageJson = require('./package.json')
const jestConfig = require('./jest.json')

console.log('🔄 Setting up...')

const deleteFile = fileName => fs.unlinkSync(path.join(__dirname, fileName))
const writeFile = (fileName, data) =>
  fs.writeFileSync(path.join(__dirname, fileName), data)

packageJson.jest = Object.assign(packageJson.jest, jestConfig)
writeFile('package.json', JSON.stringify(packageJson, null, 2))

deleteFile('.flowconfig')
deleteFile('App.js')
// deleteFile('devDependencies.json')
deleteFile('setup.js')

console.log(`✅ Setup completed!`)
