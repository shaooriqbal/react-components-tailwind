import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import MainLayout from "../layouts";
import Buttons from "../components/buttons";
import MainPageComponent from "../components/main_page_component";
import FormComponent from "../components/forms";
import Inputs from "../components/inputs";
import NavBars from "../components/nav_bars";
import ModalsComponent from "../components/modals";
import Cards from "../components/cards";
import ReactTableExample from "../components/tables";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Suspense fallback={<>Loading ...</>}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<MainPageComponent />} />
            <Route path="forms" element={<FormComponent />} />
            <Route path="Buttons" element={<Buttons />} />
            <Route path="inputs" element={<Inputs />} />
            <Route path="navs" element={<NavBars />} />
            <Route path="modals" element={<ModalsComponent />} />
            <Route path="cards" element={<Cards />} />
            <Route path="tables" element={<ReactTableExample />} />
            <Route path="loaders" element={<></>} />
            <Route path="accordians" element={<></>} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
