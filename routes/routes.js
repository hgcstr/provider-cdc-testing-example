// import other routes
const userRoutes = require('./users');

const appRouter = (app, fs) => {

    // default route
    app.get('/', (req, res) => {
        res.send(':::::::::::::::WELCOME TO THE API-SERVER EXAMPLE:::::::::::::::');
    });

    // // other routes
    userRoutes(app, fs);

};

module.exports = appRouter;