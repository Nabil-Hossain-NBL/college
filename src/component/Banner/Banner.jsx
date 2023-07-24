import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <>
            <div className="flex justify-center my-4">
                <input type="text" placeholder="Search here" className="input input-bordered input-primary w-full max-w-xs" />
                <button className="btn btn-primary mx-3">Search</button>
            </div>
            <div className="hero min-h-screen mb-7" style={{ backgroundImage: `url("https://images.pexels.com/photos/6146978/pexels-photo-6146978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")` }}>
                <div className="hero-overlay bg-opacity-30 lg:bg-opacity-0"></div>
                <div className="hero-content flex lg:w-11/12 justify-start text-center lg:justify-start lg:text-start text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Find your Dream college</h1>
                        <p className="mb-5 font-bold text-2xl">Click this button to see all the best collegs</p>
                        <Link to={'/all-toys-page'}><button className="btn rounded-full btn-outline text-white  hover:bg-white hover:text-black"><span className="hover:text-black">see more</span></button></Link>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Banner;