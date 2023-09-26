var nombre = prompt("Hola, porfavor inserte su nombre");
var correcto = 0;
var incorrecto = 0;
    alert("Bienvenido/a al cuestionario sobre Turismo " + nombre);
    var pregunta1 = prompt("¿En qué departamento se encuentra el lago Titicaca?\A:Tacna\B:Puno\C:Cusco");
    if (pregunta1 == "B") {
        var correcto = correcto +1
    }else{
        var incorrecto
    }
    var pregunta2 = prompt("¿Desde qué parte del Perú se pueden avistar ballenas jorobadas?\A:Lima e Ica\B:Arequiupa y Tacna\C:Piura y Tumbes");
    if (pregunta2 == "C") {
        var correcto = correcto +2
    }else{
        var incorrecto
    }
    var pregunta3 = prompt("Plato típico de la Selva peruana\A:Tacacho con cecina\B:Arroz con pollo\C:Lomo saltado");
    if (pregunta3 == "A") {
        var correcto = correcto +3
    }else{
        var incorrecto
    }
   if ((document.write)) {
    var correcto = prompt("Bien hecho")
    }else{
        var incorrecto = prompt("Vuelve a intertarlo")
    }