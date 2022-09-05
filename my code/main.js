$(document).ready(function(){
    $('#Get-Avenger').on('click',function(){
        adetails()
    })
    $('#delete').on('click',function(){
        deleteAven()

    })
});
$(function adetails(){

    var $Avenger = $('#Avenger');

    $.ajax({

        type: 'GET',

        url: 'http://localhost:8080/wservices/webresources/AvengerService/getavenger',

        success: function(Avenger) {
            console.log(Avenger);

           $.each(Avenger.avenger, function(i, Avengers){


            console.log(Avengers);
                $Avenger.append ('<li>id: '+Avengers.id+ ', name: ' +Avengers.aname +', price: '+ Avengers.aprice + ', type: '+Avengers.atype+ '</li>');

            });

        },

        error: function(){

            alert('error loading orders');

        }

    });
});




function  deleteAven(){

    var aid = document.getElementById("deleteAvenger").value;

    console.log(aid);

    $.ajax({

        type: 'DELETE',

        url:"http://localhost:8080/wservices/webresources/AvengerService/Avengerup/"+aid,

        success:alert("Avenger deleted"+aid)

    })

 

}