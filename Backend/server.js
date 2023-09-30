const express=require("express");
const mysql=require("mysql");
const cors =require('cors');


const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"signup"

})

app.post('/signup', (req, res) => {
    const sql = "INSERT INTO login (name, email, password) VALUES (?, ?, ?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.password
    ];

    db.query(sql, values, (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json("Error"); // Send an error response
        }
        return res.json(data);
    });
});
app.post('/login', (req, res) => {
    // SQL query for checking user credentials in the 'login' table
    const sql = "SELECT * FROM login WHERE email = ? AND password = ?";
    db.query(sql, [req.body.email, req.body.password], (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json("Error"); // Send an error response
        }
        if (data.length > 0) {
            return res.json("Success"); // Send a success response if a matching user is found
        } else {
            return res.json("Failed"); // Send a failure response if no matching user is found
        }
    });
});



app.listen(8081, ()=>{
    console.log("listening");
})