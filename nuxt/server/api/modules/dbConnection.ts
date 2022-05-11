// const a = "aaa"
// const mysql = require("mysql2")
import mysql from "mysql2/promise" 

let connection
connect()

function log(str: string) {
  console.log("aaa")
  console.log(str)
}

// export function query(query: string) {
//   connection.query(query, (error, results, fields) => {
//     if (error) throw error;
//     console.log('The solution is: ', results)
//   })
// }

async function connect() {
  connection = await mysql.createConnection({
    host: "mysql",
    user: "root",
    password: "password",
    database: "kenly_db"
  })

  connection.connect()
  console.log("connect database")
}

export function end() {
  connection.end()  
}

export async function enter(name) {
  const [results, fields] = await connection.query(`INSERT INTO test (name) VALUES ("${name}")`)
  console.log(`enetr ${name}`)
    
  return results
}

export async function leave(name) {
  const [results, fields] = await connection.query(`UPDATE test SET attendance = FALSE WHERE NAME = "${name}" AND attendance = TRUE`)
  console.log(`leave ${name}`)

  return results
}

export async function attendees() {
  const [results, fields] = await connection.query("SELECT MIN(enter_time) AS enter_time, name FROM (SELECT enter_time, name FROM test WHERE attendance = TRUE) AS attend GROUP BY name")
  console.log("get today attendees")

  return results
}

export async function history(name) {
  const [results, fields] = await connection.query(`SELECT enter_time, leave_time FROM test WHERE name = "${name}"`)
  console.log(`get ${name}'s history`)

  return results
}