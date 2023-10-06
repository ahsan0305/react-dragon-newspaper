import { FaFacebook, FaGithub, FaInstagram, FaTwitch } from 'react-icons/fa';
import QZoneImg1 from '../../../assets/assets/qZone1.png'
import QZoneImg2 from '../../../assets/assets/qZone2.png'
import QZoneImg3 from '../../../assets/assets/qZone3.png'

const RightSideContent = () => {
    return (
        <div>
            {/* Login with start */}
            <div className='p-4 space-y-2 mb-6'>
                <h2 className="text-3xl">Login with</h2>
                <button className="btn btn-outline w-full">
                    <FaFacebook></FaFacebook>
                    Login with FaceBook
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub></FaGithub>
                    Login with GitHub
                </button>
            </div>
            {/* Login with ends  */}

            {/* Find us on sector start  */}
            <div className='p-4 mb-6 border'>
                <h2 className="text-3xl">Find Us On</h2>
                <a className='p-4 flex text-lg items-center border rounded-t-lg' href="">
                    <FaFacebook className='mr-3'></FaFacebook>
                    <span>Facebook</span>
                </a>
                <a className='p-4 flex text-lg items-center border' href="">
                    <FaTwitch className='mr-3'></FaTwitch>
                    <span>Twitch</span>
                </a>
                <a className='p-4 flex text-lg items-center border rounded-b-lg' href="">
                    <FaInstagram className='mr-3'></FaInstagram>
                    <span>Instagram</span>
                </a>
            </div>
            {/* find us on sector ends  */}


            {/* QZone start  */}
            <div className='p-4 space-y-2 mb-6 border'>
                <h2 className="text-3xl">Q Zone</h2>
                <img src={QZoneImg1} alt="" />
                <img src={QZoneImg2} alt="" />
                <img src={QZoneImg3} alt="" />
            </div>

        </div>
    );
};

export default RightSideContent;