<?php
/*
	header("Content-Type: application/json; charset=UTF_8");
	header("Access-Control-Allow-Origin: *");
	header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
	header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
	$pdo = new PDO(
		'mysql:host=sql24;dbname=fct09191',
		'fct09191',
		'abchero',
		array(
			PDO::ATTR_ERRMODE => PDO::ERRMODE_WARNING,
			PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8',
			PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
		)
	);
	
	*/
	// Connexion BDD
	$pdo = new PDO(
		'mysql:host=localhost;dbname=mygoddess',
		'root',
		'',
		array(
			PDO::ATTR_ERRMODE => PDO::ERRMODE_WARNING,
			PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8',
			PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
		)
	);
	
	
	
	function execRequete($req,$params = array()){

		// Sanitize
		if ( !empty($params)){
			foreach($params as $key => $value){
				$params[$key] = trim(strip_tags($value));
			}
		}
		global $pdo; // globalisation de $pdo

		$r = $pdo->prepare($req);
		$r->execute($params);
		if( !empty($r->errorInfo()[2]) ){
			die('Erreur rencontrée lors de la requête : '.$r->errorInfo()[2]);
		}

		return $r;
	}
?>
