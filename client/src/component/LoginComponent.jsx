import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";

function LoginComponent() {
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid Email...")
      .required("Email is Required..."),
    password: Yup.string().required("Password is Required..."),
  });

  function handleSubmit(values) {
    axios
      .post(`http://localhost:5000/api/auth/login`, {
        email: values.email,
        password: values.password,
      })
      .then((response) => {
        console.log("Login Successful", response.data);

        toast.success("Login successful!");
        navigate("/product");
      })
      .catch((err) => {
        console.log("error occurred", err.response.data);
        // Display error toast notification based on server response
        if (err.response.status === 401) {
          toast.error("Invalid email or password");
        } else {
          toast.error("error occured.", err);
        }
      });
  }

  return (
    <div className="login-container">
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <Field type="text" id="email" name="email" />
            <ErrorMessage name="email" component="div" className="error" />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <Field type="password" id="password" name="password" />
            <ErrorMessage name="password" component="div" className="error" />
          </div>

          <button type="submit">Submit</button>
          <p className="register-link">
            Not yet registered? <Link to="/register">Register here.</Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
}

export default LoginComponent;
