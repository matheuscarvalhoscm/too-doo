import './App.css';
import TooDooProvider from './context/TooDooProvider';
import MainPage from '../src/pages/MainPage';

function App() {
  document.title = 'Too Doo';
  return (
    <TooDooProvider>
      <div>
        <MainPage />
      </div>
    </TooDooProvider>
  );
}
// 
export default App;