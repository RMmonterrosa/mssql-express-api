import conne from 'mssql'

const dbConnec = 'Server=localhost,1433;Database=ejemplo;User Id=sa;Password=Sonic2002;Encrypt=false'


export const getConne = async () => {
    try {

        const pool = await conne.connect(dbConnec) // Un pool es una conexion que se puede reutilizar

        // const result = await pool.request().query("select getdate()") // Ver si hace conexión
        // console.log(result)

        return pool
    } catch (error) {
        console.log(error)
    }
}

