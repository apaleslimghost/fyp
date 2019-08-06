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
	src: path.resolve(__dirname, '../fonts/inter-regular.ttf'),
	family: 'Inter',
})

Font.register({
	src: path.resolve(__dirname, '../fonts/arial-unicode.ttf'),
	family: 'Arial Unicode MS',
})

Font.registerEmojiSource({
	format: 'png',
	url: 'https://twemoji.maxcdn.com/2/72x72/',
})