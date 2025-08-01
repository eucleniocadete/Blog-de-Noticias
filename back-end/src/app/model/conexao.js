import mysql from "mysql"

const conexao = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "db_blog"
})

export default conexao
