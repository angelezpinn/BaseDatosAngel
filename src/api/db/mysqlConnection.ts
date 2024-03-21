import mysql from "mysql";
const connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	database: "alecrmaer",
});

export default connection;