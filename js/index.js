




for (let i= 0; i<=2; i++){

    let tuTrago = prompt("¿Cual es tu trago alcohlico preferido?");   
if (tuTrago === "" || tuTrago === null  ){
    alert("Por favor, ingresa una bebida.")
} else if (!isNaN(tuTrago)){
    alert("Ingresa un dato valido.")
}else{
    switch(tuTrago){
        case "daiquiri":
            alert("WOW! Ese trago va muy bien con cualquier fruta.");
            break;
        case "fernet":
        alert("La preferida de muchos. ¡Buena eleccion!")
            break;
        case "destornillador":
        alert("¿Vodka y Naranja? Una bebida infaltante en una fiesta.")
            break;
        case "sex and the beach":
        alert("Trago refrescante y popular.")
            break;
        case "mojito" :
            alert("Ron, menta, limon y soda.. todo lo que esta bien.")
            break;
        case "piña colada":
            alert("Cremoso, rico y refrescante. Bebida perfecta para el verano")
            break;
        case "gin tonic":
            alert("El Gin Tonic es un clasico!")
            break;
        case "margarita":
            alert("Mmm.. interesante. Elegiste un trago cultural y de sabor intenso.")
            break;
        case "old fashioned":
            alert("Perfecto para quienes quieren un trago autentico y de rica textura.")
            break;
        default:
        alert(`Trago elegido: ${tuTrago}. ¡Disfruta!`)
        i ++;
}
}
}
