import express from 'express';
import dotenv from 'dotenv';

import bodyParser from 'body-parser';
import cors from 'cors';

import publicRoutes from './src/routes/public';
import apiRoutes from './src/routes/api';
import adminRoutes from './src/routes/admin';
import assignemtRoutes from './src/routes/assignment';
import submitassignemtRoutes from './src/routes/submitted_assignments';

import apiMiddleware from './src/middleware/apiAuth';
import adminMiddleware from './src/middleware/adminAuth';
import errorHandler from './src/middleware/errorHandler';

dotenv.config();
require('./src/config/sequelize');

const app = express();
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

app.use(cors());
app.use(bodyParser.json());
app.use('/auth', publicRoutes);
app.use('/assignment', assignemtRoutes);
app.use('/submitassignment', submitassignemtRoutes);
app.use('/api', apiMiddleware, apiRoutes);
app.use('/api/admin', apiMiddleware, adminMiddleware, adminRoutes);
app.use(errorHandler);

module.exports = app;
