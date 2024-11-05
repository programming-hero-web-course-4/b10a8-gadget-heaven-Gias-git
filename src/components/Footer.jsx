

const Footer = () => {
    return (
        <footer className="footer w-full bg-white text-base-content flex justify-center items-center flex-col p-10 space-y-8">
            <div>
                <h1 className="text-4xl text-center font-bold w-10/12 mx-auto"> Gadget Heaven</h1>
                <p>
                    Leading the way in cutting-edge technology and innovation.
                </p>
            </div>


            <div className="flex space-x-28 text-[#09080F99]">
                <div className="flex flex-col">
                    <h6 className="text-lg font-bold text-black">Category</h6>
                    <a className="link link-hover">Mobile</a>
                    <a className="link link-hover">Laptop</a>
                    <a className="link link-hover">Tablet</a>
                    <a className="link link-hover">Charger</a>
                </div>
                <div className="flex flex-col">
                    <h6 className="text-lg font-bold text-black">Important Link</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact us</a>
                    <a className="link link-hover">Dashboard</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div className="flex flex-col">
                    <h6 className="text-lg font-bold text-black">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </div>

        </footer>
    );
};

export default Footer;