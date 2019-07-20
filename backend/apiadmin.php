<?php

	require_once "init.php";
	define('SALT', 'heroszhen');
	
	//data en string_json
	$postdata = file_get_contents("php://input");
	
	if(isset($postdata) && !empty($postdata)){
		//string_json to objet_json
		$array = json_decode($postdata);/*
		if($array->action == "inscription"){
			$query = "select * from mygoddessUSER where email = :email";
			$result = execRequete($query,[
				"email" => $array->email
			]);
			
			$result = $result->fetchAll();
			$response = array();
			if(count($result) != 0){
				$response['response'] = "Il y a compte existant avec ce mail";
				echo json_encode($response);
			}else{
				$query = "insert into mygoddessUSER (email,password) values (:email,:password)";
				execRequete($query,[
					"email" => $array->email,
					"password" => md5($array->password.SALT)
				]);
				$response['response'] = "Votre inscription a été faite avec succès";
				echo json_encode($response);
			}
		}
		*/
		if($array->action == "deleteonephoto"){
			$query = "select * from mygoddessPHOTO where id = :id";
			$result = execRequete($query,[
				"id"    => $array->id,
			]);
		
			$result = $result->fetchAll();
			$response = array();
			if(count($result) == 0){
				$response['response'] = "no";
				echo json_encode($response);
			}else{
				$query = "delete from mygoddessPHOTO where id = :id";
				$result = execRequete($query,[
					"id"    => $array->id,
				]);
				$response['response'] = "done";
				echo json_encode($response);
			}
		}
		
	
	}
	
?>
