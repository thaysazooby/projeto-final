const mongoose = require("mongoose");

const consultoraSchema = new mongoose.Schema({
  nome: {
    type: String,
    require: true,
  },
  cpf: {
    type: String,
    required: true,
  },
  oab: {
    type: String,
    required: true,
  },
  especialidade: {
    type: String,
    require: true,
  },
  endereco: {
    cep: {
      type: String,
      required: true,
    },
    rua: {
      type: String,
      required: true,
    },
    numero: {
      type: Number,
      requires: true,
    },
    complemento: {
      type: String,
      required: false,
    },
    referencia: {
      type: String,
      required: false,
    },
    estado: {
      type: String,
      required: true,
    },
    cidade: {
      type: String,
      required: true,
    },
    bairro: {
      type: String,
      required: true,
    },
  },
  disponibilidadeSemanal: {
    dia: {
      type: String,
      required: false,
    },
    horario: {
      type: String,
      require: false,
    },
  },
});

module.exports = mongoose.model("consultora", consultoraSchema);
