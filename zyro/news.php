<!DOCTYPE html>
<html lang="en">
<head>
	<meta http-equiv="content-type" content="text/html; charset=utf-8" />
	<title>News</title>
	<base href="{{base_url}}" />
			<meta name="viewport" content="width=992" />
		<meta name="description" content="" />
	<meta name="keywords" content="News" />
	
	<link href="css/bootstrap.min.css" rel="stylesheet" type="text/css" />
	<script src="js/jquery-1.11.3.min.js" type="text/javascript"></script>
	<script src="js/bootstrap.min.js" type="text/javascript"></script>
	<script src="js/main.js" type="text/javascript"></script>

	<link href="css/site.css?v=1.1.39" rel="stylesheet" type="text/css" />
	<link href="css/common.css?ts=1485259412" rel="stylesheet" type="text/css" />
	<link href="css/news.css?ts=1485259412" rel="stylesheet" type="text/css" />
	
	<script type="text/javascript">var currLang = '';</script>		
	<!-- Le HTML5 shim, for IE6-8 support of HTML5 elements -->
	<!--[if lt IE 9]>
	  <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->
</head>


<body>{{ga_code}}<div class="root"><div class="vbox wb_container" id="wb_header">
	
<div id="wb_element_instance24" class="wb_element"><ul class="hmenu"><li><a href="Home/" target="_self" title="Home">Home</a></li><li><a href="About/" target="_self" title="About">About</a></li><li><a href="Gallery/" target="_self" title="Gallery">Gallery</a></li><li><a href="Contacts/" target="_self" title="Contacts">Contacts</a></li></ul></div><div id="wb_element_instance25" class="wb_element" style=" line-height: normal;"><h4 class="wb-stl-pagetitle">Dream wedding</h4>
</div><div id="wb_element_instance26" class="wb_element"><img alt="logo" src="gallery_gen/8e8711946ef6f69ce6fda848413af357_60x60.png"></div></div>
<div class="vbox wb_container" id="wb_main">
	
<div id="wb_element_instance29" class="wb_element" style="width: 100%;">
			<?php
				global $show_comments;
				if (isset($show_comments) && $show_comments) {
					renderComments(news);
			?>
			<script type="text/javascript">
				$(function() {
					var block = $("#wb_element_instance29");
					var comments = block.children(".wb_comments").eq(0);
					var contentBlock = $("#wb_main");
					contentBlock.height(contentBlock.height() + comments.height());
				});
			</script>
			<?php
				} else {
			?>
			<script type="text/javascript">
				$(function() {
					$("#wb_element_instance29").hide();
				});
			</script>
			<?php
				}
			?>
			</div></div>
<div class="vbox wb_container" id="wb_footer" style="height: 157px;">
	
<div id="wb_element_instance27" class="wb_element"><a href="fb.com/anil.jami2"><img alt="fb" src="gallery_gen/e732cda2fadad544bf4af3cba88f7248_48x48.png"></a></div><div id="wb_element_instance28" class="wb_element"><a href="http://fb.com/anil.jami2"><img alt="tw" src="gallery_gen/8bdce7be406b2c472c0e1ec542a143de_48x48.png"></a></div><div id="wb_element_instance30" class="wb_element" style="text-align: center; width: 100%;"><div class="wb_footer"></div><script type="text/javascript">
			$(function() {
				var footer = $(".wb_footer");
				var html = (footer.html() + "").replace(/^\s+|\s+$/g, "");
				if (!html) {
					footer.parent().remove();
					footer = $("#wb_footer");
					footer.height(77);
				}
			});
			</script></div></div><div class="wb_sbg"></div></div></body>
</html>
