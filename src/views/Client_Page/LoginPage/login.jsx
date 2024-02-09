/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom";

const Login_Page = ({ onLoginAccount }) => {
    const { register, handleSubmit } = useForm();
    const navigationLogin = useNavigate()

    const onSubmitLogin = (dataForm) => {
        // console.log(dataForm);
        onLoginAccount(dataForm);
        navigationLogin('/')
    }

    return (<>
        <section className='w-full'>
            <div className="mt-24 px-4 py-5 px-md-5 text-center text-lg-start">
                <div className="container">
                    <div className="row gx-lg-5 align-items-center">
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <h1 className="my-5 display-3 fw-bold ls-tight">
                                The best offer <br />
                                <span className="text-primary">for your business</span>
                            </h1>
                            <p style={{ color: 'hsl(217, 10%, 50.8%)' }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Eveniet.
                            </p>
                        </div>
                        <div className="col-lg-6 mb-5 mb-lg-0 ">
                            <div className="card">
                                <div className="card-body py-5 px-md-5">
                                    <form onSubmit={handleSubmit(onSubmitLogin)}>
                                        {/* Email input */}
                                        <div className="form-outline mb-4">
                                            <label className="form-label capitalize" htmlFor="form3Example3">tên đăng nhập</label>
                                            <input type="text" {...register('userAccount', { required: true })} id="form3Example3" className="form-control" />
                                        </div>
                                        {/* Password input */}
                                        <div className="form-outline mb-4">
                                            <label className="form-label capitalize" htmlFor="form3Example4">mật khẩu</label>
                                            <input type="password" {...register('password', { required: true, minLength: 6, maxLength: 20 })}
                                                id="form3Example4" className="form-control" />
                                        </div>
                                        {/* Checkbox */}
                                        {/* <div className="form-check d-flex justify-content-center mb-4">
                                            <input className="form-check-input me-2" type="checkbox" defaultValue id="form2Example33" defaultChecked />
                                            <label className="form-check-label" htmlFor="form2Example33">
                                                Subscribe to our newsletter
                                            </label>
                                        </div> */}
                                        {/* Submit button */}
                                        <div className="form-check d-flex justify-content-center mb-4">
                                            <button className="btn btn-primary btn-block mb-4 bg-sky-800 capitalize">
                                                đăng nhập
                                            </button>
                                        </div>
                                        <div className="form-check d-flex justify-content-center mb-4">
                                            <span className="capitalize">Chưa có tài khoản ?
                                                <Link className="text-sky-500 hover:text-sky-700" to='/createAccount'>đăng ký ngay</Link>
                                            </span>
                                        </div>

                                        {/* Register buttons */}
                                        <div className="form-check d-flex justify-content-center mb-4">
                                            <div className="text-center">
                                                <p className="capitalize">hoặc đăng nhập bằng:</p>
                                                <button type="button" className="btn btn-link btn-floating mx-1">
                                                    <img className="w-10" src="../src/images/icons-facebook.png" alt="" />
                                                </button>
                                                <button type="button" className="btn btn-link btn-floating mx-1">
                                                    <img className="w-10" src="../src/images/icons-google.png" alt="" />
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>



    </>)
}

export default Login_Page