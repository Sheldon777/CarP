angular.module('directives', [])

.directive('inputs',function(){
	return{
		restrict: 'EA',
		require: '^text',
		compile: function(elem,attr){
			elem.html("<div class='form-group vcenter'>\
					    <label class='col-md-offset-3 col-md-2 control-label'>"+attr.text+"</label>\
					    <div class='col-md-3'>\
					      <input type="+attr.type+" min = '0' class='form-control'\
					       placeholder="+attr.text+" required name = '"+attr.var+"\
					       'ng-model = 'formData."+attr.var+"'>\
					    </div>\
					  </div>")
		}
	}
})

.directive('listItem',function(){
return{
		restrict: 'EA',
		require: '',
		compile: function(elem,attr){
			elem.html('<div class ="listItem center-block conteiner">\
			<div class = "row info">\
				<div class = "col-md col-md-2 city">Driver Name-{{data.FirstName }}\
				</div>\
				<div class = "col-md-2 city">From-{{data.From_City }}\
				</div>\
				<div class = "col-md-2 city">To-{{data.To_City}}\
				</div><div class = "col-md-2 city">Date-{{data.Date}}</div>\
				<div class = "col-md-2 city">Time-{{data.Time}}</div>\
				<div class = "col-md-2 city">Places-{{data.Places}}</div></div>\
			<div class = "row info">\
				<div class = "col-md-2 city">Time-{{data.Time}}</div>\
				<div class = "col-md col-md-2 city">Price-{{data.Price}}$</div>\
				<div class = "col-md-2 city"> Car-{{data.Brand +" "+ data.Model}}</div></div></div>')
		}
	}	
})
