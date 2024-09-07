import { useFormik } from "formik";
import { object, string } from "yup";

const Form = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: object({
      name: string().min(2, "must have at least 2 character").required(),
      email: string().email().required(),
      password: string().min(6, "must have at least 6 character").required(),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm({ values: "" });
    },
  });

  const nameError = formik.touched.name && formik.errors.name && (
    <span style={{ color: "red" }}>{formik.errors.name}</span>
  );
  const emailError = formik.touched.email && formik.errors.email && (
    <span style={{ color: "red" }}>{formik.errors.email}</span>
  );
  const passwordError = formik.touched.password && formik.errors.password && (
    <span style={{ color: "red" }}>{formik.errors.password}</span>
  );

  return (
    <div>
      <h1>Form Create</h1>
      <form action="" onSubmit={formik.handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>Name </label>
          <input
            type="text"
            name="name"
            required
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          <br />
          {nameError}
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Email </label>
          <input
            type="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <br />
          {emailError}
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <br />
          {passwordError}
        </div>
        <div style={{ marginTop: "10px" }}>
          <button
            type="submit"
            style={{ borderRadius: "25px", background: "#E9DCC9" }}>
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
