import { store } from "app/store";
import { Provider as StoreProvider } from 'react-redux'

export const withStore = (component: () => React.ReactNode) => () => (
    <StoreProvider store={store}>
        {component()}
    </StoreProvider>
);