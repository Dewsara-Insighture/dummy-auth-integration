import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';
import { Auth } from 'aws-amplify';
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';

export default function GoogleAuthentication() {

  const handleFedarateSignIn = async () => {
    await Auth.federatedSignIn({
      provider: CognitoHostedUIIdentityProvider.Google,
    });
   
  };
  return (
    <Button
      variant="outlined"
      sx={{
        color: 'black',
        px: '20px',
        py: '5px',
        border: '1px solid black',
        ':hover': {
          bgcolor: 'black',
          color: 'white',
          border: '1px solid black',
        },
      }}
      onClick={() => handleFedarateSignIn()}
      startIcon={<GoogleIcon />}
    >
      Continue with Google
    </Button>
  );
}
