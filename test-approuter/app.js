const approuter = require('@sap/approuter');
const { jwtDecode } = require('jwt-decode');
const ar = approuter();

ar.beforeRequestHandler.use('/getToken', function (req, res, next) {
    const decodedToken = jwtDecode(req.user.token.accessToken);
    res.end(JSON.stringify(decodedToken));
});
ar.start();