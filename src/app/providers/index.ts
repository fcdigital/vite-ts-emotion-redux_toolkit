import compose from "compose-function";
import { withStore } from 'app/providers/withStore';
import { withRouter } from "app/providers/withRouter";
import { withTheme as withMyTheme} from 'app/providers/withTheme';

export const withProviders = compose(withMyTheme,withRouter,withStore);