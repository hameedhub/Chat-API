import pool from './database';

class Model {
    constructor(){
        this.pool = pool;
    }
   async query(query, values){
        try {
         const request = await this.pool.query(query, values);
         return request;
        } catch(error) {
            return error;
        }
        
    }
}

export default Model;