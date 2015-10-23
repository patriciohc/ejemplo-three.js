// autor: J. Patricio Hijuitl
    // clase elipse
function Elipse(a,b,paso){
    this.a = a;
    this.b = b;
    this.cuadrante = 1;
    this.angulo = 0.01; // angulo actual
    this.direccion = paso; // velocidad 
    this.x = 0;
    this.z = 0;
}

Elipse.prototype.actualiza = function()
{
    var a2 = this.a*this.a;
    var b2 = this.b*this.b;
    var div, cons;

    if (this.angulo > Math.PI/2) {
        this.direccion = -this.direccion;
        if (this.cuadrante < 4) this.cuadrante++;
        else this.cuadrante = 1;            
    }
    if (this.angulo < 0.001 ){
        this.direccion = -this.direccion;
        if (this.cuadrante < 4) this.cuadrante++;
        else this.cuadrante = 1;            
    }
    this.angulo=this.angulo+this.direccion;
    cons =  Math.tan(this.angulo)*Math.tan(this.angulo)*a2;
    this.z =  Math.sqrt( (cons*b2)/(cons+b2));
    div = (this.z*this.z)/b2;
    this.x = Math.sqrt((1-div)*a2);

    switch(this.cuadrante){
        case 2: this.x = -this.x;
                break;
        case 3: this.z = -this.z;
                this.x = -this.x;
                break;
        case 4: this.z = -this.z;
                break; 
    }
}
