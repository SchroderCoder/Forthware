
    function calculate() {
        const tiempocompleto= document.getElementById("completo");
        const tiempomedio= document.getElementById("medio");
        const efectividad= document.getElementById("efectividad1").value;
        const horascompleto= document.getElementById("horascompleto1");
        const horasmedio= document.getElementById("horasmedio1");
        const ausentescompleto= document.getElementById("ausentescompleto");
        const ausentesmedio= document.getElementById("ausentesmedio");
        let nombres = [];
        let horas = [];
        let proyecto =0 ;
        let proporcion = 0;
        let horastotales =0;
        let horasausencia =0; 
        let horasesperadas =0;
        let efectividadaj= 0;
        let horastotalescompleto = 0;
        let horastotalesmedio = 0;
        let nombres2 = [];
        horastotalescompleto =(tiempocompleto.value *  horascompleto.value);
        horastotalesmedio = (tiempomedio.value * horasmedio.value);
        horastotales = horastotalescompleto + horastotalesmedio;
        horasausencia = (ausentescompleto.value *  horascompleto.value) + (ausentesmedio.value * horasmedio.value);
        horasesperadas = horastotales - horasausencia;

        for (i=0; i<iterar;i++){
             proyecto += parseFloat(document.getElementById("proyectos["+i+"]").value);
             horas.push(document.getElementById("proyectos["+i+"]").value);
             nombres.push(String(document.getElementById("proyectos["+i+"]").name));
        }   

        for (let i of nombres ){
            console.log(i);
            nombres2.push(String(i));
        }
        
        console.log("xdddd");

        proyecto = proyecto.toFixed(2);     

        proporcion = ((proyecto / horasesperadas)*100).toFixed(2);

        efectividadaj= (proporcion/(efectividad/100)).toFixed(2);

        document.getElementById("preview").innerHTML = 
        ' <div id="preview">' +
            '<h5>Preview</h5> ' +
            '<table> ' +
                '<tr> ' +
                '<td><label for="completo"> Horas totales Tiempo completo: </label></td> ' +
                ' <input id="horas_completos" name="horas_completos" type="hidden" value = '+horastotalescompleto+' ></td> ' +
                '<td>'+horastotalescompleto+' </td> ' +
                '</tr> ' +
                '<tr> ' +
                '<td><label for="completo"> Horas totales Tiempo medio: </label></td> ' +
                ' <input id="horas_medios" name="horas_medios" type="hidden" value = '+horastotalesmedio+' ></td> ' +
                '<td>'+horastotalesmedio+' </td> ' +
                '</tr> ' +
                '<tr> ' +
                '<td><label for="completo"> Horas totales: </label></td> ' +
                ' <input id="horastotales" name="horastotales" type="hidden" value = '+horastotales+' ></td> ' +
                '<td>'+horastotales+' </td> ' +
                '</tr> ' +
                '<tr> ' +
                '<td><label for="completo"> Horas ausencia: </label></td> ' +
                ' <input id="horasausencia" name="horasausencia" type="hidden" value = '+ horasausencia+' ></td> ' +
                '<td>'+horasausencia+' </td> ' +
                '</tr> ' +
                '<tr> ' +
                '<td><label for="completo"> Horas esperadas: </label></td> ' +
                ' <input id="horasesperadas" name="horasesperadas" type="hidden" value = '+ horasesperadas+' ></td> ' +
                '<td>'+horasesperadas+' </td> ' +
                '</tr> ' +
                '<tr> ' +
                '<td><label for="completo"> porcentaje efectividad: </label></td> ' +
                ' <input id="efectividad" name="efectividad" type="hidden" value = '+ proporcion+' ></td> '+
                '<td>'+proporcion+' </td> ' +
                '<td> % </td> ' +
                '</tr> ' +
                '<tr>  ' +
                '<td><label for="completo"> efectividad ajustada: </label></td> ' +
                ' <input id="efectividadA" name="efectividadA" type="hidden" value = '+ efectividadaj+' ></td> ' +
                '<td>'+efectividadaj+' </td> ' +
                '<td> % </td> ' +
                '</tr> ' +
                ' <input id="horas" name="horas" type="hidden" value = '+ horas+' ></td> '+
                ' <input id="suma" name="suma" type="hidden" value = '+ proyecto+' ></td> ' +
                ' <input id="nombres" name="nombres" type="hidden" value = '+nombres2+' ></td> ' +
                ' <input id="personalcompletos1" name="personalcompletos1" type="hidden" value = '+ 2 +' ></td> ' +
                ' <input id="personalmedios1" name="personalmedios1" type="hidden" value = '+ 5 +' ></td> ' +
            '</table> ' 
        '</div>' 

    }

