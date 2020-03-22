const { Link } = require('../entities/index');
const generateShort = require('./../utils/generateShort');
import Response from './../models/Response';

class LinkController {
  async index(req, res) {
    try {
      const links = await Link.findAll();
      return res.status(200).json(new Response(200, 'sucesso', links));
    } catch (err) {
      console.log(err.message);
    }
  }

  async show(req, res) {
    try {
      const { short } = req.params;

      const link = await Link.findOne({
        where: { shortenedUrl: short },
      });

      res
        .status(200)
        .json(new Response(200, 'sucesso', { url: link.originalUrl }));
    } catch (err) {
      console.log(err);
    }
  }

  async store(req, res) {
    try {
      const { originalUrl } = req.body;

      const shortenedUrl = generateShort(5);

      const link = await Link.create({ originalUrl, shortenedUrl });

      return res.status(201).json(new Response(201, 'sucesso', link));
    } catch (err) {
      console.log(err);
    }
  }
}

export default new LinkController();
