import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
// Path
import { join } from 'path';
import * as url from 'url';
// Import routers
import authRouter from './routes/auth.js';
import userRouter from './routes/users.js';

const app = express();
app.disable('x-powered-by');

// Add middleware
app.use(
  cors({ 
    origin: "*"
  })
);

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set the port and URl
const PORT = process.env.PORT || 4000;
const HTTP_URL = process.env.HTTP_URL || 'http://localhost:4000'

// Create path to HTML
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

// Start of actions
app.use('/', authRouter);
app.use('/colour-palette', paletteRouter);
app.use('/complaints', complaintRouter);
app.use('/components', componentRouter);
app.use('/contacts', contactRouter);
app.use('/designs', designRouter);
app.use('/events', eventRouter);
app.use('/messages', messageRouter);
app.use('/notifications', notificationRouter);
app.use('/pages', pageRouter);
app.use('/projects', projectRouter);
app.use('/reviews', reviewRouter);
app.use('/users', userRouter);

// Server interface page
app.get('/', (req, res) => {
  res.sendFile('index.html', {
    root: join(__dirname, '..', 'views'),
  });
});

// For all unknown requests 404 page returns
app.all('*', (req, res) => {
  res.status(404);
  if (req.accepts('html')) {
    res.sendFile(join(__dirname, '..', 'views', '404.html'));
  } else if (req.accepts('json')) {
    res.json({ message: '404 Not Found' });
  } else {
    res.type('txt').send('404 Not Found');
  }
});

app.use((error, req, res, next) => {
  console.error(error)

  if (error.code === 'P2025') {
    return sendDataResponse(res, 404, 'Record does not exist')
  }

  return sendDataResponse(res, 500)
})

// Start our API server
app.listen(PORT, () => {
  console.log(
    `\nServer is running on ${HTTP_URL}${PORT} \n This no longer consumes souls\n`
  );
});
