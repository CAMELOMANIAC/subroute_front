import React from 'react';
import { useParams } from 'react-router-dom';

function RecipeDetail(props) {
    const { id } = useParams();
    return (
        <div>
            동적라우팅{id}
        </div>
    );
}

export default RecipeDetail;