var grplist = [];
// Create a Set
const letters = new Set(["John Doe","00000","01/02/2029"]);

function myAlert() {
    // document.getElementById("demo").innerHTML = "Hello World";
    alert('This user has not post yet. Please come back later');
}

function myChat(even) {
    const element = document.getElementById("email");
    let text = element.getAttribute("class");
    document.getElementById("demo").innerHTML = text;
}
 var clicked = false;
var onclickHandlerImage = function (even) {
    let id = event.target.id;
    let get = document.getElementById(this);
   

    if (!clicked) {
        $("#tbody-").append(tableBody());
    }
    clicked = true;
}

// var myChat = function(id){
//     alert('chatBot not ready yet... Please try later');
// }


/*
* Profile
* */
// var grplist=[];
// const hello = {name:"Fiat", id:"500", date:"01/01/1677"};
// var obj = function(){
//     return hello;
// }
// var updateProfile = function(profile)
// {
//               $(".userProfile").append(profileTemplate(profile));

//               const accordianBar = profile.groups.map(M_accordion_group);
//               $("#accordion").append(accordianBar);
// }

// var profileTemplate = function(profile)
// {
//               return '<P>' + profile.firstName + ' ' + profile.lastName +'</P>'
//               + '<P>' + profile.userId + '</P>'
//               + '<P>' + profile.registerDate + '</P>';
// }

// /*
// * Contacts
// */
// var stringifyAndParse = function (data) {
//               var json = JSON.stringify(data);
//               return JSON.parse(json);
// }
// /* Contact info */
// /*Service call for user groups*/
// $(document).ready(function(){
//   $("p").click(function(){
//     $(this).hide();
//   });
// });
function welcome() {
    var text = "";
    letters.forEach (function(value) {
        text += value;
      })
    return text + ' WELCOME to me page';
}
var clicked = false;
var onclickHandler = function (even){
       let id = event.target.id;
    

    if (!clicked) {
        $("#mytbody").append(tableBody( welcome()));
    }
    clicked = true;
    //grplist.push(id);
}

// var generateUserGroups  = function (groupId) {
//         populateGrpInfo(groupId,result);
// };

// var populateGrpInfo = function(email){
//               $("#contacts-").append(M_accordion_contact(email));
//               $("#tbody-").append(tableBody());  
// }

// var M_accordion_group = function (groupAddress) {
//     return '<div class="panel panel-info mb-2 border-0 rounded-0" id="email">'
// +        '<div class="panel-heading" id="heading-">'
// +          '<h4 class="panel-title collapsed" onclick="onclickHandler(event)";" type="button" data-bs-toggle="collapse" data-bs-target="#panel-" aria-expanded="false" aria-controls="panel-" id="">'                             
// +            '<a data-toggle="collapse" data-parent="#accordion" href="#" style="color: #3C99DC;" class="accordion-toggle text-decoration-none" id="">'
// +              'Type</a>'
// +              '</button>'
// +        '</div>'
// +        '<div id="panel-" class="accordion-collapse collapse" aria-labelledby="heading-" data-bs-parent="#accordion">'
// +            '<div class="panel-body">'
// +                '<div class="row" id="contacts-">'
// +                    '<div class="col-xs-12 col-md-4">'
// +                        '<div class="bs-callout bs-callout-default m-0" style="color: #3C99DC;">'
// +                            '<h3>type and member name</h3>'
// +                        '</div>'
// +                    '</div>'
// +                '</div>'
// +            '</div>'
// +        '</div>'
// +    '</div>';
// }
var tableBody = function (callback) {
    let str = "";
    for (let index = 0; index < 2; index++) {
        str += '<tr class="text-center">'
            + '<td > Item type </td>'
            + '<td><span class="group">'
            + '<span> Item name </span></span>'
            + '</td>'
            + '<td > <img src="Music_Icon.jpg" class="card-img-top" alt="..."> </td>'
            + '</tr>';
    }
    alert(callback)
    return str;
}

// var M_accordion_contact = function (email,contact) {
//     return '<div class="col-xs-12 col-md-8">'
// +                        '<!--div address-->'
// +                        '<div class="col-xs-12" style="background-color: #f5f5f5; padding-right: 0;padding-left: 0;padding-top: .5rem;margin-top: 1rem;margin-bottom: .5rem;">'
// +                            '<div class="col-xs-6" style="font-size: 1.0rem;">'
// +                                '<p>Group Address</p>'
// +                            '</div>'
// +                            '<div class="col-xs-6 text-right" style="font-size: 1.0rem;">'
// +                                '<p>+ contact.groupAddress.line1 +</p>'
// +                                '<p> city state zipCode </p>'
// +                                '</divclass="col-xs-6>'
// +                            '</div>'
// +                        '</div>'
// +                        '<!--div group contact-->'
// +                        '<div class="col-xs-12" style="font-size: 1.0rem;background-color: #f5f5f5;margin-bottom: .4rem;">'
// +                            '<p>Group Contacts</p>'
// +                        '</div>'
// +                        '<!--div group table-->'
// +                        '<table class="table table-bordered" style="color: black;">'
// +                            '<thead>'
// +                                '<tr>'
// +                                    '<th class="text-center">Contact type</th>'
// +                                    '<th class="text-center">Name</th>'
// +                                    '<th class="text-center">Email address</th>'
// +                                    '<th class="text-center">Phone number</th>'
// +                                '</tr>'
// +                            '</thead>'
// +                            '<tbody id="tbody-">'
// +                            '</tbody>'
// +                        '</table>'
// +                    '</div>';
// }

// updateProfile(hello());