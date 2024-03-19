import mysql from "mysql";
const connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	database: "crm_ale",
});

export default connection;