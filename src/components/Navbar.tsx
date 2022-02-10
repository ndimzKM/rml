import { HiOutlineSpeakerphone, HiOutlineChevronDown,HiOutlineMenu } from 'react-icons/hi'

const Navbar: React.FC = () => {
  return(
    <nav>
      <ul className="navbar">
        <li>
          <button className="flex items-center">
            <HiOutlineSpeakerphone size={24} color="#a5a5a5"/>
            <HiOutlineChevronDown size={20} color="#a5a5a5"/>
          </button>
        </li>
        <li>
          <button>
            <HiOutlineMenu size={24} color="#a5a5a5"/>
          </button>
        </li>
      </ul>
    </nav>
  )
}
 export default Navbar
