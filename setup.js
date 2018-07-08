const fs = require('fs')
const path = require('path')

// Utils
const readFile = filename => fs.readSync(path.join(__dirname, filename))
const deleteFile = filename => fs.unlinkSync(path.join(__dirname, filename))
const writeFile = (filename, data) =>
  fs.writeFileSync(path.join(__dirname, filename), data)

console.log('🔄 Setting up...')

// Delete unnecessary files
deleteFile('.flowconfig')
deleteFile('App.js')
deleteFile('LICENSE')
deleteFile('devDependencies.json')
deleteFile('setup.js')

console.log(`✅ Setup completed!`)
