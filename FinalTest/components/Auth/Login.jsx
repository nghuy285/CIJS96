import React, { useContext } from "react";
import { Form, Input, Button, message, Card } from "antd";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext/UserContext";
import "./Auth.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Login = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { loginUser } = useContext(UserContext);

  const onFinish = (values) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (user) =>
        user.username === values.username && user.password === values.password
    );
    if (user) {
      loginUser(user);
      navigate("/");
    } else {
      message.error("Invalid username or password");
    }
  };

  const goToRegister = () => {
    navigate("/register");
  };

  return (
    <>
      <Navbar></Navbar>
      <Card className="auth-card" title="Login">
        <Form form={form} name="login" onFinish={onFinish}>
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Login
            </Button>
          </Form.Item>
          <Form.Item>
            <Button type="link" onClick={goToRegister} block>
              Don't have an account? Register now
            </Button>
          </Form.Item>
        </Form>
      </Card>
      <Footer></Footer>
    </>
  );
};

export default Login;
