import React, { useState } from 'react';
import Cover from '../shared/Cover';
import oderImg from '../assets/shop/banner2.jpg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../hooks/UseMenu';
import FoodCard from '../components/FoodCard';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'desert', 'drinks']
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu, loading] = useMenu(); // Ensure useMenu returns both data and loading state



    // // Handle loading state properly
    // if (loading) {
    //  <div>Loading...</div>;
    // }

    // Filter menu items by category
    const pizzas = menu?.filter(item => item.category === 'pizza') || [];
    const soups = menu?.filter(item => item.category === 'soup') || [];
    const desserts = menu?.filter(item => item.category === 'dessert') || [];
    const salads = menu?.filter(item => item.category === 'salad') || [];
    const drinks = menu?.filter(item => item.category === 'drinks') || [];

    return (
        <div>
            <Helmet>
                <title>Boss | Shop</title>
            </Helmet>
            <Cover image={oderImg} title={'Our Shop'} description={'Would you like to try a dish?'}></Cover>

            <div className='my-24'>
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>SALAD</Tab>
                        <Tab>PIZZA</Tab>
                        <Tab>SOUPS</Tab>
                        <Tab>DESSERTS</Tab>
                        <Tab>DRINKS</Tab>
                    </TabList>

                    <TabPanel>
                        <div className='grid md:grid-cols-4 gap-3 my-10'>
                            {salads.map(food => <FoodCard key={food._id} food={food}></FoodCard>)}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid md:grid-cols-4 gap-3 my-10'>
                            {pizzas.map(food => <FoodCard key={food._id} food={food}></FoodCard>)}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid md:grid-cols-4 gap-3 my-10'>
                            {soups.map(food => <FoodCard key={food._id} food={food}></FoodCard>)}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid md:grid-cols-4 gap-3 my-10'>
                            {desserts.map(food => <FoodCard key={food._id} food={food}></FoodCard>)}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid md:grid-cols-4 gap-3 my-10'>
                            {drinks.map(food => <FoodCard key={food._id} food={food}></FoodCard>)}
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Order;
