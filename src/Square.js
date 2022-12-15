import './Square.css';

function Square({squareColor, squareSize, nnotation, anotation, firstSquare, piece}) {
    let notation = '';
    if (firstSquare) notation = <div className='nnot'>{nnotation}</div>;
    let img = '';
    if (piece !== '') img = <img className='piece' src={'/pics/' + piece + '.png'} />;
    return (      
        <div className={'square ' + 'square-'+ squareColor} style={{height:squareSize, width:squareSize}}>
        {notation}
        {anotation}
        {img}
        </div>
    );
}

export default Square;
