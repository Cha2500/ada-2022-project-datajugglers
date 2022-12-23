async function readJSON(path) {
	const response = await fetch(path);
	const json = await response.json();
	return json;
}

const center = "Tom Cruise";

readJSON("graph1.json").then(gData => {
	const graph = ForceGraph3D()(document.getElementById('3d-graph')).graphData(gData)
		.nodeLabel("id").nodeAutoColorBy("rating").linkOpacity(0.25).nodeThreeObject(node => {
			if (node.id == center) {
				const texture = new THREE.TextureLoader().load(`${node.id}.jpg`);
				const material = new THREE.SpriteMaterial({map: texture});
				const sprite = new THREE.Sprite(material);
				sprite.scale.set(12, 12);
				return sprite;
			} else {
				return false;
			}
		}).cameraPosition({x: undefined, y: undefined, z: undefined}, center_node, 1000);
});
