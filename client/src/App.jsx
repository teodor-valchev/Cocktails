import { MantineProvider } from "@mantine/core";
import Catalog from "./components/catalog/Catalog";

import "@mantine/core/styles.css";

function App() {
    return (
        <MantineProvider>
            <Catalog />
        </MantineProvider>
    );
}

export default App;
