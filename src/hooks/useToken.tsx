import { useAuth } from "../components/AuthProvider";
import { authClient } from "../utils/auth-client";

export const useToken = () => {
  const { token, setToken } = useAuth();

  const getToken = async () => {
    if(token !== "") return token;
    const { data: session } = await authClient.getSession();
    setToken(session?.session.token as string);
    return session;
  };

  return {
    getToken
  };
};
