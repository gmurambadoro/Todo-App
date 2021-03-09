import {authLogin, useUser} from "../hooks/auth";
import Page from "./Page";
import {PageHeaderStyles} from "./Styles";
import UserCredentialsForm from "./form/UserCredentialsForm";
import {useRouter} from "next/router";
import {doneLoading, startLoading} from "../utils/ui";

const PleaseLogin = ({ children }) => {
    const user = useUser();

    const router = useRouter();

    const handleLogin = async ({ email, password }) => {
        startLoading();

        authLogin({ email, password })
            .then(async () => {
                doneLoading();

                await router.push('/')
            })
            .catch(err => alert(err.message))
            .finally(() => doneLoading());
    };

    if (!user) {
        return (
            <Page>
                <PageHeaderStyles>Login</PageHeaderStyles>

                <UserCredentialsForm cancelRoute={"/login"} handleCredentials={handleLogin} />
            </Page>
        );
    }

    return (
        <>
            {children}
        </>
    );
};

export default PleaseLogin;