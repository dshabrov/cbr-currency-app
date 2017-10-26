export default function requestData(date) {
    let header = new Headers();
    
    let reqestParams = { 
        method: 'GET',
        headers: header,
        cache: 'default'
    };

    const dateParam = date || '';
    
    return fetch(`http://localhost:3030/?date=${dateParam}`, reqestParams)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonResponse) {
            return jsonResponse.ValCurs.Valute;
        })
}