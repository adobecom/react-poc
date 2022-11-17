import { createRoot } from 'react-dom/client';

import { Button, defaultTheme, Provider } from '@adobe/react-spectrum';

function App(props) {
  document.body.querySelector('.hello-world').classList.add('unhide');
  return (
    <Provider theme={defaultTheme}>
      <Button
        variant="accent"
        onPress={() => alert('Hey there!')}>
        Hello {props.name}
      </Button>
    </Provider>
  );
}

const block = document.body.querySelector('.hello-world > div > div');
const name = block.textContent;

const root = createRoot(block);
root.render(<App name={name} />);