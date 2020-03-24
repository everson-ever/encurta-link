const { Link } = require('../entities/index');
const generateShort = require('./../utils/generateShort');
import Response from './../models/Response';

class LinkController {
	async index(req, res) {
		try {
			const links = await Link.findAll({
				where: {
					saved: true
				}
			});
			return res.status(200).json(new Response(200, 'sucesso', links));
		} catch (err) {
			return res.status(500).json(new Response(500, err.message, null));
		}
	}

	async show(req, res) {
		try {
			const { short } = req.params;

			const link = await Link.findOne({
				where: { shortenedUrl: short }
			});

			if (!link) {
				res.status(404).json(new Response(404, 'recurso não encontrado', null));
			}

			await link.views++;
			await link.save();

			res.status(200).json(new Response(200, 'sucesso', { url: link.originalUrl }));
		} catch (err) {
			return res.status(500).json(new Response(500, err.message, null));
		}
	}

	async store(req, res) {
		try {
			const { originalUrl, saved } = req.body;

			const shortenedUrl = generateShort(5);

			const link = await Link.create({
				originalUrl,
				shortenedUrl,
				saved: saved
			});

			return res.status(201).json(new Response(201, 'sucesso', link));
		} catch (err) {
			return res.status(500).json(new Response(500, err.message, null));
		}
	}

	async destroy(req, res) {
		try {
			const { id } = req.params;

			const link = await Link.findOne({
				where: {
					id: id
				}
			});

			if (!link) {
				res.status(404).json(new Response(404, 'recurso não encontrado', null));
			}

			await link.destroy();

			res.status(201).json(new Response(201, 'sucesso', null));
		} catch (err) {
			return res.status(500).json(new Response(500, err.message, null));
		}
	}
}

export default new LinkController();
