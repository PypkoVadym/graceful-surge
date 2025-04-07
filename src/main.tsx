
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ResourceOptimizer from './components/performance/ResourceOptimizer.tsx'
import { HelmetProvider } from 'react-helmet-async';

// Remove the preload spinner when React is loaded
const removePreloadSpinner = () => {
  const spinner = document.getElementById('preload-spinner');
  if (spinner) {
    spinner.style.opacity = '0';
    setTimeout(() => {
      spinner.style.visibility = 'hidden';
    }, 500);
  }
};

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");

createRoot(rootElement).render(
  <HelmetProvider>
    <ResourceOptimizer>
      <App />
    </ResourceOptimizer>
  </HelmetProvider>
);

// Remove spinner when React has loaded
removePreloadSpinner();
