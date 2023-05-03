import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {HomeBtn,MyRecipeBtn,DiscoverRecipeBtn} from './components/globalNav';
import HomePage from './components/Pages/HomePage';
import MyRecipePage from './components/Pages/MyRecipePage';
import DiscoverRecipePage from './components/Pages/DiscoverRecipePage';
import RecipeDetail from './components/Pages/RecipeDetail';
import reportWebVitals from './reportWebVitals';
//라우터 관련
import { BrowserRouter,Routes, Route} from 'react-router-dom';
//리덕스 관련
import store from './reducers/store/store';
import { Provider } from 'react-redux';
//Provider로 store를 사용할 컴포넌트를 묶어야하고

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <HomeBtn />
    <MyRecipeBtn />
    <DiscoverRecipeBtn />
    <Provider store={store}>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/myrecipe' element={<MyRecipePage/>} />
        <Route path='/recipedetail/:id' element={<RecipeDetail/>} />
        <Route path='/discoverrecipe' element={<DiscoverRecipePage/>} />
      </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
