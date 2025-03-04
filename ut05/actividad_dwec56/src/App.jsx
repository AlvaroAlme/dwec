import React from "react";

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      //igual que las propiedades del objeto en Java. Luego *this.state.propiedad* para añadirlo al campo que quieras
      //puedes inicializarlo vacio
      nombre:'',
      apellidos: '',
      imagen: 'https://imgs.search.brave.com/L3URFJZGnneCC01vkBwWtiszIFZ_KNLolhDIPqSqsts/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bGFjYXNhZGVlbC5u/ZXQvd3AtY29udGVu/dC91cGxvYWRzLzIw/MjQvMTEvaGFkZXMt/ZGlzbmV5cy1saXZl/LWFjdGlvbi1oZXJj/dWxlcy1tb3ZpZS1y/ZXBvcnRlZGx5LWdp/dmVuLWEtbmV3LXRp/dGxlLWFuZC1hLW1h/am9yLW92ZXJoYXVs/LWFiMjE0NDUwLTc0/MXg0MjEuanBn',
      edad: 29,
      esModoEdicion: false

    };
  }

 
    cambiarModo = () =>{
      this.setState((prevState) => ({
        esModoEdicion: !prevState.esModoEdicion
      }));
    };



render() {
  return (
    //React no te deja meter varios parametros en el return, lo englobamos todo en una etiqueta vacia
    <>  
    {!this.state.esModoEdicion ? (
       <div>
       <fieldset>
       <h2>Datos</h2>
       <div>Nombre: {this.state.nombre}</div>
       <div>Apellidos:{this.state.apellidos}</div>
       <div>Imagen:<img alt="foto" src={this.state.imagen}  /></div>
       <div>Edad:{this.state.edad}</div>
       </fieldset>
     </div>
    ) : (
      <div>
      <h2>formulario</h2>
      <div>
        <label for="nombre">Nombre</label>
        <input id="nombre" type="text" value={this.state.nombre} onChange={(e)=>this.setState({nombre: e.currentTarget.value})}></input>
      </div>
      <div>
        <label for="apellidos">Apellidos</label>
        <input id="apellidos" type="text" value={this.state.apellidos} onChange={(e)=>this.setState({apellidos: e.currentTarget.value})}></input>
      </div>
      <div>
        <label for="imagen">Imagen</label>
        <input id="imagen" type="text" value={this.state.imagen} onChange={(e)=>this.setState({imagen: e.currentTarget.value})}></input>
      </div>
      <div>
        <label for="edad">Edad</label>
        <input id="edad" type="text" value={this.state.edad} onChange={(e)=>this.setState({edad: e.currentTarget.value})}></input>
      </div>  
    </div>
    )}
    <button onClick={this.cambiarModo}>
      {this.state.esModoEdicion ? "Cambiar a modo vista" : "Cambiar a modo edicion"}</button>
    </>
  )
}
}


export default App