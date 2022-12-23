const fs = require('fs');

const gData = JSON.parse(fs.readFileSync("graph1.json"));
const Graph = ForceGraph3D()(document.getElementById('3d-graph')).graphData(gData)
	.nodeLabel("id").nodeAutoColorBy("rating").linkOpacity(0.5);
