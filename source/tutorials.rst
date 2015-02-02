================================
Loading Plate Data in *FLIMfit*
================================

Setup calibration data
--------------------------------
* Determine **IRF shift**
    * Load reference data
    * Set background, rep rate
    * Load library IRF
    * Adjust ‘IRF shift’ until the edge of the IRF sits roughly at the rising edge
    * Fit mono exponential model with free IRF shift
    * Check quality of fit
    * Note t0 value. This value should be subtracted from the IRF shift used

* Create **time varying background**
    * Load media only well
    * Load camera background
    * Select central region
    * Select Tools>Export SV TVB...

Loading data
--------------------------------
* Load data
* Load **plate metadata**
* Load **camera background** images
* Set laser **repetition rate**
* Set **gate maximum** to camera saturation value
* Load **IRF** and set **IRF shift** from reference measurement
* Load **time varying background**
* Save as **raw dataset**
