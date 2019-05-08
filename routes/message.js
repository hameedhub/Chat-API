import { Router } from 'express';
import MessageController from '../Controller/messageController';
import Authentication from '../helper/authentication';

router.post('/message/:email', Authentication.Token, MessageController.SendMessage);