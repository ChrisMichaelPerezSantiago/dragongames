const mcache = require('memory-cache');

const notFound = (req , res , next) =>{
  res.status(404);
  const error = new Error(`🔍 - Not Found - ${req.originalUrl}`);
  next(error);
}

const errorHandler = (err , req , res , next) =>{
  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack
  });
}

const cache = (duration) =>{
  return (req , res , next) =>{
    let key = '__express__' + req.originalUrl || req.url;
    let cachedBody = mcache.get(key);
    if(cachedBody){
      res.send(cachedBody);
      return;
    }else{
      res.sendResponse = res.send;
      res.send = (body) =>{
        mcache.put(key , body , duration * 1000);
        res.sendResponse(body);
      }
      next();
    }
  }
}

module.exports = {
  notFound,
  errorHandler,
  cache
}
