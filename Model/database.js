// connection to the database
import { Pool } from 'pg';

const connectionString = 'postgres://amgvgfhr:sPbJ1gxUvjKBUfGIbhm9klj5ScqA6os7@isilo.db.elephantsql.com:5432/amgvgfhr';

const pool = new Pool ({
    connectionString : connectionString
});


export default pool;