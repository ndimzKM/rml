import { BiLinkExternal } from 'react-icons/bi'
import { FaUserAstronaut } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const DashboardMain: React.FC = () => {
  return (
    <section className="dashboard-main mt-4">
      <h2>University of Arizona</h2>
      <p className="text-sm text-gray-400">Tucson, AZ</p>
      <a href="#" className="flex items-center text-blue-500">
        <span className="pr-2">WEBSITE</span>
        <BiLinkExternal size={18}/>
      </a>
      <div className="dash-actions my-4">
        <Link to="/rate" className="dash-rate p-2 rounded-sm border-gray-500 shadow border-2 text-white text-sm bg-gray-500">Rate this school</Link>
        <Link to="/share" className="dash-share border-2 border-gray-300 p-2 rounded-sm shadow ml-3">Share</Link>
      </div>

      <Link className="uppercase text-xs text-blue-500" to="/correction">Submit a correction</Link>
      <div className="dash-details">
        <div className="professors">
          <div className="flex items-center mb-2 justify-between">
            <h3>Top Lecturers</h3>
            <Link to="/all">View all Lecturers</Link>
          </div> 
          <div className="professor">
            <div className="professor-p">
              <div className="profile">
                <FaUserAstronaut size={40} />
                <div>
                  <h3>Mondy Dave</h3>
                  <p>35 REVIEWS</p>
                </div>
              </div>
              <span>5.0</span>
            </div>
          </div>
        </div>
        <div className="dash-summary">
          <h3>How This School Stacks Up</h3>
          <p className="overall"><span>4.1</span>OVERALL QUALITY RATING</p>
          <div className="allratings">
            <div>
              <FaUserAstronaut size={25} />
              <p><span>4.2</span> Reputation</p>
            </div>
            <div>
              <FaUserAstronaut size={25} />
              <p><span>4.2</span> Reputation</p>
            </div>
            <div>
              <FaUserAstronaut size={25} />
              <p><span>4.2</span> Reputation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DashboardMain
