import { Amplify } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-configure';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/Routes';

Amplify.configure(awsExports);

function App() {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
