const responseMessages = require('./responseMessages');

exports.success = function (req, res, message, status) {
    res.status(status).send({
        status:responseMessages(status),
        body: message
    });
}

exports.error = function (req, res, status, details){
    console.error('[response error]' + details);
    res.status(status).send({
        error: responseMessages(status),
        body: ''
    });
}