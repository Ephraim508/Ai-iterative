import './index.css'
import {Link, withRouter} from 'react-router-dom'
import {FaRegUserCircle} from 'react-icons/fa'
const Navbar = () => {
  return (
    <div className="navmaincontainer">
      <div className="navleft">
        <img
          src="https://res.cloudinary.com/diygvwkec/image/upload/v1721403317/img_sm_logo_en_dark_kn0du7.svg"
          alt="sri-mandir-logo"
          className="sri-mandir-logo"
        />
        <h1 className="heading-nav">Sri Mandir</h1>
      </div>

      <ul className="navmiddle">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/puja">
          <li>Puja</li>
        </Link>
        <Link to="selectpuja">
          <li>Chadava</li>
        </Link>
      </ul>

      <div className="navright">
        <a href="">
          <FaRegUserCircle className="user" />
        </a>
      </div>
    </div>
  )
}

export default withRouter(Navbar)
