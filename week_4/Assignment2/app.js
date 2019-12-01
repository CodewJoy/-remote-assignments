function ajax(src, callback) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            let response = this.responseText; // this.responseText is in JSON string type
            return callback(JSON.parse(response)); // turn data type from JOSN string into JS object 
        }
    }
    xhttp.open("GET", src, true);
    xhttp.send();
}
function render(data) {
    // console.log(data);
    // console.log(typeof(data[0].name));
    for (let i=0; i < data.length; i++) {
        let h3 = [];
        let br = [];
        let br2 = [];
        let name = [];
        let price = [];
        let description = [];
        let desk= [];
        h3[i] = document.createElement("h3"); 
        br[i] = document.createElement("br"); 
        br2[i] = br[i].cloneNode(true)
        name[i] = document.createTextNode(data[i].name);
        price[i] = document.createTextNode("最低價：$"+ data[i].price);
        description[i] = document.createTextNode(data[i].description);
        desk[i] = document.getElementById('desk'+i);
        h3[i].appendChild(name[i]); 
        desk[i].appendChild(h3[i]); 
        h3[i].appendChild(br[i]);
        h3[i].appendChild(price[i]); 
        h3[i].appendChild(br2[i]);
        h3[i].appendChild(description[i]); 
    }
}

ajax("https://cwpeng.github.io/live-records-samples/data/products.json", function (response) {
    render(response);
}); // you should get product information in JSON format and render data in the page