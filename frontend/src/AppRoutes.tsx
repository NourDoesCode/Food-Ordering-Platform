import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/layout";
import HomePage from "./pages/HomePage";

function AppRoutes() {
  return (
    //Group of all the routes of our app
    <Routes>
      {/*Homepage route */}
      <Route
        path="/"
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      />
      {/*User profile route */}
      <Route path="/user-profile" element={<span>user profile page</span>} />
      {/*redirect to homepage for all other routes typed by user */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default AppRoutes;
