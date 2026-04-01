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

  // Terminal color codes
  const colors = {
    reset: '\x1b[0m',
    gray: '\x1b[90m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    red: '\x1b[31m',
    cyan: '\x1b[36m',
  };

  const getStatusColor = status => {
    if (status >= 500) return colors.red;
    if (status >= 400) return colors.yellow;
    if (status >= 300) return colors.cyan;
    if (status >= 200) return colors.green;
    return colors.reset;
  };

  // Middleware function
  return (req, res, next) => {
    const startTime = Date.now();

    res.on('finish', () => {
      const responseTime = Date.now() - startTime;

      const timestamp = getTimestamp();
      const method = req.method;
      const path = req.originalUrl || req.url;
      const status = res.statusCode;

      const statusColor = getStatusColor(status);
      const resetColor = colors.reset;

      console.log(
        `${colors.gray}[${timestamp}]${resetColor} ${method} ${path} ${statusColor}${status}${resetColor} - ${responseTime}ms`,
      );
    });

    next();
  };
};

module.exports = reqPulse;
