import { apolloClient } from "@/graphql/main";
import { ApolloClient, ApolloProvider } from "@apollo/client";

const ProviderLayout = ({children}: any) => {

    return (
        <ApolloProvider client={apolloClient}>
            {children}
        </ApolloProvider>
    )
}
 
export default ProviderLayout;