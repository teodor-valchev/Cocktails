import { Routes, Route } from "react-router-dom";

import { MantineProvider } from "@mantine/core";
import Catalog from "./components/catalog/Catalog";

import "@mantine/core/styles.css";
import NotFound from "./components/404/NotFound";

function App() {
    return (
        <MantineProvider>
            <Routes>
                <Route path="/" element={<Catalog />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </MantineProvider>
    );
}

export default App;
