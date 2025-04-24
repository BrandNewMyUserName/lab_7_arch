const express = require('express');
const bodyParser = require('body-parser');

const PORT = 5000;
const app = express();

// Parsing all data to json format
app.use(bodyParser.urlencoded({extend: true}));
app.use(bodyParser.json());
// Watch all changes on the server
app.use(express.static('.'));

app.get('/', (req, res) => {
    res.status(200).json("Server is working")
})

//InstrumentRouter
const InstrumentRouter = require('./router/instrument.router');
app.use('/api/instrument', InstrumentRouter);

//UserRouter
const UserRouter = require('./router/user.router');
app.use('/api/user', UserRouter);

//PortfolioRouter
const PortfolioRouter = require('./router/portfolio.router');
app.use('/api/portfolio', PortfolioRouter);

//NewsRouter
const NewsRouter = require('./router/news.router');
app.use('/api/news', NewsRouter);

//PurchasedAssetRouter
const PurchasedAssetRouter = require('./router/purchased_asset.router');
app.use('/api/purchased_asset', PurchasedAssetRouter);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));