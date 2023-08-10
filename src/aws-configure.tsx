const awsExports = {
    Auth: {
       userPoolId: import.meta.env.VITE_USER_POOL_ID,
       region: import.meta.env.VITE_REGION,
       userPoolWebClientId: import.meta.env.VITE_USER_POOL_WEB_CLIENT_ID,
       oauth: {
          domain: import.meta.env.VITE_DOMAIN,
          scope: ["email", "phone", "openid", "aws.cognito.signin.user.admin"],
          redirectSignIn: import.meta.env.VITE_REDIRECT_SIGN_IN,
          redirectSignOut: import.meta.env.VITE_REDIRECT_SIGN_OUT,
          responseType: "code",
       },
    },
 };
 
 export default awsExports;
 