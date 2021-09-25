(function(){
    let user = {
        name: "Vidal De Los Santos",
        age: 25
    };

    let text =  `My name is %c${user.name}`;
    console.log(text, "font-weight:bold;");
    text = `and I'm %c${user.age} years old`;
    console.log(text, "color:lightseagreen;");
})();