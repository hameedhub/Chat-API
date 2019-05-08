import Model from '../Model/Model';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

// salt password
const salt = bcrypt.genSaltSync(5);

// instance of Model

class AuthController {
    static async signup(req, res) {
        try {
            const userDetails = {
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, salt),
                registeredtime: req.body.registeredTime
            }
            // query database
            const query = 'INSERT INTO users (firstname, lastname, email, password, registeredtime) VALUES ($1, $2, $3, $4, $5) RETURNING *';
            const values = Object.values(userDetails);
            const authUser = new Model();
            const response = await authUser.query(query, values);
            // email already exist
            if (response.code === '23505') {
                return res.status(404).json({
                    status: 404,
                    error: 'Email already exists',
                });
            }
            //  hash token
            const { password, ...userData } = response.rows[0];
            // token
            const token = jwt.sign({
                id: userData.id,
                firstname: userData.firstname,
                lastname: userData.lastname,
                email: userData.email
            }, 'chat');
            // Return success message
            return res.status(201).json({
                status: 201,
                token,
                data: userData
            });
        } catch (error) {
            return res.status(400).json({
                status: 400,
                error: 'Something went wrong'
            })
        }
    }
    static async login(req, res) {
        // query database
        try {
            const query = 'SELECT * FROM users WHERE email = $1';
            const authUser = new Model();
            const response = await authUser.query(query, [req.body.email]);
            const comparePassword = bcrypt.compareSync(req.body.password, response.rows[0].password);
            //  error wrong password
            if (comparePassword === false) {
                return res.status(401).json({
                    status: 401,
                    error: 'Incorrect password'
                })
            }
            // hash token
            const { password, ...userData } = response.rows[0];
            const token = jwt.sign({
                id: userData.id,
                firstname: userData.firstname,
                lastname: userData.lastname,
                email: userData.email
            }, 'chat');
            console.log(token);
            // Return details
            return res.status(200).json({
                status: 200,
                token,
                data: userData
            })
        } catch (error) {
            return res.status(401).json({
                status: 401,
                error: 'Something went wrong'
            })
        }
    }
}

export default AuthController;