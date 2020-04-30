import Pool from 'pg'
let { user, password, database, port, host } = process.env

const DB = () => {
     return  new Pool.Pool({
       user, password, database, port, host
   })
 }

export default DB