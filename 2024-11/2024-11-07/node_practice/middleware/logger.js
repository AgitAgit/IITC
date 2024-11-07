export const logger = async function(req, res, next){
    console.log(`The logger says:\nrequest path:${req.path}`);
    next();
}