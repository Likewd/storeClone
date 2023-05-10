import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import SearchHeader from './Components/Header/SearchHeader'
import UserNavigation from './Components/Header/UserNavigation'
import HeroSection from './Components/HeroSection/HeroSection'
import ShopbyCatagary from './Components/Catagories/ShopbyCatagary'
import PapulerProduct from './Components/PapolerProduct/PapulerProduct'
import PapulerStoreName from './Components/PapulerStoreName/PapulerStoreName'
import ConsumerFood from './Components/ConsumerFood/ConsumerFood'
import WomenMenColthing from './Components/WomenMenColthing/WomenMenColthing'
import FasionAndBueaty from './Components/FasionAndBueaty/FasionAndBueaty'
import HomeAndLiving from './Components/HomeAndLiving/HomeAndLiving'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <div className=' '>
      <Header></Header>
      <SearchHeader></SearchHeader>
      <UserNavigation></UserNavigation>
      <HeroSection></HeroSection>
      <ShopbyCatagary></ShopbyCatagary>
      <PapulerProduct></PapulerProduct>
      <PapulerStoreName></PapulerStoreName>
      <ConsumerFood></ConsumerFood>
      <WomenMenColthing></WomenMenColthing>
      <FasionAndBueaty></FasionAndBueaty>
      <HomeAndLiving></HomeAndLiving>
      <Footer></Footer>

    </div>
  )
}

export default App
