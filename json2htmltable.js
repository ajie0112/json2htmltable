var json2htmltable = (function($){	

	// vertical align table
	var verticalAlign = function(obj, cssClass){
		
		var html = "<table class='"+cssClass+"'>";
        $.each(obj, function(key, val){
            if (typeof(val) == "string" && val.match(/\[|\{/)) {
                val = $.parseJSON(val);
            }

            if(typeof(val) === "object" || typeof(val) === "array"){           
                html += "<tr><td>"+key+"</td><td>"+json2htmltable.vt(val, cssClass)+"</td></tr>";
            } else {
            	html += "<tr><td>"+key+"</td><td>"+val+"</td></tr>";                
            }
        });

        html += "</table>";
        return html;
	};

	// horizontal align table
	var horizontalAlign = function(obj, cssClass){

        var html = "<table class='"+cssClass+"'>";

        // write table header
        var header = obj[0];
        html += "<tr>";
        $.each(header, function(key, val){
            html += "<td>"+key+"</td>";
        });
        html += "</tr>";

        // write table body
        for (var i = 0; i < obj.length; i++) {
            var line = obj[i];
            html += "<tr>";
            $.each(line, function(key, val){                
                html += "<td>"+val+"</td>";
            });
            html += "</tr>";
        }

        html += "</table>";
        return html;
	};

	return {
		vt : verticalAlign,
		ht : horizontalAlign
	}

})(jQuery);
