import React, { Suspense } from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Landingpage from "./pages/landingpage";
import Layout from "./components/Layout";
import CircularProgress from "@mui/material/CircularProgress";
const DetailsPage = React.lazy(() => import("./pages/detailspage"));
const CategoryPage = React.lazy(() => import("./pages/catergorypage"));

function App() {
  return (
    <Layout>
      <Header></Header>
      <Suspense fallback={<CircularProgress />}>
        <Routes>
          <Route path="/" element={<Landingpage></Landingpage>}></Route>
          <Route path="/:type" element={<CategoryPage></CategoryPage>}></Route>
          <Route
            path="/:type/:page"
            element={<DetailsPage></DetailsPage>}
          ></Route>
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
