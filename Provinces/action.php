<?php
header("Cache-Control:max-age=99999999");
$aid=$_GET["aid"];
$data=json_decode(file_get_contents("area_data.json"));
@$areas=$data->a->{$aid};
if (!$areas) {
	echo "";
} else {
	echo json_encode($areas);
}
?>
