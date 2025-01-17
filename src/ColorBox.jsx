export default function ColorBox({ color }) {
    const boxStyle = {
        width: '200px',
        height: '200px',
        backgroundColor: color, // 전달받은 색상
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontWeight: 'bold',
        borderRadius: '8px',
      };
      
    return(
        <div style={boxStyle}>
            <h1>컬러 박스</h1>
        </div>
    )
} 