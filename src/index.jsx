import React, {Children} from 'react'
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer'
import styled, { css } from '@react-pdf/styled-components'
import chunk from 'lodash.chunk'

import data from './data.yml'
import './fonts'

const fontScale = scale => `${Math.round(7 * 1.25 ** scale)}pt`

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
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 3mm;
`

const Header = styled.View``

const Section = styled.View`
font-family: 'Calibre';
font-size: ${fontScale(1)};
padding-bottom: 10pt;
line-height: 1.2;
`

const Heading = styled.Text`
font-family: 'Revolution Gothic';
text-transform: uppercase;
font-size: ${fontScale(2)};
margin-bottom: 5pt;
letter-spacing: -0.5pt;
`

const Title = styled(Heading)`
font-size: ${fontScale(4)};
color: #F8453A;
margin: 0;
`

const RussianTitle = styled.Text`
text-transform: uppercase;
font-family: 'TT Lakes Compressed';
font-size: ${fontScale(2)};
line-height: 1;
color: #FFD64F;
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

export default () => (
	<Document>
		<Avery7671>
			{data.map(card => 
				<Card key={card.title}>
					{card.strategy && <Section>
						<Heading>Strategy</Heading>
						<Text>{card.strategy}</Text>
					</Section>}
					{card.shared && <Section>
						<Heading>While shared</Heading>
						<Text>{card.shared}</Text>
					</Section>}

					<Header>
						<RussianTitle>{card.russianTitle}</RussianTitle>
						<Title>{card.title}</Title>
					</Header>
				</Card>
			)}
		</Avery7671>
	</Document>
)