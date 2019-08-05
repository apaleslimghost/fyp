import { Font } from '@react-pdf/renderer'
import path from 'path'

Font.register({
	src: path.resolve(__dirname, '../fonts/revolution-gothic-extrabold.ttf'),
	family: 'Revolution Gothic',
})

Font.register({
	src: path.resolve(__dirname, '../fonts/tt-lakes-compressed-black.ttf'),
	family: 'TT Lakes Compressed',
})

Font.register({
	src: path.resolve(__dirname, '../fonts/calibre-regular.ttf'),
	family: 'Calibre',
})
