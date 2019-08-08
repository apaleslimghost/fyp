const React = require('react')
const { render } = require('@react-pdf/renderer')
const { promises: fs } = require('fs')
const Komatsu = require('komatsu')
const log = new Komatsu()

async function main() {
	const files = await fs.readdir('dist')
	const entries = files.filter(name => name.endsWith('.js')).map(name => ({
		entry: `./dist/${name}`,
		output: `output/${name.replace(/\.js$/, '.pdf')}`,
	}))

	await Promise.all(entries.map(({ entry, output }) => {
		const Component = require(entry).default
		return log.logPromise(
			render(React.createElement(Component), output),
			`rendering ${output}`
		)
	}))
}

main()