import React, { ChangeEvent, useState } from "react";
import Input from "../../components/Input";
import useTheme from "../../hooks/useTheme";
import { AuthProps, AuthTypes } from "./types";
import s from "./styles.module.scss";
import Button from "../../components/Button";
import { login, registration } from "../../api/users";

const Auth: React.FC<AuthProps> = ({ setOpen }) => {
  const { theme } = useTheme();
  const [authStatus, setAuthStatus] = useState(AuthTypes.AUTHORIZATION);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const changePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const submit = async () => {
    if (authStatus === AuthTypes.AUTHORIZATION) {
      await login(email, password);
      setOpen(false);
    } else {
      await registration(email, password);
      setOpen(false);
    }
  };

  const reset = () => {
    setEmail("");
    setPassword("");
    setOpen(false);
  };

  return (
    <div className={s.auth}>
      <Button
        variant={"text"}
        color={authStatus === AuthTypes.AUTHORIZATION ? "primary" : "secondary"}
        onClick={() => setAuthStatus(AuthTypes.AUTHORIZATION)}
      >
        Авторизация
      </Button>
      <Button
        variant={"text"}
        color={authStatus === AuthTypes.REGISTRATION ? "primary" : "secondary"}
        onClick={() => setAuthStatus(AuthTypes.REGISTRATION)}
      >
        Регистрация
      </Button>
      <form>
        <Input
          value={email}
          onChange={changeEmail}
          placeholder="email"
          variant={"outlined"}
        />
        <Input
          value={password}
          onChange={changePassword}
          placeholder="password"
          variant={"outlined"}
          type={"password"}
        />
        <Button type={"submit"} onClick={submit} margin={"0 10px"}>
          Принять
        </Button>
        <Button type={"reset"} onClick={reset}>
          Закрыть
        </Button>
      </form>
    </div>
  );
};

export default Auth;
