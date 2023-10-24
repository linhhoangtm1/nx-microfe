export function App({ component, ...rest }: { component?: string }) {
  let Component = () => <div></div>;
  try {
    Component = require(`./${component}`).default;
  } catch {
    Component = () => <div>Component does not existed</div>;
  }
  return <Component {...rest} />;
}

export default App;
