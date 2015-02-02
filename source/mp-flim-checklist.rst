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

