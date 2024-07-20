import './index.css'
import SelectPuja from '../SelectPuja'
import Navbar from '../Navbar'
import {FaArrowRightLong} from 'react-icons/fa6'
import {Link} from 'react-router-dom'
import {useState} from 'react'
const pujaimages = [
  {
    id: 1,
    img: 'https://res.cloudinary.com/diygvwkec/image/upload/v1721406421/1720883182830_rdpgu6.webp',
    heading: 'Shani Saade Saati Peeda Shanti Mahapuja and Til Tel Abhishek',
    para: 'For Prevention of Misfortunes and Adversitie',
    location: 'Shaktipeeth Maa Tarapith Temple,  Birbhum, West Bengal',
    date: '20 July IST, Saturday,  Ashadha Shukla Purnima (From 05:59 PM, July 20 to 03:46 PM, July 21)',
  },
  {
    id: 2,
    img: 'https://res.cloudinary.com/diygvwkec/image/upload/v1721406605/1720890969814_uiyycl.webp',
    heading: 'Divya Mahakali Tantrokta Havan',
    para: ' For Courage and Protection from Obstacles',
    location: 'Shaktipeeth Maa Tarapith Temple,  Birbhum, West Bengal',
    date: '20 July IST, Saturday,  Ashadha Shukla Purnima (From 05:59 PM, July 20 to 03:46 PM, July 21)',
  },
  {
    id: 3,
    img: 'https://res.cloudinary.com/diygvwkec/image/upload/v1721406642/1721209812036_cgf1es.webp',
    heading: 'Maa Bagalamukhi Tantra Yukta Havan',
    para: 'For Victory in Court Cases and Victory over Enemies',
    location: 'Shaktipeeth Maa Tarapith Temple,  Birbhum, West Bengal',
    date: '20 July IST, Saturday,  Ashadha Shukla Purnima (From 05:59 PM, July 20 to 03:46 PM, July 21)',
  },
  {
    id: 4,
    img: 'https://res.cloudinary.com/diygvwkec/image/upload/v1721406667/1720715847294_u5wmub.webp',
    heading: 'Shani Saade Saati Peeda Shanti Mahapuja and Til Tel Abhishek',
    para: 'For Prevention of Misfortunes and Adversitie',
    location: 'Shaktipeeth Maa Tarapith Temple,  Birbhum, West Bengal',
    date: '20 July IST, Saturday,  Ashadha Shukla Purnima (From 05:59 PM, July 20 to 03:46 PM, July 21)',
  },
]
const Puja = () => {
  return (
    <div className="main-container-toall">
      <Navbar />
      <div className="puja-main-container">
        <div className="puja-main-container-sec1">
          <p>
            Perform your Puja as per Vedic rituals at Famous Hindu Temples in
            India with Sri Mandir
          </p>
          <img src="https://res.cloudinary.com/diygvwkec/image/upload/v1721405209/img_desktop_banner_review_d3hhi7.webp" />

          <div className="pujas-list">
            {pujaimages.map(each => {
              const {id, img, heading, para, location, date} = each
              return (
                <div key={id} className="puja">
                  <div className="pujaimage">
                    <img src={img} alt="pujaImage" />
                  </div>
                  <h1 className="pujaheading">{heading}</h1>
                  <h1
                    className="pujaheading2"
                    style={{marginBottom: '10px', fontWeight: '500'}}
                  >
                    {para}
                  </h1>
                  <div
                    className="address"
                    style={{
                      display: 'flex',
                      marginTop: '10ppx',
                      marginBottom: '10px',
                      alignItem: 'center',
                    }}
                  >
                    <img
                      src="https://res.cloudinary.com/diygvwkec/image/upload/v1721437492/temple_venue_borderless_j2agis.svg"
                      className="address-icons"
                      style={{width: '20px', height: '20px'}}
                    />
                    <p
                      className="address-para"
                      style={{
                        fontSize: '20px',
                        fontFamily: 'Times New Roman, Times, serif',
                        marginLeft: '10px',
                        fontWeight: '550',
                      }}
                    >
                      {location}
                    </p>
                  </div>
                  <div
                    className="address"
                    style={{
                      display: 'flex',
                      marginTop: '10ppx',
                      marginBottom: '10px',
                      alignItem: 'center',
                    }}
                  >
                    <img
                      src="https://res.cloudinary.com/diygvwkec/image/upload/v1721437481/ic_puja_date_1_my8he5.svg"
                      className="address-icons"
                      style={{width: '20px', height: '20px'}}
                    />
                    <p
                      style={{
                        fontSize: '20px',
                        fontFamily: 'Times New Roman, Times, serif',
                        marginLeft: '10px',
                        fontWeight: '550',
                      }}
                    >
                      {date}
                    </p>
                  </div>

                  <Link to={`/selectpuja/${id}`} className="button">
                    <button >
                      Participate
                      <FaArrowRightLong className="rightarrow" />
                    </button>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Puja
