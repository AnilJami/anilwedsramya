<?php

function parse_uri() {	
	global $home_page, $pages, $base_url, $show_comments, $langs, $def_lang;
	
	$nh = preg_replace('#/\./#', '/', $base_url);
	$nh = preg_replace('#^http[s]*://[^/]+/#i', '/', $nh);
	$nh = preg_replace('#/[^/]+/\.\./#i', '/', $nh);
	$ru = trim(isset($_SERVER['REQUEST_URI']) ? urldecode($_SERVER['REQUEST_URI']) : '/');
	$ru = preg_replace('#'.preg_quote($nh).'#i', '', $ru, 1);
	list($ru) = explode('?', $ru, 2);
	
	if (isset($_GET['route'])) {
		$ru = trim($_GET['route']);
	}
	$ru = preg_split('#[\ \t]*[/]+[\ \t]*#i', $ru, -1, PREG_SPLIT_NO_EMPTY);
	$ru = array_map('trim', $ru);
	
	$cusr = null;
	if (strpos(ini_get('disable_functions'), 'get_current_user') === false) {
		$cusr = get_current_user();
	}
	if ($cusr && !empty($ru) && ($ru[0] == ('~'.$cusr) || $ru[0] == ($cusr.'~'))) {
		array_shift($ru);
	}
	
	if (isset($ru[0]) && preg_match('#^[a-z]{2}-[A-Z]{2}$#', $ru[0])) {
		array_shift($ru);
	}
	
	if (!count($ru)) {
		foreach ($pages as $idx => $pi) {
			if ($home_page == $pi['id']) return array($idx, $def_lang, array(), null);
		}
		return array($home_page, $def_lang, array(), null);
	}
	
	$show_comments = false;
	
	if ($ru[0] == 'news') {
		$pageIdx = getPageIndexById(isset($ru[1]) ? intval($ru[1]) : null);
		$route = array_shift($ru);
		return array($pageIdx, $def_lang, $ru, $route);
	}
	else if ($ru[0] == 'blog') {
		$pageIdx = getPageIndexById(isset($ru[1]) ? intval($ru[1]) : null);
		$show_comments = true;
		$route = array_shift($ru);
		return array($pageIdx, $def_lang, $ru, $route);
	}
	
	$lang = ($def_lang ? $def_lang : null);
	if ($langs && is_array($langs) && isset($langs[$ru[0]])) {
		$lang = array_shift($ru);
	}
	$ru_ = array_shift($ru);
	
	foreach ($pages as $idx => $pi) {
		if ($ru_ == $pi['id']) return array($idx, $lang, $ru, $ru_);
	}
	if (!$ru_) {
		foreach ($pages as $idx => $pi) {
			if ($home_page == $pi['id']) return array($idx, $lang, $ru, null);
		}
		return array($home_page, $lang, $ru, null);
	}
	
	$ruBak = array_merge(array($ru_), $ru); $ruBakOther = array();
	while (!empty($ruBak)) {
		$ru_ = implode('/', $ruBak);
		foreach ($pages as $idx => $pi) {
			if (is_array($pi['alias'])) {
				if ($lang && isset($pi['alias'][$lang]) && $ru_ == $pi['alias'][$lang]) {
					return array($idx, $lang, $ruBakOther, $ru_);
				}
			} else if ($ru_ == $pi['alias']) {
				return array($idx, $lang, $ruBakOther, $ru_);
			}
		}
		array_unshift($ruBakOther, array_pop($ruBak));
	}
	
	return array(-1, $lang, $ru, null);
}

function getPageIndexById($pageId) {
	global $pages;
	foreach ($pages as $id => $pi) {
		if ($pageId == $pi['id']) return $id;
	}
	return null;
}

function getPageUri($pageId, $lang = null) {
	global $pages, $def_lang;
	foreach ($pages as $pi) {
		if ($pi['id'] != $pageId) continue;
		if (is_array($pi['alias'])) {
			if ($lang && isset($pi['alias'][$lang])) {
				return (strpos($pi['alias'][$lang], '#') === false ? "$lang/" : '').$pi['alias'][$lang];
			} else if ($def_lang && isset($pi['alias'][$def_lang])) {
				return (strpos($pi['alias'][$lang], '#') === false ? "$def_lang/" : '').$pi['alias'][$def_lang];
			}
		} else {
			return "/{$pi['alias']}";
		}
	}
}

function handleComments($pageId = null) {
	$post = $_POST;
	if (isset($post['postComment'])) {
		// message field is used as "Honney Pot" trap
		if ($pageId && isset($post['message']) && !$post['message']) {
			$file = dirname(__FILE__).'/'.$pageId.'.comments.dat';
			$dataStr = is_file($file) ? file_get_contents($file) : null;
			$data = $dataStr ? json_decode($dataStr) : array();
			if (trim($post['text'])) {
				$data[] = $comment = array(
					'date' => date('Y-m-d'),
					'time' => date('H:i'),
					'user' => ($post['name'] ? $post['name'] : 'anonymous'),
					'text' => substr($post['text'], 0, 200)
				);
				file_put_contents($file, json_encode($data));
				
				// post info to builder
				if (function_exists('curl_init')) {
					global $user_key, $user_hash, $comment_callback;
					_http_get($comment_callback, array(
						'key'	=> $user_key,
						'hash'	=> md5($user_key.$user_hash),
						'id'	=> $pageId,
						'date'	=> base64_encode($comment['date']),
						'time'	=> base64_encode($comment['time']),
						'name'	=> base64_encode($comment['user']),
						'message'=> base64_encode($comment['text'])
					));
				}				
			}
		}
		list($ruA) = explode('?', $_SERVER['REQUEST_URI']);
		list($ru) = explode('#', $ruA);
		header('Location: '.$ru.'#wb_comment_box');
		exit();
	}
}

function renderComments($pageId = null) {
	$comments = array();
	$dataFile = dirname(__FILE__).'/'.$pageId.'.comments.dat';
	$dataStr = is_file($dataFile) ? file_get_contents($dataFile) : null;
	$data = $dataStr ? json_decode($dataStr) : null;
	if ($data && is_array($data)) {
		$comments = array_reverse($data);
	}
	include dirname(__FILE__).'/comments.tpl.php';
}

function tr_($value, $lang = null, $default = null) {
	global $def_lang;
	if (!$lang) $lang = $def_lang;
	if ($lang) {
		if (is_array($value) && isset($value[$lang])) {
			return $value[$lang];
		}
	}
	return ($value) ? $value : $default;
}

function handleForms($page_id) {
	global $forms, $formErrors, $lang, $user_domain;
	$formErrors = new stdClass();
	// check to ensure that all parameters are ok as well as protect from bots
	// and hackers
	$post = array();
	parse_str(file_get_contents('php://input'), $post);
	if (!isset($post['wb_form_id'])
		|| $post['message'] !== ''
		|| !isset($forms)
		|| !is_array($forms)
		|| !isset($page_id)
		|| !(isset($forms[$page_id]) || isset($forms['blog']))
		|| !(isset($forms[$page_id][$post['wb_form_id']]) || isset($forms['blog'][$post['wb_form_id']]))
		|| !(isset($forms[$page_id][$post['wb_form_id']]['fields']) || isset($forms['blog'][$post['wb_form_id']]['fields']))
		|| isset($post['forms'])
		|| isset($_GET['forms'])
	) return;
	
	global $wb_form_send_state, $wb_form_id;
	$wb_form_send_state = false;
	
	$form = isset($forms[$page_id][$post['wb_form_id']])
		? $forms[$page_id][$post['wb_form_id']] : $forms['blog'][$post['wb_form_id']];
	
	if (isset($form['recSiteKey']) && $form['recSiteKey'] && isset($form['recSecretKey']) && $form['recSecretKey']) {
		// reCAPTCHA is enabled
		$recResp = (isset($post['g-recaptcha-response']) ? $post['g-recaptcha-response'] : '');
		$respStr = $recResp ? _http_get('https://www.google.com/recaptcha/api/siteverify', array(
			'secret' => $form['recSecretKey'],
			'response' => $recResp,
			'remoteip' => (isset($_SERVER['REMOTE_ADDR']) ? $_SERVER['REMOTE_ADDR'] : null)
		)) : null;
		$resp = $respStr ? json_decode($respStr) : null;
		if (!$resp || !isset($resp->success) || !$resp->success) {
			$wb_form_send_state = 'Form was NOT sent, are you a robot?';
			return;
		}
	}
	
	
	$replyToMode = true;
	
	if (!class_exists('PHPMailer')) {
		include dirname(__FILE__).'/phpmailer/class.phpmailer.php';
	}
	$fields = $form['fields'];
	$email_list = array_map('trim', explode(';', $form['email']));
	$mail_to = array();
	foreach ($email_list as $eml) {
		if (($m = is_mail($eml))) { $mail_to[] = $m; }
	}
	$mail_from = reset($mail_to);
	$mail_from_name = 'NoName';
	
	$wb_form_id = $post['wb_form_id'];
	
	$data = Array();
	foreach($fields as $idx => $field) {
		if (!isset($post["wb_input_$idx"])) {
			return; // all fields must be present
		}
		$max_len = ($field["type"]=="textarea")?65536:1024; // 65 kilobytes max for textarea and 1024 for other
		$valueRaw = $post["wb_input_$idx"];
		if (empty($valueRaw) && strlen($valueRaw) == 0) {
			if (!isset($formErrors->required)) $formErrors->required = array();
			$formErrors->required[] = "wb_input_$idx";
		}
		$value = (strlen($valueRaw) > 0) ? substr(htmlspecialchars($valueRaw), 0, $max_len) : htmlspecialchars($valueRaw);
		if ($field["type"] == "select") {
			$options = explode(";", tr_($field["options"], $lang));
			$data[$idx] = trim($options[intval($value)]);
		} else
			$data[$idx] = $value;
		if ($field["fidx"] == 0) $mail_from_name = $value;
		if ($field["fidx"] == 1) $mail_from = is_mail($value);
	}
	if (isset($post['object']) && $post['object'])
		$data['object'] = $post['object'];
	
	$formErrors_t = (array) $formErrors;
	if (!empty($formErrors_t)) return; // must not have any errors
	
	if (!$mail_from_name) $mail_from_name = "Anonymous";
	if (!$mail_from) $mail_from = reset($mail_to);
	
	if (!empty($mail_to)) {
		$mailer = new PHPMailer();
		// $mailer->PluginDir = dirname(__FILE__) . "/phpmailer/";
		
		if (isset($form['smtpEnable']) && $form['smtpEnable']) {
			include dirname(__FILE__).'/phpmailer/class.smtp.php';
			
			$mailer->isSMTP();
			$mailer->Host = ((isset($form['smtpHost']) && $form['smtpHost']) ? $form['smtpHost'] : 'localhost');
			$mailer->Port = ((isset($form['smtpPort']) && intval($form['smtpPort'])) ? intval($form['smtpPort']) : 25);
			$mailer->SMTPSecure = ((isset($form['smtpEncryption']) && $form['smtpEncryption']) ? $form['smtpEncryption'] : '');
			if (isset($form['smtpUsername']) && $form['smtpUsername'] && isset($form['smtpPassword']) && $form['smtpPassword']) {
				$mailer->SMTPAuth = true;
				$mailer->Username = ((isset($form['smtpUsername']) && $form['smtpUsername']) ? $form['smtpUsername'] : '');
				$mailer->Password = ((isset($form['smtpPassword']) && $form['smtpPassword']) ? $form['smtpPassword'] : '');
			}
			$mailer->SMTPOptions = array('ssl' => array(
				'verify_peer' => false,
				'verify_peer_name' => false,
				'allow_self_signed' => true
			));
		}

		$style = "* { font: 12px Arial; }\nstrong { font-weight: bold; }";
		foreach ($mail_to as $eml) {
			$mailer->AddAddress($eml);
		}
		if ($replyToMode || (isset($form['emailFrom']) && $form['emailFrom'])) {
			$sender_email = (isset($form['emailFrom']) && $form['emailFrom']) ? $form['emailFrom'] : ('no-reply@'.$user_domain);
			$mailer->SetFrom($sender_email, $mail_from_name);
			$mailer->addReplyTo($mail_from, $mail_from_name);
		} else {
			$mailer->SetFrom($mail_from, $mail_from_name);
		}
		$mailer->CharSet = 'utf-8';
		//$mailer->MsgHTML(preg_replace('/([\x{80}-\x{FFFFFF}])/ue', "mb_convert_encoding('$1', 'HTML-ENTITIES', 'UTF-8')", $tpl->getHTML()));
		$message = '';
		if (isset($form['loggingHandler']) && $form['loggingHandler'] && is_callable($form['loggingHandler'])) {
			call_user_func((strpos($form['loggingHandler'], '::') ? explode('::', $form['loggingHandler']) : $form['loggingHandler']), $form, $data);
		}
		if (isset($form['object']) && $form['object']) {
			if (isset($form['objectRenderer']) && $form['objectRenderer'] && is_callable($form['objectRenderer'])) {
				$objectStr = call_user_func((strpos($form['objectRenderer'], '::') ? explode('::', $form['objectRenderer']) : $form['objectRenderer']), $form, $data);
			} else {
				$objectStr = '<p><strong>'.htmlspecialchars($form['object']).'</strong></p>';
			}
			if ($objectStr) $message .= $objectStr;
		}
		$message .= '<table cellspacing="5" cellpadding="0">';
		foreach ($fields as $idx => $field) {
			$name = tr_($field["name"]);
			$value = $data[$idx];
			if ($field["type"] == "textarea")
				$message .= "<tr><td colspan=\"2\"><strong>$name: </strong></td></tr>\n<tr><td colspan=\"2\">" . nl2br($value) . "</td></tr>\n";
			else
				$message .= "<tr><td><strong>$name: </strong></td><td>" . nl2br($value) . "</td></tr>\n";
  		}
		$message .= '</table>';
		
		$html =
'<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<html>
	<head>
		<title>' . $form["subject"] . '</title>
		<meta http-equiv=Content-Type content="text/html; charset=utf-8">
		' . ($style?"<style><!--\n$style\n--></style>\n\t\t":"") . '</head>
	<body>' . $message . '</body>
</html>';
		$mailer->MsgHTML($html);
		$mailer->AltBody = strip_tags(str_replace("</tr>", "</tr>\n", $message));
		$mailer->Subject = $form["subject"];
		ob_start();
		$res = $mailer->Send();
		ob_get_clean();
		if ($res) {
			$wb_form_send_state = (isset($form['sentMessage']) && $form['sentMessage']) ? $form['sentMessage'] : 'Form was sent.';
		} else {
			$wb_form_send_state = 'Form sending failed.';
		}
	} else {
		$wb_form_send_state = 'Form configuration error.';
	}
}

function is_mail($mail) {
	if (preg_match("/^[0-9a-zA-Z\.\-\_]+\@[0-9a-zA-Z\.\-\_]+\.[0-9a-zA-Z\.\-\_]+$/is", trim($mail)))
		return $mail;
	return "";
}

function mini_text($text) {
	return trim(substr(strip_tags($text), 0, 100), " \n\r\t\0\x0B.").'...';
}

function _http_get($url, $post_vars = false) {
	$post_contents = '';
	if ($post_vars) {
		if (is_array($post_vars)) {
			foreach($post_vars as $key => $val) {
				$post_contents .= ($post_contents ? '&' : '').urlencode($key).'='.urlencode($val);
			}
		} else {
			$post_contents = $post_vars;
		}
	}

	$uinf = parse_url($url);
	$host = $uinf['host'];
	$path = $uinf['path'];
	$path .= (isset($uinf['query']) && $uinf['query']) ? ('?'.$uinf['query']) : '';
	$headers = array(
		($post_contents ? 'POST' : 'GET')." $path HTTP/1.1",
		"Host: $host",
	);
	if ($post_contents) {
		$headers[] = 'Content-Type: application/x-www-form-urlencoded';
		$headers[] = 'Content-Length: '.strlen($post_contents);
	}

	$ch = curl_init();
	curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
	curl_setopt($ch, CURLOPT_URL,$url);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	curl_setopt($ch, CURLOPT_TIMEOUT, 600);
	curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

	if ($post_contents) {
		curl_setopt($ch, CURLOPT_POST, 1);
		curl_setopt($ch, CURLOPT_POSTFIELDS, $post_contents);
	}

	$data = curl_exec($ch);
	if (curl_errno($ch)) {
		return false;
	}
	curl_close($ch);

	return $data;
}

if (!function_exists('file_put_contents')) {
	if (!defined('FILE_USE_INCLUDE_PATH'))
		define('FILE_USE_INCLUDE_PATH', 1);
	if (!defined('FILE_APPEND'))
		define('FILE_APPEND', 8);
	if (!defined('LOCK_EX'))
		define('LOCK_EX', 2);
	function file_put_contents($filename, $data, $flags = 0, $context = false) {
		if (is_array($data)) $data = implode('', $data);
		$res = false;
		if (($fh = fopen($filename, (($flags & FILE_APPEND) ? 'a' : 'w'), (($flags & FILE_USE_INCLUDE_PATH) ? true : false)))) {
			$res = fwrite($fh, $data);
			fclose($fh);
		}
		return $res;
	}
}

if (!function_exists('json_decode')) {
	require_once dirname(__FILE__).'/class.json.php';
	global $_json_service;
	$_json_service = new Services_JSON();
	function json_decode($json, $assoc = false) {
		global $_json_service;
		$_json_service->use = $assoc ? SERVICES_JSON_LOOSE_TYPE : 0;
		return $_json_service->decode($json);
	}
	function json_encode($data, $assoc = false) {
		global $_json_service;
		$_json_service->use = $assoc ? SERVICES_JSON_LOOSE_TYPE : 0;
		return $_json_service->encodeUnsafe($data);
	}
}
