import {
	createContext,
	useCallback,
	useContext,
	useMemo,
	useState,
} from "react";
// import PropTypes from 'prop-types';

const MY_AUTH_APP = "MY_AUTH_APP";

export const useAuthContext = () => {
	return useContext(AuthContext);
};

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
	const [isAuthenticated, setIsAuthenticated] = useState(
		window.localStorage.getItem(MY_AUTH_APP) || false,
	);

	const login = useCallback(function () {
		window.localStorage.setItem(MY_AUTH_APP, true);
		setIsAuthenticated(true);
	}, []);

	const logout = useCallback(function () {
		window.localStorage.removeItem(MY_AUTH_APP, true);
		setIsAuthenticated(false);
	}, []);

	const value = useMemo(
		() => ({
			login,
			logout,
			isAuthenticated,
		}),
		[isAuthenticated, login, logout],
	);

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
