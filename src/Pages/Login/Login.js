import React from 'react';

const Login = () => {
    return (
        <div className="hero my-5 ">
            <div className="hero-content lg:max-w-[900px] w-full flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className='text-4xl mb-4 font-semibold'>Login Now</h1>
                        <form action="">
                            <div className='grid lg:grid-cols-2 grid-cols-1 gap-3'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Fast Name</span>
                                    </label>
                                    <input type="text" name='fastName' placeholder="Fast Name" className="input input-bordered focus:outline-none" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Last Name</span>
                                    </label>
                                    <input type="text" name='lastName' placeholder="Last Name" className="input input-bordered focus:outline-none" />
                                </div>
                            </div>

                            <div className='grid lg:grid-cols-2 grid-cols-1 gap-3'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="Email" className="input input-bordered focus:outline-none" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Gender</span>
                                    </label>
                                    <div className='flex items-center justify-between mt-3'>
                                        <div className='flex items-center gap-2'>
                                            <input type="radio" name="gender" className="radio" />
                                            <span>Mail</span>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <input type="radio" name="gender" className="radio" />
                                            <span>Femail</span>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <input type="radio" name="gender" className="radio" />
                                            <span>Other</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='grid lg:grid-cols-2 grid-cols-1 gap-3'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Education</span>
                                    </label>
                                    <select name='education' className="select select-bordered focus:outline-none">
                                        <option disabled selected>Select Education</option>
                                        <option value='Ssc'>Ssc</option>
                                        <option value='Hsc'>Hsc</option>
                                        <option value='Bsc'>Bsc</option>
                                        <option value='Msc'>Msc</option>
                                    </select>
                                </div>
                                <div className='form-control w-full'>
                                    <label className="label">
                                        <span className="label-text">Number of Pices</span>
                                    </label>
                                    <div className='flex items-center w-full'>
                                        <button className='btn btn-primary rounded-none rounded-l-lg font-semibold text-2xl '>-</button>
                                        <div className='form-control w-full'>
                                            <input className="w-full input input-bordered rounded-none text-center focus:outline-none px-0" type="text" value='0' />
                                        </div>
                                        <button className='btn btn-primary rounded-none rounded-r-lg font-semibold text-2xl '>+</button>
                                    </div>
                                </div>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <textarea name='message' rows='5' className="textarea textarea-bordered focus:outline-none" placeholder="Message"></textarea>
                            </div>

                            <div className='grid lg:grid-cols-2 grid-cols-1 gap-3'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Terms</span>
                                    </label>
                                    <div className='flex items-center gap-3 '>
                                        <input type="checkbox" className="checkbox checkbox-primary" />
                                        <span> Terms and Conditions </span>
                                    </div>
                                </div>

                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;