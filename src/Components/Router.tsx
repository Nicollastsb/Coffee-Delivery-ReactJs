import { Route, Routes } from 'react-router-dom'
import { Checkout } from '../Pages/Checkout/Checkout'
import { Home } from '../Pages/Home/Home'
import { Success } from '../Pages/Success/Success'
import { DefaultLayout } from '../Layouts/DefaultLayout/Index'
export function Router() {
    return (
      <Routes>
        <Route path='/Coffee-Delivery-ReactJs' element={<DefaultLayout/>}>
            <Route path='/Coffee-Delivery-ReactJs' element={<Home/>}></Route>
            <Route path='/Coffee-Delivery-ReactJs/checkout' element={<Checkout/>}></Route>
            <Route path='/Coffee-Delivery-ReactJs/success' element={<Success/>}></Route>
        </Route>
      </Routes>
    )
  }
  