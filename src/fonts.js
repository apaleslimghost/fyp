import { Font } from '@react-pdf/renderer'
import revolutionGothic from '../fonts/revolution-gothic-extrabold.ttf'

Font.register(
	revolutionGothic,
	{family: 'Revolution Gothic'}
)

console.log(revolutionGothic)