import React from 'react';

import './index.css';
import {getMyList, getRecom} from './http/httpInstance'
import { connect } from "react-redux";
import Mod from './pages/mod'
import imgURL from './pic/logo.png'
//import Bottom from './pages/bottom'
  
class App extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
      }
    }
    render () {
      let listData = this.props.listData
      let recomData = this.props.recomData
        return (
          <div>
            <img src={imgURL} 
            style = {{ left: '0', top: '0', width: '400px', height: '150px'}} alt=""  className="logo"></img>
            <Mod list={listData} clickEvent={this.props.delListEvent} operate={'Delete'} title={'My List'}></Mod>
            <Mod list={recomData} clickEvent={this.props.delRecomEvent} operate={'Add'} title={'Recommendations List'}></Mod>

          </div>
        )
    }
  
    async componentDidMount () {
      let list = await getMyList()
      let recom = await getRecom()
      this.props.updateListEvent(list)
      this.props.updateRecomEvent(recom)
   }
   
}

function mapStateToProps (state) {
  return {
    listData: state.listData,
    recomData: state.recomData
  }
}
function mapDispatchToProps (dispatch) {
  return {
    updateListEvent: (data) => {
      dispatch({
        type:'updateList',
        data:data
      })
    },
    updateRecomEvent:(data) => {
      dispatch({
        type:'updateRecom',
        data:data
      })
    },
    delListEvent: (id) => {
      dispatch({
        type: 'delList',
        id:id
      })
    },
    delRecomEvent:(id) => {
      dispatch({
        type: 'delRecom',
        id:id
      })
    }
  }
}

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(App)
