import {createPool} from 'mysql2/promise'

const pool = createPool({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '',
    database: paginaWeb
});

export default pool;