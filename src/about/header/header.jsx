/**
 * Created by lenovo on 2016/7/6.
 */

import React from 'react'
import style from './header.css'
import CSSModules from 'react-css-modules'
import 'normalize.css'

class Header extends React.Component {
    render() {
        return ( 
            <div styleName='header'>
                <blockquote styleName='quote'>STAY HUNGRY, STAY FOOLISH</blockquote>
                <h1 styleName='name'>MR.YISHUANGXI</h1>
            </div>
        );
    }
}

export default CSSModules(Header, style)