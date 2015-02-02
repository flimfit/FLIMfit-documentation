
====================================
 Time Gated FLIM Checklist
====================================

Setting up imaging
------------------------------------
1. Set HRI gain
    * **Maximise gain** on HRI to reduce excess noise
         * Use ND filters such that you get **2-3 digital counts per photon**. 
         * Characterise the HRI with a known flux (see Doug’s thesis)  
      
2. Choose **gating strategy**
    * Choose ~7 gates, more when sample lifetime is poorly characterised
    * One in rising edge, one at peak and rest distributed logarithmically
    * Fewer, correctly chosen gates maximises lifetime resolution per unit time
    * Example picture

3. Set **gate width**
    * Maximise gate width 
    * Ensuring last gate does not catch rising edge of next pulse 
    
4. Set **integration time**
    * Brightest sample should fill ~¾ of camera dynamic range

5. Set number of **accumulated frames**
    * Ensure sufficient photon flux in dimmest ROI
    * Make sure that background recorded in same way.

Before imaging
------------------------------------
1. Check **calibration files**
    * **Library IRF** for this HRI with chosen gate width and gain and relay magnification
    * **Delay box calibration** at the repetition rate of the laser
    * **Plate definition file** (XPLT)?

2. Check **HRI triggering**
    * Using oscilloscope, should be stable pulse to pulse
    * Check triggering, gate settings are consistent
  
3. Make sure condenser is optically blocked (they fluorescence in the blue)

4. Check **laser power stability**
    * Measure after fibre
    * Always use **single mode fibre**
    * Coupling efficiency should be 40-50%
        * Check beam profile and fibre end face
    * Check for slow drift, fluctuations on 0.1-1Hz scale in particular

5. Measure mono-exponential **reference dye** to obtain t0 and check system
    * Use 25ps gate spacing
    * Fit reference dye *before starting imaging. Should have flat residuals*
    * Check for mono-exponential decay, correct lifetime

During imaging
------------------------------------
1. Monitor **laser power** level
2. Pray to the FLIM gods 

After imaging
------------------------------------
1. Repeat **reference dye** measurement
2. Measure **camera background**
    * Record a series of ~100 images with laser shuttered
    * Use same integration time

3. Acquire images of **untransfected cells** USIC
4. Acquire background image of **empty dish with imaging media** USIC
5. Check **laser power level**
