import './index.css'
import {FaArrowRightLong} from 'react-icons/fa6'
import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import Navbar from '../Navbar'
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

const selectPujaPackage = [
  {
    id: 5,
    cost: 51,
    memebers: 1,
    desc1:
      'Pandit ji will call out your name and gotra during the puja sankalp.',
    desc2:
      'Opt for additional offerings like Vastra Daan, Anna Daan, Gau Seva, or Deep Daan to be done in your name.',
    desc3:
      'Upon completion, a video of your puja and offering will be shared with you on your registered Email ID or can be found in your booking history within 3-4 days.',
    img: 'https://res.cloudinary.com/diygvwkec/image/upload/v1721439350/1709553610515_c708vd.webp',
  },
  {
    id: 6,
    cost: 101,
    memebers: 3,
    desc1:
      'Pandit ji will call out your name and gotra during the puja sankalp.',
    desc2:
      'Opt for additional offerings like Vastra Daan, Anna Daan, Gau Seva, or Deep Daan to be done in your name.',
    desc3:
      'Upon completion, a video of your puja and offering will be shared with you on your registered Email ID or can be found in your booking history within 3-4 days.',
    img: 'https://res.cloudinary.com/diygvwkec/image/upload/v1721439340/1711095723430_qtx4lx.webp',
  },
  {
    id: 7,
    cost: 70,
    memebers: 2,
    desc1:
      'Pandit ji will call out your name and gotra during the puja sankalp.',
    desc2:
      'Opt for additional offerings like Vastra Daan, Anna Daan, Gau Seva, or Deep Daan to be done in your name.',
    desc3:
      'Upon completion, a video of your puja and offering will be shared with you on your registered Email ID or can be found in your booking history within 3-4 days.',
    img: 'https://res.cloudinary.com/diygvwkec/image/upload/v1721439340/1711095723430_qtx4lx.webp',
  },
]
const SelectPuja = () => {
  const {id} = useParams()
  const [productData, setProductData] = useState(null)
  // console.log(id)

  const getDetails = id => {
    const findItem = pujaimages.find(each => each.id === parseInt(id))
    setProductData(findItem)
  }

  useEffect(() => {
    getDetails(id)
  }, [id])

  return (
    <div className="select-puja">
      <Navbar />
      <div className="select-puja-container">
        <div className="select-puja-section">
          {productData && (
            <>
              <div>
                <img src={productData.img} alt={productData.heading} />
              </div>
              <div>
                <h1>{productData.heading}</h1>
                <p style={{marginBottom: '10px', fontWeight: '500'}}>
                  {productData.para}
                </p>
                <p style={{marginBottom: '10px', fontWeight: '500'}}>
                  Till now <span>2,00,000+ Devotees</span>have participated in
                  Pujas conducted by Sri Mandir Puja Seva.
                </p>
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
                      marginLeft: '6px',
                      fontWeight: '550',
                    }}
                  >
                    {productData.location}
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
                      marginLeft: '6px',
                      fontWeight: '550',
                    }}
                  >
                    {productData.date}
                  </p>
                </div>
                <button className="select-package">
                  Select puja package{' '}
                  <FaArrowRightLong className="rightarrow" />
                </button>
              </div>
            </>
          )}
        </div>

        <div className="different-packages">
          {selectPujaPackage.map(each => {
            const {cost, memebers, desc1, desc2, desc3, img, id} = each
            return (
              <div className="select-puja-package">
                <div className="select-puja-package-section1">
                  <span>$ {cost}</span>
                  <span>Individual Puja</span>
                  <p>Puja for {memebers} memeber</p>
                </div>

                <div className="select-puja-package-section2">
                  <div className="points">
                    <img src={img} />
                    <p>{desc1}</p>
                  </div>

                  <div className="points">
                    <img src={img} />
                    <p>{desc2}</p>
                  </div>

                  <div className="points">
                    <img src={img} />
                    <p>{desc3}</p>
                  </div>
                </div>
                <div className="select-puja-button-package">
                  <Link to={`/packagepuja/${id}`}>
                    <button className="puja-package-button">
                      Participate <FaArrowRightLong className="rightarrow" />
                    </button>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
export default SelectPuja
