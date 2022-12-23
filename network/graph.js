async function readJSON(path) {
	const response = await fetch(path);
	const json = await response.json();
	return json;
}

readJSON("graph1.json").then(gData => {
	const Graph = ForceGraph3D()(document.getElementById('3d-graph')).graphData(gData);
		.nodeLabel("id").nodeAutoColorBy("rating").linkOpacity(0.5).nodeThreeObject(node => {
			const sprite = new SpriteText(node.id + ".jpg");
			sprite.material.depthWrite = false; // make sprite background transparent
			sprite.color = node.color;
			sprite.textHeight = 8;
			return sprite;
		});
});
