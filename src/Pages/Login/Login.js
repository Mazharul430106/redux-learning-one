import React, { useReducer } from 'react';

const Login = () => {

    const initialState = {
        fastName: '',
        lastName: '',
        email: '',
        gender: '',
        education: '',
        textarea: '',
        quantity: 0,
        checkBox: false,
    };

    const reducer = (state, action) => {

        // console.log(action)

        switch (action.type) {
            case 'INPUT':
                return {
                    ...state,
                    [action.payload.name]: action.payload.value,
                }

            case 'INCREMENT':
                return {
                    ...state,
                    quantity: state.quantity + 1
                }

            case 'DECREMENT':
                return {
                    ...state,
                    quantity: state.quantity - 1
                }

            case 'TOGGLE':
                return {
                    ...state,
                    checkBox: !state.checkBox
                }

            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    const handleLogin = (e) => {
        e.preventDefault();
        console.log(state);
    }



    return (
        <div className="hero my-5 ">
            <div className="hero-content lg:max-w-[900px] w-full flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className='text-4xl mb-4 font-semibold'>Login Now</h1>
                        <form onSubmit={handleLogin}>
                            <div className='grid lg:grid-cols-2 grid-cols-1 gap-3'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Fast Name</span>
                                    </label>
                                    <input type="text" name='fastName' placeholder="Fast Name" className="input input-bordered focus:outline-none" onBlur={(e) => { dispatch({ type: 'INPUT', payload: { name: e.target.name, value: e.target.value } }) }} />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Last Name</span>
                                    </label>
                                    <input type="text" name='lastName' placeholder="Last Name" className="input input-bordered focus:outline-none" onBlur={(e) => { dispatch({ type: 'INPUT', payload: { name: e.target.name, value: e.target.value } }) }} />
                                </div>
                            </div>

                            <div className='grid lg:grid-cols-2 grid-cols-1 gap-3'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="Email" className="input input-bordered focus:outline-none" onBlur={(e) => { dispatch({ type: 'INPUT', payload: { name: e.target.name, value: e.target.value } }) }} />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Gender</span>
                                    </label>
                                    <div className='lg:flex flex-none items-center justify-between lg:mt-3 '>
                                        <div className='flex items-center gap-2 mt-2 lg:mt-0'>
                                            <input type="radio" name="gender" className="radio" value='Mail' onClick={(e) => { dispatch({ type: 'INPUT', payload: { name: e.target.name, value: e.target.value } }) }} />
                                            <span>Mail</span>
                                        </div>
                                        <div className='flex items-center gap-2 mt-2 lg:mt-0'>
                                            <input type="radio" name="gender" className="radio" value='Femail' onClick={(e) => { dispatch({ type: 'INPUT', payload: { name: e.target.name, value: e.target.value } }) }} />
                                            <span>Femail</span>
                                        </div>
                                        <div className='flex items-center gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0'>
                                            <input type="radio" name="gender" className="radio" value='Other' onClick={(e) => { dispatch({ type: 'INPUT', payload: { name: e.target.name, value: e.target.value } }) }} />
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
                                    <select name='education' className="select select-bordered focus:outline-none" onChange={(e) => { dispatch({ type: 'INPUT', payload: { name: e.target.name, value: e.target.value } }) }}>
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
                                        <button className='btn btn-primary rounded-none rounded-l-lg font-semibold text-2xl' onClick={()=> {dispatch({type: 'DECREMENT' })}}>-</button>
                                       
                                        <div className='w-full input input-bordered flex items-center justify-center rounded-none'>
                                            <h3 className='' name='quantity'>{state.quantity}</h3>
                                        </div>

                                        <button className='btn btn-primary rounded-none rounded-r-lg font-semibold text-2xl' onClick={()=> {dispatch({type: 'INCREMENT'})}}>+</button>
                                    </div>
                                </div>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Message</span>
                                </label>
                                <textarea name='textarea' rows='5' className="textarea textarea-bordered focus:outline-none" placeholder="Message" onBlur={(e) => { dispatch({ type: 'INPUT', payload: { name: e.target.name, value: e.target.value } }) }}  ></textarea>
                            </div>

                            <div className='grid lg:grid-cols-2 grid-cols-1 gap-3'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Terms</span>
                                    </label>
                                    <div className='flex items-center gap-3 '>
                                        <input name='checkBox' type="checkbox" className="checkbox checkbox-primary" onClick={() => { dispatch({ type: 'TOGGLE' }) }} />
                                        <span> Terms and Conditions </span>
                                    </div>
                                </div>

                                <div className="form-control mt-6">
                                    <button className="btn btn-primary" disabled={!state.checkBox} >Login</button>
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