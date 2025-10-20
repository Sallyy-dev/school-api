function errorHandler(err, req, res, next) {
    const statusCode = err.statusCode || 500; // default to 500
    const message = err.message || "Something went wrong";
    console.error("Error:", message);

    if (err instanceof multer.MulterError) {
        statusCode = 400;
        message = err.message;
      }
    
      // Custom Validation Error
      else if (err.name === 'ValidationError') {
        statusCode = 400;
        message = err.message;
      }
    
      // JWT Authentication Error
      else if (err.name === 'UnauthorizedError' || err.name === 'JsonWebTokenError') {
        statusCode = 401;
        message = 'Invalid or missing token';
      }
    
      // Custom thrown error (like from your middleware)
      else if (err.statusCode && err.message) {
        statusCode = err.statusCode;
        message = err.message;
      }
    
      res.status(statusCode).json({
        success: false,
        message:"not success"
      });
    };
   module.exports =errorHandler ;
