import mysql from "mysql"

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database : 'deneme'
})

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (error,result,fields) {
    if (error) throw error;
    console.log('The solution is: ',result[0].solution)
    console.log('Connected')
});
connection.end();

export default connection