import { Navigate, useRoutes } from "react-router-dom"
import ProductDetail from "./pages/ProductDetail";
import Register from "./pages/Register";
import Login from "./pages/Login";

import LayoutClient from "./layouts/LayoutClient";
import ProductsPage from "./pages/ProductsPage";
import LayoutAdmin from "./layouts/LayoutAdmin";

import Cart from "./pages/Cart";
import Productlist from "./pages/admin/products/ProductList";
import ProductAdd from "./pages/admin/products/ProductAdd";
import ProductEdit from "./pages/admin/products/ProductEdit";
import CategoryEdit from "./pages/admin/category/CategoryEdit";
import CategoryAdd from "./pages/admin/category/CategoryAdd";
import CategoryList from "./pages/admin/category/CategoryList";
import CustomerList from "./pages/admin/customer/CustomerList";
import OrderList from "./pages/admin/order/OrderList";

// import Test from "./pages/Test";



const routeConfig = [
  {
    // Router Client====================
    path: "/",
    element: <LayoutClient />,
    children: [
      {
        path: "/",
        element: <Navigate to="/products" />,
      },
      {
        path: "products",
        element: <ProductsPage />,
      },
      {
        path: "product/:id",
        element: <ProductDetail />
      },
      {
        path: "cart",
        element: <Cart/>,
    
      },
    ],
  },
  {
    // Router Admin
    path: "/admin",
    element: <LayoutAdmin />,
    children: [
      
     
      //Products
      {
        path: "products/list",
        element: <Productlist/>,
      },
      {
        path: "products/add",
        element: <ProductAdd />
      },
      {
        path: "products/edit/:id",
        element: <ProductEdit />
      },
      //Category
      {
        path: "category/list",
        element: <CategoryList />
      },
      {
        path: "category/add",
        element: <CategoryAdd />
      },
      {
        path: "category/edit/:id",
        element: <CategoryEdit />
      },
      //Customer
      {
        path: "customer/list",
        element: <CustomerList />
      },
      //Order
      {
        path: "order/list",
        element: <OrderList />
      },
    ],
  },

  {
    path: "/register",
    element: <Register />,

  },
  {
    path: "/login",
    element: <Login />,

  },

  // {
  //   path:"/test",
  //   element: <Test/>,
  // },
  
]



function App() {
  let routes = useRoutes(routeConfig)
  return routes
}

export default App;
