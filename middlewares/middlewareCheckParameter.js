module.exports = function(parameter){
    return function(req, res, next){
        if(req.query[parameter] === undefined || req.query[parameter].trim() === ""){
            //respond with error
            return res.status(400).json({
                error: "Missing parameter: " + parameter
            });
        }
        next();
    }
}