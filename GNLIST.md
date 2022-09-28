THE GONE NUTS LIST
------------------

A comprehensive list of what's been added to the vanilla game, what it does, and some extra info.

To see the original game for comparison, check out Josh Don's Github, which can be accessed through the "Source Code link.


+ Draw canvas size enlarged, may cause a bit of extra lag but I like the bigger space.

+ UI has been slightly altered to accommodate this and look a bit nicer (or worse, depending on opinion and/or update).

+ Pen Sizes and Spigot Sizes, as well as Spigot Types also have been updated with more values and element options respectively.

+ An undo button has been added to the game (see keybind).

+ A button to fill the entire canvas with a particular element has been added to the game.

+ Keybinds have been added for certain actions, including:
  + "CTRL" will revert the most recent stroke.
  + "Space" toggles the Overwrite check.
  + "Z" saves the current canvas.
  + "X" loads the last saved canvas.
  + "C" clears the canvas.
  + "A" sets the speed slider to 0.
  + "S" sets the speed slider to the default FPS (60).
  + "D" sets the speed slider to the max FPS (120).
  + "F" ignites the Remote C4.

+ The Elements Table has been updated, now containing vanilla elements that resulted from combining and/or interactions with multiple elements. These include:
  + Burning Thermite
  + Charged Nitro
  + Branch
  + Leaf
  + Pollen
  + Salt Water
  + Steam
  + Falling Wax
  + Rock
  + Wet Soil
  + Cryo Ice (Chilled Ice)

+ It has also been updated with a few of my own elements, including:
  + *Corrupt*: A purple, infectious element that will slowly spread to most organic/nature type elements. Doesn't do well spreading up, but can decimate an area if allowed.
  + *Firework*: An explosive, blue powder that spreads red, white and blue glory. Only the red flame can ignite however.
  + *Bedrock*: A stronger wall. Immune to lava and cursed fire, and acid.
  + *Snow*: Slow falling frozen water. Turns any place into a winter wonderland (or a pond if melted).
  + *Cursed Fire*: Not even water can put out the flame. Burns through most elements at a fixed rate, doesn't spread quite as easily as fire.
  + *Humans*: Little dudes who wander around, try not to stand on each other, and try to climb whatever they can and get killed in all sorts of ways. They can also reproduce, if allowed.
  + *Nanites*: Clone whatever they come into contact with.
  + *Spice of Life*: An extremely chaotic explosive. Incorporates napalm, nitro, C-4, lava explosions, charged nitro, fireworks, and some cursed fire as well. All in one, tight package.
  + *Reproduction*: A fire-esque tool used to get humans to repopulate. Can also grow plant, branch, leaf. Best used with overwrite disabled.
  + *PortaSpigot*: An element similar to Spout and Well, however it's tied to it's own spigot type. Produces anything a spigot can and can be placed anywhere.
  + *Thanos*: An explosive(?) element that when ignited will turn half the elements on screen into dust. Perfectly balanced, as all elements should be.
  + *Deepsand*: A new type of sand, from the depths of the ocean. Sinks faster than normal sand and can withstand acid and lava.
  + *Remote C4*: C4 that is immune to all types of fire. Can only be ignited with the push of "F".
  + *Void*: An element that will erase any other type when it comes into contact with it.
  
+ Modifiers have been added to the game, which can alter the experience to make it more interesting, including:
  + *Mating Season (MS)*: Causes humans to rapidly repopulate without the need to use the Reproduction element. NOTE: This can get quite laggy since ALL humans try to repopulate.
  + *Heat Wave (HW)*: Causes a variety of effects, such as ice melting, water evaporating, rock melting down into lava, and fire extinguishing slower.
  + *Cold Snap (CN)*: Causes a variety of effects, such as water freezing, and lava hardening into rock.
  + *Insta-Ignite (II)*: Causes ALL explosives to instantly ignite when enabled, including Remote C4.
  + *Anti-Pollen (AP)*: Changes it so that the Leaf element is unable to produce any pollen. Great for people who are tired of being flooded by pollen.

+ Modifiers have their own table as well, added to the right side of the canvas.

+ Other elements, particles, and functions have been added to help these new elements operate. If you're not messing with the code, ignore this stuff. Here's an outline:
  + Dependent elements:
    + *White Fire*: Used in the Firework element/particle. Doesn't do much beyond being white and looking pretty.
    + *Blue Fire*: Used in the Firework element/particle. Doesn't do much beyond being blue and looking pretty.
    + *Humans (Maker)*: Used in the reproduce particle for Humans when they do the jump so that it operates better.
    + *Dust*: Used in the Thanos element, replacing unlucky elements that got snapped. Slowly dissipates into nothingness.
  + Particles:
    + *Firework Particle*: Clone of the Lava particle, used in Firework and Spice of Life.
    + *Cursework Particle*: Clone of the Firework particle which is a clone of the Lava particle, used in Spice of Life.
    + *Charged Curse Particle*: Clone of the Charged Nitro particle, used in Spice of Life.
    + *Human Particle*: Uses the Lava particle as a base, launches humans up for a short bit where they explode into more humans.
  + Functions:
    + *__DoCorruption()*: Semi-Clone of __DoBorderBurn, but converts elements into Corrupt.
    + *walkAround()*: Moves an element randomly left, right, and also not move. Used by Humans to get around.
    + *moveRight()*: Moves an element right.
    + *moveLeft()*: Moves an element left.
    + *moveUp()*: Moves an element up.
    + *adjacentRight()*: Checks the element to the right of an element.
    + *adjacentLeft()*: Checks the element to the left of an element.
    + *undoSaveGameCanvas()*: Game save that's used every time a stroke is finished.
    + *aUndoSaveGameCanvas()*: Game save that's used to save the previous stroke completed, from undoSaveGameCanvas().
    + *undoLoadGameCanvas()*: Loads the aUndoGameImagedata32 save to the canvas.
    + *aUndoLoadGameCanvas()*: Loads the aUndoGameImagedata32 save to the undoGameImagedata32 save in order to keep save consistency.

+ Other very small changes that aren't significant to add here.

+ New bugs to discover, and ones I already know about (and will *probably* fix).