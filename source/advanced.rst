
==================================
Advanced Topics
==================================

Accounting for GOI irising
----------------------------------

Creating the IRF Shift Map
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 * Load IRF dataset
 * Remove the background appropriately
 * Select a region where the IRF shift is constant (typically at the centre of the HRI where the effect of the irising is minimal)
 * Tools > Create IRF shift map
 * Save the IRF shape and IRF shift map (xml file, as prompted when the shift map is calculated)

Determining the Reference Lifetime
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 * Load a long lifetime dye data (or a single lifetime dataset, e.g. a cell expressing GFP only)
 * Remove the background appropriately
 * :guilabel:`IRF` > :guilabel:`Load IRF`
 * :guilabel:`Advanced` tab > Select :guilabel:`Use IRF shift map`
 * Check that IRF shift map is displaying and is correct by selecting IRF shift map in the mode selector
 * In :guilabel:`Fitting` tab > set :guilabel:`Fit reference` to  :guilabel:`Fitted`
 * Fit image wise both the lifetime of the sample and the reference lifetime
 * The reference lifetime obtained can then be used for fitting other dataset using the xml IRF shift map file as IRF
