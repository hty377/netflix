import React from 'react';

import './index.css';
import {getMyList, getRecom} from './http/httpInstance'
import { connect } from "react-redux";
import Mod from './pages/mod'
import imgURL from './pic/logo.png'
  
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
  
   //lifecycle method, render the component, load the data
    async componentDidMount () {
      let list = await getMyList()
      let recom = await getRecom()
      this.props.updateListEvent(list)
      this.props.updateRecomEvent(recom)
   }
   
}

// map the data in the store to the component's props
function mapStateToProps (state) {
  return {
    listData: state.listData,
    recomData: state.recomData
  }
}

//map the dispatch to the components props
function mapDispatchToProps (dispatch) {
  return {
    // update the data in the myList to the state
    updateListEvent: (data) => {
      dispatch({
        type:'updateList',
        data:data
      })
    },
    // update the data in the recommendation to the state
    updateRecomEvent:(data) => {
      dispatch({
        type:'updateRecom',
        data:data
      })
    },
    //after click the 'remove' button, the data in myList -1, and data in recomendaton + 1
    delListEvent: (id) => {
      dispatch({
        type: 'delList',
        id:id
      })
    },
    //after click the 'add' button, the data in recommendation -1, and data in myList +1
    delRecomEvent:(id) => {
      dispatch({
        type: 'delRecom',
        id:id
      })
    }
  }
}

// connect this two funcs to the component
export default connect (
  mapStateToProps,
  mapDispatchToProps
)(App)
