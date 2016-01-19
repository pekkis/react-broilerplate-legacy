import { withPackageName } from 'react-pacomo';

const {
  decorator: pacomoDecorator,
  transformer: pacomoTransformer,
} = withPackageName('cip');

export {
    pacomoTransformer,
    pacomoDecorator
};
