const express = require('express');
const path = require('path');
const app = express();
const port = 3000;



app.listen(port, () => {
    console.log(`Scoring app listening on port http://localhost:${port}`);
});