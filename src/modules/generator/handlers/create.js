const { isEmpty } = require('lodash')
const PDFDocument = require('pdfkit')
const fs = require('fs')

const FUNCTIONS = require('../../../helpers/functions')

// - Nome do usuário
// - Data de nascimento
// - Telefone

module.exports = async (req, res) => {
	let body = req.body

	if (!isEmpty(body.name)) {
		res.setHeader('Content-type', 'application/pdf')

		// Create a document
		const doc = new PDFDocument()

		// Pipe its output somewhere, like to a file or HTTP response
		// See below for browser usage
		doc.pipe(fs.createWriteStream('public/files/output.pdf'))

		doc.fontSize(24).text('Testfy', 100, 50)
		doc.fontSize(18).text(`Nome: ${body.name}`, 100, 80)
		doc.fontSize(18).text(`Data de Nascimento: ${body.birthdate}`, 100, 110)
		doc.fontSize(18).text(`Telefone: ${body.phone}`, 100, 140)

		doc.pipe(res)
		doc.end()
	} else {
		return res.status(400).json(FUNCTIONS.objectReturn('You need to send the name, birthdate and the phone number to proceed', null, true, 400))
	}
}
