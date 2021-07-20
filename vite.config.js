import WindiCSS from 'vite-plugin-windicss'
const { resolve } = require('path')

export default {
  plugins: [
    WindiCSS(),
  ],
}

// module.exports = {
//   build: {
//     rollupOptions: {
//       input: {
//         main: resolve(__dirname, 'index.html'),
//         education: resolve(__dirname, 'education/index.html')
//       }
//     }
//   }
// }