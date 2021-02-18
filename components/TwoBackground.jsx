import Two from "two.js";
import $ from "jquery";
import { createCanvas, Image } from "canvas";

const colors = {
	black: "#3D3D3D",
	gray: "#E4E4E4",
	green: "#3B8364",
	lime: "#E8F75C",
	blue: "#73B6E7",
	purple: "#9891E8",
	yellow: "#FFC000",
	orange: "#EB7B57",
	pink: "#E18DC5",
};
var randomProperty = function(obj) {
	var keys = Object.keys(obj);
	return obj[keys[(keys.length * Math.random()) << 0]];
};
const TwoBackground = (typeTesterRef) => {
	$(function() {
		// var type = /(svg|webgl)/.test(url.type) ? url.type : "canvas";
		var type = "canvas";

		// var width = "1000";
		// var height = "1000";
		// var canvas = createCanvas(width, height);

		var two = new Two({
			type: Two.Types[type],
			autostart: true,
		}).appendTo(typeTesterRef.current);

		// Two.Utils.shim(canvas, Image);

		var characters = [];
		var gravity = new Two.Vector(0, 0.66);

		var styles = {
			family: "Kablammo, sans-serif",
			size: 200,
			leading: 50,
			weight: 900,
			fill: "#EB7B57",
		};

		// var directions = two.makeText(
		// 	has.mobile ? "Tap Me" : "Start Typing",
		// 	two.width / 2,
		// 	two.height / 2,
		// 	styles
		// );
		// var directions = two.makeText(
		// 	"Start Typing",
		// 	two.width / 2,
		// 	two.height / 2,
		// 	styles
		// );

		$(window)
			.bind("keydown", function(e) {
				var character = String.fromCharCode(e.which);
				add(character);
			})
			.bind("touchstart", function() {
				var r = Math.random();

				var character = String.fromCharCode(
					Math.floor(r * 26) + (r > 0.5 ? 97 : 65)
				);
				add(character);
			});

		two.bind("resize", function() {
			// directions.translation.set(two.width / 2, two.height / 2);
		}).bind("update", function() {
			for (var i = 0; i < characters.length; i++) {
				var text = characters[i];
				text.translation.addSelf(text.velocity);
				text.rotation += text.velocity.r;

				text.velocity.addSelf(gravity);
				if (text.velocity.y > 0 && text.translation.y > two.height) {
					two.scene.remove(text);
					characters.splice(i, 1);
				}
			}
		});

		function add(msg) {
			var x = (Math.random() * two.width) / 2 + two.width / 4;
			var y = two.height * 1.25;

			var text = two.makeText(msg, x, y, styles);
			text.size *= 0.5;
			text.fill = randomProperty(colors);

			text.velocity = new Two.Vector();
			text.velocity.x = 10 * (Math.random() - 0.5);
			text.velocity.y = -(20 * Math.random() + 13);
			text.velocity.r = (Math.random() * Math.PI) / 8;

			characters.push(text);
		}
	});
};

export default TwoBackground;
