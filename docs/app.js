$.getJSON("donors.json",function(data){

$.each(data, function(key, value){
  var table_data =  "<tr><td>"+key+"</td><td>"+value.name+"</td><td>"+value.blood_group+"</td><td>"+value.contact+"</td></tr>"
  $('#table').append(table_data);
});
});
