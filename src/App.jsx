import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/home';
// import Accommodation from './pages/accommodation';
import About from './pages/about';
import Error from './pages/error';

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />
	},
	// {
	// 	path: "/accommodation/:id",
	// 	element: <Accommodation />,
    // 	errorElement: <Error />
	// },
	{
		path: '/about',
		element: <About />
	},
	{
		path: "*",
		element: <Error />
	},
]);

function App() {
  return (
  <div>
    <RouterProvider router={router}/>
  </div>
  );
}

export default App;
