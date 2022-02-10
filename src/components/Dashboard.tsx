import { AiFillRedditCircle } from 'react-icons/ai'
import { BiTachometer, BiCalculator, BiBookmarks, BiNews, BiPlusCircle } from 'react-icons/bi'
import DashboardMain from './DashboardMain'
import '../assets/styles/dashboard.scss'
const Dashboard: React.FC = () => {
  return(
    <section className="dashboard">
      <main>
      <section className="main">
        <aside className="p-1 pl-2 aside-first shadow">
          <div className="item">
            <a href="#">
              <div>
                <AiFillRedditCircle size={20} />
                <span>Tha Condor</span>
              </div>
            </a>
          </div>
          <div className="item">
            <a href="#">
              <div>
                <BiTachometer size={20} />
                <span>Your Insights</span>
              </div>
            </a>
          </div>
          <div className="item">
            <a href="#">
              <div>
                <BiCalculator size={20} />
                <span>Your subjects</span>
              </div>
            </a>
          </div>
          <p>Follow subjects to get catered content on your feed.</p>
          <div className="item">
            <a href="#">
              <div>
                <BiBookmarks size={20}/>
                <span>Follow subjects</span>
              </div>
            </a>
          </div>
          <div className="item">
            <a href="#">
              <div>
                <BiNews size={20}/>
                <span>Your courses</span>
              </div>
            </a>
          </div>
          <p>Add courses to get new and trending documents.</p>
          <div className="item">
            <a href="#">
              <div>
                <BiPlusCircle size={20}/>
                <span>Add courses</span>
              </div>
            </a>
          </div>
        </aside>
      </section>
      <DashboardMain />
    </main>
    </section>
  );
}

export default Dashboard;
