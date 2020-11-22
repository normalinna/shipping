const express = require('express');

const PORT = process.env.PORT || 5000;

const app = express();

app.use('/api/v1/', require('./routes/routes'));

app.use(express.json({extended: true}));

app.listen(PORT, () => {`App has been started on port ${PORT}`});