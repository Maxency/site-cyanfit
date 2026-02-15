import { createBrowserRouter } from "react-router";
import { AlenyaHub } from "./pages/AlenyaHub";
import { CyanFitPage } from "./pages/CyanFitPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: AlenyaHub,
  },
  {
    path: "/cyanfit",
    Component: CyanFitPage,
  },
]);
