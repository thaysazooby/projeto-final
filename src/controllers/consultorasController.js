const mongoose = require("mongoose");

const ConsultoraSchema = require("../models/ConsultoraSchema");

const buscarConsultoras = async (req, res) => {
  const { nome } = req.query;

  let query = {};

  if (nome) query.nome = new RegExp(nome, i);

  try {
    const consultoras = await ConsultoraSchema.find(query);
    res.status(200).json(consultoras);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const buscarConsultoraPorId = async (req, res) => {
  const { id } = req.params;

  try {
    const consultoraEncontrada = await ConsultoraSchema.find(id);
    if (consultoraEncontrada == undefined) {
      return res.status(404).send({ message: "Consultora nao encontrada" });
    }
    res.status(200).send(consultoraEncontrada);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const cadastrarConsultora = async (req, res) => {
  try {
    const { nome, cpf, oab, especialidade, endereco, disponibilidadeSemanal } =
      req.body;

    if (!nome) {
      res.status(401).json({
        message: `Todos os campos devem ser preenchidos!`,
      });
    }

    const buscarCpf = await ConsultoraSchema.find({ cpf });
    if (buscarCpf.lenght !== 0) {
      return res.status(401).json({ message: "Verificar dados informados!" });
    }

    const buscarOab = await ConsultoraSchema.find({ oab });
    if (buscarOab.lenght !== 0) {
      return res.status(401).json({ message: "Verificar dados informados!" });
    }

    const consultora = new ConsultoraSchema({
      nome: req.body.nome,
      cpf: req.body.cpf,
      oab: req.body.oab,
      especialidade: req.body.especialidade,
      endereco: req.body.endereco,
      disponibilidadeSemanal: req.body.disponibilidadeSemanal,
    });

    const adicionarConsultora = await consultora.save();
    res.status(201).json({
      message: "Consultora cadastrada com sucesso!",
      consultora: adicionarConsultora,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const alterarConsultora = async (req, res) => {
  try {
    const procurarConsultora = await ConsultoraSchema.findById(req.params.id);

    procurarConsultora.nome = nome || procurarConsultora.nome;
    procurarConsultora.cpf = cpf || procurarConsultora.cpf;
    procurarConsultora.airrosQueAtuam =
      bairrosQueAtuam || procurarConsultora.bairrosQueAtuam;
    procurarConsultora.descricaoDoCaso =
      descricaoDoCaso || procurarConsultora.descricaoDoCaso;

    const ConsultoraAtualizada = procurarConsultora.save();
    res.status(200).json(ConsultoraAtualizada);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const deletarConsultora = async (req, res) => {
  try {
    const Consultora = await ConsultoraSchema.findById(req.params.id);

    await Consultora.delete();

    res.status(200).send({ message: `Consultora deletada com sucesso!` });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = {
  buscarConsultoras,
  buscarConsultoraPorId,
  cadastrarConsultora,
  alterarConsultora,
  deletarConsultora,
};
