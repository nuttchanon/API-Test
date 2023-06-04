import express from 'express';
import {generateFibonacciSequence,generateFibonacciSum} from './fibonacci.js';

const app = express();

app.get('/api/v1/fibonacci/:num', (req, res) => {
  const num = parseInt(req.params.num);
  if(!Number.isInteger(num)){
    return res.status(400).json({message:"Num must be Integer!"});
  }
  if(!num){
    return res.status(400).json({message:"Num not found!"});
  }
  if(num<=0||num>=100){
    return res.status(400).json({message:"Num must be between 1-100!"});
  }
  const sequence = generateFibonacciSequence(req.params.num);
  const sum = generateFibonacciSum(req.params.num,sequence);
  //const sum =generateFibonacciSum(num);
  return res.status(200).json({ memberCount:num,sequence:sequence,total:sum });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/api/v1/fibonacci/`);
});
