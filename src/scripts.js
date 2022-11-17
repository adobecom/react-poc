import { createRoot } from 'react-dom/client';

function App(props) {
  document.body.querySelector('.hello-world').classList.add('unhide');
  return <h1>Hello {props.name || 'world'}</h1>;
}

const block = document.body.querySelector('.hello-world > div > div');
const name = block.textContent;

const root = createRoot(block);
root.render(<App name={name} />);