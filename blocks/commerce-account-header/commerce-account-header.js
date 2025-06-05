import { Header, provider as uiProvider } from '@dropins/tools/components.js';
import { readBlockConfig } from '../../scripts/aem.js';

export default function decorate(block) {
  const {
    title = 'My account',
  } = readBlockConfig(block);

  block.innerHTML = '';

  return uiProvider.render(Header, { title })(block);
}
