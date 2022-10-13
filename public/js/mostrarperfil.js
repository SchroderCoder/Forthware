
function mostrarperfil(id){

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
                console.log(data)

                    tiempo = ''

                    if(data.empleados[0].disponibilidad = 35){
                        tiempo = 'Tiempo Completo';
                    } else if(data.empleados[0].disponibilidad = 18) {
                        tiempo = 'Tiempo Medio';
                    }

                
                    document.getElementById("modal").innerHTML =
                    '<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">'+
                    '   <div class="modal-dialog" role="document">'+
                    '  <div class="modal-content">'+
                    '        <div class="modal-header"> ' +
                    '          <h5 class="modal-title" id="exampleModalLabel"> <i class="material-icons iconSide">account_circle</i>' + data.empleados[0].nombre + '</h5> ' +
                    '          <button type="button" class="btn-close btn-close-white" data-dismiss="modal" aria-label="Close"></button> ' +
                    '        </div> ' +
                    '        <div class="modal-body text-center"> ' + 
                    '            <p>Nombre: '+ data.empleados[0].nombre + '</p> ' +
                    '            <p>Correro Electrónico: '+ data.empleados[0].correo_electronico + '</p> ' +
                    '            <p>Disponibilidad: '+ tiempo + '</p> ' +
                    '           <img src=" '+ data.empleados[0].image_url +' " class="img-circle mx-auto d-block img-fluid" alt="Imagen de Perfil Colaborador" onerror="this.onerror=null; this.src="https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png"></img>' +
                    '            for(p of data.proyectos) {  ' + 
                    '            <p>' +  data.proyectos[0].nombre + '</p> ' +
                    '             }  ' +
                    '        </div> ' +
                    '     </div> ' +
                    '    </div> ' +
                    '</div> ' 
                
        }).catch(err => {
            console.log(err);
        });
        
}