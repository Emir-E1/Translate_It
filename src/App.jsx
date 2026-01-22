import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import AppTranslator from "./pages/AppTranslator";
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/app",
        element: <AppTranslator />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
