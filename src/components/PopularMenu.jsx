import React, { useEffect, useState } from 'react';
import SectionTile from './sectionTile';
import axios from 'axios';
import MenuItem from '../shared/MenuItem';

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(()=>{
        fetchData();
    },[])
    const fetchData = async() =>{
        const {data} = await axios.get('menu.json')
        const popularItems = data.filter(item => item.category === 'popular');
        setMenu(popularItems);
    }
    console.log(menu);
     return (
        <section className='mb-24'>
            <div>
                <SectionTile subtitle={'Check it out'} title={'FROM OUR MENU'}></SectionTile>
            </div>
            <div className='grid md:grid-cols-2 gap-10'>
                {
                    menu.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className='flex justify-center my-6'>
                <button className=' border-b-2 border-black uppercase'>View Full  Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;