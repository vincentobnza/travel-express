import { createBrowserRouter, RouterProvider } from "react-router-dom";
import allRoutes from "./routes";

const router = createBrowserRouter(allRoutes);

export default function App() {
  return <RouterProvider router={router} />;
}
