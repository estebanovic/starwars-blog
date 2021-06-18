import React, { useEffect } from 'react';
import { useState } from 'react';
import getState from './flux';

export const AppContext = React.createContext(null);

// export default function injectContext()
function ContextWrapper(PassedComponent) {
    const StoreWrapper = props => {
        const [state, setState] = useState(
            getState({
                getStore : () => state.store,
                getActions: () => state.actions,
                setStore: updatedStore =>
                setState({
                    store: Object.assign(state.store, updatedStore),
                    actions: {...state.actions}
                })
            })
        );
        useEffect(() => {
            state.actions.getPeople('https://www.swapi.tech/api/people');
        },[]);

        return (
            <AppContext.Provider value={state}>
                <PassedComponent {...props}/>
            </AppContext.Provider>
        );
    };
    return StoreWrapper;
};

export default ContextWrapper;