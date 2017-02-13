import dispatcher from "./dispatcher";
/*c'est fonction qui fait appele au dispatcher qui va changer dans notre
appstore et dit au autre componnent de changer leur information par ce que le appstore
est changé, chaque fonction parmi les suivant a une mission particulier,
et le dispatcher diffirenicier entre eux avec leurs type.le dispatcher lui même utilise les
fonctions de appstore.
*/
export function createArc(Dep_Id, Ari_Id, value) {
    dispatcher.dispatch({
        type: "CREATE_ARC",
        Dep_Id,
        Ari_Id,
        value,
    });
}

export function createSommet(x, y,finale) {
    dispatcher.dispatch({
        type: "CREATE_SOMMET",
        x,
        y,
        finale,
    });
}

export function set_finale(checked) {
    dispatcher.dispatch({
        type: "TEST_FINALE",
        checked,
    });
}
export function enableCreation() {
    dispatcher.dispatch({
        type: "ENABLE_CREATION",
    });
}
export function creatAfd() {
    dispatcher.dispatch({
        type: "AFD",
    });
}
