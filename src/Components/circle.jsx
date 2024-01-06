

const Circle = ({ color, position, transformx, transformy }) => {
    // Define la posición utilizando las propiedades de estilo de React
    const circleStyle = {
      top: position.top ,      // Si no se proporciona top, se usa '50%'
      left: position.left ,    // Si no se proporciona left, se usa '50%'
      transform: `translate(${transformx}, ${transformy})`,  // Ajuste para centrar el círculo
    };
  
    return (
      <div
        className={`h-72 w-72 bg-${color} rounded-full absolute`}
        style={circleStyle}
      >
      </div>
    );
  };

export default Circle;