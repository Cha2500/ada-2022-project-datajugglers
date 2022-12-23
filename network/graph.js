const res = await fetch("graph1.json");
const gData = await res.json();

const Graph = ForceGraph3D()(document.getElementById('3d-graph')).graphData(gData)
	.nodeLabel("id").nodeAutoColorBy("rating").linkOpacity(0.5);
