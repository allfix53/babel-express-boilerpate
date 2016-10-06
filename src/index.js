import http from 'http';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import debug from 'debug';
import connectDb from './config/datasource';
import models from './models';

const error = debug('app:error');
const log = debug('app:log');

const app = express();
app.server = http.createServer(app);

app.use(cors());
app.use(bodyParser.urlencoded({
  extended: true
}));
// connect db
connectDb(
  (db) => {
    models(db.sequelize, db.Sequelize, (model) => {
      model;
      db.sequelize
        .sync({ force: true })
        .then(() => {
          log('Database scheme synced');
        }, (err) => {
          log('An error occurred while creating the table:', err);
        });

      app.server.listen(process.env.PORT || 8080);
      log(`Started on port ${app.server.address().port}`);
    });
  });

export default app;
