const OnionHeater = () => {

    const handleChange = (event) => {
        console.log(event);
        const input = event.target.value;
        if(input.toLowerCase().includes("cebolla")){
            alert("Odio la cebolla")
        }
    };

  return (
    <div> 
        <textarea placeholder="Ejercicio Onion" onChange={handleChange}/>
    </div>
  );
};

export default OnionHeater;
