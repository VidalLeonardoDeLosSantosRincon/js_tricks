(function(){
    const c = console.log;
    function* IdGenerator(){
        let id = 1;
        while(true){
            yield id;
            id++;
        }
    }

    const idGenerador = IdGenerator();
    
    c(idGenerador.next());
    c(idGenerador.next());
    c(idGenerador.next());
})();