/*
 * Code for the menu options.
 *
 * Copyright (C) 2020, Josh Don
 *
 * Project Sand is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Project Sand is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */
/* Configuration of the menu */
const ELEMENT_MENU_ELEMENTS_PER_ROW = 7;
const EarthRow = 3;
const ExplosivesRow = 2;
const UnnaturalRow = 1; 
const OtherRow = 1;
const PEN_SIZES = [1, 2, 4, 8, 16, 32, 64, 128, 256];
const PEN_SIZE_LABELS = ["0.5px", "1px", "2px", "4px", "8px", "16px", "32px", "64px", "128px"];
const DEFAULT_PEN_IDX = 5;
/* Elements listed in the menu */
// prettier-ignore
const elementMenuItems = [
	WALL, CONCRETE, BEDROCK, SAND, DEEPSAND, SALT, WATER, SALT_WATER, STEAM, SNOW, 
  ICE, CHILLED_ICE, CRYO, SOIL, WET_SOIL, PLANT, BRANCH, LEAF, POLLEN, CORRUPT, 
  WAX, FALLING_WAX, FIRE, TORCH, FIRE_CURSE, LAVA, ROCK, OIL, METHANE, ACID, 
  FUSE, GUNPOWDER, NAPALM, NITRO, CHARGED_NITRO, C4, REMOTE_C4, THERMITE, BURNING_THERMITE, FIREWORK, 
  SPICE, SPOUT, WELL, FACTORY, HUMAN, CLONE, THANOS, MYSTERY, NANITES, VOID, MUSHROOM_DIRT, MUSHROOM_DIRT_WET, MUSHROOM_STEM, MUSHROOM_TOP, BLOOD,
  ZOMBIE, BACKGROUND,
];


const Earth = [SAND,DEEPSAND,SALT,WATER,SALT_WATER,SNOW,ICE,SOIL,WET_SOIL,PLANT,BRANCH,LEAF,POLLEN,LAVA,ROCK,HUMAN,MUSHROOM_DIRT,MUSHROOM_DIRT_WET,MUSHROOM_STEM,MUSHROOM_TOP];
const Explosives = [FIRE,TORCH,FIRE_CURSE,OIL,METHANE,FUSE,GUNPOWDER,NAPALM,NITRO,CHARGED_NITRO,C4,REMOTE_C4,THERMITE,BURNING_THERMITE,FIREWORK,SPICE];
const Unnatural = [CRYO,CHILLED_ICE,ACID,CORRUPT,ZOMBIE,MYSTERY,NANITES,VOID,THANOS,BLOOD];
const Other = [WALL,CONCRETE,BEDROCK,STEAM,WAX,FALLING_WAX,FACTORY,SPOUT,WELL,CLONE,BACKGROUND];



const menuNames = {};
menuNames[WALL] = "WALL";
menuNames[BEDROCK] = "BEDROCK";
menuNames[SAND] = "SAND";
menuNames[SNOW] = "SNOW";
menuNames[WATER] = "WATER";
menuNames[SALT_WATER] = "SALT WATER";
menuNames[STEAM] = "STEAM";
menuNames[PLANT] = "PLANT";
menuNames[BRANCH] = "BRANCH";
menuNames[LEAF] = "LEAF";
menuNames[POLLEN] = "POLLEN";
menuNames[FIRE] = "FIRE";
menuNames[FIRE_CURSE] = "CURSED FIRE";
menuNames[SALT] = "SALT";
menuNames[OIL] = "OIL";
menuNames[SPOUT] = "SPOUT";
menuNames[WELL] = "WELL";
menuNames[TORCH] = "TORCH";
menuNames[GUNPOWDER] = "GUNPOWDER";
menuNames[FIREWORK] = "FIREWORK";
menuNames[WAX] = "WAX";
menuNames[FALLING_WAX] = "FALLING WAX";
menuNames[NITRO] = "NITRO";
menuNames[CHARGED_NITRO] = "CHARGED NITRO";
menuNames[NAPALM] = "NAPALM";
menuNames[C4] = "C-4";
menuNames[CONCRETE] = "CONCRETE";
menuNames[BACKGROUND] = "ERASER";
menuNames[FUSE] = "FUSE";
menuNames[ICE] = "ICE";
menuNames[CHILLED_ICE] = "CRYO ICE";
menuNames[LAVA] = "LAVA";
menuNames[ROCK] = "LAVA ROCK";
menuNames[METHANE] = "METHANE";
menuNames[CRYO] = "CRYO";
menuNames[CORRUPT] = "CORRUPT";
menuNames[MYSTERY] = "???";
menuNames[ACID] = "ACID";
menuNames[THERMITE] = "THERMITE";
menuNames[BURNING_THERMITE] = "BURNING THERMITE";
menuNames[SOIL] = "SOIL";
menuNames[WET_SOIL] = "WET SOIL";
menuNames[HUMAN] = "HUMANS";
menuNames[THANOS] = "THANOS";
menuNames[NANITES] = "NANITES";
menuNames[SPICE] = "SPICE OF LIFE";
menuNames[CLONE] = "REPRODUCTION";
menuNames[FACTORY] = "PORTASPIGOT";
menuNames[DEEPSAND] = "DEEPSAND";
menuNames[REMOTE_C4] = "REMOTE C4";
menuNames[VOID] = "VOID";
menuNames[MUSHROOM_DIRT] = "Mycelium";
menuNames[MUSHROOM_DIRT_WET] = "Wet Mycelium";
menuNames[MUSHROOM_STEM] = "Mushroom Stem";
menuNames[MUSHROOM_TOP] = "Mushroom Top";
menuNames[BLOOD] = "Blood";
menuNames[ZOMBIE] = "Zombies";

//a

/*
 * Some element colors do not have very good contrast against
 * the menu background. For these elements, we use a replacement
 * color for the menu text.
 */
const menuAltColors = {};
menuAltColors[WATER] = "rgb(0, 130, 255)";
menuAltColors[WALL] = "rgb(160, 160, 160)";
menuAltColors[BACKGROUND] = "rgb(200, 100, 200)";
menuAltColors[WELL] = "rgb(158, 13, 33)";
menuAltColors[SOIL] = "rgb(171, 110, 53)";
menuAltColors[DEEPSAND] = "rgb(68, 72, 115)";
menuAltColors[MUSHROOM_DIRT_WET] = "rgb(172, 39, 161)";
menuAltColors[MUSHROOM_DIRT] = "rgb(172, 39, 141)";

function initMenu() {
	/* The wrapper div that holds the entire menu */
	const menu = document.getElementById("menuWrapper");
	/* Set up the wrapper div that holds the element selectors */
	const elementMenu = document.getElementById("elementTable");
	elementMenu.style.width = "30%"; /* force browser to scrunch the element menu */

	const elementMenuEx = document.getElementById("elementTableEx");
	elementMenuEx.style.width = "30%";

	const elementMenuU = document.getElementById("elementTableU");
	elementMenuU.style.width = "30%";

	const elementMenuO = document.getElementById("elementTableO");
	elementMenuO.style.width = "30%";

	const numRows = Math.ceil(elementMenuItems.length / ELEMENT_MENU_ELEMENTS_PER_ROW);
	
	const numRowsE = Math.ceil(Earth.length / EarthRow);
	const numRowsEx = Math.ceil(Explosives.length / ExplosivesRow);
	const numRowsU = Math.ceil(Unnatural.length / UnnaturalRow);
	const numRowsO = Math.ceil(Other.length / OtherRow);
	var elemIdx = 0;
	var next = 0;
	var i, k;
	for (i = 0; i < numRowsE; i++) {
		const row = elementMenu.insertRow(i);
		for (k = 0; k < EarthRow; k++) {
			if (elemIdx >= Earth.length) {
				elemIdx = 0;
				break;
				
			};	
			const cell = row.insertCell(k);
			const elemButton = document.createElement("input");
			cell.appendChild(elemButton);
			elemButton.type = "button";
			elemButton.className = "elementMenuButton";
			const elemType = Earth[elemIdx];
			if (!(elemType in menuNames)) throw "element is missing a canonical name: " + elemType;
			elemButton.value = menuNames[elemType];
			const elemColorRGBA = elemType;
			elemButton.id = elemColorRGBA;
			var elemMenuColor;
			if (elemType in menuAltColors) elemMenuColor = menuAltColors[elemType];
			else elemMenuColor = "rgb(" + (elemColorRGBA & 0xff) + ", " + ((elemColorRGBA & 0xff00) >>> 8) + ", " + ((elemColorRGBA & 0xff0000) >>> 16) + ")";
			elemButton.style.color = elemMenuColor;
			elemButton.addEventListener("click", function() {
				document.getElementById(SELECTED_ELEM.toString()).classList.remove("selectedElementMenuButton");
				elemButton.classList.add("selectedElementMenuButton");
				SELECTED_ELEM = parseInt(elemButton.id, 10);
			});
			elemIdx++;
		}
	}
	for (i = 0; i < numRowsEx; i++) {
		const row = elementMenuEx.insertRow(i);
		
		for (k = 0; k < ExplosivesRow; k++) {
			if (elemIdx >= Explosives.length) {
				elemIdx = 0;
				break;
			};	
			const cell = row.insertCell(k);
			const elemButton = document.createElement("input");
			cell.appendChild(elemButton);
			elemButton.type = "button";
			elemButton.className = "elementMenuButton";
			const elemType = Explosives[elemIdx];
			if (!(elemType in menuNames)) throw "element is missing a canonical name: " + elemType;
			elemButton.value = menuNames[elemType];
			const elemColorRGBA = elemType;
			elemButton.id = elemColorRGBA;
			var elemMenuColor;
			if (elemType in menuAltColors) elemMenuColor = menuAltColors[elemType];
			else elemMenuColor = "rgb(" + (elemColorRGBA & 0xff) + ", " + ((elemColorRGBA & 0xff00) >>> 8) + ", " + ((elemColorRGBA & 0xff0000) >>> 16) + ")";
			elemButton.style.color = elemMenuColor;
			elemButton.addEventListener("click", function() {
				document.getElementById(SELECTED_ELEM.toString()).classList.remove("selectedElementMenuButton");
				elemButton.classList.add("selectedElementMenuButton");
				SELECTED_ELEM = parseInt(elemButton.id, 10);
			});
			elemIdx++;
		}
	}
	for (i = 0; i < numRowsU; i++) {
		const row = elementMenuU.insertRow(i);
		
		for (k = 0; k < UnnaturalRow; k++) {
			if (elemIdx >= Unnatural.length) {
				elemIdx = 0;
				break;
			};	
			const cell = row.insertCell(k);
			const elemButton = document.createElement("input");
			cell.appendChild(elemButton);
			elemButton.type = "button";
			elemButton.className = "elementMenuButton";
			const elemType = Unnatural[elemIdx];
			if (!(elemType in menuNames)) throw "element is missing a canonical name: " + elemType;
			elemButton.value = menuNames[elemType];
			const elemColorRGBA = elemType;
			elemButton.id = elemColorRGBA;
			var elemMenuColor;
			if (elemType in menuAltColors) elemMenuColor = menuAltColors[elemType];
			else elemMenuColor = "rgb(" + (elemColorRGBA & 0xff) + ", " + ((elemColorRGBA & 0xff00) >>> 8) + ", " + ((elemColorRGBA & 0xff0000) >>> 16) + ")";
			elemButton.style.color = elemMenuColor;
			elemButton.addEventListener("click", function() {
				document.getElementById(SELECTED_ELEM.toString()).classList.remove("selectedElementMenuButton");
				elemButton.classList.add("selectedElementMenuButton");
				SELECTED_ELEM = parseInt(elemButton.id, 10);
			});
			elemIdx++;
		}
	}
	for (i = 0; i < numRowsO; i++) {
		const row = elementMenuO.insertRow(i);
		
		for (k = 0; k < OtherRow; k++) {
			if (elemIdx >= Other.length) {
				elemIdx = 0;
				break;
			};	
			const cell = row.insertCell(k);
			const elemButton = document.createElement("input");
			cell.appendChild(elemButton);
			elemButton.type = "button";
			elemButton.className = "elementMenuButton";
			const elemType = Other[elemIdx];
			if (!(elemType in menuNames)) throw "element is missing a canonical name: " + elemType;
			elemButton.value = menuNames[elemType];
			const elemColorRGBA = elemType;
			elemButton.id = elemColorRGBA;
			var elemMenuColor;
			if (elemType in menuAltColors) elemMenuColor = menuAltColors[elemType];
			else elemMenuColor = "rgb(" + (elemColorRGBA & 0xff) + ", " + ((elemColorRGBA & 0xff00) >>> 8) + ", " + ((elemColorRGBA & 0xff0000) >>> 16) + ")";
			elemButton.style.color = elemMenuColor;
			elemButton.addEventListener("click", function() {
				document.getElementById(SELECTED_ELEM.toString()).classList.remove("selectedElementMenuButton");
				elemButton.classList.add("selectedElementMenuButton");
				SELECTED_ELEM = parseInt(elemButton.id, 10);
			});
			elemIdx++;
		}
	}
	/*
	for (i = 0; i < numRows; i++) {
		const row = elementMenu.insertRow(i);
		for (k = 0; k < ELEMENT_MENU_ELEMENTS_PER_ROW; k++) {
			if (elemIdx >= elementMenuItems.length) break;
			const cell = row.insertCell(k);
			const elemButton = document.createElement("input");
			cell.appendChild(elemButton);
			elemButton.type = "button";
			elemButton.className = "elementMenuButton";
			const elemType = elementMenuItems[elemIdx];
			if (!(elemType in menuNames)) throw "element is missing a canonical name: " + elemType;
			elemButton.value = menuNames[elemType];
			const elemColorRGBA = elemType;
			elemButton.id = elemColorRGBA;
			var elemMenuColor;
			if (elemType in menuAltColors) elemMenuColor = menuAltColors[elemType];
			else elemMenuColor = "rgb(" + (elemColorRGBA & 0xff) + ", " + ((elemColorRGBA & 0xff00) >>> 8) + ", " + ((elemColorRGBA & 0xff0000) >>> 16) + ")";
			elemButton.style.color = elemMenuColor;
			elemButton.addEventListener("click", function() {
				document.getElementById(SELECTED_ELEM.toString()).classList.remove("selectedElementMenuButton");
				elemButton.classList.add("selectedElementMenuButton");
				SELECTED_ELEM = parseInt(elemButton.id, 10);
			});
			elemIdx++;
		}
	}
	*/
	document.getElementById(SELECTED_ELEM.toString()).click();
	/* Set up pensize options */
	const pensizes = document.getElementById("pensize");
	for (i = 0; i < PEN_SIZES.length; i++) {
		const p = document.createElement("option");
		p.value = PEN_SIZES[i];
		p.text = PEN_SIZE_LABELS[i];
		if (i === DEFAULT_PEN_IDX) {
			p.selected = "selected";
			PENSIZE = parseInt(p.value, 10);
		}
		pensizes.add(p);
	}
	pensizes.addEventListener("change", function() {
		PENSIZE = parseInt(pensizes.value, 10);
	});
	/* Set up spigot size options */
	/*The 5th spigot's size is actually unecessary, since FACTORY always operates at a fixed rate, but it's needed by the function since it runs a check for both a type and a size.*/
	const spigotTypes = [
		document.getElementById("spigot1Type"),
		document.getElementById("spigot2Type"),
		document.getElementById("spigot3Type"),
		document.getElementById("spigot4Type"),
		document.getElementById("spigot5Type"),
	];
	const spigotSizes = [
		document.getElementById("spigot1Size"),
		document.getElementById("spigot2Size"),
		document.getElementById("spigot3Size"),
		document.getElementById("spigot4Size"),
		document.getElementById("spigot5Size"),
	];
	if (spigotTypes.length !== spigotSizes.length) throw "should be same length";
	for (i = 0; i < spigotTypes.length; i++) {
		const typeSelector = spigotTypes[i];
		const sizeSelector = spigotSizes[i];
		for (k = 0; k < SPIGOT_ELEMENT_OPTIONS.length; k++) {
			const type = SPIGOT_ELEMENT_OPTIONS[k];
			const option = document.createElement("option");
			option.value = type;
			option.text = menuNames[type];
			if (i === k) {
				option.selected = "selected";
				SPIGOT_ELEMENTS[i] = type;
			}
			typeSelector.add(option);
		}
		for (k = 0; k < SPIGOT_SIZE_OPTIONS.length; k++) {
			const size = SPIGOT_SIZE_OPTIONS[k];
			const option = document.createElement("option");
			option.value = size;
			option.text = k.toString(10);
			if (k === DEFAULT_SPIGOT_SIZE_IDX) {
				option.selected = "selected";
				SPIGOT_SIZES[i] = size;
			}
			sizeSelector.add(option);
		}
	}
	spigotTypes[0].addEventListener("change", function() {
		SPIGOT_ELEMENTS[0] = parseInt(spigotTypes[0].value, 10);
	});
	spigotTypes[1].addEventListener("change", function() {
		SPIGOT_ELEMENTS[1] = parseInt(spigotTypes[1].value, 10);
	});
	spigotTypes[2].addEventListener("change", function() {
		SPIGOT_ELEMENTS[2] = parseInt(spigotTypes[2].value, 10);
	});
	spigotTypes[3].addEventListener("change", function() {
		SPIGOT_ELEMENTS[3] = parseInt(spigotTypes[3].value, 10);
	});
	spigotTypes[4].addEventListener("change", function() {
		SPIGOT_ELEMENTS[4] = parseInt(spigotTypes[4].value, 10);
	});
	spigotSizes[0].addEventListener("change", function() {
		SPIGOT_SIZES[0] = parseInt(spigotSizes[0].value, 10);
	});
	spigotSizes[1].addEventListener("change", function() {
		SPIGOT_SIZES[1] = parseInt(spigotSizes[1].value, 10);
	});
	spigotSizes[2].addEventListener("change", function() {
		SPIGOT_SIZES[2] = parseInt(spigotSizes[2].value, 10);
	});
	spigotSizes[3].addEventListener("change", function() {
		SPIGOT_SIZES[3] = parseInt(spigotSizes[3].value, 10);
	});
	spigotSizes[4].addEventListener("change", function() {
		SPIGOT_SIZES[4] = parseInt(spigotSizes[4].value, 10);
	});
	/* 'overwrite' checkbox */
	const overwriteCheckbox = document.getElementById("overwriteCheckbox");
	overwriteCheckbox.checked = OVERWRITE_ENABLED;
	overwriteCheckbox.addEventListener("click", function() {
		OVERWRITE_ENABLED = overwriteCheckbox.checked;
	});
	/* mating season checkbox*/
	const seasonCheckbox = document.getElementById("seasonCheckbox");
	seasonCheckbox.checked = MS_ENABLED;
	seasonCheckbox.addEventListener("click", function() {
		MS_ENABLED = seasonCheckbox.checked;
	});
	/* heat wave checkbox*/
	const heatCheckbox = document.getElementById("heatCheckbox");
	heatCheckbox.checked = HW_ENABLED;
	heatCheckbox.addEventListener("click", function() {
		HW_ENABLED = heatCheckbox.checked;

	});
	/* cold snap checkbox*/
	const coldCheckbox = document.getElementById("coldCheckbox");
	coldCheckbox.checked = CS_ENABLED;
	coldCheckbox.addEventListener("click", function() {
		CS_ENABLED = coldCheckbox.checked;

	});
	/* insta-ignite checkbox*/
	const instaCheckbox = document.getElementById("instaCheckbox");
	instaCheckbox.checked = II_ENABLED;
	instaCheckbox.addEventListener("click", function() {
		II_ENABLED = instaCheckbox.checked;
	});
	/* insta-ignite checkbox*/
	const pollenCheckbox = document.getElementById("pollenCheckbox");
	pollenCheckbox.checked = AP_ENABLED;
	pollenCheckbox.addEventListener("click", function() {
		AP_ENABLED = pollenCheckbox.checked;
	});
	/* speed slider */
	const speedSlider = document.getElementById("speedSlider");
	speedSlider.min = 0;
	speedSlider.max = MAX_FPS;
	speedSlider.value = DEFAULT_FPS;
	speedSlider.addEventListener("input", function() {
		const val = parseInt(speedSlider.value, 10);
		/* make 'magnetic' towards the default */
		if (Math.abs(val - DEFAULT_FPS) < 10) speedSlider.value = DEFAULT_FPS;
		setFPS(parseInt(speedSlider.value, 10));
	});
	/* clear button */
	const clearButton = document.getElementById("clearButton");
	clearButton.onclick = clearGameCanvas;
	/* save button */
	const saveButton = document.getElementById("saveButton");
	saveButton.onclick = saveGameCanvas;
	/* load button */
	const loadButton = document.getElementById("loadButton");
	loadButton.onclick = loadGameCanvas;
  /* load button */
	const fillButton = document.getElementById("fillButton");
	fillButton.onclick = function() {
    particles.inactivateAll();
    setGameCanvas(SELECTED_ELEM);
  }
	/*Menu keybinds*/
	document.addEventListener('keydown', function(m) {
    /*/ - Test Button*/
		if (m.which === 191) {
			console.log(saveGameImagedata32);
		}
		/*z - Undo*/
		if (m.which === 17) {
			undoLoadGameCanvas();
			aUndoLoadGameCanvas();
		}
		/*s - Defaut FPS*/
		if (m.which === 83) {
			speedSlider.value = DEFAULT_FPS;
			setFPS(parseInt(speedSlider.value, 10));
		}
		/*d - Max FPS*/
		else if (m.which === 68) {
			speedSlider.value = MAX_FPS;
			setFPS(parseInt(speedSlider.value, 10));
		}
		/*a - Min/0 FPS*/
		else if (m.which === 65) {
			speedSlider.value = 0;
			setFPS(parseInt(speedSlider.value, 10));
		}
		/*f - Remote C4*/
		if (m.which === 70) {
			REMOTE_BOMB = true;
		}
		/*c - Clear Canvas*/
		if (m.which === 67) {
			clearGameCanvas();
		}
		/*z - Save Canvas*/
		else if (m.which === 90) {
			saveGameCanvas();
		}
		/*x - Load Canvas*/
		else if (m.which === 88) {
			loadGameCanvas();
		}
		/*Space Bar - Overwrite Checkbox*/
		if (m.which === 32) {
			if (overwriteCheckbox.checked !== false) {
				overwriteCheckbox.checked = false;
				OVERWRITE_ENABLED = false;
			} else {
				overwriteCheckbox.checked = true;
				OVERWRITE_ENABLED = true;
			}
		}
	});
	document.addEventListener('keyup', function(m) {
		if (m.which === 70) {
			REMOTE_BOMB = false;
		}
	});
}

function drawFPSLabel(fps) {
	document.getElementById("fps-counter").innerText = "FPS: " + fps;
}
