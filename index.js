const express = require('express');
var cors = require('cors')
require('dotenv').config();
const connection = require('./mysql');
const app = express();

const PORT = process.env.PORT || 4001;
app.use(cors())
// para usar json, application/json
app.use(express.json({ extended: true }));

// Routes
app.use('/api/clientes', require('./routes/arcclientes'));

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// })

// app.use('/api/todoslosclientes', require('./routes/arcclientes'));

// app.get('/arc',  (req, res) => {
//   connection.query(
//     'SELECT * FROM arc ORDER BY id ASC',
//     function (err, results, fields) {
//       if (err) throw err;
//       res.json(results);
//       // console.log(fields);
//     }
//   );  
// })

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})