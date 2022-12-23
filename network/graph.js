async function readJSON(path) {
	const response = await fetch(path"test.json");
	const json = await response.json();
	return json;
}

const gData = readJSON("graph1.json");
const Graph = ForceGraph3D()(document.getElementById('3d-graph')).graphData(gData)
	.nodeLabel("id").nodeAutoColorBy("rating").linkOpacity(0.5);
