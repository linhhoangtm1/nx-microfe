
export function App({ component, ...rest }: { component?: string }) {
  let Component = () => <div></div>;
  try {
    Component = require(`./${component}`).default; // eslint-disable-line
  } catch {
    Component = () => <div>Component does not existed</div>;
  }
  return <Component {...rest} />;
}

export default App;
