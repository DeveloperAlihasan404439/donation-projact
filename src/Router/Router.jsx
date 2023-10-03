import {createBrowserRouter} from 'react-router-dom'
import MainLayOut from '../pages/MainLayOut/MainLayOut'
import Home from '../pages/Home/Home'
import CartDateils from '../copanent/CartDateils/CartDateils'
import Donation from '../pages/Donation/Donation'
import Statistics from '../pages/Statistics/Statistics'
import Error from '../pages/Error/Error'
import Registor from '../copanent/Authentication/Registor/Registor'
import Login from '../copanent/Authentication/Registor/Login/Login'
import PriveatRout from '../pages/PriveatRout/PriveatRout'
import ForgotPassword from '../copanent/Authentication/ForgotPassword/ForgotPassword'

 export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayOut/>,
        errorElement: <Error/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/dateils/:id',
                element: <PriveatRout><CartDateils/></PriveatRout>
            },
            {
                path: '/donation',
                element: <Donation/>
            },
            {
                path: '/statistics',
                element: <Statistics/>
            },
            {
                path: '/registor',
                element: <Registor/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/forgetPassword',
                element: <ForgotPassword/>
            },
        ]
    }
])