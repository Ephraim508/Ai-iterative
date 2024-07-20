import Navbar from '../Navbar'
import {useParams} from 'react-router-dom'
import {FaArrowRightLong} from 'react-icons/fa6'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

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

const PackagePuja = () => {
  const {id} = useParams()
  const [productData, setProductData] = useState(null)
  // console.log(id)

  const getDetails = data => {
    const findItem = selectPujaPackage.find(each => each.id === parseInt(data))
    if (findItem) {
      setProductData(findItem)
    } else {
      console.error('Package not found for id:', data)
    }
  }

  useEffect(() => {
    if (id) {
      getDetails(id)
    }
  }, [id])

  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <Navbar />

      <div className="setDispaly">
        <div className="packagepuja-main-container">
          <div className="packagepuja-main-section1">
            <h1>
              Shani Saade Saati Peeda Shanti Mahapuja and Til Tel Abhishek
            </h1>
            <div className="packagepuja-main-section1-desc">
              {productData ? (
                <>
                  <p>Individual puja</p>
                  <p>${productData.cost}</p>
                </>
              ) : (
                <p>Loading...</p>
              )}
            </div>
          </div>

          <div className="packagepuja-main-bill-details">
            <h1>Bill Details</h1>
            <div className="bills">
              {productData ? (
                <>
                  <p>Individual Bill</p>
                  <p>${productData.cost}</p>
                </>
              ) : (
                <p>Loading...</p>
              )}
            </div>

            <div className="bills">
              {productData ? (
                <>
                  <p>Total Bill</p>
                  <p>${productData.cost}</p>
                </>
              ) : (
                <p>Loading...</p>
              )}
            </div>

            <div className="selectpujapackageconti-button">
              {productData && (
                <div>
                  <p>${productData.cost}</p>
                  <p>Individual puja</p>
                </div>
              )}
              <Link to={`/bookingdetails/${productData ? productData.id : ''}`}>
                <div
                  style={{display: 'flex', alignItems: 'center', margin: '0px'}}
                >
                  <p>Continue</p>
                  <FaArrowRightLong className="rightarrow" />
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="packagepuja-right-section">
          <h1>Add more offering items</h1>

          <div className="card">
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginRight: '10px',
              }}
            >
              <h1>Deep Daan (Offering of Lamps)</h1>
              <p>
                Deep Daan, or the act of donating lamps, leads to happiness,
                peace, harmony and positivity. It will be done in your name at
                Haridwar's Ganga Ghat after the puja.
              </p>
              <span>$78</span>
            </div>

            <div>
              <img
                src="https://res.cloudinary.com/diygvwkec/image/upload/v1721444627/1710915621240_tajkc3.webp"
                style={{width: '100px', height: '80px', borderRadius: '10px'}}
              />
            </div>
          </div>

          <div className="card">
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginRight: '10px',
              }}
            >
              <h1>Deep Daan (Offering of Lamps)</h1>
              <p>
                Deep Daan, or the act of donating lamps, leads to happiness,
                peace, harmony and positivity. It will be done in your name at
                Haridwar's Ganga Ghat after the puja.
              </p>
              <span>$51</span>
            </div>

            <div>
              <img
                src="https://res.cloudinary.com/diygvwkec/image/upload/v1721444627/1710915621240_tajkc3.webp"
                style={{width: '100px', height: '80px', borderRadius: '10px'}}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PackagePuja
