// Middleware factory
const reqPulse = () => {
  // Format timestamp
  const getTimestamp = () => {
    const now = new Date();

    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  };

  // Middleware function
  return (req, res, next) => {
    const timestamp = getTimestamp();
    const method = req.method;
    const path = req.originalUrl || req.url;

    console.log(`[${timestamp}] ${method} ${path}`);

    next();
  };
};

module.exports = reqPulse;
