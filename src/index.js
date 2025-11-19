import express from "express"

const app = express();
app.use(express.json());

//Dummy data
const dataDummy = [
    { id: 1, name:"bane"},
    { id: 2, name:"ramzi"},
];

//method get
app.get("/users", (req,res) => {
    res.json(dataDummy)
});

// app.get("/tes", (req,res) => {
//     res.json({msg:"Welcome bray...",code: 200})
// });

//method post
app.post("/users",(req,res) => {
    const{name} = req.body;
    const newUser = { id: dataDummy.length + 1, name: name};
    dataDummy.push(newUser)
    res.status(201).json(newUser);
});

//get by id
app.get("/users/:id", (req,res) =>{
    const { id } = req.params;
    const userID = dataDummy.find((item) => item.id == id);
    console.log(userID)
    if (userID){
        res.status(200).json({msg:"success",
        data:userID})
    }
    if (!userID){
        res.status(404).json({msg:"user ga ada bos"})
    }
})

app.listen(5001, () => console.log("Server running on http://localhost:5001"));