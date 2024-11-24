import Interceptor from "../auth/Interceptorr";

export const SignUpApi = async (body) => {
  const { formData } = body;
  console.log("formData", formData);

  try {
    const result = await Interceptor({
      endpoint: "/users/register",
      method: "POST",
      body: formData,
    });
    console.log("Signup successful:", result);
    return result;
  } catch (error) {
    console.error("Signup error:", error);
  }
};

export const GetAllUser = async () => {
  try {
    const result = await Interceptor({
      endpoint: "users/user-list",
      method: "GET",
    });
    return result;
  } catch (error) {
    console.error("Userlist error:", error);
  }
};
