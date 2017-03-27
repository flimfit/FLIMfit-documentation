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
-----------------------

**Q. How should I estimate the G factor when fitting Fluorescence Anisotropy?**

Our suggested approach is to:
 
1.       Load a small molecule dye dataset (e.g. rhodamine – the key is that the rotational correlation time is small)
2.       Load the IRF
3.       In Decay, select the ‘G-factor’ mode
4.       In the IRF menu, click ‘Estimate G factor’
5.       Check that the dotted line in the decay window goes through the flat portion of the decay


Running from Source using Matlab desktop on OSX
-----------------------------------------------

**Q. Is it possible to run the Matlab source code, cloned from Github, from the Matlab desktop on OSX?**

Yes it is, but you will need a number of things including the C++ back-end. 
If you prefer not to compile this yourself, it can be downloaded from ci.flimfit.org.
Get the file FLIMGlobalAnalysis_64.dylib and copy it to /FLIMfit/FLIMfitLibrary/Libraries in your local copy of the source.
You will also need 3 further libraries - libstdc++.6.dylib, libgomp.1.dylib, libgcc_s.1.dylib.

These can be found in the workspace of the build on ci.flimfit.org in the DeployLibraries directory.
They need to be copied to your local machine. Currently FLIMfit is built using GCC v6 so the path is /usr/local/opt/gcc/lib/gcc/6.

FLIMfit also requires you to download several other components including the appropriate Bio-Formats and OMERO Matlab toolboxes.
The easiest way to do this is to follow the steps in the latter half (after the line # Download OMERO Matlab plug-in) of the file Configure.sh in the FLIMfit home directory.


