import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import MainLayout from "../layouts";
import Buttons from "../components/buttons";
import MainPageComponent from "../components/main_page_component";
import FormComponent from "../components/forms";



export default function AppRoutes() { 
    return (
        <BrowserRouter>
            <Suspense fallback={ <>Loading ...</>}>
            <Routes>
                    <Route path="/" element={<MainLayout/>}> 
                        
                        <Route index element={<MainPageComponent/>} />
                        <Route path="forms" element={ <FormComponent/>} />
                        <Route path='Buttons' element={<Buttons/>} />
                        <Route path='inputs' element={ <></>} />
                        <Route path='navs' element={<></>} />
                        <Route path='modals' element={ <></>} />
                        <Route path='cards' element={ <></>} />
                        <Route path='tables' element={ <></>} />
                        <Route path='loaders' element={ <></>} />
                        <Route path='accordians' element={ <></>} />
                        
                    </Route>
                    
            </Routes>
            </Suspense>  
        </BrowserRouter> 
    )
}