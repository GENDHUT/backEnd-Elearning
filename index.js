// server.js
import express, { response } from 'express';
import { AccessToken } from 'livekit-server-sdk';
import mysql from 'mysql';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import bcrypt, { hash } from 'bcrypt';
import cookieParser from 'cookie-parser';
import { Sequelize } from "sequelize";
import dotenv from 'dotenv';

// Use App
// const sequelize = require('./config/database');
dotenv.config({ path: 'development.env' });
const { verify } = jwt;
const salt = 10;
const app = express();
const port = 3000;
app.use(express.json());
app.use(cors({
  origin: ["http://localhost:#port"],
  methods: ["POST","GET"],
  credentials:true
}));
app.use(cookieParser());

// Connect DB
// sequelize.sync()
//   .then(() => {
//     console.log('Tabel disinkronkan');
//   })
//   .catch((err) => {
//     console.error('Terjadi kesalahan saat menyinkronkan tabel:', err);
//   });

const db = mysql.createConnection({
    host: "localhost",
    port: "3307",
    user: "root",
    password: "",
    database: "elearning_db"
})

app.post('/register', (req,res)=>{
  const sql = "INSERT INTO siswa (`NIS`,`nisn`,`Nama`,`Level`,`Kelas`,`Jurusan`,`Username`,`Password`,`Foto`,`Agama`) VALUES (?)";
  bcrypt.hash(req.body.Password.toString(),salt,(err, hash)=>{
    console.log(res.body)
    if(err) return res.json({Error: "Error for hassing password"});

    const values = [
      req.body.NIS,
      req.body.nisn,
      req.body.Nama,
      req.body.Level,
      req.body.Kelas, 
      req.body.Jurusan,
      req.body.Username,
      hash,
      req.body.Foto,   
      req.body.Agama,
    ]

    db.query(sql, [values], (err,result)=>{
      if (err) return res.json({Error: "Error inserting data in server"});
      return res.json({
        Status: "success",
        data:{ 
        username : req.body.Username,
        password : req.body.Password 
      }
        })
    })
  })
})

const verifyUser = (req,res,next) =>{
  const token = req.cookies.token;
  if(!token){
    return res.json({Error: "you are not authenticated"});
  }else {
    jwt.verify(token,"jwt-secret-key",(err,decoded)=>{
      if (err){
        return res.json({Error: "Your token was wrong"})
      }else{
        req.name = decoded.name;
        next();
      }
    })
  }
}

app.get('/',verifyUser,(req,res)=>{
  return req.json({Status : "Success",name: req.name});
})

app.post('/login',(req,res) =>{
  const sql = 'SELECT * FROM siswa WHERE Username = ?';
  db.query(sql,[req.body.Username], (err,data) =>{
    if (err) return res.json({Error: "Error in server"});
    if (data.length > 0) {
      bcrypt.compare(req.body.Password.toString(),data[0].Password,(err,response)=>{
        if (err) return res.json({Error: "Error Password compare"});
        if (response) {
          const name = data[0].name;
          const token = jwt.sign({name},"jwt-secret-key",{expiresIn: '1d'});
          res.cookie('token',token);
          return res.json({ 
            Status: "success",
            data : {
                id: data[0].id,
                NIS: data[0].NIS,
                nisn: data[0].nisn,      
                Nama: data[0].Nama,
                Level: data[0].Level,
                Kelas: data[0].Kelas, 
                Jurusan: data[0].Jurusan,
                Foto: data[0].Foto,
                Agama: data[0].Agama,   
                no_hp: data[0].no_hp,
            }
          })
        }else {
          return res.json({Error: "Error Password not matched"})
        }
      })
    }else{
      return res.json({Error: "Error no username existed"})
    }
  })
})

app.get('/logout',(req,res)=>{
  res.clearCookie('token');
  return res.json({Status: "Success"})
})

// LiveKit
const createToken = (roomName,participantName) => {
const apiKey = process.env.LK_API_KEY;
const apiSecret = process.env.LK_API_SECRET;

  const at = new AccessToken( apiKey, apiSecret, {
    identity: participantName,
  });
  at.addGrant({ roomJoin: true, room: roomName });

  return at.toJwt();
}

app.post('/getToken', (req, res) => {
  console.log(res.body)
  const {roomName,participantName}=req.body
  res.json({
    success:true,
    message:"Permintaan Success,Silahkan Gunakan Token Yang Telah Kami berikan",
    data:{token:createToken(roomName,participantName)}
  })
});


// Listening Port
app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})

