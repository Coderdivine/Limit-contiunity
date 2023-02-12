const prompt = require('prompt-sync')({sigint: true});
class Limit{
    constructor(lim_x){
        this.x = lim_x;
    }
    async formatOne(){
        let a,b,c,d,e;
        const values = await prompt("Enter values: (a,b,c,d,e)");
        const json = values.split(",");
        a = Number(json[0]);
        b = Number(json[1]);
        c = Number(json[2]);
        d = Number(json[3]);
        e = Number(json[4]);
        console.log(a,b,c,d,e);
        //ax^2 + bx + c denominator (dx + e)...
        const Numer = (a*(this.x^2)) + (b*this.x) + (c);
        const Denor = ((d*this.x) + e);
        const limit = Numer/Denor; 
        console.table({
            limit_x:this.x,
            limit
        });
        return {
            limit_x:this.x,
            limit
        }

    }
    async formatTwo(){
        let a1,b1,c1,a2,b2,c2;
        const values = await prompt("Enter values: (a1,b1,c1,a2,b2,c2)");
        const json = values.split(",");
        a1 = Number(json[0]);
        b1 = Number(json[1]);
        c1 = Number(json[2]);
        a2 = Number(json[3]);
        b2 = Number(json[4]);
        c2 = Number(json[5]);
        console.log(a1,b1,c1,a2,b2,c2);
        //format: ax^2 + bx + c denominator (ax^2 + bx + c);
        const Numer = (a1*(this.x^2)) + (b1*this.x) + c1;
        const Denor = (a2*(this.x^2)) + (b2*this.x) + c2;
        const limit = Numer/Denor;
        console.table({
            limit_x:this.x,
            limit
        });
        return {
            limit_x:this.x,
            limit
        }
    }
    async formatThree(a,b,c,d){
        //format: (a/x)-(b/c) denominator  x - d
        let Numer =  (a/this.x) - (b/c);
            Numer = Numer * (x*c);
        let Denor = (x-d);
            Denor = Denor * (x*c);
        const limit = Numer/Denor;
        console.table({
            limit_x:this.x,
            limit
        });
        return {
            limit_x:this.x,
            limit
        }

    }
    async formatFour(a,b,sign){
        if(sign == "-"){
             //format: sqrt(x) - a/ (x-b)...
        const Nem = ((Math.sqrt(this.x)-a)*(Math.sqrt(this.x)+b));
        const Denor = ((this.x - b)*(Math.sqrt(this.x)+b));
        const limit = Nem/Denor;
        console.table({
            limit_x:this.x,
            limit
        });
        return {
            limit_x:this.x,
            limit
        }
        }else{
            //format: sqrt(x) - a/ (x-b)...
        const Nem = ((Math.sqrt(this.x)+a)*(Math.sqrt(this.x)-b));
        const Denor = ((this.x - b)*(Math.sqrt(this.x)-b));
        const limit = Nem/Denor;
        console.table({
            limit_x:this.x,
            limit
        });
        return {
            limit_x:this.x,
            limit
        }
        }
       

    }
    async formatFive(a,b){
        //format: |x-a|/(x-b)...
        const fxOne = ((this.x-0.1)-a)/((this.x-0.1)-b);
        const fxTwo =  ((this.x+0.1)-a)/((this.x+0.1)-b);
        console.table({
            fxOne,
            fxTwo,
            limit_x:this.x,
            limit:"No limit specified"
        })
        return {
            fxOne,
            fxTwo,
            limit_x:this.x,
            limit:"No limit specified"
        }
    }
}
module.exports = Limit;