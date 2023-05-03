import React, { useState, useEffect } from 'react';

function DiscoverRecipePage(props) {
    const [responseData, setResponseData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/a?id=1')
            .then(response => response.json())
            .then(data => setResponseData(data));
    }, []);
    return (
        <div>
            레시비 발견
            {responseData.length > 0 ?
                responseData[0].GRADE_POINT : '데이터 로딩 중...'}
        </div>
    );
}

export default DiscoverRecipePage;