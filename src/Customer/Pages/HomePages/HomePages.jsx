import React from 'react'
import MainCarousel from '../../Components/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../Components/HomeSectionCarousel/HomeSectionCarousel'
import { mens_kurta } from '../../../Data/Mens_kurta'

function HomePages() {
  return (
    <>
     <MainCarousel/>

     <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
        <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Kurta"}/>
        <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Shoes"}/>
        <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Shirts"}/>
        <HomeSectionCarousel data={mens_kurta} sectionName={"Women's Kurta"}/>
        <HomeSectionCarousel data={mens_kurta} sectionName={"Wommen's Shoes"}/>
        <HomeSectionCarousel data={mens_kurta} sectionName={"Women's Shirts"}/>
     </div>
    </>
  )
}

export default HomePages
