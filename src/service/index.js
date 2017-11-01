// Changes XML to JSON
// Modified version from here: http://davidwalsh.name/convert-xml-json
function xmlToJson(xml) {
    
    // Create the return object
    var obj = {};

    if (xml.nodeType === 1) { // element
        // do attributes
        if (xml.attributes.length > 0) {
        obj["@attributes"] = {};
            for (var j = 0; j < xml.attributes.length; j++) {
                var attribute = xml.attributes.item(j);
                obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
            }
        }
    } else if (xml.nodeType === 3) { // text
        obj = xml.nodeValue;
    }

    // do children
    // If just one text node inside
    if (xml.hasChildNodes() && xml.childNodes.length === 1 && xml.childNodes[0].nodeType === 3) {
        obj = xml.childNodes[0].nodeValue;
    }
    else if (xml.hasChildNodes()) {
        for(var i = 0; i < xml.childNodes.length; i++) {
            var item = xml.childNodes.item(i);
            var nodeName = item.nodeName;
            if (typeof(obj[nodeName]) === "undefined") {
                obj[nodeName] = xmlToJson(item);
            } else {
                if (typeof(obj[nodeName].push) === "undefined") {
                    var old = obj[nodeName];
                    obj[nodeName] = [];
                    obj[nodeName].push(old);
                }
                obj[nodeName].push(xmlToJson(item));
            }
        }
    }
    return obj;
}


export default function requestData(date) {
    let header = new Headers();
    header.append("Content-Type" , "text/plain" );
     
    let reqestParams = { 
        method: 'GET',
        headers: header,
        cache: 'default',
        mode: 'cors'
    };
    
    /*
    let request = new Request("http://www.cbr.ru/scripts/XML_daily_eng.asp", reqestParams);

    return fetch(request)
        .then(function(response) {
            return response.text();
        })
        .then(function(text) {
            console.log(text);
            return "";
        });
    /**/

    //var xml = "The XML as String";
    //var xmlDOM = new DOMParser().parseFromString(xml, 'text/xml');

    const dateParam = date || '';
    
    return fetch(`http://localhost:3030/?date=${dateParam}`, reqestParams)
        .then(function(response) {
            return response.text();
        })
        .then(function(text) {
            debugger;
            let xmlText = text;
            let xml = new DOMParser().parseFromString(xmlText, 'text/xml');
            let json = xmlToJson(xml);
            return json;
            //return response.json();
        })
        .then(function(jsonResponse) {
            return jsonResponse.ValCurs.Valute;
        })
}