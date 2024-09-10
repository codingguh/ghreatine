import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
} from "@mantine/core";

import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { asyncRegisterUser } from "../redux/states/users/action";
import { useInput } from "../hooks";
import { notifications } from "@mantine/notifications";
import classes from "./AuthenticationTitle.module.css";

export default function RegisterPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useInput("");
  const [email, setEmail] = useInput("");
  const [password, setPassword] = useInput("");

  const onRegister = async (event) => {
    event.preventDefault();

    const response = await dispatch(
      asyncRegisterUser({ name, email, password })
    );

    if (response.status === "success") {
      notifications.show({
        title: "Registration Successful",
        message: "Your account has been created successfully!",
      });
      navigate("/login");
    }
  };

  return (
    <Container size={420} my={40}>
      <Title ta="center" className={classes.title}>
        Welcome back!
      </Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Do not have an account yet?{" "}
        <Anchor size="sm" component="button">
          Create account
        </Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
      <TextInput
          label="Username"
          value={name}
          onChange={setName}
          placeholder="username"
          required
        />
        <TextInput
          label="Email"
          value={email}
          onChange={setEmail}
          mt="md"
          placeholder="you@mantine.dev"
          required
        />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          required
          mt="md"
          value={password}
          onChange={setPassword}
        />
       
        <Link to="/login">
        <Button onClick={onRegister} fullWidth mt="xl">
          Sign in
        </Button>
        </Link>
      </Paper>
    </Container>
  );
}
