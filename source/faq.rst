==========================
Frequently asked questions
==========================

Fitting
----------------

**Q. How are the intensities calculated? What is the difference between `I0` and `I`?**

The intensity images shown are integrated intensities, i.e the total sum of all the photon counts in all the time gates without any smoothing applied. The `I` parameter shows the integrated intensity, while the `I0` parameter gives the model intensity at t=0.

Exporting Data
----------------

**Q. How do I export the real lifetime (or other parameter values?)**

Select the parameters you'd like to export from the list in the left hand bar and select `File>Export Images...`. Two files will be exported for each parameter and each image, one colour-mapped image and another called '* raw.tif' which is a floating point TIFF file which contains the true parameter values. You can open these files in ImageJ, Matlab or any other program.

New Users
---------

**Q. Are there any tutorials to get me started?**

Please see the online help guides at http://help.openmicroscopy.org/flimfit.html 

Estimating IRF shift
--------------------

**Q. When should I use the "Estimate IRF shift" on the IRF menu?**

Ideally you won't use it. This function is provided for those occasions when it's not possible to measure an irf at the correct wavelength. In this case there can be a shift in time between the measured irf and the one that you want to measure. This functionality is provided for those cases. If at all possible it is better to measure the irf rather than estimate it.

Estimating the G factor
-------------------

**Q. How should I estimate the G factor when fitting Fluorescence Anisotropy?**

Our suggested approach is to:
 
1.       Load a small molecule dye dataset (e.g. rhodamine – the key is that the rotational correlation time is small)
2.       Load the IRF
3.       In Decay, select the ‘G-factor’ mode
4.       In the IRF menu, click ‘Estimate G factor’
5.       Check that the dotted line in the decay window goes through the flat portion of the decay
