import Pool from 'pg'
const DB = () => {
   return  new Pool.Pool({
    user: process.env.user,
    host:  process.env.host,
    database:  process.env.database,
    password:  process.env.password,
    port:  process.env.port
})
}

export default DB