//Event handling
document.addEventListener("DOMContentLoaded", 
    function(event){
        // Unobstrusive event biding
        document.querySelector("button").addEventListener("click",
            function(){
                $ajaxUtils.sendGetRequest("/data/name.json",
                    function(response){
                        var message = response.firstName +" "+ response.lastName
                        if(response.likesChineseFood){
                            message +=" likes Chinese food";
                        }
                        else{
                            message += " doesnt like Chinese food";
                        }
                        message +=" and uses ";
                        message +=response.numberOfDisplays;
                        message +=" displays for coding.";

                        document.querySelector("#content").innerHTML="<h2>"+message+"</h2>";
                    });
                }      
        );
    }   
);