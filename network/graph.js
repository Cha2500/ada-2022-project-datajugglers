async function readJSON(path) {
	const response = await fetch(path);
	const json = await response.json();
	return json;
}

readJSON("graph1.json").then(gData => {
	const graph = ForceGraph3D()(document.getElementById('3d-graph')).graphData(gData)
		.nodeLabel("id").nodeAutoColorBy("rating").linkOpacity(0.25).nodeThreeObject(node => {
			return new THREE.TextureLoader().load(
				`${node.id}.jpg`,  // file path
				texture => {  // on success
					const material = new THREE.SpriteMaterial({map: texture});
					const sprite = new THREE.Sprite(material);
					sprite.scale.set(12, 12);
					return sprite;
				},
				undefined,  // on progress
				err => {  // on error
					return false;
				}
			)
		});


});
