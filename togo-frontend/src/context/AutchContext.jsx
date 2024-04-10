import { createContext, useState, useContext, useEffect } from "react";
import { registerRequest, loginRequest, verifyRequest } from '../api/auth.js'
import Cookies from "js-cookie";


export const AuthContext = createContext()

// api 


export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context
}

export const Authprovider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [isAuth, setIsAuth] = useState(false)
    const [errors, setErrors] = useState([])
    const [loading, setLoading] = useState(true)

    const signup = async (user) => {
        try {
            const res = await registerRequest(user);
            if (res && res.status === 200 && res.data) {
                setUser(res.data);
                setIsAuth(true);
            }
        } catch (error) {
            setErrors(error.response.data);

        }
    };

    const singin = async (user) => {
        try {
            const res = await loginRequest(user);
            console.log(res)
            setIsAuth(true);
            setUser(res.data);
        } catch (error) {
            if (Array.isArray(error.response.data)) {
                setErrors(error.response.data);
            }
            else {
                setErrors([error.response.data.message]);
            }
        }
    }

    const logout = () => {
        Cookies.remove('token');
        setIsAuth(false);
        setUser(null);
    }

    useEffect(() => {
        const checkLogin = async () => {
            const cookies = Cookies.get();
            if (!cookies.token) {
                setIsAuth(false);
                setLoading(false);
                return;
            }

            try {
                const res = await verifyRequest(cookies.token);
                if (!res.data) return setIsAuth(false);
                setIsAuth(true);
                setUser(res.data);
                setLoading(false);
            } catch (error) {
                setIsAuth(false);
                setLoading(false);
            }
        };
        checkLogin();
    }, []);

    return (
        <AuthContext.Provider value={{
            signup,
            singin,
            logout,
            loading,
            user,
            isAuth,
            errors
        }}>
            {children}
        </AuthContext.Provider>
    )
}