// import Navbar from "./components/Navbar";
// import TodoContextProvider from "./components/Store/TodoContext";
// import TodoSection from "./components/TodoSection";
import LoginPage from "./components/NewUserSignup&Login/LoginPage";
import SignUpPage from "./components/NewUserSignup&Login/SignUp";
import WelcomePage from "./components/NewUserSignup&Login/WelcomePage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TodoMain from "./components/TodoSection/TodoMain";
// import TodoContextProvider from "./components/Store/TodoContext";
import Error from "./components/NewUserSignup&Login/Error";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error/>,
    children: [
      { index: true, element: <WelcomePage /> },
      {
        path: "user",
        children: [
          { path: "login", element: <LoginPage /> },
          {
            path: "signup",
            element: <SignUpPage />,
          },
          { path: "data", element: <TodoMain /> },
        ],
      },
    ],
  },
]);

function App() {
  return (
    // <>
    //   <div className="h-screen pt-3 bg-cyan-200 flex flex-col items-center">
    //     <Navbar />
    //     <TodoContextProvider>
    //       <TodoSection />
    //     </TodoContextProvider>
    //   </div>
    // </>
    //  <WelcomePage/>
    // <SignUpPage/>
  
      <RouterProvider router={router} />
  
  );
}

export default App;
