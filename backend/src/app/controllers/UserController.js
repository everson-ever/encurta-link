const { User } = require('../entities/index');
import Response from './../models/Response';
import * as yup from 'yup';

class UserController {
  async index(req, res) {
    try {
      const users = await User.findAll();
      return res.status(200).json(new Response(200, 'sucesso', users));
    } catch (err) {
      return res.status(500).json(new Response(500, err.message, null));
    }
  }

  async show(req, res) {}

  async store(req, res) {
    try {
      const { name, email, password } = req.body;

      let schema = yup.object().shape({
        name: yup.string().required(),
        email: yup
          .string()
          .required()
          .email(),
        password: yup.string().required(),
      });

      if (!schema.isValidSync(req.body)) {
        return res
          .status(400)
          .json(new Response(400, 'campos inválidos', null));
      }

      let user = await User.findOne({
        where: { email: email },
      });

      if (user) {
        return res
          .status(400)
          .json(new Response(400, 'email já foi cadastrado', null));
      }

      user = await User.create({
        name,
        email,
        password,
      });
      return res.status(201).json(new Response(201, 'sucesso', user));
    } catch (err) {
      return res.status(500).json(new Response(500, err.message, null));
    }
  }

  async update(req, res) {}

  async destroy(req, res) {
    try {
      const { id } = req.params;

      const user = await User.findOne({
        where: {
          id: id,
        },
      });

      if (!user) {
        res.status(404).json(new Response(404, 'recurso não encontrado', null));
      }

      await user.destroy();

      res.status(201).json(new Response(201, 'sucesso', null));
    } catch (err) {
      return res.status(500).json(new Response(500, err.message, null));
    }
  }
}

export default new UserController();
