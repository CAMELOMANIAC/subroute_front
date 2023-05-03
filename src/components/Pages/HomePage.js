import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
//useDispatch 기능은 store에 저장된 state값을 바꾸고 싶을때
//useSelector 기능은 store에 저장된 state값을 출력 하고싶을때

function HomePage(props) {
    const item = useSelector(state => state.itemReducer.item);
    return (
        <div>
            홈{item}
        </div>
    );
}

export default HomePage;