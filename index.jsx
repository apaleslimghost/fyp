import React from 'react'
import {render} from 'react-dom'
import {PDFViewer} from '@react-pdf/renderer'
import MyDocument from './src'

render(<PDFViewer style={{width: '100%', height: '100%', border: '0 none'}}>
	<MyDocument />
</PDFViewer>, document.getElementById('root'))