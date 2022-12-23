async function readJSON(path) {
	const response = await fetch(path);
	const json = await response.json();
	return json;
}

readJSON("graph1.json").then(gData => {
	const Graph = ForceGraph3D()(document.getElementById('3d-graph')).graphData(gData)
		.nodeLabel("id").nodeAutoColorBy("rating").linkOpacity(0.5).nodeThreeObject(node => {
		const imgTexture = new THREE.TextureLoader().load(`./imgs/${node.id}.jpg`);
		const material = new THREE.SpriteMaterial({ map: imgTexture });
		const sprite = new THREE.Sprite(material);
		sprite.scale.set(12, 12);
		return sprite;
	});
});
