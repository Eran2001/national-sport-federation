/**
 * Send a standardized API response
 * @param {Object} res - Express response object
 * @param {String} code - Response code like "OK", "ERROR", etc.
 * @param {String} message - Message string
 * @param {any} data - Actual response data (object, array, or single value)
 * @param {Number} status - HTTP status code (default: 200)
 */
export const sendResponse = (
  res,
  code = "OK",
  message = "success",
  data = null,
  status = 200
) => {
  let formattedData;

  if (Array.isArray(data)) {
    formattedData = { data };
  } else if (data !== null && typeof data === "object") {
    formattedData = { data };
  } else {
    formattedData = { data: data };
  }

  return res.status(status).json({
    code,
    message,
    ...formattedData,
  });
};

/**
 * Send standardized error response
 * @param {Object} res - Express response object
 * @param {String} message - Error message
 * @param {any} error - Error object (optional)
 * @param {Number} status - HTTP status code (default: 500)
 */
export const sendError = (
  res,
  message = "Something went wrong",
  error = null,
  status = 500
) => {
  return res.status(status).json({
    code: "ERROR",
    message,
    error: error ? error.message || error : null,
    data: null,
  });
};
