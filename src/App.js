import * as React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

//styles & images
import './App.css';

//pages & components
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import SimplePaper from "./components/SimplePaper"
import Home from "./pages/Home"
import Skills from "./pages/Skills"

function App() {

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );
  console.log(prefersDarkMode)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <ResponsiveAppBar prefersDarkMode={prefersDarkMode}/>
        <div className="App-container">
          <SimplePaper classComponent="container-card">
            <Home prefersDarkMode={prefersDarkMode}/>
            <Skills prefersDarkMode={prefersDarkMode}/>
          </SimplePaper>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
