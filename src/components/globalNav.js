import React from 'react';
import { Link } from 'react-router-dom';

function HomeBtn(props) {
    return (
        <div>
            <Link to="/">홈</Link>
        </div>
    );
}
function MyRecipeBtn(props) {
    return (
        <div>
            <Link to="/myrecipe">나의 레시피</Link>
        </div>
    );
}
function DiscoverRecipeBtn(props) {
    return (
        <div>
            <Link to="/discoverrecipe">레시피 발견</Link>
        </div>
    );
}

export{HomeBtn,MyRecipeBtn,DiscoverRecipeBtn};