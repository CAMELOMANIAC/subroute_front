import { createStore } from "redux";
//더 이상 createStore을 사용하는것이 권장되지않고 configureStore으로 옮겨간다고함

//전역으로 관리할 state
const initialstate ={
    counter:0,
    text:'',
    list:[]
};

//액션타입 정의(리듀서에서 어떤 액션을 처리할지 이 문자열과 같은 type속성으로 확인함)
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_TO_LIST = 'ADD_TO_LIST';

/*액션 생성함수 정의*/
//리듀서에 사용될 액션객체로 따로 new Action처럼 생성하는것이 아니라 type속성을 가진 객체를 생성하면된다
//함수형
function increase(){
    return{
        type:INCREASE
    }
}
//화살표함수형
const decrease=()=>{
    type:DECREASE
}
//액션에 타입속성외에 다른 값들도 넣을수있음
const changeText=(text)=>{
    type:CHANGE_TEXT,
    text
}
const addToList=(item)=>{
    type:ADD_TO_LIST,
    item
}

//리듀서 만들기(만들어놓은 액션 타입들로 리듀서를 만들기)
//리듀서란? 리듀서를 사용하지 않은 컴포넌트의 state 값을 변경할때 setter method로 값을 변경한것처럼
//리덕스에서는 리듀서로 state값을 변경함
//리덕스로 state값을 바꾸더라도 원시형 값이 아니라 객체형값(object,array)은 값의 변화를 감지하지
//못하므로 추가적인 작업이 필요하고 리듀서에서만 값을 수정하므로 문제가 생기면 파악하기 쉽도록 불변성을 유지해야함
function reducer(state = initialstate,action){//리듀서함수는 매개변수로 state 초기값과 action을 받는다
    switch(action.type){
        case INCREASE:
            return{
                ...state,//전개 연산자를 통해 복사
                counter:state.counter+1
            }
    }
}

const store = createStore(reducer);//스토어 생성
console.log(store.getState());

const listener =()=>{//리스너 생성 state값이 변경되면 자동으로 호출됨
    const state=store.getState();
    console.log(state)
}
store.subscribe(listener);//스토어 리스너 구독

//dispatch함수로 액션을 불러와서 state값을 변경할수있다

store.dispatch(increase());