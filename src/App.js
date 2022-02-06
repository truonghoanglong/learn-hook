import Navbar from './components/Navbar'
import ThemeToggle from './components/ThemeToggle';
import Todos from './components/Todos';
import ThemeContextProvidertProvider from './context/ThemeContext'
import TodoContextProvider from './context/TodoContext'
function App() {
  
  return (
    <div className="App">
      <ThemeContextProvidertProvider>
        <Navbar/>
        <TodoContextProvider>
          <Todos/>
        </TodoContextProvider>
        <ThemeToggle/>
      </ThemeContextProvidertProvider>
    </div>
  );
}

export default App;
