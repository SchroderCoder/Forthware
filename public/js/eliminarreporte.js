
function eliminareporte(id_reporte){

        document.getElementById("modal").innerHTML = 
        '<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">'+
        '   <div class="modal-dialog" role="document">'+
        '  <div class="modal-content">'+
        '        <div class="modal-header"> ' +
        '          <h5 class="modal-title" id="exampleModalLabel">Eliminar Reporte</h5> ' +
        '          <button type="button" class="btn-close btn-close-white" data-dismiss="modal" aria-label="Close"></button> ' +
        '        </div> ' +
        '        <div class="modal-body"> ' + 
        '            <p> ¿Estás seguro de que quieres eliminar este reporte?</p> ' +
        '        </div> ' +
        '        <div class="modal-footer"> ' +
        '          <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button> ' +
        '         <a href="/reportes/delete/'+id_reporte+'" class="btn btn-danger" id="eliminar">Eliminar</a> ' +
        '        </div> ' +
        '     </div> ' +
        '    </div> ' +
        '</div> ' 
}