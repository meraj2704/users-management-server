const express = require('express')
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json())

const users = [
  {id:1, name:'Rahat', gmail:'rahat@gmail.com'},
  {id:2, name:'Kaes', gmail:'Kaes@gmail.com'},
  {id:3, name:'Tanjid', gmail:'Tanjid@gmail.com'},
  {id:4, name:'noman', gmail:'noman@gmail.com'}
]

app.get('/', (req,res) =>{
  res.send('users Management server is running');
})

app.get('/users', (req,res)=>{
  res.send(users);
})

app.post('/users', (req,res) =>{
  console.log('Api is hitting');
  console.log(req.body);
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.send(newUser);
})

app.listen(port, ()=>{
  console.log(`Srver is running on Port : ${port}`);
})