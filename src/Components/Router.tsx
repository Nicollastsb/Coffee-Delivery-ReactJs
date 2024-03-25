import { Route, Routes } from 'react-router-dom'
import { Checkout } from '../Pages/Checkout/Checkout'
import { Home } from '../Pages/Home/Home'
import { Success } from '../Pages/Success/Success'
import { DefaultLayout } from '../Layouts/DefaultLayout/Index'
export function Router() {
    return (
      <Routes>
        <Route path='/Coffee-Delivery' element={<DefaultLayout/>}>
            <Route path='/Coffee-Delivery' element={<Home/>}></Route>
            <Route path='/Coffee-Delivery/checkout' element={<Checkout/>}></Route>
            <Route path='/Coffee-Delivery/success' element={<Success/>}></Route>
        </Route>
      </Routes>
    )
  }
  