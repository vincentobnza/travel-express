import { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import allRoutes from "./routes";

export default function App() {
  const element = useRoutes(allRoutes);
  return <Suspense fallback={<div>Loading...</div>}>{element}</Suspense>;
}
