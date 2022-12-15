import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import useTitle from '../../TitleView/useTitle';

const ReviewUpdate = () => {
    useTitle("Review Update");
    const update = useLoaderData();
    const [review, setReview] = useState(update);

    const handleUpdateUser = event => {
        event.preventDefault();
        // console.log(user);
        fetch(`https://inventory-server-nine.vercel.app/reviews/${update._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Review Updated Successfully')
                    console.log(data);
                }

            })
    }

    const handleInputChange = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newReview = { ...review }
        newReview[field] = value;
        setReview(newReview);
    }

    return (
        <div>
            <h2 className='text-2xl text-secondary font-bold'>Update Your Address</h2>
            <form onSubmit={handleUpdateUser}>
                <h2 className='text-xl text-secondary mt-5'>Name</h2>
                <input onChange={handleInputChange} defaultValue={update.customer} type="text" name="name" placeholder="Enter Name" className="input input-bordered input-secondary w-full max-w-xs my-5" required disabled/> <br />
                <h2 className='text-xl text-secondary mt-5'>Quantity</h2>
                <input onChange={handleInputChange} defaultValue={update.quantity} type="text" name="quantity" placeholder="Enter Name" className="input input-bordered input-secondary w-full max-w-xs my-5" required disabled/>
                <h2 className='text-xl text-secondary mb-5'>Address</h2>
                <textarea className="textarea textarea-secondary w-full" onChange={handleInputChange} type="text" name="msg" placeholder='msg' required  defaultValue={update.msg}></textarea>
                <div className="card-actions justify-end">
                    <button className="btn btn-secondary mt-4" type="submit" >Submit</button>
                    <ToastContainer/>
                </div>
            </form>
        </div>
    );
};

export default ReviewUpdate;