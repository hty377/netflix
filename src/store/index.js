
import { createStore} from 'redux'

const reducer = function ( state = {num: 0, listData:[], recomData:[] },action) {
  let list = state.listData
  let recom = state.recomData
  switch(action.type) {
      case 'updateList': state.listData = action.data;break;
      case 'updateRecom': state.recomData = action.data;break;
      case 'delList': 
          let index = list.findIndex(item => { return item.id === action.id })
          let delData = list.find(item => { return item.id === action.id })
          recom.push(delData)
          list.splice(index,1);
          return Object.assign({},state,{listData:[...list], recomData:[...recom]})
       case 'delRecom': 
          let i = recom.findIndex(item => { return item.id === action.id })
          let delrecData = recom.find(item => { return item.id === action.id })
          list.push(delrecData)
          recom.splice(i,1);
          return Object.assign({},state,{listData:[...list], recomData:[...recom]})
      
      default: break
  }

  return Object.assign({}, state);
}
const store = createStore(reducer)

export default store
