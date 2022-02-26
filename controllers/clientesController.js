const connection = require('../mysql');
const { clienteAll, crearCliente, updateSearchFalseCliente, updateSearchTrueCliente, updateNombreGrilla } = require('../model/clientesModel');


exports.todoslosclientes = async (req, res) => {
  connection.query(clienteAll,
    function (err, results, fields) {
      if (err) throw err;
      res.json(results);
      // console.log(fields.ColumnDefinition);
    }
  );
}

exports.buscarPorNombre = async (req, res) => {
  const { nombre } = req.body;
  console.log('req.body: ' + nombre)
  connection.query(
    `SELECT *, DATE_FORMAT(fechavalue,'%d-%m-%Y') AS fechaValue  FROM arc WHERE nombre = ?`, [nombre],
    function (err, results, fields) {
      if (err) throw err;
      res.json(results);
      // console.log(fields);
    }
  );
}


exports.crearCliente = async (req, res) => { // console.log(req.body);  
  try {
    const { id, nombre, fechaValue, service, features, complexity, sistema, users, total, search } = req.body; console.log(req.body);
    const sistemaUnion = sistema.join(', ');//De [] a String
    const featuresUnion = features.join(', ');   //De [] a String   
    const fechaValueFormated = new Date(fechaValue).toJSON().slice(0, 10);// formated Date Mysql  

    connection.query(crearCliente,// store procedure
      [id, nombre, fechaValueFormated, service, featuresUnion, complexity, sistemaUnion, users, total, search],
      function (err, results, fields) {
        if (err) throw err;
        res.json(results);// respuesta es id - frontEnd agrega id a la tabla
        // console.log(fields);
      }
    );
  } catch (error) {
    console.log(error);
    res.status(400).send('Hubo un Error');
  }
};

exports.updateCliente = (req, res) => { // console.log(req.body);  
  try {
    const { id } = req.body;  //console.log(req.body);       


    connection.query(updateSearchFalseCliente,// store procedure
      [id],
      function (err, results, fields) {
        if (err) throw err;
        res.json(results);// respuesta es id - frontEnd agrega id a la tabla
        // console.log(fields);
      }
    );

  } catch (error) {
    console.log(error);
    res.status(400).send('Hubo un Error');
  }
};

exports.undoupdateCliente = (req, res) => { // console.log(req.body);  
  try {
    const { id } = req.body; console.log(req.body.id);
    //  console.log(Object.values(id));
    connection.query(updateSearchTrueCliente,// store procedure
      [id],
      function (err, results, fields) {
        if (err) throw err;
        res.json(results);// respuesta es id - frontEnd agrega id a la tabla
        // console.log(fields);
      }
    );

  } catch (error) {
    console.log(error);
    res.status(400).send('Hubo un Error');
  }
};

exports.editrowmodelcliente = (req, res) => {
  // console.log(req.body);  
  // { '1': { nombre: { value: 'Emilias' } } }
  let { obtenerId, obtenerCampo, obtenerValue } = req.body;
  console.log(obtenerId, obtenerCampo, obtenerValue);
  // if (Object.keys(editRowsModel).length === 0) {
  //   return
  // } else {
    // const extraerIdYValue = Object.entries(editRowsModel);
    // if (extraerIdYValue.length === 0) {
    //   return
    // } else {
      //     const obtenerId = extraerIdYValue[0][0];
      //     console.log(obtenerId);
      
      //     const obtenerCampoArray = Object.keys(extraerIdYValue[0][1]);
      //     const obtenerCampo = obtenerCampoArray[0];
      //     console.log(obtenerCampo);
      
      //     const obtenerValue = extraerIdYValue[0][1][`${obtenerCampo}`].value;
      //     console.log(obtenerValue);
        try {
        connection.query(`UPDATE arc SET ${obtenerCampo} = ? where id = ?;`,

        
          [obtenerValue, obtenerId],
          function (err, results, fields) {
            if (err) throw err;
            res.json(results);// respuesta es id - frontEnd agrega id a la tabla
            // console.log(fields);
          }
        );
      } catch (error) {
        console.log(error)
      }


    


  // }
 
}




// INSERT INTO `hvgdevelopment`.`arc` (`id`, `nombre`) VALUES ('3', 'valenzuela');

// connection.query(
//   `INPUT * INTO arc (name) VALUES ('${req.body.nombre}')`,
//   function (err, results, fields) {
//     if (err) throw err;
//       res.json(results);
//     // console.log(fields);
//   }
// );

// `
//       SET @id = ?;
//       SET @nombre = ?;
//       SET @fechaValue = ?;
//       SET @service = ?;
//       SET @features = ?;
//       SET @complexity = ?;
//       SET @users = ?;
//       SET @total = ?;
//       SET @search = ?;
//       CALL arcAddOrEddit(@id, @nombre, @fechaValue, @service, @features, @complexity, @users, @total, @search);
//       `