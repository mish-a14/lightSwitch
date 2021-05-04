function Bottom(props) {
    return (
      <div style={{ backgroundColor: props.backgroundColor }} >
           <button onClick={() => {props.offSelected()}}>Off</button>
      </div>
    );
  }
  

export default Bottom; 