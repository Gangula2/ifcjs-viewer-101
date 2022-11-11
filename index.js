import { Color } from 'three';
import { IfcViewerAPI } from 'web-ifc-viewer';

function CreateViewer(container) {
    let viewer = new IfcViewerAPI({ container, backgroundColor: new Color(0xffffff) });
    viewer.axes.setAxes();
    viewer.grid.setGrid();

    return viewer;
}

const container = document.getElementById('viewer-container');
let viewer = CreateViewer(container);
const input = document.getElementById("file-input");

window.onmousemove = () => viewer.IFC.selector.prePickIfcItem();
// Select items and log properties
window.ondblclick = async () => {
    const item = await viewer.IFC.selector.pickIfcItem(true);
    if (item.modelID === undefined || item.id === undefined) return;
    console.log(await viewer.IFC.getProperties(item.modelID, item.id, true));
}
viewer.clipper.active = true;

input.addEventListener("change",

    async (changed) => {

        const file = changed.target.files[0];
        const ifcURL = URL.createObjectURL(file);
        loadIfc(ifcURL);
    },

    false
);

async function loadIfc(url) {
    await viewer.dispose();
    viewer = CreateViewer(container);
    // await viewer.IFC.setWasmPath("static/wasm/");
    const model = await viewer.IFC.loadIfcUrl(url);
    viewer.shadowDropper.renderShadow(model.modelID);
}

loadIfc('models/01.ifc');

window.onkeydown = (event) => {
    if (event.code === 'KeyP') {
        viewer.clipper.createPlane();
    }
    else if (event.code === 'KeyO') {
        viewer.clipper.deletePlane();
    }
    else if (event.code === 'Escape') {
        viewer.IFC.selector.unpickIfcItems();
    }
}