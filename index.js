// server.js
import express from 'express';
import { AccessToken } from 'livekit-server-sdk';

// Use Express
const app = express();
const port = 3000;
app.use(express.json());

// LiveKit
const createToken = (roomName,participantName) => {

  const at = new AccessToken('APINRrXAe2mZ7Z2', 'u2zkmCmBIHdGdSecnsMqowauMtmvDBJvqiu23DZdI8D', {
    identity: participantName,
  });
  at.addGrant({ roomJoin: true, room: roomName });

  return at.toJwt();
}

app.post('/getToken', (req, res) => {
console.log(req.body)
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

