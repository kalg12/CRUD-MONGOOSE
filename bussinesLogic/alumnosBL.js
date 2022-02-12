const { listarAlumnos } = require('../repositories/alumnosRepository');

const listarAlumnosActuales = async () => {
  const resultado = await listarAlumnos();

  return resultado;
};

module.exports = { listarAlumnosActuales };