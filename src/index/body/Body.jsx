
import React from 'react'
import CateList from './category/CateList.jsx'
import CSSModules from 'react-css-modules'
import style from './Body.css'

class Body extends React.Component{
    render(){
        return (
            <div styleName="body">
                <CateList />
            </div>
        );
    }
}

export default CSSModules(Body, style)