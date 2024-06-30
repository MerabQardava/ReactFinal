
import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./Home";
import TopSellersGenres from "./TopSellers/TopSellersGenres";
import TopSellerBooks from "./TopSellers/TopSellerBooks";
import AdvancedSearch from "./Advanced Search/AdvancedSearch";
import FavouriteBooks from "./Favorites Page/FavouriteBooks";



function App() {
  return (
      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/best" element={<TopSellersGenres/>}/>
        <Route path="/best/:genre" element={<TopSellerBooks/>}/>
        <Route path="/advanced_search" element={<AdvancedSearch/>}/>
        <Route path="/favourites" element={<FavouriteBooks/>}/>

      </Routes>

  );
}

export default App;
