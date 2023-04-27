import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {HomeBtn,MyRecipeBtn,DiscoverRecipeBtn} from './components/globalNav';
import HomePage from './components/Home/HomePage';
import MyRecipePage from './components/MyRecipe/MyRecipePage';
import DiscoverRecipePage from './components/DiscoverRecipe/DiscoverRecipePage';
import RecipeDetail from './components/RecipeDetail/RecipeDetail';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes, Route} from 'react-router-dom';//라우터 라이브러리

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <HomeBtn />
    <MyRecipeBtn />
    <DiscoverRecipeBtn />
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/myrecipe' element={<MyRecipePage/>} />
        <Route path='/recipedetail/:id' element={<RecipeDetail/>} />
        <Route path='/discoverrecipe' element={<DiscoverRecipePage/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
