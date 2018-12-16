import { configure } from '@storybook/angular';

import '../src/styles.scss';

// automatically import all files ending in *.stories.ts

// // Don't just look at /src/stories directory.
// const req = require.context('../src/stories', true, /.stories.ts$/);

// Look at all directories.
const req = require.context('../src/', true, /.stories.ts$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
