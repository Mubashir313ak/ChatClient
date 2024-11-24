import Interceptor from "../auth/Interceptorr";

export const fetchMessages = async (userId, chatWith) => {
  try {
    const response = await Interceptor({
      endpoint: `/chat/messages?userId=${userId}&chatWith=${chatWith}`,
      method: "GET",
    });
    return response; // List of messages
  } catch (error) {
    console.error("Error fetching messages:", error.message);
  }
};

export const sendmesages = async (body) => {
  try {
    const data = await Interceptor({
      endpoint: "/chat/send", // Remove the extra `/` in the endpoint
      method: "POST",
      body, // Ensure the body parameter is passed correctly
    });

    return data; // Optionally return data if you need it
  } catch (err) {
    alert(err.message);
    throw err; // Rethrow the error for handling in the component
  }
};
