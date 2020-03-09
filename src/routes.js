module.exports = (app) => {
	let uri = '/api/' + process.env.API_VERSION

	app.use(uri + '/generator/', require('./modules/generator'))

	app.route('/*').get(function (req, res) {
		res.json({ message: 'Route not found!', rota: uri })
	})
}
