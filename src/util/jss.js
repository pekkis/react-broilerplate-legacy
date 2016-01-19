import {create} from 'jss';
import jssNested from 'jss-nested';
import jssVendorPrefixer from 'jss-vendor-prefixer';
import jssCamelCase from 'jss-camel-case';
import reactJss from 'react-jss'

export const jss = create();
jss.use(jssNested());
jss.use(jssCamelCase());
jss.use(jssVendorPrefixer());

export const useSheet = reactJss(jss);


