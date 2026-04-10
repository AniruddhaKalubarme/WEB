import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {collection, getDocs, query, where, orderBy, limit, startAfter, Timestamp} from 'firebase/firestore'
import {db} from '../firebase.config'
import {toast} from 'react-toastify'
import ListingItems from '../components/ListingItems'
import '../styles/Offers.css'

const Offers = () => {
  const [listings, setListings] = useState(null)
  const [loading, setLoading] = useState(true)

  const params = useParams()

  useEffect(() => {
    const fetchListings = async () => {
      try{
        const listingsRef = collection(db, 'listings')
        const q = query(listingsRef, where('offer', '==', true), orderBy('time', 'desc'), limit(10))
        const querySnap = await getDocs(q)

        let listings = []

        querySnap.forEach((doc) => {
          return listings.push({
            id:doc.id,
            data: doc.data()
          })
        })

        setListings(listings)
        setLoading(false)
      }catch(error){
        console.log(error)
        toast.error("Couuld not fetch Listigns")
      }
    }

    fetchListings()
  }, [])
  return (
    <div>
      <header>
        <p className="pageHeader">
          Offers
        </p>
      </header>
      {loading ? <h3>Loading</h3> : listings && listings.length>0 ? <>
        <main>
          <ul className="categoryListings">
            {listings.map((listing) => (
              <ListingItems listing={listing.data} id={listing.id} key={listing.id} />
            ))}
          </ul>
        </main>
      </> : <p>There are no current offers</p> }
    </div>

  )
}

export default Offers