import Mui from './Mui';
import {AppBar,Typography} from '@mui/material';
function App() {
  return (
    <div className="App">
      <AppBar position = "static">
        <Typography variant="h3" bgcolor="black">Details</Typography>
      </AppBar>
      <Mui />
    </div>
  );
}
export default App;