import {useRouter} from "next/router";
import Page from "../components/Page";
import {PageHeaderStyles} from "../components/Styles";
import UserCredentialsForm from "../components/form/UserCredentialsForm";
import {fire} from "../config/firebase-config";
import {doneLoading, startLoading} from "../utils/ui";

const Register = () => {
    const router = useRouter();

    const handleRegisterUser = ({ email, password }) => {
        startLoading();

        fire.auth()
            .createUserWithEmailAndPassword(email, password)
            .then(async () => {
                doneLoading();

                alert('Account created!');

                await router.push('/');
            })
            .catch(err => {
                doneLoading();

                console.log(err);

                alert(err.message);
            });
    };

    return (
        <Page>
            <PageHeaderStyles>Register</PageHeaderStyles>

            <UserCredentialsForm
                isRegister={true}
                cancelRoute={"/"}
                handleCredentials={handleRegisterUser}
            />
        </Page>
    );
};

export default Register;