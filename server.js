const { createServer } = require('http');
const { parse } = require('url');
const dotenv = require('dotenv');
const next = require('next');

dotenv.config();

const dev = process.env.NODE_ENV !== 'production';
const hostname = process.env.NEXT_PUBLIC_HOST;
const port = 3000;

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
	createServer(async (req, res) => {
		try {
			const parsedUrl = parse(req.url, true);
			await handle(req, res, parsedUrl);
		} catch (error) {
			// error
		}
	}).listen(port, (error) => {
		if (error) throw error;
		console.log(`> Ready on ${hostname}`);
	});
});
