import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import MainLayout from "../layouts";
import Buttons from "../components/buttons";



export default function AppRoutes() { 
    return (
        <BrowserRouter>
            <Suspense fallback={ <>Loading ...</>}>
            <Routes>
                    <Route path="/" element={<MainLayout/>}> 
                        
                        <Route index element={<></>} />
                        <Route path="forms" element={ <></>} />
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