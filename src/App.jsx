import { Route } from "react-router";
import FoodCard from "./components/FoodCard";
import Header from "./components/Header";
import Recipe from "./components/Recipe";
import SearchBar from "./components/SearchBar";
import { Routes } from "react-router";
import Product from "./components/Product";
import Category from "./components/Category";
import Support from "./components/Support";
import PageNotFound from "./components/PageNotFound";
import Food from "./components/Food";

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <SearchBar />
              <Recipe />
            </div>
          }
        />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<Food/>} />
        <Route path="/category" element={<Category />} />
        <Route path="/support" element={<Support />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}
