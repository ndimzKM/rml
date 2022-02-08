import img1 from '../assets/images/laptop.svg';
import img2 from '../assets/images/mobile.svg';
import img3 from '../assets/images/search.svg';

const Main: React.FC = () => {
  return(
    <main>
      <h1>Join the RMP family</h1>
      <p className="main-p">Do you love RMP? Let's make it official.</p>
      <div className="features">
        <div className="feature">
          <img src={img1} alt="iamge" />
          <h3>Manage and edit your ratings</h3>
          <p>Browse as usual, and we'll take care of the rest. We bundled our search engine, tracker blocker, and encryption enforcer into one Firefox Extension.</p>
        </div>
        <div className="feature">
          <img src={img2} alt="iamge" />
          <h3>Manage and edit your ratings</h3>
          <p>Browse as usual, and we'll take care of the rest. We bundled our search engine, tracker blocker, and encryption enforcer into one Firefox Extension.</p>
        </div>
        <div className="feature">
          <img src={img3} alt="iamge" />
          <h3>Manage and edit your ratings</h3>
          <p>Browse as usual, and we'll take care of the rest. We bundled our search engine, tracker blocker, and encryption enforcer into one Firefox Extension.</p>
        </div>
      </div>
    </main> 
  )
}

export default Main;
