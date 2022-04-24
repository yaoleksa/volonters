import * as React from 'react';
import * as ReactDom from 'react-dom/client';
import * as Elements from './elements';

class App extends React.Component {
  render() {
    return (
      <>
      <Elements.NavBarMenu />
      <Elements.Footer />
      </>);
  }
}
ReactDom.createRoot(document.getElementById('root')).render(<App />);