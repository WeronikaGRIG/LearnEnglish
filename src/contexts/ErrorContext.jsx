import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const ErrorContext = createContext();

export const ErrorProvider = ({ children }) => {
    const [error, setError] = useState(null);

    const clearError = () => setError(null);

    return (
        <ErrorContext.Provider value={{ error, setError, clearError }}>
            {children}
        </ErrorContext.Provider>
    );
};

ErrorProvider.propTypes = {
    children: PropTypes.node.isRecuired,
}



