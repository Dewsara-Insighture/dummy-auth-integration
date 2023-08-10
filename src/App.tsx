import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import Dashboard from "./pages/Dashboard";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "./aws-configure";

Amplify.configure(awsExports);

function App() {

  return (
    <>
      <Authenticator
           socialProviders={["google"]}
           signUpAttributes={["email"]}
           hideSignUp
         >
           <>
              <Dashboard />
            </>
         </Authenticator>
    </>
  )
}

export default App
