import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import dotenv from 'dotenv';

import api from './api';
import * as middlewares from './middleware/middlewares';
import MessageResponse from './interfaces/MessageResponse';

dotenv.config();

const app = express();

console.log('ENVIRONMENT: ', process.env.NODE_ENV);

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄',
  });
});

// The order of these matter, consider refactoring middleware
app.use('/api/v1', api);
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

export default app;
