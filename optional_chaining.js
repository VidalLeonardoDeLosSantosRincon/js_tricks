(function(){
    function User(name, surname, age ){
        this.name = name ?? "";
        this.surname = surname ?? "";
        this.fullName = `${this.name} ${this.surname}`;
        this.age = age ?? 0;
        
        this.getBirthDate = () =>{
            const currentYear = new Date().getFullYear();
            return currentYear - this.age; 
        };
    }

    let vidal = new User("Vidal", "De Los Santos", 25);
    console.log(vidal?.getBirthDate?.());
})();