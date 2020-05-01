import Pool from 'pg'
import params from '../../varies.js'
// let { user, password, database, port, host } = process.env

const DB = () => new Pool.Pool({ ...params })
    
 

export default DB