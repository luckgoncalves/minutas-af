const withImages = require('next-images')

module.exports = withImages()

// module.exports = {
//   env: {
//     rawJsFromFile: fs.readFileSync('./public/js/embedded.js').toString()
//   }
// }