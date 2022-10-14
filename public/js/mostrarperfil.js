
function mostrarperfil(id){

        document.getElementById("modal_contenido").innerHTML = '';
    
        data = new Object ();

        data.id = id;

        const csrf = document.getElementById('_csrf').value;

        fetch('/colaboradores/OneColaborador', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
                'csrf-token': csrf  
            },
            body: JSON.stringify(data),
        }).then(result => {
            return result.json(); //Regresa otra promesa
        }).then(data => {
                    tiempo = ''

                    if(data.empleados[0].disponibilidad = 35){
                        tiempo = 'Tiempo Completo';
                    } else if(data.empleados[0].disponibilidad = 18) {
                        tiempo = 'Tiempo Medio';
                    }

                    let html = '';
                
                    html +=
                    '        <div class="modal-header"> ' +
                    '          <h5 class="modal-title" id="exampleModalLabel"> <i class="material-icons iconSide">account_circle</i>' + data.empleados[0].nombre + '</h5> ' +
                    '          <button type="button" class="btn-close btn-close-white" data-dismiss="modal" aria-label="Close"></button> ' +
                    '        </div> ' +
                    '        <div class="modal-body text-center"> ' + 
                    '            <p>Nombre: '+ data.empleados[0].nombre + '</p> ' +
                    '            <p>Correro Electrónico: '+ data.empleados[0].correo_electronico + '</p> ' +
                    '            <p>Disponibilidad: '+ tiempo + '</p> ' +
                    '           <img src=" '+ data.empleados[0].image_url +' " class="img-circle mx-auto d-block img-fluid" alt="Imagen de Perfil Colaborador" onerror="this.onerror=null; this.src="https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png"></img>';

                    html += '<li class= "bold-text">Proyectos: </li>'
                    if(data.proyectos.length > 0) {
                        for(p of data.proyectos) {  
                            html += '<li>' +  p.nombre + '</li> ';
                        }
                    } else {
                        html += '<p>Sin proyectos asignados</p>';
                    }


                    html += '</div> ';
                    
                    document.getElementById("modal_contenido").innerHTML = html;

        }).catch(err => {
            console.log(err);
        });
        
}