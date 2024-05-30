import { Formik, Form, Field } from 'formik';
import { useLoginUserMutation } from '../../redux/authApi';

export const LoginForm = () => {
  const [login, { data }] = useLoginUserMutation();

  const handleSubmit = async (values, actions) => {
    const {
      data: { token },
    } = await login({
      email: values.login,
      password: values.password,
    });

    actions.resetForm();
    console.log(token);
    localStorage.setItem('token', token);
  };
  return (
    <Formik
      initialValues={{
        login: ' ',
        password: '',
      }}
      onSubmit={handleSubmit}
    >
      <Form>
        <label>
          Login
          <Field type="text" name="login" required />
        </label>
        <label>
          {' '}
          Pasword
          <Field
            type="password"
            name="password"
            autoComplete="new-password"
            required
          />
        </label>
        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
};