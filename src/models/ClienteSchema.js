const mongoose = require("mongoose");

const clienteSchema = new mongoose.Schema({
  nome: {
    type: String,
    require: true,
  },
  cpf: {
    type: Number,
    required: true,
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
  descricaoDoCaso: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("cliente", clienteSchema);
