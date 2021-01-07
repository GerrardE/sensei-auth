interface IRegistrationFormData {
    firstName?: string,
    lastName?: string,
    email: string,
    password: string,
}

interface IAuthProps {
    match: {
        path: string,
    },
    history: any
}

interface IRegisterProps {
    visible?: boolean,
}

interface ILoginProps {
    visible?: boolean,
    history?: any
}

export type { IRegistrationFormData, IAuthProps, IRegisterProps, ILoginProps};
