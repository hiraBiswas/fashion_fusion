import React from 'react';
import { TiSocialFacebook } from "react-icons/ti";
import { FaLinkedinIn } from "react-icons/fa";
import { IoCheckmarkDoneSharp } from "react-icons/io5";

const Contact = () => {
    return (
        <div className="bg-cyan-400 mt-24 container mx-auto min-h-[700px] flex items-center">
            <div className='max-w-6xl mx-auto p-5 drop-shadow '>
                <div className="grid grid-cols-2 bg-amber-100 ">
                    <div className="grid grid-cols-2">
                        <div className="p-10">
                            <h3 className="text-3xl font-bold text-cyan-400">Get in Touch</h3>
                            <p className="text-black font-xl py-5 font-bold">We can ensure reliability, lowest cost fares, most importantly <br />safety and security of your product.</p>
                            <p className='py-3'>Our website is very easy to use. You can explore our different categories of trucks and choose the most suitable one for your purpose.</p>
                        </div>

                        <div className="p-10">
                            <div className="flex flex-col">
                                <h1 className="font-bold text-cyan-400 pb-3">Call Us</h1>
                                <p className="text-black"> +880 1793250987</p>
                                <p>+880 1893450087</p>
                            </div>

                            <div>
                                <h1 className="font-bold text-cyan-400 py-3">Location</h1>
                                <p>House #20 (3rd Floor) Road # 17,<br /> Nikanjia-2 Dhaka, Bangladesh</p>
                            </div>

                            <div>
                                <h1 className="font-bold text-cyan-400 py-3">Top Services</h1>
                                <div className='flex justify-start items-center'>
                                    <IoCheckmarkDoneSharp></IoCheckmarkDoneSharp>
                                    <p>Rent according to your time</p>
                                </div>
                                <div className='flex justify-start items-center'>
                                    <IoCheckmarkDoneSharp></IoCheckmarkDoneSharp>
                                    <p>Time maintenance</p>
                                </div>
                                <div className='flex justify-start items-center'>
                                    <IoCheckmarkDoneSharp></IoCheckmarkDoneSharp>
                                    <p>User Support</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='p-10'>
                        <form className="card-body">
                            <div className="form-control">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    className="input input-bordered mb-3"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    className="input input-bordered mb-3"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <input
                                    type="text"
                                    name="message"
                                    placeholder="Message"
                                    className="input input-bordered h-24"
                                    required
                                />
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn text-black btn-grad">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
