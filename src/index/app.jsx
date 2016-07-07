/**
 * Created by lenovo on 2016/7/6.
 */
import React from 'react'
import Header from './header/Header.jsx'
import Body from './body/Body.jsx'

export default class App extends React.Component{
    render(){
        return (
           <div>
                <Header />
                <Body />
           </div>
        );
    }
}