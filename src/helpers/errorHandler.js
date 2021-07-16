module.exports = class ApplicationError extends Error {
    /**
     * @param  {string} message
     * @param  {integer} status
     */
    constructor(message, status) {
      super(message);
  
      this.name = this.constructor.name;
  
      Error.captureStackTrace(this, this.constructor);
  
      this.status = status || 500;
    }
  };
  