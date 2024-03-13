let express = require('express'),
  path = require('path'),
  mongoose = require('mongoose'),
  cors = require('cors'),
  bodyParser = require('body-parser'),
  dataBaseConfig = require('./database/db');

// Connecting mongoDB
mongoose.Promise = global.Promise;
mongoose
  .connect(dataBaseConfig.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    () => {
      console.log('Database connected sucessfully ');
    },
    (error) => {
      console.log('Could not connected to database : ' + error);
    }
  );


const collaboratorRoute = require('./routes/collaborators.route');
const contractRoute = require('./routes/contracts.route');
const scheduleRoute = require('./routes/schedules.route');

const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(cors());

// RESTful API root
app.use('/api', collaboratorRoute);
app.use('/api', contractRoute);
app.use('/api', scheduleRoute);


// PORT
const port = process.env.PORT || '8080';

app.listen(port, () => {
  console.log('PORT Connected on: ' + port);
});

// Find 404 and hand over to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
