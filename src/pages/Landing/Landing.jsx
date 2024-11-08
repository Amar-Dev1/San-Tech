import './Landing.css';
import { Link } from 'react-router-dom';
import { FaAngleDoubleDown } from 'react-icons/fa';

const Landing = () => {


  return (
    <div className="landing">
      <div className="overlay"></div>
      <div className="content">
        <p>The Best For You !</p>
        <div className="shop-btn">
          <button><a href="#categories">Go Shopping !</a></button>
        </div>
        <FaAngleDoubleDown id='scroll-btn' />

        <div className="signup-btns">
          <button>
            <Link to="/Signup" className='link'>Signup</Link>
          </button>
          <button>
            <Link to="/Signup" className='link'>Login</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;