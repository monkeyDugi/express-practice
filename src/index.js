import express from 'express';
import cors from "cors";
import helmet from "helmet";
import dayjs from "dayjs";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const app = express();

app.use(cors());
app.use(helmet());

const today = new Date();
const todayTodayjs = dayjs(today).format("YYYY.MM.DD");
console.log({ today, todayTodayjs });

const password = "1234";
const hashedPassword = bcrypt.hashSync(password, 10);
console.log({hashedPassword});

const token = jwt.sign("1234", "secret_key");
console.log({token});

app.get("/", (req, res) => {
    res.send("Nodejs 강의 재미있는데?")
})

app.listen(8000, () => {
    console.log("서버가 시작되었습니다.")
})