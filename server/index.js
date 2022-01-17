const express = require('express');
const cors = require('cors');
const { connect } = require('getstream');

require('dotenv').config({path: '../.env'});

const app = express();
const port = 4141;

const api_key = process.env.REACT_APP_API_KEY;
const api_secret = process.env.REACT_APP_API_SECRET;
const app_id = process.env.REACT_APP_APP_ID;

app.use(cors());
app.use(express.json());

const serverClient = connect(api_key, api_secret, app_id);

// console.log('SERVER CLIENT', serverClient);

app.get('/client', async (req, res) => {
  const serverClient = await connect(api_key, api_secret, app_id);
  // console.log('SERVER CLIENT', serverClient);

  try {
    res.status(200).json(serverClient);
  } catch(err){
    res.status(500).send("Error creating server client for feed", err)
  }
})

app.post('/token', async (req, res) => {
  // create token here with userID from the front end req.body
  // console.log('TOKEN REQ.BODY', req.body);
  
  const { user } = req.body;
  // const user = 'katy';
  

  const token = serverClient.createUserToken(user);

  try {
    res.status(200).send(token);
  } catch(err) {
    res.status(500).send("Error getting token", err);
  }
})

app.listen(port, () => {
  console.log(`Stream Feed App v2 listening on port ${port}`);
})