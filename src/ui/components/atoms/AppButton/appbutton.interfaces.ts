interface IProps {
    config: {
        buttonType?: string,
        buttonId?: string,
        buttonClassName?: string,
        buttonOnClick?: React.MouseEventHandler<HTMLButtonElement>,
        buttonDisabled?: boolean,
    },
    children?: React.ReactChild | string | React.ReactElement | any
}

export default IProps;
