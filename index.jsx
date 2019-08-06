import React from 'react'
import {render} from '@react-pdf/renderer'
import Cards from './src/cards'

render(<Cards />, 'output/cards.pdf')