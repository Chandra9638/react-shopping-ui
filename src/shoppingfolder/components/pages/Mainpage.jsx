import React,{useState} from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Banner from '../Banner'
import Collection from '../Collection'
import { Gents, Ladies } from '../../data'
import WomenCollection from '../WomenCollection'





function Mainpage() {
  const [gentsFashion, setGentsFashion] = useState(Gents)
  const [ladiesFashion,setLadiesFashion] = useState(Ladies)
  return (
    <div>
     <Header />
     <Banner />
    
     <Collection gentsFashion={gentsFashion} />
     <WomenCollection ladiesFashion={ladiesFashion} />
     <Footer />
    </div>
  )
}

export default Mainpage