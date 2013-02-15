<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>无标题文档</title>
<style type="text/css">
#waitPic {
display:none;
}
</style>
<script type="text/javascript" src="area.js"></script>
</head>

<body>
<form action="select.php" method="post">
	<fieldset>
		<legend>所在地</legend>
		<label>省：</label>
		<select id="province" name="province">
			<option selected="selected" value="">--请选择--</option>
			<?php
			$data=json_decode(file_get_contents("area_data.json"));
			foreach($data->p as $p){
				echo "<option value='{$p[1]}'>{$p[0]}</option>";
			}
			?>
		</select>
		<label id="citySpan">市：
			<select  id="city">
				<option disabled="disabled">--请选择--</option>
			</select>
		</label>
		<label id="townSpan">县：
			<select id="town">
				<option>--请选择--</option>
			</select>
		</label>
		<img alt="正在请求....." id="waitPic" src="wait.gif" />
		<input type="submit" value="确定" />
	</fieldset>
</form>
</body>
</html>
