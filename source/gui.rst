*************************
GUI Documentation
*************************

=====================
Menus
=====================

File menu
-----------------
:guilabel:`New Window` Open a new instance of FLIMfit in a new window.

:guilabel:`Load FLIM Data` Load a single FLIM image. The program can load the following FLIM file formats: B&H ``.sdt``, LaVision TCSPC OME-tiffs, ASCII ``.txt`` files, a set of wide-field time-gated ``.tif`` images in a single directory and FLIMfit ``.raw`` files.

:guilabel:`Load FLIM Dataset` Load the raw FLIM data from multiple FOVs or multiple time or Z (depth) points. These FOVs can then be analysed together as a single dataset.

:guilabel:`Load Polarisation Resolved Data` Load polarisation resolved FLIM data. Polarisation analysis needs 2 images acquired at different polarizer angles, so the data must have at least 2 FLIM channels (this is currently only implemented for for B&H TCSPC ``.sdt`` images).

:guilabel:`Load Acceptor Images` Load a set of acceptor images that correspond to a set of FLIM images of the donor that you have already loaded. The acceptor images may be used to segment the data into ROIs based on both the donor and acceptor channel in inter-molecular FRET experiments and to plot the acceptor intensity. The file names of acceptor images must contain the names of the corresponding FLIM files to be recognised.

:guilabel:`Reload Data` Attempt to reload the currently loaded dataset. This can be useful when processing a dataset during acquisition when not all of the images had been acquired when the data was first loaded. This option requires that the data folders have been created in advance of the acquisition.

:guilabel:`Save FLIM Data` Reserved for future use.

:guilabel:`Save as Raw Dataset` Save the currently loaded data as a ``.raw`` file. The ``.raw`` file is useful as it can be rapidly reloaded using the Load Raw Dataset option, which can save time when dealing with large datasets.

:guilabel:`Save Data Settings` Save the settings of the Data tab into an XML file by using the Save Data Settings menu option. You can then load the settings back into FLIMfit when necessary by using Load Data Settings menu option.

:guilabel:`Set Default Folder` Set the default folder to use for file loading dialog boxes. This is useful as it saves repeatedly navigating to the folder that your data is stored in when opening e.g. IRF files.

:guilabel:`Import Plate Metadata` load the description of multi-well plate reader data. This description is stored in special Excel format.

:guilabel:`Export Decay` save the current pixel decay and the IRF displayed in the Decay tab, in text format. This option asks the user to select a directory and a file name, and the program then saves two .txt files called filename.txt and filename_irf.txt.

:guilabel:`Export Initial Fit Parameters` You can save all the settings shown in the fitting parameters tab into an XML file by using the Export Initial Fit Parameters menu option. These settings can then be loaded back in to FLIMfit when necessary by using Import Initial Fit Parameters menu options.

:guilabel:`Export Fit Results as HDF` Save the fitted decay parameters into a HDF format. The HDF (“hierarchical data format”) is suitable for storing large amounts of data with complex structure.

:guilabel:`Export Fit Results Table` Save the global fitted variables shown in the :guilabel:`Parameters` tab to a ``.csv`` file.

:guilabel:`Export Images` Export the fit parameter images selected in the :guilabel:`Plot` tab as both colormapped images (i.e. including colour bar and scale) and floating point grayscale parameter image files (tiff images).

:guilabel:`Export Histograms` Save the current data in the Histogram tab as a ``.csv`` file.


OMERO menu
-----------------
:guilabel:`Set Working Data` select the current OMERO storage containing FLIM images – either Dataset or SWP Plate. The logon options include possibility to enter as different user (Switch User), and restore server connection (Restore Logon).

:guilabel:`Load FLIM data: Single FOV` load a single FLIM image from the pre-set OMERO storage.

:guilabel:`Load FLIM data: Multiple FOVs` load multiple FLIM images from the pre-set OMERO storage. These images should have the same XYZCT dimensions.

:guilabel:`Load IRF (Single FOV)` load an IRF from a multi-plane image. A multi-plane OMERO image with the same XY dimensions and FLIM delays as the loaded FLIM data is expected. The data in this image are averaged over XY to produce 1-dimensional IRF signal.

:guilabel:`Load IRF (Dataset Images to average)` load the IRF from an OMERO dataset containing a set of single plane images with the values of FLIM delays (expressed in picoseconds) encoded in image names. This command is equivalent to loading the IRF from a folder on disk using the File, Load IRF menu option.

:guilabel:`Load IRF (Annotation)` load an IRF from an OMERO Annotation file within the current working data (Dataset or Plate). The files, including single-pixel B&H decays are loaded by the same procedure as when loading from the disk.

:guilabel:`Load Background (single plane: Image)` load a background image. A single-plane image is expected. This is analogous to the Load Background Image option from the Background menu.

:guilabel:`Load Background (single plane: Dataset Images to smooth)` calculate an averaged background image from a selected Dataset containing a set of single-plane images. This is analogous to the Load series of background images to smooth option in the Background menu.

:guilabel:`Load Time Varying Background (Image)` load a TVB image. This is analogous to the Load Time Varying Background option in the Background menu.

:guilabel:`Load Time Varying Background (Dataset Images)` load a TVB image from an OMERO Dataset. This is analogous to the Load IRF (Dataset Images).  The 1-dimensional time-dependent TVB signal is calculated by averaging this data over the XY dimensions.

:guilabel:`Export Fitting Results` store the current values displayed in the fitting results tab into OMERO. Internally within FLIMfit, the results of a fit are stored as double precision XY parameter images (i.e. several for each FOV, depending on the number of fit parameters). When exporting the fit parameter data into OMERO, these parameter images are placed in a multi-plane “double” OMERO image along the “channels” dimension. In other words, the OME dimension of each exported FOV results in an image with XY dimensions equal to the FOV, Z=1, T=1 and C = Nfit_params, where Nfit_params is the number fitted parameters. Fitted data are exported as a new OMERO container of the same storage type as working data (i.e. either a new Dataset or a new Plate) with the name derived from the name of the analysed working data. The name of the new OMERO container also contains the global time when the fit was performed.

:guilabel:`Export Fitting Settings` attach an XML file containing the current fitting settings of the program as a File Annotation to the current working data in OMERO (Dataset or Plate). This allows the fit settings to be reloaded back into FLIMfit from OMERO by using the Import Fitting Settings menu item.


IRF menu
-----------------
:guilabel:`Load IRF` load an IRF from file. If image data is selected, all the pixels will be averaged into a single decay.

:guilabel:`Set Delta Function IRF` set the IRF to a delta-function, i.e. the model functions will be used without convolution.

:guilabel:`Estimate IRF Background` estimate and subtract the background from the IRF. The background is estimated by fitting a Gaussian with a constant background to the IRF. The fitted constant value is then applied automatically to the background cell/value in the IRF tab and replaces any previous value.

:guilabel:`Estimate IRF shift` estimate any time shift present in the loaded IRF relative to the true IRF due to, for example, colour effects in the detector. The shift is determined by finding the IRF shift that minimizes the χ2 value (the goodness of fit measure) obtained for a fit to the region currently selected by the user.

:guilabel:`Estimate G factor` estimate the G factor using a dye sample with a short rotational correlation time. The G factor is estimated using the knowledge that the anisotropy tends to zero towards the end of the decay. This procedure is used only when analysing Polarization resolved measurements.

Background menu
------------------
:guilabel:`Load Background image` load a spatially varying background from   an image file on disk that contains a single plane image matching the XY size of the loaded FLIM data. This sets the values of spatial-varying background ZSV (see above).

:guilabel:`Load series of background image to smooth` menu option loads a set of single plane images and automatically calculates an average background image from them. The user is required to select a folder containing suitable image files.

:guilabel:`Load Time Varying Background` load a time varying background. This is not spatially varying background - a single trace is loaded from a .txt file that was saved previously using the Export Decay menu option.

:guilabel:`Use Selected Region as Time Varying Background` menu option defines the time varying background signal that is not XY dependent. The time varying background is set to the average of the region that is currently selected by the user.

========================
Fitting options
========================

Lifetime tab
-------------
:guilabel:`Global Fitting` Specify the scope of the global variables.

  * :guilabel:`Pixel-wise` the decays are fitted on a pixel-by-pixel basis
  * :guilabel:`Image-wise` global fitting is performed across each image individually, i.e. lifetimes are constant across each image
  * :guilabel:`Global` global fitting is performed across the entire dataset, i.e. lifetimes are constant across all images.

:guilabel:`Global Variable` combo-box to confine the scope of the global fit to a particular multi-well plate metadata parameter (e.g. ‘Row’ or ‘Column’). If a parameter is selected all images with the same parameter value will be globally analysed together.

:guilabel:`Global Mode` combo-box to set up the method of global analysis. The following choices are available:

  * :guilabel:`Global binning` All pixels in the global fit are binned into a single decay. This decay is then fitted to determine the global parameters. Each pixel is then fitted individually with the global parameters fixed (using the method of linear least square minimisation) to determine the local variables.
  * :guilabel:`Global analysis` All the pixels in the global fit are simultaneously analysed using Variable Projection algorithm (see in Advanced tab)

:guilabel:`No. Exp` combo-box to set up the number of exponential decay components :math:`n_\tau`

:guilabel:`No. Fixed` The number of fixed fluorescence lifetimes; the first :guilabel:`No. Fixed` values in the :guilabel:`Initial Tau` list are fixed.

:guilabel:`Fit contributions` combo-box to set up the fitting mode for the amplitudes Ak (formula (3) and (4)). The following choices are available:

  * :guilabel:`Fixed` the fractions :math:`\beta_i` are fixed for corresponding amplitudes (set up by the textboxes appearing to the right)
  * :guilabel:`Fit locally` amplitudes are fitted locally, i.e. on a pixel-by-pixel basis
  * :guilabel:`Fit globally`  amplitudes are fitted globally, i.e. they are invariant across the image. Use this option when fitting a complex donor FRET model or polarisation resolved data.
  * :guilabel:`Fit globally (Grouped)`: use this option to fit a model where we have a mixture of several fluorophores with complex decays. The lifetimes and contributions are specified in groups, indexed from zero. Within each group the lifetime and fractional contributions are invariant across the image but the fractional population of each group varies locally. The groups are specified using the Initial tau list.

:guilabel:`Fit Reference` combo-box to set up the fitting mode for the variable :math:`\tau_R` (formula (4)), as Fixed or Fitted. The reference lifetime is fitted globally.

:guilabel:`Initial Tau` combo-box to choose the initial values of lifetimes. These are estimated automatically unless ‘Automatically estimate initial guesses’ is deselected.

Stray Light tab
-------------------
You can select the fitting scope of the “stray light” variables entering the model expressions (3-5), by choosing either :guilabel:`Fixed`, or :guilabel:`Fitted Locally`, or :guilabel:`Fitted Globally`. The scope is set for the following variables:

  * :guilabel:`Offset` A constant background value, Z in the formula (5)
  * :guilabel:`Scatter` A fast-light scatter contribution, S in the formulas (3) and (4)
  * :guilabel:`TV Background` A time-varying background contribution that is scaled by the coefficient V, see formula (5). This option can only be used if a time varying background has been loaded. The V coefficient can be fitted globally or fixed by setting the TVB Background to ‘Fixed’ and TVB to 1.

Anisotropy tab
-------------------
These options are used to set up an anisotropy decay model if polarisation resolved data has been loaded.

:guilabel:`No Decays` combo-box to specify the number of rotational correlation times to fit.

:guilabel:`No Fixed` combo-box to specify the number of rotational correlation times that are fixed. The first No Fixed are fixed to the value specified in the Phi list.

:guilabel:`Use Phi` textbox to specify the initial guesses and fixed values for the anisotropy correlation times.

FRET tab
------------------
These options are used to fit a complex-donor FRET decay model. In this model we assume that the donor fluorophore has two or more conformations with associated lifetimes whose FRET efficiencies are linked by their relative quantum yields. To use this mode Fit Contributions should be set to Fixed or Globally in the Lifetime tab, as we assume that the fractional contribution of the various donor species are invariant across the image.

:guilabel:`No. FRET Species` combo-box to specify the number of different FRET conformations present. For example, for an intra-molecular FRET probe where there are likely to be two different conformations with different (but non-zero) FRET efficiencies, set this to two and set Include Donor Only to No. For an inter-molecular FRET probe where the unbound state will have a zero FRET efficiency, set this to one and set Include Donor Only to Yes.

:guilabel:`No. Fixed` combo-box to set the number of FRET conformations which have fixed efficiencies. The first No. Fixed FRET efficiencies in the E list will be fixed.

:guilabel:`Include Donor Only` combo-box to specify whether a donor-only contribution should be included, that is a contribution from a species which is not FRETing.

Advanced tab
------------------
:guilabel:`No. Threads` Set up the number of threads used in multi-threading processing. This is automatically set to the number of cores present on the local machine which in general is optimal.

:guilabel:`Algorithm` combo-box to choose the method and the type of error function minimization. The following methods are available:

  * :guilabel:`Variable Projection`: Use separable fitting to minimise the mean-square error function.

  * :guilabel:`Maximum Likelihood`: Use the maximum likelihood fitting metric, only applicable to pixel-wise fitting. Use this option for fitting data with low photon count numbers, particularly TCSPC data.

:guilabel:`Weighting Mode` combo-box to select the method of weighting the residuals entering the mean-square error function when using Variable Projection.
   Error function =
where ti are the bin (delay) times, σ(ti) is weighting coefficient, and Dmodel(ti) and y(ti) are the model and measured intensity values, respectively.

  * :guilabel:`Average Data` Weight according to the average measured decay across the global scope. This is the default, and advised option.
  * :guilabel:`Pixelwise Data` Weight according the measured decay in each pixel \\(\chi^2(ti)=y(ti)\\). Can display significant bias at low photon counts.
  * :guilabel:`Model` Weight according to the model decay :math:`\chi^2(ti)=D_{model}(ti)`. May lead to problems with convergence if initial estimates are significantly different from the true values.

:guilabel:`Pulse Train Correction` combo-box to specify whether incomplete decays should be included in the fit. Unless you have a very low repetition rate laser source or are fitting very fast decays, this option should only be disabled for testing and when fitting data simulated without incomplete decays.

:guilabel:`Auto Resampling` combo-box to dynamically combine bins to ensure that there are at least 10 counts in each bin. This option is superseded by Maximum Likelihood fitting.

:guilabel:`IRF` combo-box to set up the type of IRF. The following choices are available:

  * :guilabel:`Single Point` Use the same IRF for all pixels

  * :guilabel:`SV IRF` Use a spatially varying IRF that has been loaded from the IRF menu. Each pixel is fitted using the IRF from the corresponding pixel in the spatially varying IRF.

:guilabel:`IRF shift map` Use an IRF shift map that has been loaded from the IRF menu. The same IRF is used in each pixel, time shifted according to the shift map loaded.

:guilabel:`Live Fit` checkbox to dynamically refit the currently selected decay as fitted parameters are changed or as the selected region is changed. This option does not automatically fit the whole dataset.

:guilabel:`Calculate Errors` checkbox to estimate confidence intervals on the global parameters based on the F statistic. This option should currently be considered experimental and significantly increases the fitting time.


Instrument and preprocessing options
=======================================

Data tab
------------------
These settings are used to specify data acquisition parameters and set any required pre-processing.

:guilabel:`Smoothing` The kernel size used for spatially smoothing the data to reduce the noise. The equivalent binning setting in Becker and Hickl software is provided for reference.

  .. note::
     To ensure that the smoothing does not affect the choice of background or threshold values, data is averaged rather than summed over the kernel. The :math:`\chi^2` value correctly accounts for the level of smoothing applied.


:guilabel:`Integrated Min.` Pixels which have an integrated intensity of less than this value will be excluded from the fit. This may be used to exclude pixels which are too dim to give a good fit.

  .. note::
     The integrated intensity is calculated after accounting for the specified background and is not smoothed.

:guilabel:`Time Min.` and :guilabel:`Time Max.` The limits of the valid FLIM signal. Time bins or gates outside of these values will be excluded from the fit. Use this to remove, e.g. TCSPC data which falls outside of the linear range of the TAC.

:guilabel:`Counts/Photon` The average number of digital counts recorded per photon. This is used to correct the :math:`\chi^2` value to account for the gain provided by the intensifier and camera.

  .. tip::
     For TCSPC data this should be left at 1.

:guilabel:`Rep. Rate` The repetition rate of the laser used to acquire the data, in MHz.  This is used to correct for incomplete decays.

  .. warning::
     This value must be set correctly; if it is set incorrectly the fitting may fail or produce a very poor fit.

:guilabel:`Gate Max.` Saturation limit of the data. Pixels which have a time bin or gate above this limit will be excluded from the fit. This can be used to exclude saturated pixels which will bias the fit.

  .. tip::
     | For 16-bit TCSPC data (e.g. B&H, LaVision) use ``65,536``.
     | For 12-bit time gated data use ``4,096``.

Background tab
------------------
The settings in this tab are used to set the background subtraction. These options subtract a background from the data before fitting.

.. tip::
   A background due to detector dark noise or stray room light should be added to the model rather than being subtracted, otherwise the fit will be weighted incorrectly. See :ref:`backgrounds` for more information.

:guilabel:`Background` The type of background to subtract:

============  ============
None          No background value
Single Value  A constant value, e.g. camera offset
Image         A background image, subtracted uniformly from every time bin or gate. Use to correct for a non-uniform background due to, e.g. camera non-uniformities
TV Image      A time varying background (TVB) image. Use to account for time and spatially varying background fluorescence, e.g. due to plate fluorescence with non-uniform illumination
============  ============

:guilabel:`Background Value` The background value subtracted if ``Single Value`` is selected in ``Background``.

IRF tab
------------------
The settings in this tab relate to the Instrument Response Function (IRF) and how it is processed. See :ref:`irfs` for more information.

:guilabel:`IRF Type` The type of IRF loaded

========== ==========
Scatter    An IRF recorded with a scattering sample or raman signal.
Reference  A mono-exponential decay recorded with a reference dye.
========== ==========

:guilabel:`Reference Lifetime` The lifetime of the reference decay. This value will only be used if IRF type is set to Reference.

:guilabel:`Background` The level background present in the IRF. The background signal level is estimated automatically after loading, see Estimate IRF Background option in the IRF menu.

:guilabel:`BG is Afterpulsing`. Whether the background in the IRF is due to afterpulsing. If so, the background value is used to compensate for the afterpulsing, otherwise the background value is subtracted from the IRF.

:guilabel:`Time Min.` and Time Max.` The limits of the valid FLIM signal. Time bins or gates outside of these values will be removed from the IRF.

:guilabel:`IRF Shift` Shift in picoseconds to apply to the IRF.

:guilabel:`G Factor` The relative sensitivities of the parallel and perpendicular detector channels for polarisation resolved data.

