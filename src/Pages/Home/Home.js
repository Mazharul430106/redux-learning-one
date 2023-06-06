import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const Home = () => {

    const { state: { travels, loading, error } } = useContext(AuthContext)
    console.log(travels)



    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 px-10 my-10'>
            {
                travels.map(singleTravel => <div className=" rounded card w-full bg-base-100 shadow-xl">
                    <img src={singleTravel.img} alt="Image Not Found" className='rounded-t-lg max-h-[350px]' />
                    <div className="card-body">
                        <h2 className="card-title">{singleTravel.place_title}</h2>
                        <p>{singleTravel.desc}</p>
                        <div className='flex items-center justify-between'>
                            <span>
                                <strong>Price : $ </strong>
                                <span>{singleTravel.price}</span>
                            </span>
                            <span>
                                <strong>Rating : </strong>
                                <span>{singleTravel.ratting}</span>
                            </span>
                        </div>
                        <button className='btn btn-primary mt-3'>
                            add to cart
                        </button>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Home;