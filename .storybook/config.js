import { configure } from '@kadira/storybook';
import { setTestMode } from 'react-komposer';

setTestMode();

function loadStories() {
  require('../client/modules/core/components/.stories');
  require('../client/modules/comments/components/.stories');
  // require as many as stories you need.
}

configure(loadStories, module);
