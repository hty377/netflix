import React from 'react';
import '../index.css'


class Bottom extends React.Component {

    render(){
        let listData = this.props.list
        return (
            <div>
                <div className="title">{this.props.title}</div>
                <div className="content">
                {
                  listData.map(item => {
                    return (
                      <div key={item.id} className="item"> 
                      <img src={item.img} alt=""></img> 
                       <div className="btn" onClick={()=> {this.operateEvent(item.id)}}>{this.props.operate}</div>
                        <div>{item.title}</div>
                      </div>
                    )
                   })
                }
                </div>
            </div>
        );
    }
}

export default Bottom;