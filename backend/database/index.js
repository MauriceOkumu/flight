import Pool from 'pg'

const DB = () => {
    return  new Pool.Pool({
        user: 'maury',
        password: 'root',
        database: 'flight',
        port: '5432',
        host: 'db'
 })
 }

export default DB