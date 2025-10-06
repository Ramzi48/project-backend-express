import express from "express"

const app = express();
app.use(express.json());

//Dummy data
let users = [
    { id: 1, name:"bane"},
    { id: 2, name:"ramzi"},
];

//method get
app.get("/users", (req,res) => {
    res.json(users)
});

app.get("/tes", (req,res) => {
    res.json({msg:"Welcome bray...",code: 200})
});

//method post
app.post("/users",(req,res) => {
    const{name} = req.body;
    const newUser = { id: users.length + 1, name: name};
    users.push(newUser)
    res.status(201).json(newUser);
});

app.listen(5001, () => console.log("Server running on http://localhost:5001"));