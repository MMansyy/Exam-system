import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Login from "./pages/Login/Login";
import UserProvider from "./Context/UserContext";
import Home from "./pages/Home/Home";
import { Toaster } from "react-hot-toast";
import Exam from "./pages/Exam/Exam";

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
			},
			{
				path: '/quiz/:name/:id',
				element: <Exam />
			}
			]

		}
	])
	return (
		<UserProvider>
			<RouterProvider router={routes} />
			<Toaster />
		</UserProvider>
	);
};

export default App;
