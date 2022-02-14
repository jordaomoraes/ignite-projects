
const express = require('express')
const { v4: uuidv4 } = require("uuid")
var bodyParser = require('body-parser');

const app = express();
app.use(express.json());
app.use(bodyParser.json());


const custumers = [];

//middleware

function verifyIfExistsAccountCPF(req, res, next) {

  const  cpf = req.headers.cpf;
  const custumer = custumers.find(custumer => custumer.cpf === cpf);

  if (!custumer) {
    return res.status(400).json({ erro: "Custumer not found" })
  }

  req.custumer = custumer;

  return next();
}

// app.use(verifyIfExistsAccountCPF);


app.get("/", (request, response) => {

  return response.json({ message: "Oláaaaa" })

})

app.post("/account", (request, response) => {

  const { cpf, name } = request.body;


  const costumerAlreadExists = custumers.some((custumer) => custumer.cpf === cpf)

  if (costumerAlreadExists) {

    return response.status(400).json({ error: "Custumer alread exists" })
  }
  try {

     custumers.push({
      cpf,
      name,
      id: uuidv4(),
      statement: []
    })
    return response.status(201).send();
  } catch (error) {
    console.log(error)
  }
})

app.post("/teste", (req,res)=>{

  const teste = req.headers.cpf;

  console.log(teste)

  return res.status(201).send();

})


app.get("/statement", verifyIfExistsAccountCPF, (req, res) => {

  const { custumer } = req;
  return res.json(custumer.statement);
})

app.post("/deposit", verifyIfExistsAccountCPF, (req, res) => {

  const description = req.headers.description;
  const amount = req.headers.amount;

  const { custumer } = req;

  const statementOperation = {

    description,   
    amount,
    created_at: new Date(),
    type: "credit",
  }

  custumer.statement.push(statementOperation)

  return res.status(201).send();



})



app.listen(3333);