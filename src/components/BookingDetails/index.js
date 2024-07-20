import Navbar from '../Navbar'
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import './index.css'

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

const BookingDetails = () => {
  const {id} = useParams()
  const [productData, setProductData] = useState(null)

  const getDetails = data => {
    const findItem = selectPujaPackage.find(each => each.id === parseInt(data))
    setProductData(findItem)
  }

  useEffect(() => {
    console.log('ID from params:', id) // Log ID from params
    getDetails(id)
  }, [id])

  useEffect(() => {
    console.log('Product Data:', productData) // Log productData
  }, [productData])


const bookSuucce=()=>{
  return(
    alert("Booking is Successfully Completed")
  )
}
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <Navbar />

      <div className="bookingdetails-main-container">
        <div className="leftpart">
          <div className="headpart" style={{marginBottom: '20px'}}>
            <h1>Booking Details</h1>
            <p>
              Panditji will take these names along with gotra during the puja.
            </p>
            <input type="text" placeholder="Enter Name" />
          </div>
          <div className="headpart">
            <h1>Fill participant’s gotra </h1>
            <p>Gotra will be recited during the puja.</p>
            <input type="text" placeholder="Gotra" />
          </div>

          <div className="gotra">
            <input type="checkbox" />
            <p>I don't know my gotra</p>
          </div>

          <button className="proceedtobook" onClick={bookSuucce}>Proceed to Book</button>
        </div>

        <div className="rightpart">
          {productData ? (
            <div className="rightpartdetails">
              <h1 style={{color: 'black'}}>{productData.desc1}</h1>
              <p>Individual Pooja</p>
              <p>${productData.cost}</p>
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
                     Shree Shanidev Temple, Shani Shingnapur, Maharashtra
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
                     20 July IST, Saturday, Ashadha Shukla Chaturdashi
                    </p>
                  </div>
            </div>
          ) : (
            <p>Loading...</p>
          )}

        </div>
      </div>
    </div>
  )
}

export default BookingDetails
