import { CgYinyang, CgChart } from 'react-icons/cg'

const Dashboard: React.FC = () => {
  return(
    <section className="dashboard">
      <aside>
        <ul>
          <li>
            <CgYinyang color="#333" size={22}/>
            <span>Tha Condor</span>
          </li>
          <li>
            <CgChart color="#333" size={22}/>
            <span>Your Insights</span>
          </li>
          <li>
            <CgYinyang color="#333" size={22}/>
            <span>Tha Condor</span>
          </li>
        </ul>
      </aside>
    </section>
  );
}

export default Dashboard;
