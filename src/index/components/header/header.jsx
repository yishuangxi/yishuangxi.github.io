/**
 * Created by lenovo on 2016/7/6.
 */

import React from 'react'
import style from './header.css'

export default class Header extends React.Component{
    render(){
        return (
            <div className={style.header}>
                <blockquote className={style.quote}>STAY HUNGRY, STAY FOOLISH </blockquote>
                <h1 className={style.name}>MR.YISHUANGXI</h1>
            </div>
        );
    }
}