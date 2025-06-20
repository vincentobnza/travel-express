import { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import allRoutes from "./routes/index.routes";
import Loading from "./components/Loading";

export default function App() {
  const element = useRoutes(allRoutes);
  return <Suspense fallback={<Loading />}>{element}</Suspense>;
}
