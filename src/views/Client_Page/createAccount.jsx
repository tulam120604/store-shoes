
const Create_Account_Page = () => {
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
                                Eveniet, itaque accusantium odio, soluta, corrupti aliquam
                                quibusdam tempora at cupiditate quis eum maiores libero
                                veritatis? Dicta facilis sint aliquid ipsum atque?
                            </p>
                        </div>
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <div className="card">
                                <div className="card-body py-5 px-md-5">
                                    <form>
                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <input type="text" id="form3Example1" className="form-control" />
                                                    <label className="form-label" htmlFor="form3Example1">First name</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <input type="text" id="form3Example2" className="form-control" />
                                                    <label className="form-label" htmlFor="form3Example2">Last name</label>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Email input */}
                                        <div className="form-outline mb-4">
                                            <input type="email" id="form3Example3" className="form-control" />
                                            <label className="form-label" htmlFor="form3Example3">Email address</label>
                                        </div>
                                        {/* Password input */}
                                        <div className="form-outline mb-4">
                                            <input type="password" id="form3Example4" className="form-control" />
                                            <label className="form-label" htmlFor="form3Example4">Password</label>
                                        </div>
                                        {/* Checkbox */}
                                        <div className="form-check d-flex justify-content-center mb-4">
                                            <input className="form-check-input me-2" type="checkbox" defaultValue id="form2Example33" defaultChecked />
                                            <label className="form-check-label" htmlFor="form2Example33">
                                                Subscribe to our newsletter
                                            </label>
                                        </div>
                                        {/* Submit button */}
                                        <button type="submit" className="btn btn-primary btn-block mb-4">
                                            Sign up
                                        </button>
                                        {/* Register buttons */}
                                        <div className="text-center">
                                            <p>or sign up with:</p>
                                            <button type="button" className="btn btn-link btn-floating mx-1">
                                                <i className="fab fa-facebook-f" />
                                            </button>
                                            <button type="button" className="btn btn-link btn-floating mx-1">
                                                <i className="fab fa-google" />
                                            </button>
                                            <button type="button" className="btn btn-link btn-floating mx-1">
                                                <i className="fab fa-twitter" />
                                            </button>
                                            <button type="button" className="btn btn-link btn-floating mx-1">
                                                <i className="fab fa-github" />
                                            </button>
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

export default Create_Account_Page