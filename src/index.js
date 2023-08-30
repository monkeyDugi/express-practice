import express from 'express';
import cors from "cors";
import helmet from "helmet";
import dayjs from "dayjs";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const app = express();

let users = [
    {
        id: 1,
        name: "dugi",
        age: 31,
    }
];

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({extended: true, limit: "700mb"}))

app.get("/users", (req, res) => {
    res.status(200).json({users});
});
app.post("/users", (req, res) => {
    const {name, age} = req.body;

    users.push({
        id: new Date().getTime(),
        name,
        age,
    });

    res.status(201).json({users});
});
app.patch("/users/:id", (req, res) => {
    const {id} = req.params;
    const {name, age} = req.body;

    const targetUserIdx = users.findIndex((user) => user.id === Number(id));

    users[targetUserIdx] = {
        id: users[targetUserIdx].id,
        name: name ?? users[targetUserIdx].name,
        age: age ?? users[targetUserIdx].age,
    }

    res.status(204).json({});
});
app.delete("/users/:id", (req, res) => {
    const {id} = req.params;

    const deleteUsers = users.filter((user) => user.id !== Number(id));
    users = deleteUsers;

    res.status(204).json({});
});

app.get("/", (req, res) => {
    res.send("Nodejs 강의 재미있는데?")
})

app.listen(8000, () => {
    console.log("서버가 시작되었습니다.")
})