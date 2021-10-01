(function(){
    function createCustomObject(keys, ...values){
        let newObject = {};
        keys.map((key, index)=>{ if(key.trim()!=='') newObject[key] = values[index] });
        return newObject;
    }

    let name = "Vidal";
    let surname = "De Los Santos";
    let age = 25;

    let newObject = createCustomObject`name${name}surname${surname}age${age}`;
    console.log(newObject);
})();