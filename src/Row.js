import './Row.css';
import Square from './Square';

function Row({squareColor, squareSize, notation, lastRow, row}) {
    const data = [];
    const anotationArr = ['a','b','c','d','e','f','g','h'];
    let anotation = '';
    const whitePieces = ['wR', 'wN', 'wB', 'wQ', 'wK', 'wB', 'wN', 'wR'];
    const blackPieces = ['bR', 'bN', 'bB', 'bQ', 'bK', 'bB', 'bN', 'bR'];
    let piece = '';

    for (let i = 0; i < 8; i++)
    {
        if (row === 0) piece = blackPieces[i];
        else if (row === 1) piece = 'bP';
        else if (row === 6) piece = 'wP';
        else if (row === 7) piece = whitePieces[i];
        if (lastRow) anotation = <div className='anot'>{anotationArr[i]}</div>;
        data.push(<Square key={i} squareColor={squareColor} squareSize={squareSize} nnotation={notation} anotation={anotation} firstSquare={i === 0 ? true : false} piece={piece} />);
        squareColor = squareColor === 'white' ? 'black' : 'white';
    }

    return (
    <div className="row" style={{height:squareSize}}>
        {data}
    </div>
    );
}

export default Row;
