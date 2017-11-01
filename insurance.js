$(document).ready(function(){
	$('#firstName').on('input', function() {
	var input=$(this);
	var is_fname=input.val();
	if(is_fname){input.removeClass("invalid");}
	else{input.addClass("invalid");
	}
});	
	$('#lastName').on('input', function() {
	var input=$(this);
	var is_lname=input.val();
	if(is_lname){input.removeClass("invalid");}
	else{input.addClass("invalid");
	}
});	
	$('#emailAddress').on('input', function() {
	var input=$(this);
	var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	var is_email=re.test(input.val());
	if(is_email){input.removeClass("invalid");}
	else{input.addClass("invalid");
	}
});	

	$('#socialInsuranceNumber').keyup(function () { 
		this.value = this.value.replace(/[^0-9\.]/g,'');
});
	
	$('#socialInsuranceNumber').on('input', function() {
	var input=$(this);
	var is_name=input.val();
	if(is_name){input.removeClass("invalid");}
	else{input.addClass("invalid");
	}	
});
	$('#search').mouseenter(function(){
	 $("#search").hide();
	 $("#search-input").show();
     });
	 
	$('#search-input').mouseleave(function(){
	 $("#search").show();
	 $("#search-input").hide();
     }); 
}); 