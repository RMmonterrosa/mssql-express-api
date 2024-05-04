import {getConne} from "../database/connection.js" // Los dos puntos son para decir segundo nivel
import sql from 'mssql' // Traer el tipo de variable para sql para los inputs

export const getEjemplo = async (req, res) => { // Funcion asincrona

    const pool = await getConne()
    const result = await pool.request().query('select * from ejemplos')

    res.json(result.recordset) // Recordset es para mostrar el json

}

export const gidEjemplo = async (req, res) => {

    const pool = await getConne()
    const result = await pool.request()
    .input('id', sql.Int, req.params.id) // Recordar para que se usaba param   id, tipo de dato con modulo, req.params
    .query('select * from ejemplos where id = @id')
    res.json(result.recordset)
}

export const postEjemplo = async (req, res) => {

    const pool = await getConne()
    const result = await pool.request()
    .input('nombre', sql.VarChar, req.body.nombre) // Agregar inputs para la cantidad de columnas existentes y el tipo de var que es 
    .input('apellido', sql.VarChar, req.body.apellido)
    .input('edad', sql.Int, req.body.edad)
    .input('estatura', sql.Decimal(18,2), req.body.estatura)
    .query('insert into ejemplos (nombre, apellido, edad, estatura) values (@nombre, @apellido, @edad, @estatura)') // La @ Significa que esos valores seran reemplazados

    
    res.send('Para mientras post')

}

export const pidEjemplo = async (req, res) => {

    
    const pool = await getConne()
    const result = await pool.request()
    .input('id', sql.Int, req.params.id)
    .input('nombre', sql.VarChar, req.body.nombre) // Agregar inputs para la cantidad de columnas existentes y el tipo de var que es 
    .input('apellido', sql.VarChar, req.body.apellido)
    .input('edad', sql.Int, req.body.edad)
    .input('estatura', sql.Decimal(18,2), req.body.estatura)
    .query('update ejemplos set nombre = @nombre, apellido = @apellido, edad = @edad, estatura = @estatura where id = @id') // La @ Significa que esos valores seran reemplazados
    
    
    res.send('Para mientras post especifico')

}

export const deleteEjemplo = async (req, res) => {

    const pool = await getConne()
    const result = await pool.request()
    .input('id', sql.Int, req.params.id) // Recordar para que se usaba param 
    .query('delete from ejemplos where id = @id')
    res.send('Para mientras delete especifico')

}