const mongoose = require("mongoose");

const ClienteSchema = require("../models/ClienteSchema");

const buscarClientes = async (req, res) => {
  const { nome } = req.query;

  let query = {};

  if (nome) query.nome = new RegExp(nome, i);

  try {
    const clientes = await ClienteSchema.find(query);
    res.status(200).json(clientes);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const buscarClientePorId = async (req, res) => {
  const { id } = req.params;

  try {
    const clienteEncontrada = await ClienteSchema.find(id);
    if (clienteEncontrada == undefined) {
      return res.status(404).send({ message: "Cliente nao encontrada" });
    }
    res.status(200).send(clienteEncontrada);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const cadastrarCliente = async (req, res) => {
  try {
    const { nome, cpf, endereco, descricaoDoCaso } = req.body;

    if (!nome) {
      res.status(401).json({
        message: `Todos os campos devem ser preenchidos!`,
      });
    }

    const buscarCpf = await ClienteSchema.find({ cpf });
    if (buscarCpf.lenght !== 0) {
      return res.status(401).json({ message: "Verificar dados informados!" });
    }

    const cliente = new ClienteSchema({
      nome: req.body.nome,
      cpf: req.body.cpf,
      endereco: req.body.endereco,
      descricaoDoCaso: req.body.descricaoDoCaso,
    });

    const adicionarCliente = await cliente.save();
    res.status(201).json({
      message: "Cliente cadastrada com sucesso!",
      cliente: adicionarCliente,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const alterarCliente = async (req, res) => {
  try {
    const procurarCliente = await ClienteSchema.findById(req.params.id);

    procurarCliente.nome = nome || procurarCliente.nome;
    procurarCliente.cpf = cpf || procurarCliente.cpf;
    procurarCliente.bairrosQueAtuam =
      bairrosQueAtuam || procurarCliente.bairrosQueAtuam;
    procurarCliente.descricaoDoCaso =
      descricaoDoCaso || procurarCliente.descricaoDoCaso;

    const ClienteAtualizada = procurarCliente.save();
    res.status(200).json(ClienteAtualizada);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const deletarCliente = async (req, res) => {
  try {
    const Cliente = await ClienteSchema.findById(req.params.id);

    await Cliente.delete();

    res.status(200).send({ message: `Cliente deletada com sucesso!` });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = {
  buscarClientes,
  buscarClientePorId,
  cadastrarCliente,
  alterarCliente,
  deletarCliente,
};
