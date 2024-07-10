
import { DataGrid } from '@mui/x-data-grid';
import Root from './Routes/Root';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min';

const rows = [
  { id: 1, col1: 'Hello', col2: 'World' },
  { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
  { id: 3, col1: 'MUI', col2: 'is Amazing' },
];

function App() {
  return (
    <div className="App">
      {/* <Root/> */}
      <DataGrid rows={rows}/>
    </div>
  );
}

export default App;
