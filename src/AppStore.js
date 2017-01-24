import {EventEmitter} from "events";
import dispatcher from "./dispatcher";
class AppStore extends EventEmitter {
    constructor() {
        super();
        this.elements = {
            Arcs: [],//contient les information apropos chaque arc(dep,ari,id)
            Sommet: [],//contient les information apropos chaque sommet(id,emplacement(x,y))
            enableCreation: false,//variable qui autorise la creation des sommet
            /**ces trois tableaux on va les utiliser dans le determinsation de AFN*/
            AFDTr: [],//contient les transition
            AFDSt: [],// contient les nouveax etats
            uniq: []  //contient just les valeurs uniques des valeurs des sommet
        };
    }

    createArc(Dep_Id, Ari_Id, value) {
      //ici pour que id de chaque arc soit unique on fait un auto incrimentation
        const id = this.elements.Arcs.length + 1;
      //aprés on insert  un objet que represente un arc dans le tableau des arcs
        this.elements.Arcs.push({id, Dep_Id, Ari_Id, value});
        /**au même temps de création de l'arc on remplit le vecteur unique par les valeur
        des arcs à inserer on fait just un test si cette valeur qu'on va l'inserer n'exist pas dejà
        **/
        if (!this.elements.uniq.includes(value)) {
            this.elements.uniq.push(value);
        }
        //maintenant on dit au dispatcher qu'il informe les autres component par les changement effectue
        //sur le appstore
        this.emit("change");
    }
    createSommet(x, y) {
      /**
      toujours le même principe mais le chose qui change essai c'est qu'on desactive
      l'autorisation de creation de sommet une fois la creation est effectue***/
        const id = this.elements.Sommet.length + 1;
        this.elements.Sommet.push({id, x, y});
        this.elements.enableCreation = false;
        this.emit("change");
    }
    /***c'est une simple fonction qui rendre la creation d'arc possible**/
    enableCreation() {
        this.elements.enableCreation = true;
        this.emit("change");
    }
    /***c'est just une propostion de traitement de determinsation de
    l'automate finie suivant l'algorithme donné par le prof***/
    creatAfd() {
        var k = 0; //initialisation de variable qui va parcourir AFDSt
        //dans le vecteur AFDSt des nouveaux etats on insert dans le debut "1" par ce que
        // il s'agit de l'etat de depart qui va rester
        this.elements.AFDSt.push("1");
        /**aprés  on va prener la valeur de AFDSt et decomposer si il est compose
        de plusieurs  valeurs par exemple "123" par la suite on va chercher les sommet de
        destination en prenant la valeur AFDSt[i] comme sommet de depart et avec les
        valeurs du vecteur uniqe et on marque les sommets de destination dans le vecteur
        ligne une fois on a deja parcouri tous les composant de AFDSt[i] on l'insert dans
        AFDTr
          */
        while ( k<this.elements.AFDSt.length) {
            var ligne = new Array(this.elements.uniq.length);
            var afds = this.elements.AFDSt[k];
            k++;
            for (var s = 0; s < afds.length; s++) {
                var etat = afds.charAt(s);
                console.log(etat);
                for (var i = 0; i < this.elements.uniq.length; i++) {
                    var dase = "";
                    for (var j = 0; j < this.elements.Arcs.length; j++) {
                        if ((this.elements.Arcs[j].value === this.elements.uniq[i]) && (this.elements.Arcs[j].Dep_Id === etat)) {
                            dase += this.elements.Arcs[j].Ari_Id;
                            console.log(this.elements.Arcs[j].id);
                        }
                    }
                    dase = (dase === "")
                        ? "£"
                        : dase;
                    if (!this.elements.AFDSt.includes(dase) ) {
                        this.elements.AFDSt.push(dase);
                    }
                    ligne[i] = dase;
                }
            }
            this.elements.AFDTr.push(ligne);
        }
        this.emit("change");
    }
    getAll() {
        return this.elements;
    }
    handleActions(action) {
        switch (action.type) {
            case "CREATE_ARC":
                this.createArc(action.Dep_Id, action.Ari_Id, action.value);
                break;
            case "CREATE_SOMMET":
                this.createSommet(action.x, action.y);
                break;
            case "DELETE":
                this.deleteSommet();
                break;
            case "ENABLE_CREATION":
                this.enableCreation();
                break;
            case "AFD":
                this.creatAfd();
                break;
            default:
        }
    }
}
const appstore = (new AppStore());
dispatcher.register(appstore.handleActions.bind(appstore));
export default appstore;
