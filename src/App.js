import { Routes,Route} from "react-router-dom";
import "./App.css";
import { Layout } from "./components/Layout/Layout";
import Bucket from "./pages/Bucket/Bucket";
import Catalog from "./pages/Catalog/Catalog";

function App() {
   return (
      <Layout>
         <Routes>
            <Route path="/" element={<Catalog />} />
            <Route path="bucket" element={<Bucket />} />
         </Routes>
      </Layout>
   );
}

export default App;
