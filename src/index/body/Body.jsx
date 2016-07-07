
import React from 'react'
import CateList from './category/CateList.jsx'
import CSSModules from 'react-css-modules'
import style from './Body.css'


const dataList = [{
    name: 'javascript',
    articles:[{
        title: 'javascript闭包研究',
        desc: '这里有最简单的关于javascript的研究，一看就懂，一学就会',
        url: 'https://yishuangxi.github.io'
    },{
        title: 'javascript闭包研究',
        desc: '这里有最简单的关于javascript的研究，一看就懂，一学就会',
        url: 'https://yishuangxi.github.io'
    }]
},{
    name: 'css',
    articles:[{
        title: 'css animations',
        desc: 'this is about css animations',
        url: 'https://yishuangxi.github.io'
    },{
        title: 'css animations2 ',
        desc: 'dddd',
        url: 'https://yishuangxi.github.io'
    }]
}]

class Body extends React.Component{
    constructor(props){
        super()
        this.state = {dataList: dataList}
    }
    render(){
        return (
            <div styleName="body">
                <CateList dataList={this.state.dataList} />
            </div>
        );
    }
}

export default CSSModules(Body, style)