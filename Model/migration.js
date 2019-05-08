class migration {
    static createUser (){
        const createQuery = () => {
            `  
            CREATE TABLE IF NOT EXISTS
             users(
              id SERIAL PRIMARY KEY,
                email VARCHAR(128) UNIQUE NOT NULL,
                firstname VARCHAR(128) NOT NULL,
                lastname VARCHAR(128) NOT NULL,
                password VARCHAR(128) NOT NULL,
                registeredtime VARCHAR(128) NOT NULL
            );
            `;
        }
    }
    static createMessages (){
        const createMessageQuery = () =>{
            `  
            CREATE TABLE IF NOT EXISTS
             messages(
              id SERIAL PRIMARY KEY,
                email VARCHAR(128) UNIQUE NOT NULL,
                message VARCHAR(128) NOT NULL,
                time VARCHAR(128) NOT NULL
            );
            `;
        }
    }
}

export default migration;