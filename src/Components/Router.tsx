import { Route, Routes } from 'react-router-dom'
import { Checkout } from '../Pages/Checkout/Checkout'
import { Home } from '../Pages/Home/Home'
import { Success } from '../Pages/Success/Success'
import { DefaultLayout } from '../Layouts/DefaultLayout/Index'
export function Router() {
    return (
      <Routes>
        <Route path='/' element={<DefaultLayout/>}>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/checkout' element={<Checkout/>}></Route>
            <Route path='/success' element={<Success/>}></Route>
        </Route>
      </Routes>
    )
  }
  