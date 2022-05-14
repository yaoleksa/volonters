import * as Elements from '../src/elements';
import * as ReactDOM from 'react-dom/client';
import * as React from 'react';

class App extends React.Component {
    render() {
        return (<>
        <Elements.NavBarMenuPhoto />
        <Elements.FileUploader />
        <Elements.PhotoUpload />
        <Elements.Footer />
        </>)
    }
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);