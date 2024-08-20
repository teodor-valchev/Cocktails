import { Routes, Route } from "react-router-dom";

import { MantineProvider } from "@mantine/core";
import Catalog from "./components/catalog/Catalog";

import "@mantine/core/styles.css";

function App() {
    return (
        <MantineProvider>
            <Routes>
                <Route path="/" element={<Catalog />} />
            </Routes>
        </MantineProvider>
    );
}

export default App;
