import logo from '../../../assets/assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center space-y-4'>
            <img className='mx-auto' src={logo} alt="" />
            <p className='text-2xl'>Journalism Without Fear or Favour</p>
            <p className='text-xl'>{moment().format("dddd, MMMM, D YYYY, h:mm a")}</p>
        </div>
    );
};

export default Header;