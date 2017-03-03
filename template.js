$(document).ready(function(){	

      $(document).ajaxStart(function(){
        
      }).ajaxStop(function(){
        console.log("Ajax Stopped.")
      }).ajaxSuccess(function(){
        console.log("Ajax Success")
      }).ajaxComplete(function(){
        console.log("Ajax Completed")
      })

      $("#hit").on("click",function(){
        

        $.ajax({
          url:"https://public-api.wordpress.com/rest/v1/sites/dotnetask.wordpress.com",
          success: function(data){
            console.log(JSON.stringify(data));
			
            
			 $("#user-id").text("User id is => "+data.ID);
			$("#name").text("User Desciption is => "+data.name);
			$("#descripition").text("description=>"+data.description)
           
          },
          error: function(){
            $("#user-image").attr("src","no-user.png");
            $("#user-name").text("User not found");
          }
        })
      })
});    