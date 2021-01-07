import React from "react";
import AuthView from "../components/views/Auth/auth.view";

interface IAuthProps {
    match: {
        path: string,
    },
    history: any
}

const AuthPage: React.FC<IAuthProps> = (props) => <AuthView {...props} />;

export default AuthPage;
