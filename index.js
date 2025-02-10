const express = require('express');
const app = express();
const port = 3000

app.get('/', (req, res) => {
    const a = 1;
    const b = 2;
    const c = a + b;
    console.log(c);
    return res.send('Hello')
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));