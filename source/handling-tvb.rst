=================================
Handling time varying backgrounds
=================================

If you have a time varying background (e.g. from media fluorescence) 
which varies spatially (e.g. due to non-uniform illumination), you can take this into account in FLIMfit using the following procedure:

Create a time vary background intensity map. This assumes the profile of your TVB is invariant (i.e. the same decay across the image) but there is an intensity variation. To do this

1.	Open your TVB as an image
2.	Set an appropriate uniform camera background value (e.g. ~200 for a Hamamatsu camera)
3.	Select a region in the centre of the image to average for the decay
4.	Go to Tools>Create TVB Intensity Map... and save the file somewhere

Then you need to load and activate the TVB map when analysing data

1.	Open your data
2.	Load the TVB from Background>Load Time Varying Background
3.	In the Background tab, set background to ‘TV Image’
