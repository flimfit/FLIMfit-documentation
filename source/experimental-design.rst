Experimental design
----------------------------------

1. **Imaging media**

    * Choose to minimise background fluorescence
        1. Avoid FBS and Phenol Red if possible
        2. Avoid Methylene Blue for IR imaging
        3. Some slide/well coatings are fluorescent
    * Will depend on metabolites required for cells, e.g.
        4. EBSS + 4mM Gln, 1mM NaPyruvate, 2mM CaCl2, 1 mM MgSO4 (Anca and Sean)
        5. HBSS (Chris) with additional HEPES if needed
        6. Invitrogen Fluorobrite (George)
        
2. **CO2 control required?**
    * Required for some imaging media
    * Often possible to avoid CO2 if using appropriate buffered media (e.g. HEPES)
    
3. **Temperature control**
    * Experiment at RT or 37°C?
    * Turn on incubator previous evening, heating stage several hours before 
    * Use objective heater collar if using immersion fluid
    * Equilibrate dishes after media changes in incubator 
    * Must allow temperature to equilibrate after positioning dish on microscope (10-15mins)
    * Monitor room temperature (USB temperature monitor available)

4. **Humidity**
    * Consider evaporation during long term imaging
    * Humidify image chamber if possible
    * Seal plates if possible (but may lead to pH change if CO2 required)
    * Use layer of mineral oil on well

5. **Stimulation**
    * Ideally use flow chamber
    * Control temperature of stimulation media
    * Consider diffusion effects if adding small volumes
    * Check for mechanical disturbance after adding stimulant
    * **Always** make control measurements with vehicle only, e.g. DMSO to check for flat baseline 
    * Check for fluorescence from stimulants

6. **Imaging Substrate**
    * Make sure you know the properties/thickness of coverslip/well bottom
    * Generally use No 1.5 coverslips
    * Clean coverslips with ethanol before use

Multi-well plate experiment design
----------------------------------
Consider including the following control/calibration wells in your plate

1. **Suitable controls** (will depend on sample), consider
    * Donor alone
    * Positive control (e.g. constitutively active protein)
    * Negative control (non-binding partner)
    * Donor with free acceptor
2. **Empty well** with same imaging media
    * Treat the same as the other wells during plate setup during media change
3. **Untransfected cells**
4. **Reference dye** 

Other issues to consider include

* Plastic well plates are fluorescent in blue/green
    * Glass bottom plates preferable optically, but not compatible with some cells lines
* Edge effects
* Pipetting strategy


Choosing a reference dye
----------------------------------
* Reference dye should be a **bright, mono-exponential fluorophore**
* **Suggestions** for common imaging channels
    * **CFP channel**: Green chromaslide
    * **YFP channel**: Green chromaslide
    * **GFP channel:** Green chromaslide
    * **RFP channel:** Rhodamine 6G
* **Chromaslides** are good when monoexponential as no anisotropy artefacts
* Reference dyes should be **dissolved directly in water**
    * Mixed solvents can lead to multi-exponential decay
* Use **low concentration**, 10uM generally good
    * Avoid inner filter, re-absorbtion
