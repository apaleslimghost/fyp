import React from 'react'
import {render} from '@react-pdf/renderer'
import MyDocument from './src'

render(<MyDocument />, 'dist/output.pdf')