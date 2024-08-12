const errorHandler = (err, req, res, next) => {
    // If headers have already been sent, delegate to default error handler
    if (res.headersSent) {
      return next(err);
    }
  
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
  
    // Send a single JSON response
    res.json({
      message: err.message,
      stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    });
  };
  
  module.exports = { errorHandler };
  