import { Router } from 'express';
const router = Router();

import AuthController from '../Controller/authController';

router.get('/signup', AuthController.signup);