import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Search } from './pages/Search'
import { Product } from './pages/Product'
import { DefaultLayout } from './layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='search/:searchTerm' element={<Search />} />
        <Route path='product/:searchItem' element={<Product />} />
      </Route>
    </Routes>
  )
}