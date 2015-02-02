
==================================
Advanced Topics
==================================

Creating a library IRF
----------------------------------
Overview
""""""""""""""""""""""""""
* Measurement of the temporal profile of an HRI for particular settings
* **Caution**  Take care to minimise the light exposure on the HRI at all times   

Measurement
""""""""""""""""""""""""""
* Set up for widefield imaging with HRI of interest
* Use filter cube with achromatic beamsplitter with ~OD5 of absorptive ND filters
* Focus light on glass slide (~4% reflection)
* Record the temporal profile with 25ps gate spacings
* Record 100 laser off background images with same integration time

Create library IRF file
""""""""""""""""""""""""""
* Load measured IRF as FLIM data
* Load camera background
* Check for decay artefacts 
* Select small central region of image
* Select :guilabel:`Tools>Create IRF shift map`...
* Add to instrument calibration repository





Determining a reference lifetime
----------------------------------
* Load a long lifetime dye data (or a single lifetime dataset, e.g. a cell expressing GFP only)
* Remove the background appropriately
* :guilabel:`IRF` > :guilabel:`Load IRF`
* :guilabel:`Advanced` tab > Select :guilabel:`Use IRF shift map`
* Check that IRF shift map is displaying and is correct by selecting IRF shift map in the mode selector
* In :guilabel:`Fitting` tab > set :guilabel:`Fit reference` to  :guilabel:`Fitted`
* Fit image wise both the lifetime of the sample and the reference lifetime
* The reference lifetime obtained can then be used for fitting other dataset using the xml IRF shift map file as IRF
