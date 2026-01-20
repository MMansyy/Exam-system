import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Login from "./pages/Login/Login";
import UserProvider from "./Context/UserContext";
import Home from "./pages/Home/Home";
import { Toaster } from "react-hot-toast";
import Exam from "./pages/Exam/Exam";
import Results from "./pages/Results/Results";
import Dashbord from "./pages/Dashbord/Dashbord";

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
			},
			{
				path: '/results',
				element: <Results />
			},
			{
				path: '/dashboard',
				element: <Dashbord />
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
