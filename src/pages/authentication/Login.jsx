import { useRef, useState } from "react";
import { Button, Loading, Alert, FormGroup } from "../../components";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/actions";
import loginImg from "../../assets/images/login.avif";

export const Login = () => {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const formRef = useRef();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onChangeFormHandler = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!formState.email || !formState.password) {
      setError("Fill the input!");
    } else {
      setIsLoading(true);
      const response = await dispatch(login(formState));
      setIsLoading(false);
      const { status } = response.payload;
      if (status === 200) {
        navigate("/products");
      } else {
        navigate("/login");
        setError("Password or Email error!");
      }
    }
  };

  return (
    <main className="login-page main">
      {isLoading ? (
        <Loading />
      ) : (
        <div className="login-page__container">
          <Alert error={error} setError={setError} />
          <div className="img__wrapper">
            <img src={loginImg} alt="login img" />
          </div>
          <form className="form" ref={formRef} onSubmit={onSubmit}>
            <div className="form__wrapper">
              <FormGroup
                type="email"
                name="email"
                title="Email"
                onChange={onChangeFormHandler}
              />
              <FormGroup
                type={`${showPassword ? "text" : "password"}`}
                name="password"
                title="Password"
                onChange={onChangeFormHandler}
                icon={
                  <i
                    className={`bi bi-eye-${showPassword ? "" : "slash-"}fill`}
                    onClick={() => setShowPassword(!showPassword)}
                  ></i>
                }
              />
              <Button content="Login" className="login__button" type="submit" />
            </div>
          </form>
        </div>
      )}
    </main>
  );
};
