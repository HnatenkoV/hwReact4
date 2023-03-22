import './App.css';
import HomePage from "./components/homepage";
import ThemeProvider from "./providers/themeProvider";
import HttpClientProvider from "./providers/httpClientProvider";


function App() {
  return (
    <div className="App">
        <ThemeProvider >
            <HttpClientProvider>
            <HomePage/>
            </HttpClientProvider>
        </ThemeProvider>
    </div>
  );
}

export default App;
