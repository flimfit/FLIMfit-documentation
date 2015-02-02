=======================================
Multiphoton TCSPC FLIM Checklist
=======================================

Before imaging
---------------------------------------
1. Read the `Becker and Hickl handbook <http://www.becker-hickl.com/handbook.htm>`_

2. Check **emission filters**
    * 700SP clean-up filter commonly used in addition to spectral filter
    * Check for laser bleedthrough

3. Check **triggering stability**
    * Correct sync rate?

4. Check **laser power and mode-locking stability**
    * Check for slow drift

5. Adjust **slow delay box**
    * Position start of decay at around 20% of imaging window  

6. Acquire **gold nano-rod IRF** 
    * See `this paper <https://dx.doi.org/10.1364/OE.19.013848>`_ for more details
    * Available from Sigma, product code **716820**
    * Use ~1mW excitation power for IRF
    * Acquire background image USIC 

7. Check **power levels**
    * Check for negligible change in intensity, lifetime over imaging period
    * Photobleaching rate scales non-linearly with power, consider imaging for longer with lower powers  

8. Reduce background **light** as far as possible
    * Room lights
    * Monitors

9. Acquire **reference dye** measurement to test system
    * Fit reference dye *before starting imaging*
    * Check for mono-exponential decay, correct lifetime

During imaging
---------------------------------------
1. Keep **peak *pixel* count rates** below at least 5% of repetition rate
    * Understand pulse pileup effects
    * Consider image fill factor when monitoring count rate

2. Monitor count rate for **photobleaching**

After imaging
---------------------------------------
1. Repeat **reference dye** measurement to check for system drift
2. Acquire images of **untransfected cells** USIC
3. Acquire background image of **empty dish with imaging media** USIC
4. Check **laser power level**


====================================
 Time Gated FLIM Checklist
====================================

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

Setting up imaging
------------------------------------
1. Choose **gating strategy**
    * Choose ~7 gates, more when sample lifetime is poorly characterised
    * One in rising edge, one at peak and rest distributed logarithmically
    * Fewer, correctly chosen gates maximises lifetime resolution per unit time
    * Example picture

2. Set **gate width**
    * Maximise gate width 
    * Ensuring last gate does not catch rising edge of next pulse 
3. Set **integration time**
    * Brightest sample should fill ~¾ of camera dynamic range
4. Set number of **accumulated frames**
    * Ensure sufficient photon flux in dimmest ROI
    * Make sure that background recorded in same way.

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
