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
				$query = "select * from mygoddessPHOTO";
				$result = execRequete($query,[]);
				$result = $result->fetchAll();
				$response['data'] = $result;
				$response['response'] = "done";
				echo json_encode($response);
			}
		}
		
		if($array->action == "editonephoto"){
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
				$query = "update mygoddessPHOTO set link = :link where id = :id";
				$result = execRequete($query,[
					"id"    => $array->id,
					"link" => $array->link
				]);
				$response['response'] = "done";
				echo json_encode($response);
			}
		}
		if($array->action == "addonephoto"){
			$query = "insert into mygoddessPHOTO (link) values (:link)";
			$result = execRequete($query,[
				"link"    => $array->link,
			]);
			$query = "select * from mygoddessPHOTO";
			$result = execRequete($query,[]);
			$result = $result->fetchAll();
			$response['data'] = $result;
			$response['response'] = "done";
			echo json_encode($response);
		}
		
		//users
		if($array->action == "getallusers"){
			$query = "select id,email,inscriptiondate,role from mygoddessUser";
			$result = execRequete($query,[]);
			$result = $result->fetchAll();
			$response['data'] = $result;
			$response['response'] = "gotusers";
			echo json_encode($response);
		}
		
		if($array->action == "deleteoneuser"){
			$query = "select * from mygoddessUSER where id = :id";
			$result = execRequete($query,[
				"id"    => $array->id,
			]);
		
			$result = $result->fetchAll();
			$response = array();
			if(count($result) == 0){
				$response['response'] = "no";
				echo json_encode($response);
			}else{
				$query = "delete from mygoddessUSER where id = :id";
				$result = execRequete($query,[
					"id"    => $array->id,
				]);
				$query = "select * from mygoddessUSER";
				$result = execRequete($query,[]);
				$result = $result->fetchAll();
				$response['data'] = $result;
				$response['response'] = "done";
				echo json_encode($response);
			}
		}
		
		//movie
		if($array->action == "addonemovie"){
			$query = "insert into mygoddessMovie (name,release_date,running_time,actors,genre,plot,poster) values (:name,:release_date,:running_time,:actors,:genre,:plot,:poster)";
			$result = execRequete($query,[
				"name"    => $array->name,
				"release_date"    => $array->release_date,
				"running_time"    => $array->running_time,
				"actors"    => $array->actors,
				"genre"    => $array->genre,
				"plot"    => $array->plot,
				"poster"    => $array->poster,
			]);
			
			$query = "select * from mygoddessMOVIE";
			$result = execRequete($query,[]);
			$result = $result->fetchAll();
			$response['response'] = "done";
			$response['data'] = $result;
			echo json_encode($response);
		}
		
		if($array->action == "editonemovie"){
			$query = "select * from mygoddessMovie where id = :id";
			$result = execRequete($query,[
				"id"    => $array->id,
			]);
		
			$result = $result->fetchAll();
			$response = array();
			if(count($result) == 0){
				$response['response'] = "no";
				echo json_encode($response);
			}else{
				$query = "update mygoddessMovie set name = :name,release_date = :release_date,running_time = :running_time,actors = :actors, genre = :genre, plot = :plot, poster = :poster where id = :id";
				$result = execRequete($query,[
					"id"    => $array->id,
					"name"    => $array->name,
					"release_date"    => $array->release_date,
					"running_time"    => $array->running_time,
					"actors"    => $array->actors,
					"genre"    => $array->genre,
					"plot"    => $array->plot,
					"poster"    => $array->poster,
				]);
				$query = "select * from mygoddessMOVIE";
				$result = execRequete($query,[]);
				$result = $result->fetchAll();
				$response['response'] = "done";
				$response['data'] = $result;
				echo json_encode($response);
			}
		}
	}
	
?>
