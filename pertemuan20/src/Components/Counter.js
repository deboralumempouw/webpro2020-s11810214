// import React, {components} from "react";

// class Counter extends components.React{
//     state = {
//         number: 0
//     };
//     componentDidMount(){
//         console.log("Komponen di Mount");
//     };
//     componentDidUpdate(){
//         console.log("Komponen telah diperbarui")
//     };
//     tambah = () =>{
//         this.setState({number:this.state.number + 1});
//     };
//     kurang = () =>{
//         this.state.number < 1
//         ? this.setState({number:0})
//         : this.setState({number:this.state.number - 1});
//     };
//     state = {
//         number: 0
//     };
//     render(){
//         console.log("Komponen di Render")
//         return(
//             <div>
//                 <p>Counter Component</p>
//                 <p>Komponen ini diklik sebanyak {this.state.number} kali.</p>
//                 <button onClick={this.tambah}>Tambah</button>
//                 <button onClick={() =>this.kurang}>Kurang</button>
//             </div>
//         );
//     };
// };

import React, {useState, useEffect} from "react";

const Counter = (props) =>{
    const [number, setNumber] = useState(0);
    const [title, setTitle] = useState("Counter")
    
    useEffect(() =>{
        console.log("Komponen telah dimount")
    }, [])
    
    const tambah = (par) =>{
        setNumber(number+par)
    }
    const kurang = () =>{
        number < 1 ? setNumber(0) : setNumber(number - 1)
    };
    
    return(
        <div>
            <p>{title}</p>
            <p>Komponen ini diklik sebanyak {number} kali</p>
            <button onClick = {()=>tambah(1)}>Tambah</button>
            <button onClick = {kurang}>Kurang</button>
        </div>
    );
};
