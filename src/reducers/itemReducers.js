import {addItem} from './action/action'

function itemReducer(currentState, action) {//리듀서는 현재 상태와, 액션 매개변수를 받아야함
  if (currentState === undefined) {//만약 현재상태값을 정의하지 않았을때를 대비하기위함
    return {
      item: 1,
    };
  }
  const newState = {...currentState};//리액트는 원래상태와 바뀐 상태를 비교해야하므로 원본상태의 불변성을 유지해야함
  
  if  (action.type === addItem().type) {
    newState.item += 1;
  }

  return newState;
}

export default itemReducer;