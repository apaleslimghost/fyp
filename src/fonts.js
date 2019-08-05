import { Font } from '@react-pdf/renderer'
import path from 'path'

Font.register({
	src: path.resolve(__dirname, '../fonts/revolution-gothic-extrabold.ttf'),
	family: 'Revolution Gothic',
})
