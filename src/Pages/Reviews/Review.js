import React, { useEffect, useState } from 'react';
import 'react-photo-view/dist/react-photo-view.css';
import { ImCross } from "react-icons/im";
import { GrUpdate } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const Review = ({ review, handleDelete}) => {
    const { _id, checkoutName, customer, price, checkout, msg, quantity } = review;
    const [reviewService, setReviewService] = useState({})
    useEffect(() => {
        fetch(`https://inventory-server-nine.vercel.app/services/${checkout}`)
            .then(res => res.json())
            .then(data => setReviewService(data));
    }, [checkout])
    return (
        <tr>
            <th>
                <label>
                    <Link>
                    <button onClick={() => handleDelete(_id)} className='btn btn-ghost'><ImCross/> </button></Link>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-24 h-24">
                            {
                                reviewService?.img &&
                              
                                <PhotoProvider>
                                <PhotoView src={reviewService.img}>
                                <img src={reviewService.img} alt="Avatar Tailwind CSS Component" />
                                </PhotoView>
                            </PhotoProvider>
                                }
                        </div>
                    </div>

                </div>
            </td>
            <td>
                <span className="badge badge-ghost badge-sm font-semibold">{checkoutName}</span>
            </td>
            <td>
                <div>
                    <div className="font-bold">{customer}</div>
                </div>
            </td>
            <td>{msg.slice(0, 20)}</td>
            <td>{quantity}</td>
            <td>${price}</td>
            <td><Link className='btn btn-ghost' to={`/reviewUpdate/${_id}`}><GrUpdate/></Link></td>
        </tr>
    );
};

export default Review;