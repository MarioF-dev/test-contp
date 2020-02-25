const express = require('express');

const app = express();


app.get('/', (req,res) =>{let ts = Date.now();
    let date_ob = new Date(ts);
    let date = date_ob.getDate();
    let year = date_ob.getFullYear();
    let minute = date_ob.getMinutes();
    let hour = date_ob.getHours();

    res.send(date +":"+ year+":"+ minute+":"+hour)
});

const port= process.env.port || 3000;

app.listen(port, () => {console.log('server running on port', port)});