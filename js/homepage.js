var json = {

	"fields": [
		{
			"label": "id",
			"code": "id",
			"type": "number",
			"showOnTable":true
		},{
			"label": "clientcompanyID",
			"code": " clientcompanyID ",
			"type": "number",
			"showOnTable":false
		},{
			"label": "firstname",
			"code": "firstname",
			"type": "text",
			"showOnTable":true
		},{
			"label": "lastname",
			"code": "lastname",
			"type": "text",
			"showOnTable":true
		},{
			"label": "username",
			"code": "username",
			"type": "text",
			"showOnTable":true
		},{
			"label": "description",
			"code": "desc",
			"type": "text",
			"showOnTable":true
		},{
			"label": "email",
			"code": "email",
			"type": "text",
			"showOnTable":true
		},{
			"label": "allowPublishing",
			"code": " allowPublishing",
			"type": "number",
			"showOnTable":true
			},{
			"label": "allowEditing",
			"code": " allowEditing ",
			"type": "number",
			"showOnTable":true
		}
	],
	"values":[
		{
			"id": 55,
			"clientcompanyID": "001",
			"firstname": "Tony",
			"lastname": "Johnson",
			"username": "tjohnson",
			"desc": "software developer",                              
			"email": "tony@company.com",
			"allowPublishing": "1",
			"allowEditing": "0"
		},{
			"id": 62,
			"clientcompanyID": "002",
			"firstname": "Andrea",
			"lastname": "Wilkens",
			"username": "awilkens",
			"desc": "HR assistant",                              
			"email": "andrea@mylinks.co.uk",
			"allowPublishing": "1",
			"allowEditing": "0"
		},{
			"id": 3,
			"clientcompanyID": "032",
			"firstname": "Sam",
			"lastname": "Reilly",
			"username": "sreilly",
			"desc": "analyst",                              
			"email": "sreilly@aime.com",
			"allowPublishing": "0",
			"allowEditing": "0"
		},{
			"id": 25,
			"clientcompanyID": "004",
			"firstname": "Ade",
			"lastname": "Faizal",
			"username": "afaizal",
			"desc": "software developer",                              
			"email": "afaizal@cromedigital.com",
			"allowPublishing": "1",
			"allowEditing": "1"
		},{
			"id": 5,
			"clientcompanyID": "051",
			"firstname": "Marie",
			"lastname": "Longhorn",
			"username": "mlonghorn",
			"desc": "analyst",                              
			"email": "mlonghorn@bubblecompany.co.uk",
			"allowPublishing": "1",
			"allowEditing": "1"
		},{
			"id": 10,
			"clientcompanyID": "022",
			"firstname": "Gillian",
			"lastname": "Thornburry",
			"username": "gthornburry",
			"desc": "Vice President",                              
			"email": "gthornburry@mediavillage.com",
			"allowPublishing": "1",
			"allowEditing": "1"
		},{
			"id": 16,
			"clientcompanyID": "127",
			"firstname": "Melanie",
			"lastname": "Steinkampf",
			"username": "msteinkampf",
			"desc": "HR Partner",                              
			"email": "msteinkampf@iconmedia.co.uk",
			"allowPublishing": "0",
			"allowEditing": "0"

		},{
			"id": 8,
			"clientcompanyID": "012",
			"firstname": "Jeremy",
			"lastname": "Richardson",
			"username": "jrichardson",
			"desc": "manager",                              
			"email": "jrichardson@mata.com",
			"allowPublishing": "1",
			"allowEditing": "0"
		},{
			"id": 18,
			"clientcompanyID": "032",
			"firstname": "Mandy",
			"lastname": "Fallon",
			"username": "mfallon",
			"desc": "PR adviser",                              
			"email": "mandy@aime.com",
			"allowPublishing": "0",
			"allowEditing": "1"
		},{
			"id": 17,
			"clientcompanyID": "077",
			"firstname": "Daniel",
			"lastname": "Koch",
			"username": "dkoch",
			"desc": " senior software developer",                              
			"email": "dkoch@altech.co.uk",
			"allowPublishing": "1",
			"allowEditing": "1"
		},{
			"id": 29,
			"clientcompanyID": "052",
			"firstname": "Kate",
			"lastname": "Johnson",
			"username": "kjohnson",
			"desc": "HR",                              
			"email": "kate@company.com",
			"allowPublishing": "1",
			"allowEditing": "0"
		},{
			"id": 33,
			"clientcompanyID": "010",
			"firstname": "Amanda",
			"lastname": "Neilson",
			"username": "aneilson",
			"desc": "analyst",                              
			"email": "aneilson@ipac.com",
			"allowPublishing": "0",
			"allowEditing": "1"
		},{
			"id": 41,
			"clientcompanyID": "069",
			"firstname": "Andy",
			"lastname": "Haywood",
			"username": "ahaywood",
			"desc": "Executive VP",                              
			"email": "andyhaywood@medidata.com",
			"allowPublishing": "1",
			"allowEditing": "1"
		},{
			"id": 28,
			"clientcompanyID": "038",
			"firstname": "Glenn",
			"lastname": "Jackson",
			"username": "gjackson",
			"desc": "manager",                              
			"email": "gjackson@alphalytics.com",
			"allowPublishing": "1",
			"allowEditing": "0"
		}
	]

}


function buildTable() {

	var select = document.getElementById('numberOfRows');
	var numOfRows = parseInt(select.options[select.selectedIndex].text);

	if(document.getElementById('table').hasChildNodes()) {
		var elem = document.getElementById('table');
		while(elem.firstChild) {
			elem.removeChild(elem.firstChild);
		}
	}

	if(document.getElementById('pagination').hasChildNodes()) {
		var elem = document.getElementById('pagination');
		while(elem.firstChild) {
			elem.removeChild(elem.firstChild);
		}
	}

	buildTable_Aux(0, numOfRows);

	if((json['values'].length % numOfRows) === 0){
		totalOfPags = json['values'].length / numOfRows;
	} else {
		totalOfPags = Math.floor((json['values'].length / numOfRows)) + 1;
	}

	buildPagination(totalOfPags, 1);
}


function buildTable_Aux(index_min, index_max) {

	var notShowList = [];

	var table = document.createElement('table');

	var thead = document.createElement('thead');

	var tr = document.createElement('tr');

	for(i = 0; i < json['fields'].length; i++) {
		if(json['fields'][i]['showOnTable'] === true) {
			var th = document.createElement('th');
			var t = document.createTextNode(json['fields'][i]['label']);

			th.appendChild(t);
			tr.appendChild(th);
		} else {
			notShowList.push(json['fields'][i]['label']);
		}
	}

	var th = document.createElement('th');
	var t = document.createTextNode('');

	th.appendChild(t);
	tr.appendChild(th);

	thead.appendChild(tr);
	table.appendChild(thead);

	var tbody = document.createElement('tbody');

	var validator = false;

	for(x = index_min; x < index_max; x++) {

		var tr = document.createElement('tr');
		tr.className = x;

		for(var y in json['values'][x]) {
			validator = true;
			if(! notShowList.includes(y)) {
				var td = document.createElement('td');
				var t = document.createTextNode(json['values'][x][y]);	

				td.appendChild(t);
				tr.appendChild(td);
			}
		}

		if(validator) {

			validator = false;

			var td = document.createElement('td');
			var a = document.createElement('a');
			a.setAttribute('href', '#');
			a.setAttribute('onClick', 'showFullInfo(' + x + ')');
			var t = document.createTextNode('Show Full Info');	

			a.appendChild(t);
			td.appendChild(a);
			tr.appendChild(td);
		}
		tbody.appendChild(tr);
	}

	table.appendChild(tbody);

	document.getElementById('table').appendChild(table);
}

function buildPagination(totalOfPags, actualPage) {

	var pagination = document.getElementById('pagination');
	

	for(i = 1; i <= totalOfPags; i++) {

		var col = document.createElement('div');
		col.className = 'col';

		if(i === actualPage) {
			var h5 = document.createElement('h5');
			var t = document.createTextNode(i);

			h5.appendChild(t);

			col.appendChild(h5);

		} else {
			var a = document.createElement('a');
			a.setAttribute('href', '#');
			a.setAttribute('onClick', 'changePage(' + i + ')');

			var h5 = document.createElement('h5');
			var t = document.createTextNode(i);

			h5.appendChild(t);

			a.appendChild(h5);

			col.appendChild(a);
		}

		pagination.appendChild(col);
	}

}

function changePage(actualPage) {

	if(document.getElementById('table').hasChildNodes()) {
		var elem = document.getElementById('table');
		while(elem.firstChild) {
			elem.removeChild(elem.firstChild);
		}
	}

	if(document.getElementById('pagination').hasChildNodes()) {
		var elem = document.getElementById('pagination');
		while(elem.firstChild) {
			elem.removeChild(elem.firstChild);
		}
	}

	var actPage = parseInt(actualPage);

	var select = document.getElementById('numberOfRows');
	var numOfRows = parseInt(select.options[select.selectedIndex].text);

	var index_min = (actPage - 1) * numOfRows;

	buildTable_Aux(index_min, index_min + (numOfRows));

	if((json['values'].length % numOfRows) === 0){
		totalOfPags = json['values'].length / numOfRows;
	} else {
		totalOfPags = Math.floor((json['values'].length / numOfRows)) + 1;
	}

	buildPagination(totalOfPags, actPage);

}

function showFullInfo(index) {

	var fullInfo = ''

	for(var x in json['values'][index]) {
		fullInfo += x + ': ' + json['values'][index][x] + '\n';
	}

	alert(fullInfo);
}