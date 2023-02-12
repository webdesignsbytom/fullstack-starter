const express = require('express');
const app = express();

const cors = require('cors');
const morgan = require('morgan');

app.disable('x-powered-by');

// Add middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('*', (req, res) => {
    res.status(404).json({
      status: 'fail',
      data: {
        resource: 'Not found 404 error'
      }
    })
  })

// Tell express to use your routers here
const userRouter = require('./routes/users');

app.use('/users', userRouter);
app.use('/', userRouter);

module.exports = app
