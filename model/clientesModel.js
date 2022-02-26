// const connection = require('../mysql');

const clienteAll = `SELECT *, DATE_FORMAT(fechavalue,'%d-%m-%Y') AS fechaValue FROM arc where search='true' ORDER BY id ASC `;
const crearCliente = `CALL arcAddOrEddit(?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`
const updateSearchFalseCliente = `CALL arcUpdateSearch(?);`
const updateSearchTrueCliente = `CALL arcUpdateSearchTrue(?);`
const updateNombreGrilla = `CALL arcUpdateNombreGrilla(?,?);`
 
module.exports = {
  clienteAll,
  crearCliente,
  updateSearchFalseCliente,
  updateSearchTrueCliente,
  updateNombreGrilla 
}