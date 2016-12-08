import {
    EventEmitter
} from "events";
import dispatcher from "./dispatcher";
class AppStore extends EventEmitter {
    constructor() {
        super();
        this.elements = {
            Arcs: [],
            Sommet: [],

        };


    }

    deleteSommet() {
        this.elements.Sommet.pop();
        this.emit("change");
    }

    createArc(Dep_Id, Ari_Id,value) {
        const id = this.elements.Arcs.length + 1;
        this.elements.Arcs.push({
            id,
            Dep_Id,
            Ari_Id,
            value,
        });
        this.emit("change");
    }
    createSommet(x, y) {
        const id = this.elements.Sommet.length + 1;
        this.elements.Sommet.push({
            id,
            x,
            y,
        });
        this.emit("change");
    }

    getAll() {
        return this.elements;
    }
    handleActions(action) {
        switch (action.type) {
            case "CREATE_ARC":
                this.createArc(action.Dep_Id, action.Ari_Id,action.value);
                break;
            case "CREATE_SOMMET":
                this.createSommet(action.x, action.y);
                break;
            case "DELETE":
                this.deleteSommet();
                break;
            default:

        }
    }

}
const appstore = (new AppStore());
window.appstore = appstore;
window.dispatcher = dispatcher;
dispatcher.register(appstore.handleActions.bind(appstore));
export default appstore;
