
import { DataGrid } from '@mui/x-data-grid';
import Root from './Routes/Root';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min';

const rows = [
  { id: 1, col1: 'Hello', col2: 'World' },
  { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
  { id: 3, col1: 'MUI', col2: 'is Amazing' },
];
const columns = [
  { field: 'col1', headerName: 'Column 1', width: 150 },
  { field: 'col2', headerName: 'Column 2', width: 150 },
];

function App() {
  return (
    <div className="App">
      {/* <Root/> */}
      <DataGrid rows={rows} columns={columns}/>
    </div>
  );
}

export default App;
