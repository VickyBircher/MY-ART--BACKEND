import express from 'express'
import config from './config'
import userRoutes from './routes/userRoutes'
import publicationRoutes from './routes/publicationRoutes'
import commentRoutes from './routes/commentsRoutes'
import likeOrDislikeRoutes from './routes/likeOrDislikeRoutes'

const app = express();

app.set('port', config.port);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://192.168.0.56:4000');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
  });

app.use(userRoutes);
app.use(publicationRoutes);
app.use(commentRoutes);
app.use(likeOrDislikeRoutes);

export default app