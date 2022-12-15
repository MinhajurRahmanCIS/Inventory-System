import React from 'react';
import { MdOutlineFoodBank } from 'react-icons/md';
import { toast, ToastContainer } from 'react-toastify';
import useTitle from '../../TitleView/useTitle';
const AddNewService = () => {

    useTitle("Add New Service")
    const handelAddService = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const img = form.img.value;
        const description = form.description.value;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const service = {
            title,
            img,
            description,
            quantity,
            price
        }

        fetch('https://inventory-server-nine.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success("New Stock Added SuccessFully");
                    form.reset();
                }
            })
            .catch(er => {
                console.error(er);
                toast.error("Some Thing wrong");
            });
    }

    return (
        <div className="hero min-h-screen bg-base-300 mb-10">
            <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
                <form onSubmit={handelAddService}>
                    <div className="card-body">
                        <h2 className='text-3xl text-purple-200 font-bold'><MdOutlineFoodBank />Add new stock</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <input type="text" placeholder="Enter Item Title" className="input input-bordered input-secondary" name='title' required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image URL</span>
                            </label>
                            <input type="text" placeholder="Please Enter Image URL" className="input input-bordered input-secondary" name='img' required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea className="textarea textarea-secondary p-2" type="text" placeholder="Enter Description" name='description' required></textarea>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <input type="number" placeholder="Enter Item Title" className="input input-bordered input-secondary" name='quantity' required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="number" placeholder="Enter Price" className="input input-bordered input-secondary" name='price' required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-secondary">Add New Stock</button>
                            <ToastContainer />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddNewService;