import { AppState, Auth0Provider, User } from "@auth0/auth0-react";

type Props = {
  children: React.ReactNode;
};

function Auth0ProviderWithNavigate({ children }: Props) {
  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL;
  if (!domain || !clientId || !redirectUri) {
    throw new Error("unable to initialise auth");
  }
  const onRedirect = (appState?: AppState, user?: User) => {
    console.log("Current user", user);
  };
  return (
    <Auth0Provider
      onRedirectCallback={onRedirect}
      domain={domain}
      clientId={clientId}
      authorizationParams={{ redirect_uri: redirectUri }}
    >
      {children}
    </Auth0Provider>
  );
}

export default Auth0ProviderWithNavigate;
