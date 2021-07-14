import { copy } from '@qoi/build'

export default  {
  plugins: [
    copy({
      targets: [
        { src: './src/*.html', dest: './dist' }
      ]
    })
  ]
}