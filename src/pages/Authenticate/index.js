import React, { useState } from "react";

const Cadastro = () => {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        // console.log(event.target)
      
        setInputs(values => ({...values, [name]: value}))
      }
    
    return(

        <input
              type="email"
              placeholder="Digite um email teste"
              name ="email"
              value={inputs.email|| ""}
              onChange={handleChange}
            />
    )
}

export default Cadastro;