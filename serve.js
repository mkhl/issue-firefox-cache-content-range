let compression = require('compression')
let express = require('express')
express()
	.use(compression())
	.use(express.static('public', { setHeaders: (res, path, stat) => {
		res.set('Content-Range', `bytes 0-${stat.size-1}/${stat.size}`)
	}}))
	.listen(8080)
