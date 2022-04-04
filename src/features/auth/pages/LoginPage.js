import { useContext, useState } from "react";
import LoginForm from "../components/LoginForm";
import AuthContext from "../../../store/auth-context";
import api from "../../../services/api";
import { useHistory } from "react-router-dom";

const LoginPage = () => {
  const history = useHistory();
  const authCtx = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);

  function loginHandler(data) {
    const sendPostRequest = async (data) => {
      try {
        setIsLoading(true);
        const response = await api()("/login", {
          method: "post",
          data: data,
        });

        if (response.data.success === true) {
          authCtx.login(response.data.data.token);
          history.replace("/");
        }
      } catch (error) {
        // Handle Error Here
        console.log(error);
      }
      setIsLoading(false);
    };

    sendPostRequest(data);
  }

  if(isLoading) {
    return <div>Loading...</div>;
  }

  return <LoginForm onSubmitHandler={loginHandler} />;
};

export default LoginPage;
