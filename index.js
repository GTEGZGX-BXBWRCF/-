$(function(){
	$(".on a").toggle(function(){
		$(".topDown").show("slow");
	},
	function(){
		$(".topDown").hide("fast");
	}
	)
	
	$("header").toggle(function(){
		$(".content").slideDown("slow");
	},
		function(){
			$(".content").slideUp("slow");
		}
	)
	$("dt").click(function(){
		$(this).find("dd").show();
	})

	
})