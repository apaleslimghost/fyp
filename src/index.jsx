import React, {Children} from 'react'
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer'
import styled, { css } from '@react-pdf/styled-components'
import chunk from 'lodash.chunk'

import './fonts'

const Avery7671Label = styled.View.attrs({wrap: false})`
width: 46.4mm;
height: 76.2mm;
border: 1px dotted lightgrey;
border-radius: 3mm;
`

const Grid = styled.View`
display: flex;
flex-direction: row;
justify-content: center;
position: relative;
top: ${({even}) => even ? '85pt' : '78pt'};
`

const Card = styled.View`
padding: 5mm;
`

const Title = styled.Text`
font-family: 'Revolution Gothic';
`

const Avery7671 = ({ children }) => <Page size="A4" style={{margin: '0'}} orientation='landscape'>
	{chunk(Children.toArray(children), 6).map((row, i) =>
		<Grid key={i} even={i % 2}>
			{row.map((child, j) =>
				<Avery7671Label key={j}>
					{child}
				</Avery7671Label>
			)}
		</Grid>
	)}
</Page>

const MyDocument = () => (
	<Document>
		<Avery7671>
			<Card>
				<Title>Hello</Title>
			</Card>
			<Card>
				<Title>Hello</Title>
			</Card>
			<Card>
				<Title>Hello</Title>
			</Card>
			<Card>
				<Title>Hello</Title>
			</Card>
			<Card>
				<Title>Hello</Title>
			</Card>
			<Card>
				<Title>Hello</Title>
			</Card>
			<Card>
				<Title>Hello</Title>
			</Card>
			<Card>
				<Title>Hello</Title>
			</Card>
			<Card>
				<Title>Hello</Title>
			</Card>
			<Card>
				<Title>Hello</Title>
			</Card>
			<Card>
				<Title>Hello</Title>
			</Card>
			<Card>
				<Title>Hello</Title>
			</Card>
			<Card>
				<Title>Hello</Title>
			</Card>
			<Card>
				<Title>Hello</Title>
			</Card>
			<Card>
				<Title>Hello</Title>
			</Card>
			<Card>
				<Title>Hello</Title>
			</Card>
			<Card>
				<Title>Hello</Title>
			</Card>
			<Card>
				<Title>Hello</Title>
			</Card>
			<Card>
				<Title>Hello</Title>
			</Card>
			<Card>
				<Title>Hello</Title>
			</Card>
			<Card>
				<Title>Hello</Title>
			</Card>
			<Card>
				<Title>Hello</Title>
			</Card>
			<Card>
				<Title>Hello</Title>
			</Card>
			<Card>
				<Title>Hello</Title>
			</Card>
		</Avery7671>
	</Document>
)

export default MyDocument