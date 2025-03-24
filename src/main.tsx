
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ResourceOptimizer from './components/performance/ResourceOptimizer.tsx'

// Remove the spinner when React is loaded
const removePreloadSpinner = () => {
  const spinner = document.getElementById('preload-spinner');
  if (spinner) {
    spinner.style.opacity = '0';
    setTimeout(() => {
      spinner.style.visibility = 'hidden';
    }, 500);
  }
};

createRoot(document.getElementById("root")!).render(
  <ResourceOptimizer>
    <App />
  </ResourceOptimizer>
);

// Remove spinner when React has loaded
removePreloadSpinner();
