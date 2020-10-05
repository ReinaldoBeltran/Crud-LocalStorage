var listaEstudiantes=[];


function addStudent(pname,codigo,carrera){

var newStudent = {
	nombre:pname,
	codigo:codigo,
	carrera:carrera
};
console.log(newStudent);

listaEstudiantes.push(newStudent);
localStoreStudentList(listaEstudiantes);
	
}

function getStudentList(){
	var storedList =localStorage.getItem('localStudentList');
	if(storedList == null){
		listaEstudiantes =[];
	}else{
		listaEstudiantes=JSON.parse(storedList);
	}
	return listaEstudiantes;
}
/*funcion para guardar en el localStorage */
function localStoreStudentList(pList){
	localStorage.setItem('localStudentList',JSON.stringify(pList));


}