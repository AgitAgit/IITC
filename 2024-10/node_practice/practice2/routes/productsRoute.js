app.get('/api/products', (req, res) => {
    res.send(products);
});

app.get('/api/products/random', (req, res) => {
    const randomProduct = products[Math.floor(Math.random() * products.length)];
    res.send(randomProduct);
});

app.get('/api/products/:id', (req, res) => {
    const product = products.find(product => product.id === parseInt(req.params.id));
    if (product) res.send(product);
    else res.send("Product not found...");
});

app.post('/api/products/single', (req, res) => {
    const newProduct = req.body;
    products.push(newProduct);
    fs.writeFileSync('./db/products.json', JSON.stringify(products));
    res.send('Product added!');
});

app.post('/api/products/many', (req, res) => {
    const newProducts = req.body;
    products.push(...newProducts);
    fs.writeFileSync('./db/products.json', JSON.stringify(products));
    res.send('Products added!');
});

app.patch('/api/products/:id', (req, res) => {
    const newProduct = req.body;
    const id = parseInt(req.params.id);
    products.forEach(product => {
    if (product.id === id) {
        products[products.indexOf(product)] = newProduct;
        fs.writeFileSync('./db/products.json', JSON.stringify(products));
        res.send('Patch successful!');
        return;
    }
    });
    res.send('Patch failed!');
})

app.delete('/api/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    products = products.filter(product => product.id !== id);
    
    fs.writeFileSync('./db/products.json', JSON.stringify(products));
    res.send('Delete successful!');
});