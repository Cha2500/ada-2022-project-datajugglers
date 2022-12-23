async function readJSON(path) {
	const response = await fetch(path);
	const json = await response.json();
	return json;
}

function colorInterpolation(level) {
	const color1 = [239, 138, 98];
	const color2 = [247, 247, 247];
	const color3 = [103, 169, 207];

	color = [0, 0, 0]
	for (let i = 0; i < 3; i++) {
		if (level <= 0.5) {
			color[i] = 2*level*color1[i] + (1 - 2*level)*color2[i];
		} else {
			color[i] = 2*(level - 0.5)*color2[i] + (1 - 2*(level - 0.5))*color3[i];
		}
	}
	return [~~color[0], ~~color[1], ~~color[2]];
}

const Settings = function() {
	this.year = 1980;
};


const center = "Tom Cruise";

const graph = ForceGraph3D()(document.getElementById('3d-graph'))
	.jsonUrl("graphs/graph1980.json").nodeLabel(node => {
		return `Actor: ${node.id}. Quality: ${node.rating}`;
	}).nodeColor(node => {
		const color = colorInterpolation(node.rating/10);
		return `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
	}).linkOpacity(0.25).nodeThreeObject(node => {
		if (node.id == center) {
			const texture = new THREE.TextureLoader().load(`${node.id}.jpg`);
			const material = new THREE.SpriteMaterial({map: texture});
			const sprite = new THREE.Sprite(material);
			sprite.scale.set(64, 64);
			return sprite;
		} else {
			return false;
		}
	});

const settings = new Settings();
const gui = new dat.GUI();
const controller = gui.add(settings, "year", 1980, 2010, 1);
controller.onChange(updateGraph);

function updateGraph() {
	graph.jsonUrl(`graphs/graph${settings.year}.json`);
}
