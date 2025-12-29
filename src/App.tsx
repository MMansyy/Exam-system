import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Login from "./pages/Login/Login";
import UserProvider from "./Context/UserContext";
import Home from "./pages/Home/Home";

const App = () => {
	const routes = createBrowserRouter([
		{
			path: "/",
			element: <MainLayout />,
			children: [{
				index: true,
				element: <Login />
			},
			{
				path: "/home",
				element: <Home />
			}
			]

		}
	])
	return (
		<UserProvider>
			<RouterProvider router={routes} />
		</UserProvider>
	);
};

export default App;
