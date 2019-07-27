import React from 'react'
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer'
import styled, { css } from '@react-pdf/styled-components'

import './fonts'

const Card = styled.View`
width: 55mm;
height: 80mm;
border: 1px solid grey;
border-radius: 2mm;
padding: 5mm;
font-family: 'Revolution Gothic';
`

const Avery7160 = styled.View`
width: 108pt;
height: 180pt;
border: 1px dotted lightgrey;
border-radius: 2mm;
padding: 5mm;
`

const Grid = styled.View`
display: flex;
flex-flow: row wrap;
`

const MyDocument = () => (
	<Document>
		<Page size="A4" style={{margin: '1cm'}}>
			<Grid>
				<Avery7160>
					<Text>Avery</Text>
				</Avery7160>
				<Avery7160>
					<Text>Avery</Text>
				</Avery7160>
				<Avery7160>
					<Text>Avery</Text>
				</Avery7160>
				<Avery7160>
					<Text>Avery</Text>
				</Avery7160>
				<Avery7160>
					<Text>Avery</Text>
				</Avery7160>
				<Avery7160>
					<Text>Avery</Text>
				</Avery7160>
			</Grid>
		</Page>
	</Document>
)

export default MyDocument