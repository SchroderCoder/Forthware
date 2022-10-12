
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

                
                    document.getElementById("modal").innerHTML =
                    '<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">'+
                    '   <div class="modal-dialog" role="document">'+
                    '  <div class="modal-content">'+
                    '        <div class="modal-header"> ' +
                    '          <h5 class="modal-title" id="exampleModalLabel">' + id  + ' Nombre: '+ data.empleados[0].nombre + '</h5> ' +
                    '          <button type="button" class="btn-close btn-close-white" data-dismiss="modal" aria-label="Close"></button> ' +
                    '        </div> ' +
                    '        <div class="modal-body"> ' + 
                    '            <p> ¿Estás seguro de que quieres eliminar este reporte?</p> ' +
                    '        </div> ' +
                    '     </div> ' +
                    '    </div> ' +
                    '</div> ' 
                
        }).catch(err => {
            console.log(err);
        });
        
    // document.getElementById("modal").innerHTML =
    // '<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">'+
    // '   <div class="modal-dialog" role="document">'+
    // '  <div class="modal-content">'+
    // '        <div class="modal-header"> ' +
    // '          <h5 class="modal-title" id="exampleModalLabel">' + id + '</h5> ' +
    // '          <button type="button" class="btn-close btn-close-white" data-dismiss="modal" aria-label="Close"></button> ' +
    // '        </div> ' +
    // '        <div class="modal-body"> ' + 
    // '            <p> ¿Estás seguro de que quieres eliminar este reporte?</p> ' +
    // '        </div> ' +
    // '     </div> ' +
    // '    </div> ' +
    // '</div> ' 

}