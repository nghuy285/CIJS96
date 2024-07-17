import React, { useContext } from "react";
import { Form, Input, Button, message, Card } from "antd";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext/UserContext";
import "./Auth.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Register = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { loginUser } = useContext(UserContext);

  const onFinish = (values) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.some((user) => user.username === values.username);
    if (userExists) {
      message.error("Username already exists");
    } else {
      users.push(values);
      localStorage.setItem("users", JSON.stringify(users));
      message.success("Registration successful");
      loginUser(values);
      navigate("/");
    }
  };

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <>
      <Navbar></Navbar>
      <Card className="auth-card" title="Register">
        <Form form={form} name="register" onFinish={onFinish}>
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
              Register
            </Button>
          </Form.Item>
          <Form.Item>
            <Button type="link" onClick={goToLogin} block>
              Already have an account? Login now
            </Button>
          </Form.Item>
        </Form>
      </Card>
      <Footer></Footer>
    </>
  );
};

export default Register;
