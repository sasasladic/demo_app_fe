import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../../../services/api";
import AuthContext from "../../../store/auth-context";
import RegistrationForm from "../components/RegistrationForm";

const RegistrationPage = () => {
  const history = useHistory();
  const authCtx = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);

  function registrationHandler(data) {
    const sendPostRequest = async (data) => {
      try {
        setIsLoading(true);
        const response = await api()("/register", {
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

  return <RegistrationForm onSubmitHandler={registrationHandler} />;
};

export default RegistrationPage;
