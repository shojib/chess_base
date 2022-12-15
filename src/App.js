import './App.css';
import Row from './Row';

function App({squareSize}) {
  let squareColor  = 'black';
  let notation = 8;
  const data = [];
  
  for (let i = 0; i < 8; i++)
  {
    data.push(<Row key={i} squareColor={squareColor} squareSize={squareSize+'px'} notation={notation} lastRow={i === 7 ? true : false} row={i}/>);
    squareColor = squareColor === 'white' ? 'black' : 'white';
    notation=notation-1;
  }

  return (
    <div className="App">
      {data}
    </div>
  );

}

export default App;
