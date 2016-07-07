
import React from 'react'
import CateItem from './CateItem.jsx'
import CateListHeader from './CateListHeader.jsx'
import CSSModules from 'react-css-modules'
import style from './CateList.css'


class CateList extends React.Component{
    constructor(props){
        super()
        this.props = props
        this.state = {}
    }
    render(){

        return (
            <div styleName="list">
                {this.renderCateList()}
            </div>
        );
    }

    renderCateList(){
        return this.props.dataList.map((cate, index) => {
             return (
                 <CateListHeader name={cate.name} />
             )
        })
    }

    renderCateItems(articles){
        return articles.map((article, index)=>{
            return <CateItem />
        })
    }
}

export default CSSModules( CateList, style )