import Model from '../Model/Model';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const salt = bcrypt.genSaltSync(10);
 

const authUser = new Model()

class AuthController {
    static signup(req, res){
        const userData = {
            firstname : req.firstname,
            lastname : req.lastname,
            email: req.email,
            password: bcrypt.hashSync(req.password, salt),
            registeredTIme : req.registeredTIme
        }
        // query database
        const query = 'INSERT INTO users (firstname, lastname, email, password, registeredtime) VALUES ($1, $2, $3, $4, $5) RETURNING *';
        const values = Object.values(userData);
        const response = authUser.query(query, values);
        // email already exist
        if (response.code === '23505') {
            return res.status(404).json({
              status: 404,
              error: 'Email already exists',
            });
          }
        //  hash token
        const token = jwt.sign({
            email: response.email,
            firstname: response.firstname,
            lastname: response.lastname    
        })
        // Return success message
        return res.status(201).json({
            status: 201,
            token,
            data: response
        });
    }
    static signin (req, res){
        const loginDetails = {
            email: req.email,
            password: req.password
        }
        // query database
        const query = 'SELECT FROM users WHERE email = $1 AND password = $2 RETURING *';
        const values = Object.values(loginDetails);
        const response = authUser.query(query, values);
        // hash token
        const token = jwt.sign({
            email: response.email,
            firstname: response.firstname,
            lastname: response.lastname  
        })
        // Return details
    return res.status(200).json({
        status : 200,
        token : token,
        data : response
        
    })

    }
}

export default AuthController;