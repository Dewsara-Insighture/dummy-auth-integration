import { Amplify } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-configure';
import { BrowserRouter } from 'react-router-dom';
// import BasicRoutes from './routes/BasicRoutes';
import PublicRoutes from './routes/PublicRoutes';

Amplify.configure(awsExports);

function App() {
  return (
    <>
      <BrowserRouter>
        <PublicRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
