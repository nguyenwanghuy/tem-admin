import React, { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

import { useFormik } from "formik";


const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
//   const { auth } = useContext(AuthenContext);
//   const { isAuthenticated } = auth; lấy trạng thái đăng nhập
  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
      phone: "",
      address: "",
    },
    // onSubmit: async (values) => {
    //   try {
    //     setLoading(true);
    //     setError(null);
    //     // const response = await authAPI.register(values);
    //     // gọi api register
    //     navigate('/login')
    //   } catch (error) {
    //     console.log(error);
    //     setError(error.response.data.message);
    //   } finally {
    //     setLoading(false);
    //   }
    // },
  });
  const { handleSubmit, handleChange, values } = formik;
//   if (isAuthenticated) {
//     return <Navigate to="/" />;
//   }
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-6">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-20 w-auto"
          src="https://i.pinimg.com/236x/9a/1f/8c/9a1f8c95da0a03746023d277dd315d5e.jpg"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Register an account now
        </h2>
        <p className="mt-10 text-center text-sm text-gray-500">
          <Link
            to={"/signin"}
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            You already have an account
          </Link>
        </p>
      </div>

      <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Username
            </label>
            <div className="mt-2">
              <input
                id="username"
                name="username"
                type="username"
                autoComplete="username"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={handleChange}
                value={values.username}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={handleChange}
                value={values.email}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={handleChange}
                value={values.password}
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Address
            </label>
            <div className="mt-2">
              <input
                id="address"
                name="address"
                type="address"
                autoComplete="address"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={handleChange}
                value={values.address}
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Phone
            </label>
            <div className="mt-2">
              <input
                id="phone"
                name="phone"
                type="phone"
                autoComplete="phone"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={handleChange}
                value={values.phone}
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {loading ? "loading..." : "Register"}
            </button>
            {error && (
              <p className="flex w-full justify-center px-3 py-1.5 text-xl font-semibold text-red-600 ">
                {error}
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
