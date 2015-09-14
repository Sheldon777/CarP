angular.module('directives', [])

.directive('inputs',function(){
	return{
		restrict: 'EA',
		require: '^text',
		compile: function(elem,attr){
			elem.html("<div class='form-group vcenter'>\
					    <label class='col-md-offset-3 col-md-2 control-label'>"+attr.text+"</label>\
					    <div class='col-md-3'>\
					      <input type="+attr.type+" class='form-control'\
					       placeholder="+attr.text+" required name = '"+attr.var+"\
					       'ng-model = 'formData."+attr.var+"'>\
					    </div>\
					     <span class = 'col-md-2' style='color:red' \
					       ng-show='myForm."+attr.var+".$dirty && myForm."+attr.var+".$invalid'>\
					<span ng-show='myForm."+attr.var+".$error.required'>Required!</span></span>\
					  </div>")
		}
	}
})
