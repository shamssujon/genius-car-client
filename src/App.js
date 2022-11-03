import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";

function App() {
    return (
        <div className="flex flex-col justify-between min-h-screen text-gray-800 leading-normal">
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
}

export default App;
