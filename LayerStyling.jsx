////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////JSON POLYFILL////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
'object' != typeof JSON && (JSON = {}),
	(function () {
		'use strict';
		var rx_one = /^[\],:{}\s]*$/,
			rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
			rx_three =
				/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
			rx_four = /(?:^|:|,)(?:\s*\[)+/g,
			rx_escapable =
				/[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
			rx_dangerous =
				/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
			gap,
			indent,
			meta,
			rep;
		function f(t) {
			return t < 10 ? '0' + t : t;
		}
		function this_value() {
			return this.valueOf();
		}
		function quote(t) {
			return (
				(rx_escapable.lastIndex = 0),
				rx_escapable.test(t)
					? '"' +
					  t.replace(rx_escapable, function (t) {
							var e = meta[t];
							return 'string' == typeof e
								? e
								: '\\u' + ('0000' + t.charCodeAt(0).toString(16)).slice(-4);
					  }) +
					  '"'
					: '"' + t + '"'
			);
		}
		function str(t, e) {
			var r,
				n,
				o,
				u,
				f,
				a = gap,
				i = e[t];
			switch (
				(i &&
					'object' == typeof i &&
					'function' == typeof i.toJSON &&
					(i = i.toJSON(t)),
				'function' == typeof rep && (i = rep.call(e, t, i)),
				typeof i)
			) {
				case 'string':
					return quote(i);
				case 'number':
					return isFinite(i) ? String(i) : 'null';
				case 'boolean':
				case 'null':
					return String(i);
				case 'object':
					if (!i) return 'null';
					if (
						((gap += indent),
						(f = []),
						'[object Array]' === Object.prototype.toString.apply(i))
					) {
						for (u = i.length, r = 0; r < u; r += 1) f[r] = str(r, i) || 'null';
						return (
							(o =
								0 === f.length
									? '[]'
									: gap
									? '[\n' + gap + f.join(',\n' + gap) + '\n' + a + ']'
									: '[' + f.join(',') + ']'),
							(gap = a),
							o
						);
					}
					if (rep && 'object' == typeof rep)
						for (u = rep.length, r = 0; r < u; r += 1)
							'string' == typeof rep[r] &&
								(o = str((n = rep[r]), i)) &&
								f.push(quote(n) + (gap ? ': ' : ':') + o);
					else
						for (n in i)
							Object.prototype.hasOwnProperty.call(i, n) &&
								(o = str(n, i)) &&
								f.push(quote(n) + (gap ? ': ' : ':') + o);
					return (
						(o =
							0 === f.length
								? '{}'
								: gap
								? '{\n' + gap + f.join(',\n' + gap) + '\n' + a + '}'
								: '{' + f.join(',') + '}'),
						(gap = a),
						o
					);
			}
		}
		'function' != typeof Date.prototype.toJSON &&
			((Date.prototype.toJSON = function () {
				return isFinite(this.valueOf())
					? this.getUTCFullYear() +
							'-' +
							f(this.getUTCMonth() + 1) +
							'-' +
							f(this.getUTCDate()) +
							'T' +
							f(this.getUTCHours()) +
							':' +
							f(this.getUTCMinutes()) +
							':' +
							f(this.getUTCSeconds()) +
							'Z'
					: null;
			}),
			(Boolean.prototype.toJSON = this_value),
			(Number.prototype.toJSON = this_value),
			(String.prototype.toJSON = this_value)),
			'function' != typeof JSON.stringify &&
				((meta = {
					'\b': '\\b',
					'\t': '\\t',
					'\n': '\\n',
					'\f': '\\f',
					'\r': '\\r',
					'"': '\\"',
					'\\': '\\\\',
				}),
				(JSON.stringify = function (t, e, r) {
					var n;
					if (((indent = gap = ''), 'number' == typeof r))
						for (n = 0; n < r; n += 1) indent += ' ';
					else 'string' == typeof r && (indent = r);
					if (
						(rep = e) &&
						'function' != typeof e &&
						('object' != typeof e || 'number' != typeof e.length)
					)
						throw new Error('JSON.stringify');
					return str('', { '': t });
				})),
			'function' != typeof JSON.parse &&
				(JSON.parse = function (text, reviver) {
					var j;
					function walk(t, e) {
						var r,
							n,
							o = t[e];
						if (o && 'object' == typeof o)
							for (r in o)
								Object.prototype.hasOwnProperty.call(o, r) &&
									(void 0 !== (n = walk(o, r)) ? (o[r] = n) : delete o[r]);
						return reviver.call(t, e, o);
					}
					if (
						((text = String(text)),
						(rx_dangerous.lastIndex = 0),
						rx_dangerous.test(text) &&
							(text = text.replace(rx_dangerous, function (t) {
								return (
									'\\u' + ('0000' + t.charCodeAt(0).toString(16)).slice(-4)
								);
							})),
						rx_one.test(
							text
								.replace(rx_two, '@')
								.replace(rx_three, ']')
								.replace(rx_four, '')
						))
					)
						return (
							(j = eval('(' + text + ')')),
							'function' == typeof reviver ? walk({ '': j }, '') : j
						);
					throw new SyntaxError('JSON.parse');
				});
	})();
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// Load Adobe XMP library if not already loaded
if (ExternalObject.AdobeXMPScript == undefined) {
	ExternalObject.AdobeXMPScript = new ExternalObject('lib:AdobeXMPScript');
}

// ================== YOUR LAYERS & HEX COLORS ==================
var LAYER_SPECS = [
	{ name: 'Proof - Bleed', hex: 'ed1c24' }, // 50% fill
	{ name: 'Proof - SafeZone', hex: '22a9e1' },
	{ name: 'Proof - Crease', hex: '8400c9' },
	{ name: 'Proof - Stich / Sew', hex: 'fba926' },
	{ name: 'Proof - Hemming / Fold Line', hex: 'e9e95b' },
	{ name: 'Proof - Trim Layer', hex: '3f403f' },
	{ name: 'Proof - Panel', hex: '27f21c' },
	{ name: 'Proof - Notes', hex: '000000' },
	{ name: 'Trim', hex: '22a9e1' },
	{ name: 'Draw', hex: 'faa52c' },
	{ name: 'Score', hex: 'a91d22' },
	{ name: 'Crease', hex: '19b24b' },
	{ name: 'Kiss-cut', hex: 'ee322b' },
	{ name: 'Perforate', hex: 'fee000' },
	{ name: 'Punch', hex: '609ed5' },
	{ name: 'Drill', hex: '1d5a85' },
	{ name: 'Engrave', hex: 'cfd935' },
	{ name: 'V-cut', hex: '676c2e' },
	{ name: 'Bevel-cut', hex: '14572c' },
	{ name: 'Thru-cut', hex: '3953a4' },
	{ name: 'Route', hex: '322b70' },
	{ name: 'Register', hex: '000000' },
	{ name: 'WHITE', hex: 'c7b2d6' }, // Added for white ink spot
];

var boardPreset = ['Proof - Bleed', 'Proof - Trim', 'Proof - SafeZone'];

var FRONTLAYERS = [
	'WHITE',
	'Register',
	'Proof - Bleed',
	'Proof - SafeZone',
	'Proof - Crease',
	'Proof - Stich / Sew',
	'Proof - Hem/FoldLine',
	'Proof - Trim',
	'Proof - Panel',
	'Proof - Notes',
];

var STROKELAYERS = [
	'Proof - Bleed',
	'Proof - Crease',
	'Proof - SafeZone',
	'Proof - Hem/FoldLine',
	'Proof - Stich / Sew',
	'Proof - Panel',
];

// Global stroke width (points)
var SCALE = 0.01;

// Swatch naming pattern (kept consistent & clean)
function spotNameFor(layerName) {
	return layerName;
}

// ================== UTILS ==================
function ensureDoc() {
	if (app.documents.length === 0) throw Error('Open a document first.');
	return app.activeDocument;
}
function hexToRGB(hex) {
	hex = (hex || '').replace('#', '').toLowerCase();
	if (hex.length === 3)
		hex = hex.replace(/./g, function (c) {
			return c + c;
		});
	var n = parseInt(hex, 16);
	var c = new RGBColor();
	c.red = (n >> 16) & 255;
	c.green = (n >> 8) & 255;
	c.blue = n & 255;
	return c;
}
function getOrCreateLayer(doc, name) {
	var lyr;
	try {
		lyr = doc.layers.getByName(name);
	} catch (e) {}
	if (!lyr) {
		lyr = doc.layers.add();
		lyr.name = name;
		for (var i = 0; i < LAYER_SPECS.length; i++) {
			if (LAYER_SPECS[i].name === name) {
				lyr.color = hexToRGB(LAYER_SPECS[i].hex);
				break;
			}
		}

		if (name && valueExists(FRONTLAYERS, name)) {
			lyr.zOrder(ZOrderMethod.BRINGTOFRONT);
		} else {
			lyr.zOrder(ZOrderMethod.SENDTOBACK);
		}
	}
	return lyr;
}

function valueExists(arr, value) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] === value) {
			return true;
		}
	}
	return false;
}

function getOrCreateSpot(doc, spotName, rgbColor) {
	// Find by name
	for (var i = 0; i < doc.spots.length; i++) {
		if (doc.spots[i].name === spotName) {
			// refresh base color in case hex changed
			doc.spots[i].color = rgbColor;
			return doc.spots[i];
		}
	}
	// Create new
	var sp = doc.spots.add();
	sp.name = spotName;
	sp.colorType = ColorModel.SPOT;
	sp.color = rgbColor; // base (display) color; usage via SpotColor ensures spot ink
	return sp;
}
function makeSpotColor(spot, tint) {
	var sc = new SpotColor();
	sc.spot = spot;
	sc.tint = typeof tint === 'number' ? tint : 100;
	return sc;
}
function ensureLayersAndSpots(doc) {
	// returns map: layerName -> SpotColor (100%)
	var m = {};
	for (var i = 0; i < LAYER_SPECS.length; i++) {
		var spec = LAYER_SPECS[i];
		getOrCreateLayer(doc, spec.name);
		var rgb = hexToRGB(spec.hex);
		var spot = getOrCreateSpot(doc, spotNameFor(spec.name), rgb);
		m[spec.name] = makeSpotColor(spot, 100);
	}
	return m;
}

function itemSupportsStroke(item) {
	var t = item.typename;
	return (
		t === 'PathItem' ||
		t === 'CompoundPathItem' ||
		t === 'TextFrame' ||
		t === 'GroupItem' ||
		t === 'PlacedItem' ||
		t === 'RasterItem'
	);
}

function styleItemWithSpot(item, spotColor) {
	try {
		if (!itemSupportsStroke(item)) return;

		// Go inside containers
		if (item.typename === 'GroupItem') {
			for (var gi = 0; gi < item.pageItems.length; gi++) {
				styleItemWithSpot(item.pageItems[gi], spotColor);
			}
			return;
		}
		if (item.typename === 'CompoundPathItem') {
			for (var pi = 0; pi < item.pathItems.length; pi++) {
				styleItemWithSpot(item.pathItems[pi], spotColor);
			}
			return;
		}

		// Fill objects in the WHITE layer, no stroke
		if (item.layer.name === 'Proof - Notes') {
			// Do nothing, leave as is
			return;
		} else if (item.layer.name === 'WHITE') {
			if ('filled' in item) item.filled = true;
			if ('stroked' in item) item.stroked = false;
			item.fillColor = spotColor; // Use the white ink spot color
			return;
		} else if (valueExists(STROKELAYERS, item.layer.name)) {
			// Turn off fill (where supported)
			if ('filled' in item) item.filled = false;
			if ('stroked' in item) item.stroked = true;
			if ('strokeColor' in item) item.strokeColor = spotColor;
			if ('strokeWidth' in item) item.strokeWidth = 10;
			if ('strokeDashOffset' in item) item.strokeDashOffset = 10;
			if ('strokeDashes' in item) item.strokeDashes = [10, 10];
		} else {
			// Turn off fill (where supported)
			if ('filled' in item) item.filled = false;

			// Ensure stroke on, 0.01pt, spot color
			if ('stroked' in item) item.stroked = true;
			if ('strokeColor' in item) item.strokeColor = spotColor;
			if ('strokeWidth' in item) item.strokeWidth = SCALE;
			item.strokeDashOffset = 0;
			item.strokeDashes = {};
		}
	} catch (e) {
		// ignore unsupported cases
	}
}

function styleLayerItems(doc, layerName, spotColor) {
	var lyr;
	try {
		lyr = doc.layers.getByName(layerName);
	} catch (e) {
		return 0;
	}
	var count = 0;

	// Process all top-level pageItems on this layer
	var items = lyr.pageItems;
	for (var i = 0; i < items.length; i++) {
		styleItemWithSpot(items[i], spotColor);
		count++;
	}
	return count;
}

function addWhiteInkSpot(doc) {
	// Check if swatch already exists
	var swatchName = 'WHITE';
	var existingSwatch = null;
	for (var i = 0; i < doc.swatches.length; i++) {
		if (doc.swatches[i].name === swatchName) {
			existingSwatch = doc.swatches[i];
			break;
		}
	}

	if (!existingSwatch) {
		// Create a new spot
		var spot = doc.spots.add();
		spot.name = swatchName;
		spot.colorType = ColorModel.SPOT;

		// Set the spot color (light purple)
		var c = new CMYKColor();
		c.cyan = 20;
		c.magenta = 30;
		c.yellow = 0;
		c.black = 0;
		spot.color = c;

		// Add the spot to a new swatch
		var swatch = doc.swatches.add();
		swatch.name = swatchName;
		swatch.color = spot.color;
	} else {
	}
}

// ================== MAIN ==================
(function main() {
	var doc = ensureDoc();
	// Create XMPMeta object from the document's existing XMP
	var xmp = new XMPMeta(doc.XMPString);

	var storedValue = xmp.getProperty(XMPConst.NS_DC, 'QCD-data');
	var data;
	if (storedValue) {
		try {
			data = JSON.parse(storedValue);
		} catch (e) {
			data = {};
		}
	} else {
		data = {};
	}

	if (!data.hasInitialized) {
		var dlg = new Window('dialog', 'Layer Styling Script');

		// Dropdown (popup)
		dlg.add('statictext', undefined, 'WARNING: Scale cannot be changed');
		dlg.add('statictext', undefined, 'Select Scale:');
		var scaleDropdown = dlg.add('dropdownlist', undefined, [
			'Full scale',
			'10th scale',
			'Half scale',
			'Quarter scale',
		]);
		scaleDropdown.selection = 0; // default selection (first item)

		// Buttons
		var btnGroup = dlg.add('group');
		btnGroup.alignment = 'right';
		var saveBtn = btnGroup.add('button', undefined, 'Save');
		var cancelBtn = btnGroup.add('button', undefined, 'Cancel');

		var scale = null;

		saveBtn.onClick = function () {
			if (scaleDropdown.selection) {
				scale = scaleDropdown.selection.text;
				if (scale === '10th scale') {
					SCALE = 0.001;
				} else if (scale === 'Half scale') {
					SCALE = 0.005;
				} else if (scale === 'Quarter scale') {
					SCALE = 0.0025;
				} else if (scale === 'Full scale') {
					SCALE = 0.01;
				}
				data.scale = SCALE; // store in your data object if needed
				data.hasInitialized = true;
				dlg.close(1);
				xmp.setProperty(XMPConst.NS_DC, 'QCD-data', JSON.stringify(data));
				doc.XMPString = xmp.serialize();
			}
		};

		cancelBtn.onClick = function () {
			dlg.close(0);
		};

		var result = dlg.show();
	} else {
		SCALE = data.scale || 0.01; // default to full scale if not
	}

	addWhiteInkSpot(doc);

	// Ensure layers and spot swatches are present/up-to-date
	var layerSpotMap = ensureLayersAndSpots(doc);

	// Style all items on each mapped layer
	var total = 0;
	for (var i = 0; i < LAYER_SPECS.length; i++) {
		var ln = LAYER_SPECS[i].name;
		var sc = layerSpotMap[ln];
		total += styleLayerItems(doc, ln, sc);
	}
})();
