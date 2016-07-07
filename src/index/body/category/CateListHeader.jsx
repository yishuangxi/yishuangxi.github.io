
import React from 'react'
import CSSModules from 'react-css-modules'
import style from './CateListHeader.css'

class CateListHeader extends React.Component{
    constructor(props){
        super()
        this.props = props
        this.state = {}
    }
    
    render(){
        return (
            <div styleName="header">
                <h1>header {this.props.name}</h1>
            </div>
        );
    }
}

export default CSSModules(CateListHeader, style)