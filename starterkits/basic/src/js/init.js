import { initBreakpointsCssReload } from '@skilld/kaizen-breakpoints';
import config from '../../kaizen.breakpoints.yml';
import '@kaizen/components/helpers/focus-visible/h-focus-visible';
import '@kaizen/components/helpers/root-variables/h-root-variables';

window.themeBreakpoints = config;
initBreakpointsCssReload(config);
