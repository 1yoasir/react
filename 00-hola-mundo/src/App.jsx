import './App.css'
import { StaticComponent } from './StaticComponent'
import {DinamicComponentListUser} from './DinamicComponentListUser'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

export function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/static' element={<StaticComponent/>}></Route>
                <Route path='/dinamic' element={<DinamicComponentListUser/>}></Route>
            </Routes>
        </BrowserRouter>

    )
}