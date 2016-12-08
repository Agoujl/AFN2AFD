import dispatcher from "./dispatcher";
export function createArc(Dep_Id, Ari_Id,value) {
    dispatcher.dispatch({
        type: "CREATE_ARC",
        Dep_Id,
        Ari_Id,
        value,
    });
}

export function createSommet(x, y) {
    dispatcher.dispatch({
        type: "CREATE_SOMMET",
        x,
        y,
    });
}

export function deleteSommet() {
    dispatcher.dispatch({
        type: "DELETE",
    });
}
