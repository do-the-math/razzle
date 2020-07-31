const express = require('express');
const favicon = require('express-favicon');
const path = require('path');

const port = process.env.PORT || 3000;
const app = express();

const PRORJECT_ROOT_DIR = __dirname + '/..';

app.use(favicon(PRORJECT_ROOT_DIR + '/build/favicon.ico'));
// the PRORJECT_ROOT_DIR is the current directory from where the script is running
app.use(express.static(PRORJECT_ROOT_DIR));
app.use(express.static(path.join(PRORJECT_ROOT_DIR, 'build')));
app.use(express.static('build'));

app.get('/ping', function (req, res) {
  return res.send('pong');
});

app.get('*', function (req, res) {
  res.sendFile(path.join(PRORJECT_ROOT_DIR, 'build', 'index.html'));
});
app.listen(port, () => {
  console.log(`app started listening on ${port}`);
});
