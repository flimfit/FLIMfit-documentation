==========================
Frequently asked questions
==========================

Loading Data
----------------

**Q. I'm trying to load TCSPC data from a Becker and Hickl card acquired in FIFO mode, why is my image scrambled?**

SPCM compresses FIFO data by default, and *FLIMfit* cannot load compressed SDT files. You can batch convert the data to an uncompressed SDT file as follows:

   • Load the data in SPCM 
   • Choose Main>Convert>SDT files
   • Select the files you want to convert
   • Choose file format ’SDT uncompressed’


Fitting
----------------

**Q. How are the intensities calculated? What is the difference between `I0` and `I`?**

The intensity images shown are integrated intensities, i.e the total sum of all the photon counts in all the time gates without any smoothing applied. The `I` parameter shows the integrated intensity, while the `I0` parameter gives the model intensity at t=0.

Exporting Data
----------------

**Q. How do I export the real lifetime (or other parameter values?)**

Select the parameters you'd like to export from the list in the left hand bar and select `File>Export Images...`. Two files will be exported for each parameter and each image, one colour-mapped image and another called '* raw.tif' which is a floating point TIFF file which contains the true parameter values. You can open these files in ImageJ, Matlab or any other program.
