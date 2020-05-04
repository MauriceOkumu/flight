import Pool from 'pg'

let { user, password, database, port, host } = process.env

const connectionString = `postgresql://${user}:${password}@${host}:${port}/${database}`
    
 const DB = () => {
    return new Pool.Pool({ 
        connectionString : process.env.NODE_ENV === 'production' ? 
        process.env.DATABASE_URL : connectionString
    })
 }

export default DB