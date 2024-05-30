import Home from "./components/Home"
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Error from "./components/Error";
import AllProducts from "./components/allProduct/AllProducts";
import AddProduct from "./components/addProduct/AddProduct";
import Allcategory from "./components/AllCategory/Allcategory"
import AddCategory from "./components/addCategory/AddCategory";
import AllSubCategory from "./components/allSubCategory/AllSubCategory";
import AddSubCategory from "./components/addSubCategory/AddSubCategory";
import Registration from "./components/registration/Registration";
import Login from "./components/login/Login";
import ApproveCategoryStatus from "./components/approveCategoryStatus/ApproveCategoryStatus";
import ApproveSubCategory from "./components/approveSubCategory/ApproveSubCategory";
import Addvariant from "./components/addvariant/Addvariant";
import Allvariant from "./components/allVariant/Allvariant";
import AddDiscounts from "./components/addDiscounts/AddDiscounts";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/registration" element={<Registration />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={<Home />}
      >
        <Route path="/Allproduct" element={<AllProducts />} />
        <Route path="/AddProduct" element={<AddProduct />} />
        <Route path="/Addvariant" element={<Addvariant />} />
        <Route path="/allvariant" element={<Allvariant />} />
        <Route path="/AllCategory" element={<Allcategory/>} />
        <Route path="/addCategory" element={<AddCategory/>} />
        <Route path="/allsubcategory" element={<AllSubCategory/>} />
        <Route path="/addSubCategory" element={<AddSubCategory/>} />
        <Route path="/approvecategory" element={<ApproveCategoryStatus/>} />
        <Route path="/approveSubCategory" element={<ApproveSubCategory/>} />
        <Route path="/addDiscount" element={<AddDiscounts/>} />
        <Route path="*" element={<Error/>} />
      </Route>

    </Route>

  )
);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
