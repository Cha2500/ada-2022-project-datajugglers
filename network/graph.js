const gData = JSON.parse(fs.readFileSync("graph1.json"));
const Graph = ForceGraph3D()(document.getElementById('3d-graph')).graphData(gData);
