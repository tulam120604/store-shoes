/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

const CreateAccount_Page = ({ onCreateAccount }) => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigationCreateAccount = useNavigate();

    const onSubmitCreate = (dataForm) => {
        onCreateAccount(dataForm)
        navigationCreateAccount('/login')
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
                                    <form onSubmit={handleSubmit(onSubmitCreate)}>
                                        {/* Email input */}
                                        <div className="form-outline mb-4">
                                            <label className="form-label capitalize" htmlFor="form3Example3">tên đăng nhập</label>
                                            <input type="text" {...register('userAccount', { required: true })} id="form3Example3" className="form-control" />
                                            {errors.userAccount && <span className="text-red-600">Tên đăng nhập không được để trống!</span>}
                                        </div>
                                        {/* Password input */}
                                        <div className="form-outline mb-4">
                                            <label className="form-label capitalize" htmlFor="form3Example4">mật khẩu</label>
                                            <input type="password" {...register('password', { required: true, minLength: 6, maxLength: 20 })}
                                                id="form3Example4" className="form-control" />
                                            {errors.password && <span className="text-red-600">Mật khẩu phải có độ dài từ 6 đến 20 kí tự!</span>}
                                        </div>
                                        {/* Confirm pasword input */}
                                        <div className="form-outline mb-4">
                                            <label className="form-label capitalize" htmlFor="form3Example3">xác nhận mật khẩu</label>
                                            <input type="password" {...register('confirmPassword', { required: true, minLength: 6, maxLength: 20 })}
                                                id="form3Example3" className="form-control" />
                                        </div>
                                        {/* Email input */}
                                        <div className="form-outline mb-4">
                                            <label className="form-label capitalize" htmlFor="form3Example3">Email</label>
                                            <input type="email" {...register('email', { required: 'Email address is required' })}
                                                id="form3Example3" className="form-control" />
                                            {errors.email && <span className="text-red-600">Email không được để trống</span>}
                                        </div>
                                        {/* Checkbox */}
                                        <div className="form-check d-flex justify-content-center mb-4">
                                            <input className="form-check-input me-2 cursor-pointer" type="checkbox" defaultValue id="form2Example33" defaultChecked />
                                            <label className="form-check-label capitalize" htmlFor="form2Example33">
                                                đồng ý với điều khoản dịch vụ
                                            </label>
                                        </div>
                                        {/* Submit button */}
                                        <div className="form-check d-flex justify-content-center mb-4">
                                            <button type="submit" className="btn btn-primary btn-block mb-4 bg-sky-800 capitalize">
                                                đăng ký
                                            </button>
                                        </div>
                                        <div className="form-check d-flex justify-content-center mb-4">
                                            <span className="capitalize">đã có tài khoản ?
                                                <Link className="text-sky-500 hover:text-sky-700" to='/login'>đăng nhập</Link>
                                            </span>
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

export default CreateAccount_Page