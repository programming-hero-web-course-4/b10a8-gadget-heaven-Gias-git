

const Footer = () => {
    return (
        <footer className="footer w-full bg-white text-base-content flex justify-center items-center flex-col p-10 space-y-16">
            <div>
                <h1 className="text-4xl text-center font-bold"> Gadget Heaven</h1>
                <p>
                    Leading the way in cutting-edge technology and innovation.
                </p>
            </div>

            <div className="flex space-x-28">
                <div className="flex flex-col">
                    <h6 className="text-lg font-bold">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div className="flex flex-col">
                    <h6 className="text-lg font-bold">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div className="flex flex-col">
                    <h6 className="text-lg font-bold">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </div>

        </footer>
    );
};

export default Footer;