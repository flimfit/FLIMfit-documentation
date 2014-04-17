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
