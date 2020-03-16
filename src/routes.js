import React from 'react'
import HomePage from './pages/Home/HomePage'
import NotFoundPage from './pages/NotFound/NotFoundPage'
import ProductList from './pages/ProductList/ProductList'
import ProductAction from './pages/ProductActions/ProductAction'


const routes = [
    {
        path: '/home',
        exact: true,
        main: () => <HomePage />
    },
    {
        path: '/products',
        exact: true,
        main: () => <ProductList />
    },
    {
        path: '/products/add',
        exact: true,
        main: ({history}) => <ProductAction history={history}/>
    },
    {
        path: '/products/edit/:id',
        exact: true,
        main: ({history,match}) => <ProductAction match={match} history={history}/>
    },
    {
        path: '',
        exact: false,
        main: () => <NotFoundPage />
    },
]

export default routes