imprimirTabla();
document.querySelector('#botonGuardar').addEventListener('click',guardar);

function guardar(){

	var nombre=document.querySelector('#nombre').value,
	codigoEstudiante=document.querySelector('#codigo').value,
	carreraEstudiante =document.querySelector('#carrera').value;
    addStudent(nombre,codigoEstudiante,carreraEstudiante);
    imprimirTabla();

}



function imprimirTabla(){

var lista= getStudentList(),
tbody=document.querySelector('#listaEstudiantes tbody');

tbody.innerHTML='';

for(var i=0; i < lista.length;i++){
		var row= tbody.insertRow(i);
		var nameCell= row.insertCell(0);
		var codigoCell =row.insertCell(1);
		var carreraCell =row.insertCell(2);
		nameCell.innerHTML= lista[i].nombre;
		codigoCell.innerHTML=lista[i].codigo;
		carreraCell.innerHTML=lista[i].carrera;


		tbody.appendChild(row);

	}
}


function validarDatos(){
	
}