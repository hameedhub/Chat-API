import { Router } from 'express';
import AuthController from '../Controller/authController';

router.get('/signup', AuthController.signup);