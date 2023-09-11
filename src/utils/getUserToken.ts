import { Auth } from 'aws-amplify';

export const getUserAccessToken = async () : Promise<string | null> =>{
    let userAccessToken : string | null = null;
    const authenticatedUser = await Auth.currentAuthenticatedUser();
    if(authenticatedUser ){
        userAccessToken = authenticatedUser.signInUserSession.accessToken.jwtToken;
    }

    return userAccessToken;
}

export const getUserIdToken = async () : Promise<string | null> =>{
    let userIdToken : string | null = null;
    const authenticatedUser = await Auth.currentAuthenticatedUser();
    if(authenticatedUser ){
        userIdToken = authenticatedUser.signInUserSession.IdToken.jwtToken;
    }

    return userIdToken;
}

export const getUserId = async () : Promise<string | null> =>{
    let userIdToken : string | null = null;
    const authenticatedUser = await Auth.currentAuthenticatedUser();
    if(authenticatedUser ){
        userIdToken = authenticatedUser.signInUserSession.IdToken.jwtToken;
    }

    return userIdToken;
}