import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const LoaderContext = createContext();

export const LoaderProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <LoaderContext.Provider value={{ isLoading, setIsLoading }}>
            {children}
        </LoaderContext.Provider>
    );
};

LoaderProvider.propTypes = {
    children: PropTypes.node.isRequired,
};