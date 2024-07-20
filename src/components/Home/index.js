import Navbar from '../Navbar'
import './index.css'

const Home = () => {
  return (
    <div className="main-container-all">
      <Navbar />
      <div className="home-container">
        <div className="left-home">
          <div className="left-home-sec1">
            <img src="https://res.cloudinary.com/diygvwkec/image/upload/v1721402869/img_achievement_z4dmaj.webp" />
            <p>WORLD’S LARGEST APP FOR HINDU DEVOTEES</p>
          </div>

          <div className="left-home-sec2">
            <p>
              Pray daily with <span>Sri Mandir.</span>One App for all your
              devotional needs.
            </p>

            <div className="apps">
              <img src="https://res.cloudinary.com/diygvwkec/image/upload/v1721403302/img_playstore_logo_mcec5v.svg" />

              <img src="https://res.cloudinary.com/diygvwkec/image/upload/v1721403273/img_appstore_logo_zul7jp.svg" />
            </div>
          </div>
        </div>

        <div className="right-home">
          <img src="https://res.cloudinary.com/diygvwkec/image/upload/v1721403224/img_hero_artwork_en_pg5bvl.webp" />
        </div>
      </div>
    </div>
  )
}

export default Home
