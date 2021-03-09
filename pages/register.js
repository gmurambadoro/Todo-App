import {useRouter} from "next/router";
import Page from "../components/Page";
import {PageHeaderStyles} from "../components/Styles";
import RegisterForm from "../components/form/RegisterForm";
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

            <RegisterForm cancelRoute={"/"} handleRegisterUser={handleRegisterUser} />
        </Page>
    );
};

export default Register;