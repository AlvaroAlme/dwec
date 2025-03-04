class Enemigo {
    constructor() {
      this.energia = 10;
    }
  
    mover() {
      console.log("El enemigo se mueve.");
    }
  }
  
  class Orco extends Enemigo {
    constructor() {
      super();
      this.fuerza = 15;
    }
  
    disparar() {
      console.log("El orco dispara.");
    }
  }
  
  class Troll extends Enemigo {
    constructor() {
      super();
      this.fuerza = 20;
    }
  
    golpear() {
      console.log("El troll golpea.");
    }
  }
  
  