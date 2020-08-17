function get(url){
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url);

        xhr.onload = function() {
            if (xhr.status == 200) {
                resolve(xhr.response);
            }else{
                reject(Error(xhr.responseText));
            }
        }

        xhr.onerror = function() {
            reject(Error('Network error'));
        }

        xhr.send();
    })
}

module.exports = get;