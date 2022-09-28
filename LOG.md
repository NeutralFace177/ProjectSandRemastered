**Update 1: Going Nuts**
------------------------

*Note: A lot of Update 1's features are brought up in README.md and GNLIST.md, not to mention I started this log during Update 2's development, so this is more abridged than other future logs.*

Check out GNLIST.md for more specific notes regarding these features.

+ *Features*
  + Keybinds added for the speedslider, overwrite, save, load, and clear functions.
  + More size options for the pen and the spigots.

+ *Elements*
  + Many new elements created by me have been added:
    + Corrupt
    + Firework
    + Bedrock
    + Snow
    + Cursed Fire
    + Humans
    + Nanites
    + Spice of Life
    + Reproduction
  + Other elements that these elements depend on have also been added.
  + Added vanilla elements only accessible through interactions to the element table.
  + Added many elements to the spigots, both vanilla and modded.

+ *Balances/Fixes*
  + Increased canvas size.
  + Edited UI to fit the canvas and larger element table, and also look a bit nicer.
  + Changed the "Original Applets" link to a link to the fork's Github.
  + Added new functions, particles, variables, and other dependencies to get the new elements/features working.

**Update 2: Modifiers and More**
--------------------------------

+ *Features*
  + Added the ability to undo the most recent stroke. Press "CTRL" to undo. (Requested by CloroxSteve)
  + Added a modifier: Mating Season (shortened to MS). When active, all humans will rapidly start repopulating without the need to use the reproduction element so there will always be plenty of humans to explode. Press "F" to toggle. (Requested by Immchuck)
  + A new spigot dropdown was added, regarding a new element.

+ *Elements*
  + PortaSpigot: A new element that has the same properties as a spigot. Place it anywhere and dispense whatever is selected from the PortaSpigot dropdown. (Requested by Immchuck)
  + Thanos and Dust: A new pair of elements. When Thanos is ignited, around half of the elements onscreen will turn into dust, which slowly dissipates. (Started by me, requested to be actually finished by CloroxSteve)
  + Deepsand: A new type of sand, sinks faster in water and is resistant to lava and acid. (Requested by Immchuck)
  + Added Burning Thermite to the element table, so now it can be placed (althought it nearly instantly explodes).
  + Added Thermite to the Spigot Types.
  + Added Bedrock and Nanites to the Magic particles triggered by ???.

+ *Balances/Fixes*
  + Added Cursed Fire immunity for Acid.
  + Added acid immunity for Bedrock.
  + Fixed issue with Bedrock not having partial immunity to the Charged Nitro particle.
  + Gave Rock immunity for Corrupt, for which it previously didn't.
  + Fixed error with Firework, causing it to fire particles it shouldn't.
  + Reduced Pollen generation.
  + Increased Snow gravity.
  + Removed extra code from the FIRE_BRIGHT and FIRE_BLUE elements that was unecessary, as they're not meant to do much beyond look pretty for the Firework.
  + Removed the unused Snap particle, as Thanos was unused before finishing it and the particle which was originally used to test the element became obsolete.
  + Canvas is now slightly thinner.
  + UI adjustments for element name size so it will fit correctly.
  + Changed the note text to a link to GNLIST.md, since the note about the game breaking from active modding is redundant as I code off of the version linked to Github.
  + Some assorted notes were added to the code, giving insight on my code's functions and fun facts about development.
  + Other small adjustments for balancing/optimization that weren't documented/important.

**Update 3: Hot, Cold, and Chaos Unfold**
-----------------------------------------

+ *Features*
  + Added an entirely new menu dedicated to modifiers. It can be seen on the right side of the canvas.
  + New modifier: Heat Wave. When active, ice will melt, water will become steam, and rock will melt down into lava. Fire also lasts a bit longer before extinguishing, making explosions more volatile.
  + New modifier: Cold Snap. When active, water will freeze into ice and lava will cool and harden into rock.
  + New modifier: Insta-Ignite. Causes any explosive to instantly be set off with varying results.
  + New modifier: Anti-Pollen. Makes it so pollen cannot be produced by the Leaf element.
  + New button to fill the entire canvas with a singular element.

+ *Elements*
  + Remote C4: A new variant of C4 that is manually set off using "F" instead of with a fire. Has varying results depending on how much there is.
  + Void: Sucks in any element that makes contact with it, leaving no trace.

+ *Balances/Fixes*
  + Salt can no longer be corrupted with the corrupt element.
  + Wax (and Falling Wax) can no longer be corrupted with the corrupt element.
  + Fixed issue with Nanites causing it to convert irregularly depending on whether it was converting up or down.
  + Human movement has been overhauled, now they can climb most elements in the game as well as hang onto ceilings for a bit.
  + Humans now lag the game considerably less
  + Due to the addition of so many new modifiers and because making keybinds for each and every one would be redundant, Mating Season can no longer be toggled with "F" or any other keybind.
  + Removed doMoveAround() as it became obsolete.
  + Made optimizations and under the hood changes so the code is cleaner
  + Assorted UI adjustments for original menu regarding the new menu wrapper.
  + Reorganized the elements in a way I think fits better