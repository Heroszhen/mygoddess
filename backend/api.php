<?php

	require_once "init.php";
	define('SALT', 'heroszhen');
	
	//data en string_json
	$postdata = file_get_contents("php://input");
	
	if(isset($postdata) && !empty($postdata)){
		//string_json to objet_json
		$array = json_decode($postdata);
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
		
		if($array->action == "connection"){
			$query = "select * from mygoddessUSER where email = :email and password = :password";
			$result = execRequete($query,[
				"email"    => $array->email,
				"password" => md5($array->password.SALT)
			]);
			
			$result = $result->fetchAll();
			$response = array();
			if(count($result) == 0){
				$response['response'] = "noconnection";
				echo json_encode($response);
			}else{
				$response['response'] = "okconnection";
				$response['id'] = $result[0]['id'];
				echo json_encode($response);
			}
		}
		
		if($array->action == "allphotos"){
			$query = "select * from mygoddessPHOTO";
			$result = execRequete($query,[]);
			
			$result = $result->fetchAll();
			$response = array();
			if(count($result) == 0){
				$response['response'] = "nophotos";
				echo json_encode($response);
			}else{
				$response['response'] = "gotphotos";
				$response['data'] = $result;
				echo json_encode($response);
			}
		}
		
		if($array->action == "allmovies"){
			$query = "select * from mygoddessMOVIE";
			$result = execRequete($query,[]);
			
			$result = $result->fetchAll();
			$response = array();
			if(count($result) == 0){
				$response['response'] = "nomovies";
				echo json_encode($response);
			}else{
				$response['response'] = "gotmovies";
				$response['data'] = $result;
				echo json_encode($response);
			}
		}
		
		if($array->action == "allvideos"){
			$query = "select * from mygoddessVIDEO";
			$result = execRequete($query,[]);
			
			$result = $result->fetchAll();
			$response = array();
			if(count($result) == 0){
				$response['response'] = "novideos";
				echo json_encode($response);
			}else{
				$response['response'] = "gotvideos";
				$response['data'] = $result;
				echo json_encode($response);
			}
		}
		
		/*
		$query = "insert into message (user,content) values (:user,:content)";
		execRequete($query,[
			":user"=>$array->name,
			":content"=>$array->message
		]);
		echo  json_encode($array->name);*/
	}
	
?>
