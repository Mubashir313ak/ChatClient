import axiosInstance from "./axios";

/**
 * Universal request function using axios instance.
 * @param {string} endpoint - The API endpoint (e.g., "/signup").
 * @param {string} method - HTTP method (GET, POST, PUT, DELETE, etc.).
 * @param {Object} body - Request body for POST/PUT requests.
 * @param {Object} headers - Additional headers if needed.
 * @returns {Promise} - Returns a promise with the response or error.
 */
const Interceptor = async ({
  endpoint,
  method = "GET",
  body = {},
  headers = {},
}) => {
  try {
    const config = {
      url: endpoint,
      method,
      headers,
      ...(method !== "GET" && { data: body }), // Only attach body for non-GET requests
    };

    const response = await axiosInstance(config);
    return response.data; // Assuming the API returns useful data in `data`
  } catch (error) {
    // Extract meaningful error message
    const message =
      error.response?.data?.error || "An unexpected error occurred";
    console.error("API request error:", message);
    throw new Error(message); // Throw only the message
  }
};

export default Interceptor;
