import React, {Children} from 'react'
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer'
import styled, { css } from '@react-pdf/styled-components'
import chunk from 'lodash.chunk'
import * as util from 'util'

import data from './data.yml'
import './fonts'

const fontScale = scale => `${Math.round(6 * 1.3 ** scale)}pt`

const Avery7671Label = styled.View.attrs({wrap: false})`
width: 46.4mm;
height: 76.2mm;
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
${({unstyled}) => !unstyled && css`font-family: 'Inter';`}
font-size: ${fontScale(1)};
padding-bottom: 10pt;
line-height: 1.2;
`

const Heading = styled.Text`
font-family: 'Revolution Gothic';
text-transform: uppercase;
font-size: ${fontScale(3)};
margin-bottom: 4pt;
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

const customComponents = { Image, View, Text }

const hydrate = children => children.map(
	(child, i) => {
		if(typeof child === 'object') {
			const [component] = Object.keys(child)
			const {children = [], ...props} = child[component]
			const Component = customComponents[component]
			return <Component key={i} {...props} children={hydrate(children)} />
		}

		return child
	}
)

const Avery7671 = ({ children }) => <Page size="A4" style={{margin: '0'}} orientation='landscape'>
	{chunk(Children.toArray(children), 6).map((row, i) =>
		<Grid key={i} even={i % 2}>
			{row.map((child, j) =>
				<Avery7671Label key={j}>
					{child}
				</Avery7671Label>
			)}
			{Array.from({length: 6 - row.length}, (_, k) => <Avery7671Label key={row.length + k} />)}
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
					{card.shared && <Section unstyled={card.shared.unstyled}>
						<Heading>While shared</Heading>
						{Array.isArray(card.shared)
							? hydrate(card.shared)
							: <Text>{card.shared}</Text>
						}
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