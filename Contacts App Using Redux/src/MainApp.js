import './MainApp.css'
import React from 'react'
import SideMenu from './sideMenu/sideMenu'
import { Route, Switch } from 'react-router-dom';
import UserData from './Contacts/UserData'
import HomePage from './HomePage/HomePage';

const MainApp = () => {

    return (
        <div className='mainAppContainar'>

            <div className='AppSideMenu'>

                <SideMenu />

            </div>

            <div className='AppContent'>

                <Switch>

                    <Route path="/" exact>

                        <HomePage />

                    </Route>

                    <Route path="/contacts">

                        <UserData />

                    </Route>



                </Switch>

            </div>

        </div>

    )
}

export default MainApp
