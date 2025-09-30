import Main_Layout from "./components/layout/Main_Layout";
import ProtectedRoute from "./components/layout/ProtectedRoute";

const App = () => {
  return (
    <ProtectedRoute>
      <Main_Layout />
    </ProtectedRoute>
  );
};

export default App;
