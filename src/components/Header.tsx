import { BiSearch } from 'react-icons/bi'
import { HiCheckCircle, HiOutlineStar, HiStar } from 'react-icons/hi'
import logo from '../assets/logo.svg';

const Header: React.FC = () => {
  return(
    <header>
      <img src={logo} alt="Logo" />
      <form className="shadow-lg">
        <input type="text" placeholder="Search the web without being tracked" />
        <button type="submit">
          <BiSearch size={24} color="#a5a5a5" />
        </button>        
      </form>
      <h1>Tired of being tracked online? We can help.</h1>
      <p className="subtitle">Get seamless privacy protection on your browser for free with one download:</p>
      <div className="actions">
        <p>
          <HiCheckCircle size={20} color="blue"/>
          <span>Private Search</span>
        </p>
        <p>
          <HiCheckCircle size={20} color="blue"/>
          <span>Tracker Blocking</span>
        </p>
        <p>
          <HiCheckCircle size={20} color="blue"/>
          <span>Site Encryption</span>
        </p>
      </div>    
      <a href="#" className="start">Get Started now.</a>
      <p className="rating">
        <HiStar size={15} color="#a5a5a5"/>
        <HiStar size={15} color="#a5a5a5"/>
        <HiStar size={15} color="#a5a5a5"/>
        <HiStar size={15} color="#a5a5a5"/>
        <HiOutlineStar size={15} color="#a5a5a5"/>
        <span>Rated: 4.0/5</span>
      </p>
    </header>
  )
}

export default Header;
