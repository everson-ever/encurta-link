const { Link } = require('./../models/index');
const generateShort = require('./../utils/generateShort');

class LinkController {
  async index(req, res) {
    try {
      const links = await Link.findAll();
      return res.status(200).json(links);
    } catch (err) {
      console.log(err.message);
    }
  }

  async show(req, res) {
    try {
      const { short } = req.params;

      const originalUrl = await Link.findOne({
        where: { shortenedUrl: short },
      });

      res.status(200).json({ url: originalUrl });
    } catch (err) {
      console.log(err);
    }
  }

  async store(req, res) {
    try {
      const { originalUrl } = req.body;

      const shortenedUrl = generateShort(5);

      const link = await Link.create({ originalUrl, shortenedUrl });

      return res.status(201).json(link);
    } catch (err) {
      console.log(err);
    }
  }
}

export default new LinkController();
