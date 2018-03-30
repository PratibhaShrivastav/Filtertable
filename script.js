$(document).ready(function(){
  $.getJSON("https://jsonplaceholder.typicode.com/users",function(data){
    var check;
    for(var i=0;i<data.length;i++)
    {
      check= $('<tr/>');
	  check.append("<td>"+data[i].id+"</td>");
      check.append("<td>"+data[i].name+"</td>");
      check.append("<td>"+data[i].website+"</td>");
      $('table').append(check);
    }
  });
});

function myfunction() {

    var input,found,filter, table,td,i,tr,j;
    input = document.getElementById('tablej');
    filter = input.value.toUpperCase();
    table=document.getElementById('tabledata');
    tr = table.getElementsByTagName('tr');

    for (i = 1; i < tr.length; i++) {
        td = tr[i].getElementsByTagName('td');
        for(j=0;j<td.length;j++){
          if(td[j].innerHTML.toUpperCase().indexOf(filter) > -1)
              found = true;
        }
        if (found) {
            tr[i].style.display = "";
            found=false;
        } else {
            tr[i].style.display = "none";
        }
      }
}
