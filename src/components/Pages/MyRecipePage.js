import React, { useState, useEffect } from 'react';
//useState,useEffect는는 함수형 컴포넌트에서 state,effect를 사용하기 위한 Hook임
//state기능을 사용하면 state가 변경될때마다 다시 렌더링함
//함수형 컴포넌트는 class형과 달리 this를 사용할수없으므로 Hook기능을 사용해야함
//effect는 컴포넌트가 생성,업데이트,삭제의 순서나 순간을 이용하기 위해 사용함
//아래의 경우 useEffect( (매개변수) => {실행내용}, [state변수이름] )는 state변수이름을 작성하지 않았으므로
//처음 컴포넌트가 생성될때 fetch함수가 한번만 실행됨

function MyRecipePage(props) {
    const [responseData, setResponseData] = useState([]);
    useEffect(() => {//굳이 effect를 사용한것은 fetch 함수가 렌더링 함수밖에 작성되면 무한정으로 실행되어 한버만 실행되게함
        fetch('http://localhost:3000/a?id=1')
        .then(response => response.json())
        .then(data => setResponseData(data));
    }, []);
    
    return (
        <div>
            마이 레시피 
            {responseData.map(item => (
                <div key={item.GRADE_NO}>
                    {Object.entries(item).map(([key, value]) => (
                        <div key={key}>{key}: {value}</div>
                    ))}
                </div>
            ))}
        </div>
      );
}

export default MyRecipePage;