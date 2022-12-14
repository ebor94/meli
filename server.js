import express from 'express';
import spaceRoute from './routes/SpaceRoute'

const app = express();
const port = process.env.PORT || 5000;


//  headers and cors
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});


app.get("/space/", spaceRoute);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});