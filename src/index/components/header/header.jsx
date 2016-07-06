/**
 * Created by lenovo on 2016/7/6.
 */

import React from 'react'
import style from './header.css'

export default class Header extends React.Component{
    render(){
        return (
            <div>
                <div className={style.header}>
                    <p>STAY HUNGRY, STAY FOOLISH </p>
                    <h1>MR.YISHUANGXI</h1>
                </div>
            </div>
        );
    }
}