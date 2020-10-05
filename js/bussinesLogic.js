var listaPersonas=[];


function addFriend(pname,codigo,carrera){

var newFriend = {
	nombre:pname,
	codigo:codigo,
	carrera:carrera
};
console.log(newFriend);

listaPersonas.push(newFriend);
localStoeFriendList(listaPersonas);

}

function getFriendList(){
	var storedList =localStorage.getItem('localFriendList');
	if(storedList == null){
		friendList = [];
	}else{
		listaPersonas=JSON.parse(storedList);
	}
	return listaPersonas;
}
/*funcion para guardar en el localStorage */
function localStoeFriendList(pList){
	localStorage.setItem('localFriendList',JSON.stringify(pList));


}