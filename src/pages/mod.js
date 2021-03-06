import React from 'react'
import '../index.css'

class Mod extends React.Component {
    // constructor (props) {
    //   super(props)
      
    // }
    render() {
        // get the listData from the parent
      let listData = this.props.list
      return (
        <div className='mod'>
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
      )
    }
    // remove or add, use the func from the parent
    operateEvent = (id) => {
      this.props.clickEvent(id)
    }
}

export default Mod
