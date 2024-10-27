import mysql from 'mysql2';

import dotenv from 'dotenv'
dotenv.config()

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise()  // so we can use async/await

export async function getGraffitis() {
    const [rows] = await pool.query("select * from graffitis")
    return rows
}

export async function getGraffiti(id) {
    const [rows] = await pool.query(`
        select *
        from graffitis
        where id = ?`, [id])
    return rows[0]
}

export async function createGraffiti(title, tag, font) {
    const [result] = await pool.query(`
        insert into graffitis (title, tag, font)
        values (?, ?, ?)
        `, [title, tag, font])
    const id = result.insertId
    return getGraffiti(id)
}

// const graffitis = await getGraffitis()
// console.log(graffitis)
// const graffiti = await getGraffiti(1)
// console.log(graffiti)
// const createresult = await createGraffiti('test', 'test', 'default')
// console.log(createresult)