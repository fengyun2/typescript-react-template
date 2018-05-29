import {Options} from 'poi';

const options: Options = {
  entry: 'src/index.tsx',
  plugins: [require('@poi/plugin-typescript')()]
};

export default options;
