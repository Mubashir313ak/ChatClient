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
      endpoint: "/chat/send",
      method: "POST",
      body,
    });

    return data;
  } catch (err) {
    alert(err.message);
    throw err;
  }
};
