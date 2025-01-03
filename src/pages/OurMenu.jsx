import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../shared/Cover';
import banner from '../assets/menu/banner3.jpg';
import desertImg from '../assets/menu/dessert-bg.jpeg';
import soupImg from '../assets/menu/soup-bg.jpg';
import pizzaImg from '../assets/menu/pizza-bg.jpg';
import saladImg from '../assets/menu/salad-bg.jpg';

import SectionTile from '../components/sectionTile';
import useMenu from '../hooks/UseMenu';
import MenuItems from '../shared/MenuItems';
const OurMenu = () => {
    const [menu] = useMenu();
    const offered = menu.filter(item => item.category === 'offered');
    const pizzas = menu.filter(item => item.category === 'pizza');
    const soups = menu.filter(item => item.category === 'soup');
    const desserts = menu.filter(item => item.category === 'dessert');
    const salads = menu.filter(item => item.category === 'salad');
    return (
        <div>
            <Helmet>
                <title>Boss | Menu</title>
            </Helmet>
            <Cover image={banner} title={'OUR MENU'} description={'Would you like to try a dish?'}></Cover>

            {/* Today's Offer */}
            <SectionTile subtitle={'Dont miss'} title={'TODAYs OFFER'}></SectionTile>
            <MenuItems title={'OUR MENU'} items={offered}></MenuItems>

            {/* Desserts */}
            <Cover image={desertImg} title={'DESSERTS'} description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></Cover>
            <MenuItems title={'desert'} items={desserts}></MenuItems>

            {/* Pizza */}
            <Cover image={pizzaImg} title={'PIZZA'} description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></Cover>
            <MenuItems title={'pizza'} items={pizzas}></MenuItems>

            {/* Soup */}
            <Cover image={soupImg} title={'SOUP'} description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></Cover>
            <MenuItems title={'soup'} items={soups}></MenuItems>

            {/* Salad */}
            <Cover image={saladImg} title={'salad'} description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></Cover>
            <MenuItems title={'salad'} items={salads}></MenuItems>



        </div>
    );
};

export default OurMenu;