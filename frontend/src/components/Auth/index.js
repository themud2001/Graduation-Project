import { useSelector } from "react-redux";

import { useVerifyTokenQuery } from "../../store";

const Auth = ({ children }) => {
    const { token } = useSelector(state => state.auth);
    useVerifyTokenQuery(token);
    
    return children;
};

export default Auth;