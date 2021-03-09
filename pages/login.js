import Page from "../components/Page";
import {PageHeaderStyles} from "../components/Styles";
import UserCredentialsForm from "../components/form/UserCredentialsForm";
import {doneLoading, startLoading} from "../utils/ui";
import {useRouter} from "next/router";
import {authLogin} from "../hooks/auth";

const Login = () => {
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

    return (
        <Page>
            <PageHeaderStyles>Login</PageHeaderStyles>

            <UserCredentialsForm handleCredentials={handleLogin} cancelRoute={"/"} />
        </Page>
    );
};

export default Login;