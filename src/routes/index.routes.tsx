// ROUTES
import passengersRoutes from "./passengers.routes";
import adminRoutes from "./admin.routes";
import globalRoutes from "./global.routes";
import authRoutes from "./auth.routes";

const allRoutes = [
  ...globalRoutes,
  ...passengersRoutes,
  ...adminRoutes,
  ...authRoutes,
];

export default allRoutes;
