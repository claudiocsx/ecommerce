import React from 'react'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import NavBar from '../components/NavBar'
import Slider from '../components/Slider'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'


function Home() {
    return (
        <div>
            <Announcement/>
            <NavBar/>
            <Slider/>
            <Categories/>
            <Products/>
            <Newsletter/>
        </div>
    )
}

export default Home
