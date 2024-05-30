import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import { Product } from "./pages/Product";
import { Pricing } from "./pages/Pricing";
import { Homepage } from "./pages/Homepage";
import { PageNotFound } from "./pages/PageNotFound";
import { AppLayout } from "./pages/AppLayout";
import { Login } from "./pages/Login";
import { CityList } from "./components/CityList";
import { CountryList } from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";

const BASE_URL = "http://localhost:8000";

export default function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // useEffect + IIFE => Immediately Invoked Function Expression:
  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
        console.log(data);
      } catch (err) {
        throw new Error("There was an error loading data..." + err);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []); // we don't need to add the dependency here, otherwise we get the problem of looping

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Homepage />} /> OR:*/}
        <Route index element={<Homepage />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="product" element={<Product />} />
        <Route path="login" element={<Login />} />
        <Route path="app" element={<AppLayout />}>
          {/* index means that it would be our default Route, when there is no nested route and it would be the same when we have this nested route: /app/cities */}
          <Route
            index
            element={<CityList cities={cities} isLoading={isLoading} />}
          />
          <Route
            path="cities"
            element={<CityList cities={cities} isLoading={isLoading} />}
          />

          <Route path="cities/:id" element={<City />} />

          <Route
            path="countries"
            element={<CountryList cities={cities} isLoading={isLoading} />}
          />
          <Route path="form" element={<Form />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
