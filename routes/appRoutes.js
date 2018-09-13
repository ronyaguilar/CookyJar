module.exports = (app) => {
  app.get('/:filter/:search', (req, res) => {
    res.send('This will be your result screen');
  });

  app.get('/recipe/:title', (req, res) => {
    res.send('This will be your recipe screen');
  });
};
