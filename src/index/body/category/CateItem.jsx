import React from 'react'
import CSSModules from 'react-css-modules'
import style from './CateItem.css'

class CateItem extends React.Component{
    constructor(props){
        super()
        this.props = props
        this.state = {}
    }
    render(){
        return (
            <div styleName="item">
                this is item
            </div>
        );
    }
}

export default CSSModules(CateItem, style)