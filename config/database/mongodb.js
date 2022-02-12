const mongoose = require('mongoose');

const dbConnection = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://admin:kevin1294@cluster0.advfx.mongodb.net/escuela'
    );
    console.log('conectado a la DB');
  } catch (e) {
    console.log('Problema al conectarse a la DB');
    console.log(e);
    throw new Error('Problema con la conexion');
  }
};

module.exports = { dbConnection };