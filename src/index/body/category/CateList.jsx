
import React from 'react'
import CateItem from './CateItem.jsx'
import CSSModules from 'react-css-modules'
import style from './CateList.css'

class CateList extends React.Component{
    render(){
        return (
            <div styleName="list">
                <CateItem />
                <CateItem />
            </div>
        );
    }
}

export default CSSModules(CateList, style)