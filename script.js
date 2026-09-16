// EXAMPLE: EDITING THE FIRST QUESTION:
// question: question text
// options: [option 1, option 2, option 3, option 4]
// answer: index of the correct answer (0, 1, 2, or 3)
// Example:
// {
//   question: 'What is the capital of Brazil?',
//   options: ['Rio de Janeiro', 'Brasilia', 'São Paulo', 'Salvador'],
//   answer: 1,
// }

const questions = [
  {
    question: 'Minimum heaight of a conductor above a flat roof?',
    options: ['1,5m', '2m', '2,5m', '3m'],
    answer: 2,
  },
  {
    question: "What of the following drawings would an electrician consult to learn about all the major components of a building's electrical system?",
    options: ['plan view', 'elevation', 'shop drawing', 'single-line diagram'],
    answer: 3,
  },
  {
    question: 'How frequently should you remove waste material and debris from work sites?',
    options: ['immediately', 'Before the job is complete', 'Once a day', 'Before each work break'],
    answer: 2,
  },
  {
    question: 'Which of the following electrical activities are done at the same time while painting and trimming work is being done on a construction site?',
    options: ['trenching', 'branch circuits & pulling wires', 'embedded work', 'lighting fixtures'],
    answer: 3,
  },
  {
    question: 'What should be used to test insulation integrity of a high-voltage cable?',
    options: ['wheat stone bridge', 'High potencial tester', 'wattmeter', 'clamp-on ammeter'],
    answer: 1,
  },
  {
    question: 'Which code or standard should you consult in order to determine if a particular building requires a fire alarm system',
    options: ['National Fire Code', 'Canadian Electrical Code', 'National Building Code (NBC)', 'Underwriters Laboratories of Canada Standard for the Installation of Fire Alarm Systems to Certification'],
    answer: 2,
  },
  {
    question: 'Low voltage refers to:',
    options: ['0-30 V', '0-120 V', '31-750 V', 'Over 750 V'],
    answer: 2,
  },
  {
    question: 'What is the minimum clearance of the exposed service conductors from the window, doors and porches',
    options: ['750mm', '1,5m', '1m', '2,5m'],
    answer: 2,
  },
  {
    question: 'How many additional spaces will an electrician keep for future overcurrent devices on a panelboard of a single dwelling unit?',
    options: ['1', '2', '3', '4'],
    answer: 3,
  },
  {
    question: 'It is always advisable to________ before opening the switch on the primary of a large transformer that is not on a dedicated circuit.',
    options: ['open the primary fuses', 'open the secondary loads', 'disconnect and ground the feeders', 'open the switch as quickly as possible to reduce any arcing'],
    answer: 1,
  },
  {
    question: 'When crossing over a highway, supply conductors to a consumers service must maintain a minimum height above grade of',
    options: ['3m', '3,5m', '5m', '5,5m'],
    answer: 3,
  },
  {
    question: 'Flexible cord should not be used for the suspension of any device weighing more than___________unless approved for special purpose.',
    options: ['1kg', '2,3kg', '9,2kg', '11kg'],
    answer: 1,
  },
  {
    question: 'What device is used by an uninterruptible power supply (UPS) to transfer power from one source to another?',
    options: ['Coil', 'Transfer Switch', 'transformer', 'Capacitor'],
    answer: 1,
  },
  {
    question: 'What is the maximum current rating of single conductor cables entering into ferrous metal boxes through an individual opening?',
    options: ['200', '250', '400', '600'],
    answer: 0,
  },
  {
    question: 'At existing outlets where a bonding means does not exist in the outlet box, grounding-type receptacles shall be permitted to be installed, provided that each receptacle is protected by ______________?',
    options: ['bonding the outlet box', 'a arc-fault circuit interrupter (AFCI)', 'a class-A ground-fault circuit interrupter (GFCI)', 'a GFCI '],
    answer: 2,
  },
  {
    question: 'What function does the tap changers serve in case of distribution transformers?',
    options: ['open the primary circuit to the transformer', 'close the secondary circuit to the transformer', 'change the primary ratio of the transformer to the secondary ratio of the transformer', 'obtain slightly different voltage ratios'],
    answer: 3,
  },
  {
    question: 'When a junction box is used for straight pull raceways containing three, 1/0, R90 XLPE, Cu conductors, length of this junction box must be ________ times the diameter of the largest raceway?',
    options: ['4 times', '6 times', '8 times', '10 times'],
    answer: 2,
  },
  {
    question: 'Which of the following lighting sources cannot operate without an igniter?',
    options: ['high-pressure sodium', 'mercury vapour', 'instant-start fluorescent', 'incandescent'],
    answer: 0,
  },
  {
    question: 'Which of the following light sources can function without ballast?',
    options: ['metal halide', 'fluorescent', 'neon', 'high pressure sodium (HPS)'],
    answer: 2,
  },
  {
    question: 'In gasoline dispensing stations, the space within a dispenser enclosure upto______m vertically above its base is considered as Class 1, Zone 1 location.',
    options: ['1m', '1,2m', '1,5m', '1,8m'],
    answer: 1,
  },
  {
    question: 'What is the minimum distance that the heating panel set shall be installed to any outlet to which a lumanaire is connected?',
    options: ['600mm', '200mm', '300mm', '400mm'],
    answer: 2,
  },
  {
    question: 'What should be the minimum distance between a box installed on a wooden wall and finished surface?',
    options: ['0mm', '2mm', '4mm', '6mm'],
    answer: 0,
  },
  {
    question: 'When installing a lightning arrestor you should:',
    options: ['place the device outdoors', 'keep the conductor as short as possible', 'only use if the building does not have lightning rods', 'only use if the building does have lightning rods'],
    answer: 1,
  },
  {
    question: 'If an electrical circuit has the voltage halved and the resistance is doubled, what will happen to the current in the circuit?',
    options: ['the current will decrease by half', 'the current will increase by 2 times', 'the current will decrease by 4 times', 'the current will stay the same'],
    answer: 2,
  },
  {
    question: 'At what height should an operating handle of an overcurrent device be positioned above the finished floor level?',
    options: ['1m', '1,5m', '1,7m', '2m'],
    answer: 2,
  },
  {
    question: 'In patient care areas, all the receptacles that are supplied from circuits in an essential electrical system shall be colored_____________?',
    options: ['Blue', 'Orange', 'Green', 'Red'],
    answer: 3,
  },
  {
    question: 'A heating cable set is to be buried under a concrete driveway of a house to melt the snow that may accumulate during winter season. What is the minimum burial depth required in this situation?',
    options: ['50mm', '100mm', '150mm', '300mm'],
    answer: 0,
  },
  {
    question: 'Which method is most frequently used to change the direction of a DC motor?',
    options: ['switch the armature connection', 'switch the series field connection', 'switch the commutator field connection', 'switch the shunt field connection'],
    answer: 0,
  },
  {
    question: 'Which of the following is a practical step to take if a motor trips on thermal overload?',
    options: ['change the fuses', 'install new overloads', 'reset the overload immediately', 'allow a cooling period, then reset'],
    answer: 3,
  },
  {
    question: 'A start-stop station is run in an EMT to remotely control a motor. The starter has a coil and a seal-in contact. How many conductors are needed to wire up a start-stop station?',
    options: ['2', '3', '4', '6'],
    answer: 1,
  },
  {
    question: '2-wire control provides:',
    options: ['automatic protection', 'low-voltage release', 'low-voltage protection', 'manual protection'],
    answer: 3,
  },
  {
    question: 'How far the disconnecting means for an air conditioning and refrigeration equipment must be located?',
    options: ['3m', '5m', '7m', '9m'],
    answer: 0,
  },
  {
    question: 'What would be the effect on the speed of the motor if we add an external resistance into the shunt field of a compound DC motor?',
    options: ['the motor speed will reduce', 'the motor speed will increase', 'the motor speed will remain unchanged', 'this should never be attempted'],
    answer: 1,
  },
  {
    question: 'How can you reverse the direction of a three-phase AC motor?',
    options: ['interchange the start and run winding', 'direction cannot be changed', 'interchange any 2 supply leads', 'turn the motor around'],
    answer: 2,
  },
  {
    question: 'Which of the following term applies to a control circuit that operates on the failure of voltage to cause and maintain the interruption of power to the main circuit?',
    options: ['low-voltage protection', 'low-voltage release', 'automatic protection', 'manual protection'],
    answer: 0,
  },
  {
    question: 'Which of the following factors contribute to the synchronous speed of a three-phase squirrel cage motor?',
    options: ['system frequency and the number of poles', 'line voltage and line current', 'line current and the HP rating of the motor', 'none of the above'],
    answer: 0,
  },
  {
    question: 'What is the function of an auto transformer when used as part of a motor control circuit?',
    options: ['increase the voltage on start-up', 'decrease the voltage on start-up', 'change the connection from delta to wye', 'help slow the motor'],
    answer: 1,
  },
  {
    question: 'What would be the location of end of line resistors in a supervised class-B fire alarm system?',
    options: ['in the device box that connects the last device on the circuit', 'in the control panel', 'in the annunciator panel', 'in a separate box after the last device on the circuit and labeled EOL'],
    answer: 3,
  },
  {
    question: 'What is the indication of ringing of the trouble buzzer on a supervised fire alarm system?',
    options: ['a pull station has been activated falsely', 'the end-of-line resistor is of the wrong value', 'a wire has come loose from its connection', 'an automatic alarm-initiating device has been activated'],
    answer: 2,
  },
  {
    question: 'Which of the following will you be connected when wiring a signal circuit for a supervised fire alarm system?',
    options: ['horns, pull stations, heat detectors, end-of-line resistor', 'horns, flow switches, smoke detectors, end-of-line resistor', 'horns, bells, strobe lights, end-of-line resistor', 'horns, rate-of-rise detectors, end-of-line resistor'],
    answer: 2,
  },
  {
    question: 'How frequently should the emergency systems be tested that are used to provide lighting and other emergency services in the case of failure of normal power?',
    options: ['yearly', 'monthly', 'weekly', 'daily'],
    answer: 1,
  },
  {
    question: 'How the connection in the panel for the window contacts must be made when installing magnetic contacts on multiple windows in a single zone of a security system,',
    options: ['in combination', 'in code', 'in parallel', 'in series'],
    answer: 3,
  },
  {
    question: 'Which of the following should be included as a provision for the expansion of the field-assembled connection between an aluminum lug and a copper bus bar using a 10mm bolt?',
    options: ['2 flat washers', 'a conical spring washer', '2 flat washers & 2 nuts', 'a joint compound'],
    answer: 1,
  },
  {
    question: 'A resistor has a color-coding of yellow, red, orange, and gold. What is the value of the resistor?',
    options: ['4200Ω, 5% tolerance', '42000Ω, 5% tolerance', '42000Ω, 10% tolerance', '4200Ω, 10% tolerance'],
    answer: 1,
  },
  {
    question: 'Which of the following could be the possible cause behind the blackened face of a fuse in a residential fuse panel?',
    options: ['the fuse interrupted a short circuit', 'the fuse interrupted an overload circuit', 'the fuse is opened at the fuse holder', 'the fuse did not have the correct rating'],
    answer: 0,
  },
  {
    question: 'Which of the following serves best to prevent galvanic corrosion between aluminum and copper conductors?',
    options: ['aluminum joint compound', 'cover the connection with grease', 'keep the connection dry', 'use split bolt connectors'],
    answer: 0,
  },
  {
    question: 'If due to a fault, 1 phase of a 240V, 3-phase, 3-wire system was grounded, the voltage of either of the remaining 2 phases to ground should be:',
    options: ['240V', '120V', '480V', '170V'],
    answer: 0,
  },
  {
    question: 'When the speed of an AC motor needs to be controlled and the existing method is a wound rotor motor, you would upgrade the control by installing a squirrel cage motor and a:',
    options: ['UPS', 'VFD', 'Field Relay', 'Drum Switch'],
    answer: 1,
  },
  {
    question: 'What language is usually used to program PLCs?',
    options: ['relay ladder logic', 'programmable array logic', 'graphical programming logic', 'modular programming'],
    answer: 0,
  },
  {
    question: 'Which of the following practices you should follow when conducting a thermo photography inspection of a buildings electrical system?',
    options: ['open all panel doors prior to test to allow them to cool', 'open all loads before test', 'make sure all loads remain connected during test', 'turn off all lighting loads to prevent false readings'],
    answer: 2,
  },
  {
    question: 'What should be the state of the charge of a lead-acid battery when not in use?',
    options: ['fully charged', 'charged once a year', 'about ½ charged', 'let the battery fully discharge, then recharge'],
    answer: 0,
  },
  {
    question: 'What is the function of a silicon-controlled rectifier (SCR) in electronic circuits?',
    options: ['turn on the circuit at a predetermined time in the AC sine wave', 'rectify the AC voltage to DC voltage', 'regulate the current in the circuit', 'SCRs are not used in electronics'],
    answer: 0,
  },
  {
    question: 'What procedure has to be followed with the material safety data sheet (MSDS) when new materials are received on a job site?',
    options: ['read & discard', 'tape it to the container(s)', 'place it in the on-site MSDS file folder', 'give it to the supervisor'],
    answer: 2,
  },
  {
    question: 'What is the proper course of action; if a worker refuses to work because of unsafe conditions?',
    options: ['worker goes home and waits to be notified of a resolution', 'ministry of labor representative is brought in to evaluate the working conditions', 'employer or supervisor investigates together with on-site health and safety representative', 'workers concerns are addressed and work resumes'],
    answer: 2,
  },
  {
    question: 'Which drawing would you follow to find the depth of an open web steel joist?',
    options: ['shop drawing', 'structural drawing', 'electrical drawing', 'mechanical drawing'],
    answer: 1,
  },
  {
    question: 'What is the time frame of filing the contract of apprenticeship for a person who is to perform work in a certified trade?',
    options: ['within 2 yrs', 'within 1 yr', 'within 3 months', 'immediately'],
    answer: 3,
  },
  {
    question: 'A 24 feet extension ladder is extended 6 feet up the side of a wall. How far should the base of the ladder be from the wall?',
    options: ['1 feet', '1.5 feet', '2 feet', '2.5 feet'],
    answer: 1,
  },
  {
    question: 'What should be the category rating of the meter, which is used to perform a test on a live circuit downstream from the service entrance equipment?',
    options: ['4', '3', '2', '1'],
    answer: 1,
  },
  {
    question: 'How do you calculate the appropriate method of payment when it difficult to determine exact completion time for a complex electrical work?',
    options: ['Lump sum', 'Unit price', 'Time and materials', 'Paid when completed'],
    answer: 2,
  },
  {
    question: 'What should be the position of the teeth on the blade when replacing the blade on a hacksaw?',
    options: ['pointing toward the handle', 'pointing away from the handle', 'straight', 'the blade only fits one way'],
    answer: 1,
  },
  {
    question: 'Which of the following crane hand signals is used to instruct the operator to stop?',
    options: ['forefinger pointing up, hand moving in small circles', 'arm extended palm down move hand right and left', 'arm extended forward hand open at right angle pointing upward', 'arm extended downward hand making a fist'],
    answer: 2,
  },
  {
    question: 'What sling angle will reduce the amount of stress on the sling, when lifting an object with a sling and a crane?',
    options: ['45°', '60°', '75°', '90°'],
    answer: 3,
  },
  {
    question: 'When is it necessary to get an inspection permit from the inspection department when an electrical contractor is to carry out electrical work?',
    options: ['at some point during the work', 'before the walls are covered', 'before the work starts', 'within the same calendar year'],
    answer: 2,
  },
  {
    question: 'What is the highest rung on the ladder that a person can stand on?',
    options: ['first from top', 'second from top', 'third from top', 'fourth from top'],
    answer: 2,
  },
  {
    question: 'What class of fire involves energized electrical equipments?',
    options: ['Class A', 'Class B', 'Class C', 'Class D'],
    answer: 2,
  },
  {
    question: 'Which of the following is true in case of connecting a lightning arrester to the line conductor?',
    options: ['the connection shall be made with an insulated conductor', 'the connection shall be as short as straight as possible', 'the connection shall be outdoor on the incoming pole', ''],
    answer: 1,
  },
  {
    question: 'Which of the following is the main components of all uninterruptible power supply (UPS) units?',
    options: ['auto transformer', 'differential relay', 'battery', 'capacitor'],
    answer: 2,
  },
  {
    question: 'Plug fuses shall be rated at not more than _________A.',
    options: ['10A', '20A', '30A', '40A'],
    answer: 2,
  },
  {
    question: 'Ground-fault protection shall be provided to de-energize all normally ungrounded conductors under which set of conditions?',
    options: ['in solidly grounded systems rated 150Vor less to ground &amp; 1000A or more.', 'in ungrounded systems rated more than 150V to ground, &amp; less than 750V phase to phase &amp;2000A or more.', 'in ungrounded systems rated less than 150V to ground &amp; 2000A or more.', 'in solidly grounded systems rated more than 150V to ground, &amp; less than 750V phase to phase &amp; 1000A or more.'],
    answer: 3,
  },
  {
    question: 'One of the main reasons to provide electrical systems with surge protection is:',
    options: ['utility fluctuation', 'poor power factor', 'harmonic distortion', 'DC generators'],
    answer: 0,
  },
  {
    question: 'Bonding continuity of metal raceway, metal-sheathed cable, or armoured cable shall be assured by one of the methods specified in Rule 10-606(1), or by using:',
    options: ['standard box connectors made up tight', 'two locknuts, one inside and one outside of boxes and cabinets', 'one locknut and a metal conduit bushing, provided that the bushing can be installed so that it is mechanically secure and makes positive contact with the inside surface of the box or cabinet', 'all of the above'],
    answer: 3,
  },
  {
    question: 'The grounded conductor of a solidly grounded separately derived ac system shall be connected to the equipment bonding terminal by a system bonding jumper:',
    options: ['at the source', 'at the first switch controlling the system', 'The grounded conductor of a solidly grounded separately derived ac system shall be connected to the equipment bonding terminal by a system bonding jumper', 'all of the above'],
    answer: 3,
  },
  {
    question: 'What is the maximum spacing between fence posts used for the guarding of outdoor electrical equipment?',
    options: ['1m', '1.5m', '3m', '6m'],
    answer: 2,
  },
  {
    question: 'Which one of the following statements is true in regards to service head location of a consumers service?',
    options: ['must be in compliance with the supply authority', 'must be accessible to authorized personnel', 'must be easily accessible to person living in that location', 'must not be reached from the building rooftop'],
    answer: 0,
  },
  {
    question: 'What is the minimum number of ground rods required for grounding an outdoor high-voltage pad-mount transformer?',
    options: ['6', '4', '3', '2'],
    answer:1,
  },
  {
    question: 'The minimum head room clearance required by code when working around a motor control centre where bare live parts are exposed is:',
    options: ['2.2m', '2m', '1.5m', '1'],
    answer: 0,
  },
  {
    question: 'What are the maximum number of services allowed in 1 building ?',
    options: ['6', '4', '2', '1'],
    answer: 1,
  },
  {
    question: 'Storage batteries used for emergency power shall maintain what percentage of their voltage rating for the amount of time required by the National Building Code of Canada?',
    options: ['85%', '91%', '95%', '100%'],
    answer:1,
  },
  {
    question: 'During installation of heating fixtures, where weight does not exceed ________kgs, heating fixture is permitted to be supported by ceiling outlet box.',
    options: ['2.3kg', '11kg', '13kg', '23kg'],
    answer:3,
  },
  {
    question: 'Which of the following can be used as an emergency light source?',
    options: ['incandescent', 'metal halide', 'high pressure sodium (HPS)', 'mercury vapor'],
    answer: 0,
  },
  {
    question: 'Which of the following lighting sources is the most inefficient?',
    options: ['low-pressure sodium', 'mercury vapor', 'instant-start fluorescent', 'incandescent'],
    answer: 3,
  },
  {
    question: 'What is the function of the heat pumps used in residential applications?',
    options: ['heating or cooling', 'heating only', 'cooling only', 'heat pumps are not used in residential applications'],
    answer: 0,
  },
  {
    question: 'When non-metallic sheathed is run through studs or joists, the outer surface of cable shall be kept at a distance of at least _______________mm from edges.',
    options: ['6mm', '32mm', '150mm', '300mm'],
    answer: 1,
  },
  {
    question: 'What is the maximum allowable conductor temperature in ˚C for a CMP cable used in communication circuits?',
    options: ['60°C', '90°C', '105°C', '200°C'],
    answer: 0,
  },
  {
    question: 'When installing a light post to a concrete base with 4 bolts, and the post is not sitting level on the base, you should:',
    options: ['send the post back to the manufacturer', 'drill and tap new bolts into the base', 'level the lower side with a steel shim', 'remove the post and level the concrete'],
    answer: 2,
  },
  {
    question: 'What is the maximum distance from the floor to the midpoint of a receptacle used to supply a free standing gas range in a dwelling unit?',
    options: ['100mm', '600mm', '300mm', '130mm'],
    answer: 3,
  },
  {
    question: 'What is the area classification of the nozzle boot of a gasoline dispenser?',
    options: ['class 1, zone 0', 'class 1, zone 1', 'class 1, zone 2', 'class 1, zone 3'],
    answer: 0,
  },
  {
    question: 'What is the maximum height for the point of attachment of service supply conductors above grade?',
    options: ['4m', '5m', '5.5m', '9m'],
    answer: 3,
  },
  {
    question: 'A 347/600V, 3-phase motor is to be protected by an overload relay. How many overload devices are required?',
    options: ['1', '2', '3', 'Overload protection is not required in this situation'],
    answer: 0,
  },
  {
    question: 'If a DC motor is supplied from a full-wave bridge rectifier and one of the diodes becomes defective, the most likely result to the motor will be:',
    options: ['the motor will slow', 'the motor will stop', 'the motor will reverse direction', 'the motor will work normally until a second diode fails'],
    answer: 0,
  },
  {
    question: 'What will be the likely result if the centrifugal switch on a single-phase motor is left in the open position before start-up due to a broken spring?',
    options: ['the motor may not start', 'the run winding will burn out', 'the start winding will burn out', 'the motor will run at 50% of rated speed'],
    answer: 0,
  },
  {
    question: 'Which of the following type of DC motor should never be connected to a belt drive system?',
    options: ['shunt', 'series', 'univeral', 'compound'],
    answer: 1,
  },
  {
    question: 'What is the purpose of a capacitor when connected in the start circuit in single-phase motors?',
    options: ['limit the starting current of the motor', 'improve the power factor of the circuit', 'limit the running current of the motor', 'improve the starting torque of the motor'],
    answer: 3,
  },
  {
    question: 'The best way to have a smooth control over the speed of an AC motor is by using:',
    options: ['rheostat', 'timing relay', 'variable frequency drive', 'resistor bank'],
    answer: 2,
  },
  {
    question: 'What should be the motor supply conductor insulation temperature rating when a motor is exposed to an ambient temperature of 50˚C?',
    options: ['corrected by T.5A of the CEC', 'increased by 20˚C', 'derated using T.5C', 'nothing need be done if the motor is rated for 50˚C'],
    answer: 1,
  },
  {
    question: 'Which over-current device should be used if a motor states that the maximum over-current device is 50A, and Canadian Electrical Code rule states that it could be 60A?',
    options: ['40A', '50A', '60A', '70A'],
    answer: 1,
  },
  {
    question: 'What type of control is exampled by a motor which is controlled by a float switch?',
    options: ['2-wire control', '3-wire control', 'low-voltage protection', 'manual control'],
    answer: 0,
  },
  {
    question: 'How much time is given by a two-stage fire alarm system to an authorized personnel to investigate the possibility of a fire before proceeding to evacuation mode when an initiating device has been activated?',
    options: ['0.5 hours', '15 minnutes', '8 minutes', '5 minutes'],
    answer: 3,
  },
  {
    question: 'Which of the following is an example of computer software?',
    options: ['an optical mouse', 'a server', 'a program', 'a printer'],
    answer: 2,
  },
  {
    question: 'What is the location of an emergency pull cord for a nurse call system?',
    options: ['washrooms', 'toilets', 'showers', 'all of the above'],
    answer: 0,
  },
  {
    question: 'Who controls Fire Alarm System?',
    options: ['National Building Code of Canada', 'Under writers Laboratories', 'Canadian Standards Association', 'National Fire Code'],
    answer: 0,
  },
  {
    question: 'During a service call, a residential customer says that when an appliance is plugged into a kitchen receptacle some lights in the house will dim while others will seem brighter. The most likely cause of the problem is:',
    options: ['a bad neutral connection', 'out-of-date knob and tube wiring', 'a ground fault on the kitchen circuit', 'an over-current device in the neutral conductor'],
    answer: 0,
  },
  {
    question: 'What is the reason behind installing all 4 conductors of a 3-phase, 4-wire system in same raceway?',
    options: ['easier to install', 'easier to troubleshoot', 'reduces cost', 'reduces induction'],
    answer: 3,
  },
  {
    question: 'Which of the following is true when using a clamp-on ammeter to check the current of a 3-phase, 4-wire AC circuit?',
    options: ['the meter must be clamped on each current carrying conductor alternately', 'the meter must be clamped on the 3 current carrying conductors simultaneously', 'the meter must be clamped on all 4 conductors simultaneously', 'the meter must be clamped on the neutral conductor only'],
    answer: 0,
  },
  {
    question: 'The rating of an incandescent lamp is 120V and 3000 hours. When the lamp is used on a 110V supply the lamp will:',
    options: ['not turn on', 'seem brighter', 'have a reduced lamp life', 'have an extended lamp life'],
    answer: 3,
  },
  {
    question: 'What should be the main concern when retrofitting an existing panel with a new bus and new molded-case circuit breakers?',
    options: ['the panel has room for future load growth', 'the panel has at least 25% spare breakers', 'the breakers have adequate fault current levels', 'the existing lines are long enough to reach the new bus bare connections'],
    answer: 2,
  },
  {
    question: 'When dealing with a PLC, the input/output (I/O) module is the part that:',
    options: ['interfaces between the CPU and field-wired devices', 'supplies AC power to the DC power supply', 'rights the PLC programs', 'provides surge protection from inductive loads'],
    answer: 0,
  },
  {
    question: 'If due to a fault, 1 phase of a 480V, 3-phase, 3-wire system was grounded, what is the voltage reading on other 2 phases?',
    options: ['600V', '347V', '480V', '208V'],
    answer: 2,
  },
  {
    question: 'Electrical equipment installed in hazardous locations shall have markings that are suitable for the Zone in which the equipment is installed.',
    options: ['True', 'False', '', ''],
    answer: 0,
  },
  {
    question: 'What must be the marking on an approved emergency lighting installed in a dwelling unit?',
    options: ['IEEE', 'UL', 'CSA', 'NEMA'],
    answer: 2,
  },
  {
    question: 'What must be the current rating of a thermostat rated to operate at the line voltage?',
    options: ['100% of the sum of current ratings of all the equipments it controls.', '125% of the sum of current ratings of all the equipments it controls.', '200% of the sum of current ratings of all the equipments it controls.', '300% of the sum of current ratings of all the equipments it controls.'],
    answer: 0,
  },
  {
    question: 'In a commercial garage, entire area up to and including ______mm above floor is considered as class1 zone 2 location.',
    options: ['25mm', '50mm', '100mm', '150mm'],
    answer: 1,
  },
  {
    question: 'What is the maximum amperage of a teck 90 cable installed in a box?',
    options: ['100A', '125A', '150A', '200A'],
    answer: 3,
  },
  {
    question: 'What PPE (personal protection equipment) is not required when using a hand saw?',
    options: ['Safety glasses.', 'Gloves.', 'Steel toed boots.', 'Coveralls.'],
    answer: 3,
  },
  {
    question: 'At what location, caution tape and pylons can be used?',
    options: ['Elevators', 'Stairwells.', 'Windows.', 'Open trenches'],
    answer: 3,
  },
  {
    question: 'Which motor has best starting torque?',
    options: ['Squirrel cage induction motor.', 'Series connected motor.', 'Wound rotor motor.', 'Split phase capacitor start motor.'],
    answer: 1,
  },
  {
    question: 'Who should an electrician contact in an event of conflict between electrical and plumbing drawings?',
    options: ['Your supervisor', 'The Electrical Inspector.', 'The architect', 'The General contractor.'],
    answer: 0,
  },
  {
    question: 'Nurse call station is characterized as:',
    options: ['Class 1 circuit', 'Class 2 circuit', 'Open circuit', 'Closed circuit'],
    answer: 0,
  },
  {
    question: 'An electrician cannot install a telephone jack in which of the following locations?',
    options: ['A In a bathroom', 'In the kitchen.', 'In the living room', 'In the bedroom'],
    answer: 0,
  },
  {
    question: 'What is the minimum headroom clearance required at a location where consumer service box needs to be installed?',
    options: ['1m', '1.5m', '2m', '2.5m'],
    answer: 2,
  },
  {
    question: 'What is the minimum space required between dry type open ventilated transformer and the concrete wall its mounted too:',
    options: ['6mm', '12mm', '24mm', '32mm'],
    answer: 0,
  },
  {
    question: 'Where would the MSDS sheet be placed if a new container shows up on site?',
    options: ['Attach the sheet to new container.', 'Place sheet in MSDS book.', 'Supervisors desk.', 'Managers office'],
    answer: 1,
  },
  {
    question: 'What type of test is performed to test the insulation of conductors?',
    options: ['A Hi pot.', 'Voltmeter.', 'Ammeter', 'Wattmeter'],
    answer: 0,
  },
  {
    question: 'Where the records would be kept on a GFCI inspection in a building?',
    options: ['Attach record to GFCI.', 'Electrical maintenance log.', 'Security desk log book.', 'Maintenance log book.'],
    answer: 1,
  },
  {
    question: 'How are exit lights switched?',
    options: ['A manual switch.', 'An emergency pull station.', 'Automatically on failure of emergency power supply.', 'Automatic transfer switch that energizes on failure of normal power source.'],
    answer: 3,
  },
  {
    question: 'Where must a switch be mounted in a finished basement that has no other exit?',
    options: ['Top of the stairs.', 'Bottom of stairs.', 'Entrance to basement.', 'In utility room next to electrical panel.'],
    answer: 0,
  },
  {
    question: 'If a 3-phase motor is rotating in the wrong direction how would an electrician fix it?',
    options: ['interchange black and green conductors', 'interchange red and black conductors', 'interchange red and white conductors', 'interchange blue and white conductors'],
    answer: 1,
  },
  {
    question: 'When would you install the receptacle cover plates in a dwelling unit?',
    options: ['After installation of baseboard', 'After final coat of paint', 'Before installation of baseboard', 'After inspection'],
    answer: 1,
  },
  {
    question: 'What must be done with a battery in an emergency supply system?',
    options: ['Keep maintained and fully charged.', 'Be maintained at not less than 75% of full charge.', 'Be maintained at 50% of full charge.', 'No need to keep fully charged all the time.'],
    answer: 0,
  },
  {
    question: 'What must be done when EMT is run through a fire wall?',
    options: ['Must be grounded on both sides.', 'Must slope upwards into room with most hazards.', 'Must be smoke proof.', 'Must be sealed.'],
    answer: 3,
  },
  {
    question: 'What must be done when communication cables are run through a wall that is rated for fire protection?',
    options: ['Shall be installed in rigid steel or aluminum conduit.', 'Shall be properly closed or sealed in accordance with National Building Code.', 'Shall not be run through firewalls.', 'Must be sloped upwards into the room requiring fire protection.'],
    answer: 1,
  },
  {
    question: 'What cant you use when mounting a control panel on concrete?',
    options: ['Concrete nails.', 'Concrete screws', 'Wooden plug and screws', 'Steel bolts'],
    answer: 2,
  },
  {
    question: 'In summer, what does a condenser do in air condition mode?',
    options: ['Controls the expansion of the refrigerant.', 'Exposes the cool refrigerant to the air in the heat exchanger.', 'Compresses the refrigerant.', 'Cools the hot compressed refrigerant vapor.'],
    answer: 3,
  },
  {
    question: 'New magnetic overload keeps tripping how do you fix the problem?',
    options: ['Replace with lower value overloads.', 'Replace with higher value overload.', 'Adjust new overloads settings.', 'Run without overloads.'],
    answer: 2,
  },
  {
    question: 'How is a low voltage thermostat wired with a hot air furnace?',
    options: ['In series with coil.', 'In parallel to the coil.', 'In parallel to the gas valve.', 'In series with fan.'],
    answer: 0,
  },
  {
    question: 'When bonding ground rods using CAD welding what is the last material on top?',
    options: ['Bonding cable.', 'Welding mold.', 'The ignition compound.', 'Welding compound.'],
    answer: 2,
  },
  {
    question: 'What is the purpose of an anticipator in a low voltage thermostat?',
    options: ['Element heats thermostat so cooling will turn on sooner.', 'Element heats thermostat so cooling will turn off sooner.', 'Element heats thermostat so heating is delayed.', 'Element is on when cooling is on.'],
    answer: 0,
  },
  {
    question: 'What needs to be installed when using a auxiliary generator to connect to consumer supply?',
    options: ['A transfer switch.', 'Separate disconnect switches.', 'Separate overloads.', 'A dual lock out device'],
    answer: 0,
  },
  {
    question: 'When is overload protection not required for a motor?',
    options: ['Motor is manual start, 1hp or less and will be continuously attended.', 'Motor is manual start, 1 hp or less and is located in different location from starter.', 'Motor has a service factor of 1 or less.', 'Motors FLC will not exceed 7.2A.'],
    answer: 0,
  },
  {
    question: 'When the pointer on an analog voltmeter deflects downward what is the reason?',
    options: ['Voltmeter leads are shorted.', 'Incorrect polarity on voltmeter leads.', 'Voltmeter is set on incorrect voltage.', 'Voltmeter requires calibration.'],
    answer: 1,
  },
  {
    question: 'What is the minimum number of ground rods required for a high voltage installation?',
    options: ['1', '2', '3', '4'],
    answer: 3,
  },
  {
    question: 'How do you adjust a photo cell?',
    options: ['Adjust the voltage.', 'Adjust the current.', 'Adjust the sensitivity.', 'Adjust the resistance.'],
    answer: 2,
  },
  {
    question: 'The integrity of an impedance grounded system shall be monitored, and the system shall have an:',
    options: ['Audible alarm ', 'Visual alarm', 'Audible or visual alarm', 'Audible and visual alarm'],
    answer: 2,
  },
  {
    question: 'If the pilot light is not on and an electronic furnace calls for heat, what is the first thing to happen?',
    options: ['Main burner ignites and provides heat.', 'Igniter provides intermittent spark to pilot light.', 'Main fan turns on to circulate hot air.', 'Pilot light ignites main burner'],
    answer: 1,
  },
  {
    question: 'Where do you connect the overloads on a three phase motor hooked up in Wye configuration?',
    options: ['On each line including neutral.', 'On each phase including neutral.', 'On each line only.', 'On each phase only.'],
    answer: 3,
  },
  {
    question: 'If the name plate is missing from a motor, how will an electrician decide the size of overloads?',
    options: ['100%', '115%', '125%', '150%'],
    answer: 1,
  },
  {
    question: 'A contract has been signed between the owner and your employer to complete a specific job. Before completion, changes are made in the design, what should you do?',
    options: ['Cancel original contract', 'Speak to the inspector', 'Submit a change request.', 'Make a verbal agreement.'],
    answer: 2,
  },
  {
    question: 'If you observe a hazard in your place of work, who is responsible to correct the hazard?',
    options: ['Employer', 'The inspector', 'The owner.', 'The employee and the employer.'],
    answer: 0,
  },
  {
    question: 'What happens to a motor when the centrifugal switch is stuck open?',
    options: ['Motor will start and run windings will overheat.', 'Motor will start at slow speed.', 'Motor will start and start winding will overheat.', 'Motor will not start.'],
    answer: 3,
  },
  {
    question: 'What is a possible reason for overheating in a split phase fan motor?',
    options: ['Start winding installed backwards.', 'Centrifugal switch is stuck open.', 'Motor vent holes are clogged with dirt', 'Overloaded.'],
    answer: 2,
  },
  {
    question: 'Where is the toxicity information to be found in an industrial establishment?',
    options: ['In the plant office.', 'WHMIS information sheet', 'Safety Material Handling Sheet', 'Material Safety Data Sheet'],
    answer: 3,
  },
  {
    question: 'What type of electric flux would you use for electronic soldering?',
    options: ['Arsenic /Bromine', 'Tin/Lead', 'Acid Core', 'Resin'],
    answer: 3,
  },
  {
    question: 'If a diode that has a rating of 24volts and 10 amps is found to be defective, which of the following diodes would you replace it with?',
    options: ['12V and 10 A', '12V and 20 A', '24V and 10 A', '24V and 5 A'],
    answer: 2,
  },
  {
    question: 'What would happen if the centrifugal switch on a split-phase single-phase capacitor start motor is stuck in the open position?',
    options: ['The motor would run in reverse.', 'The motor would not start, but current would flow in the run windings', 'Starting torque would be greatly reduced.', 'Motor would spin very slowly.'],
    answer: 1,
  },
  {
    question: 'On what type of drawing would you find information on the connections of PLC components?',
    options: ['Riser.', 'Layout', 'Schematic', 'Logic'],
    answer: 0,
  },
  {
    question: 'All non-current carrying metal parts of electrical equipment in the fire alarm system must be bonded to ground in accordance with what section?',
    options: ['Section 4', 'Section 8', 'Section 10', 'Section 12'],
    answer: 2,
  },
  {
    question: 'When cutting a material with a jig saw what must be done to avoid vibration of the piece you are cutting?',
    options: ['Have someone hold it.', 'Secure piece with nails or screws.', 'Nothing is required.', 'The piece must be clamped down.'],
    answer: 3,
  },
  {
    question: 'What is the best type of over current protection in extreme temperatures?',
    options: ['Bi-metal circuit breakers', 'Magnetic circuit breakers', 'Solder pot device', 'Melting alloy device'],
    answer: 1,
  },
  {
    question: 'When working in an area where hazardous chemicals are present, what is required by the worker?',
    options: ['WHmis training and access to MSDS sheets.', 'Must be checked by a doctor and medically fit.', 'Must have experience working with hazardous material.', 'Must be authorized by employer and permitted to work in hazardous areas.'],
    answer: 0,
  },
  {
    question: 'What is the maximum circuit breaker rating that can protect a branch circuit feeding a single neon sign supply transformer?',
    options: ['15A', '20A', '40A', '30A'],
    answer: 3,
  },
  {
    question: 'Extra-low-voltage ac systems shall be solidly grounded where:',
    options: ['supplied by transformers energized from systems of more than 150 volts-to-ground', 'supplied by transformers energized from systems of more than 250 volts-to-ground', 'supplied by transformers energized from systems of more than 500 volts-to-ground', 'supplied by transformers energized from systems of more than 750 volts-to-ground'],
    answer: 0,
  },
  {
    question: 'How does an electrician calculate the ampacity rating of a conduit containing multiple conductors with different temperature ratings?',
    options: ['Based on the lowest insulation temperature rating', 'Based on the highest insulation temperature rating', 'Based on temperature correction factor', 'Based on average of all conductor temperature ratings'],
    answer: 0,
  },
  {
    question: 'What is one of the characteristics of a flat compound generator?',
    options: ['No load voltage is less than generated voltage', 'No load voltage is equal to the generated voltage', 'Load voltage is less than the generated voltage', 'Load voltage is equal to the generated voltage'],
    answer: 3,
  },
  {
    question: 'An off-delay device is used in a circuit for the control of the apparatus, what happens when the circuit controlling the apparatus is de-energized?',
    options: ['The apparatus is energized immediately', 'The apparatus is not energized until a specific of time has lapsed', 'The apparatus is energized for a specific period of time after the stop is activated', 'The apparatus is de-energized immediately'],
    answer: 2,
  },
  {
    question: 'The load requirement of a DC motor installation is for an extremely good speed regulation. If starting torque is not important, what is the type of motor that should be used?',
    options: ['A cumulative compound motor', 'Differential compound wound motor', 'Series motor', 'Shunt motor'],
    answer: 3,
  },
  {
    question: 'How do you reverse a shaded pole motor?',
    options: ['Interchange the supply leads', 'Revere the start and run winding leads', 'Rotate the brushes 180 degrees', 'Take the motor apart and rotate the rotor shaft end for end'],
    answer: 3,
  },
  {
    question: 'Which of the following is true in case of an Isolation switch?',
    options: ['A switch intended for use in general distribution and branch circuits', 'A switch of such design or marked can be easily identified on or off', 'A manually operated knife or snap switch rated in horse power', 'A switch intended for isolating either a circuit or some equipment from its source of supply'],
    answer: 3,
  },
  {
    question: 'Which of the following is the best way of controlling the power supply for exit lights?',
    options: ['By an isolating switch', 'By a normal household switch', 'By a time clock', 'By an over current device'],
    answer: 3,
  },
  {
    question: 'Where must be the armored cable bonded to reduce the sheath current?',
    options: ['Bonded at both ends', 'Bonded to the identified conductor', 'Bonded at the supply end', 'Bonded to the neutral conductor'],
    answer: 0,
  },
  {
    question: 'What is the reason behind using  heat shrink in an underground splice?',
    options: ['To reduce heat', 'To reduce corona', 'To protect the splice from moisture', 'To separate the conductors'],
    answer: 2,
  },
  {
    question: 'What is the maximum fault current in patient care facilities, when a single phase isolated branch circuits are safety tested?',
    options: ['3mA', '2mA', '5mA', '7mA'],
    answer: 1,
  },
  {
    question: 'Where the changes are recorded on drawings and specifications sheets?',
    options: ['On the architect drawings only', 'On "as built" drawings', 'On engineers drawings only', 'On master electricians drawings only'],
    answer: 1,
  },
  {
    question: 'When calculating the demand factor for a single dwelling unit, which of the following percentages is used for basement under floor in that unit?',
    options: ['100%', '75%', '65%', '40%'],
    answer: 1,
  },
  {
    question: 'What is the maximum distance to which an unguyed consumer service may extend through the roof?',
    options: ['1.5m', '1m', '2m', '2.5m'],
    answer: 0,
  },
  {
    question: 'Switch "A" is marked "TDOE 30sec." The circuit has been energized for 1 hour, what happens when the circuit is de-energized?',
    options: ['Nothing happens to switch A', 'Switch A remains off for 30 seconds', 'Switch A is de-energized immediately', 'Switch A remains energized for 30 seconds'],
    answer: 2
  },
  {
    question: 'Receptacles for emergency system lighting shall be mounted a minimum of?',
    options: ['1 meter from the floor', '1.5 meter from the floor', '2 meter from the floor', '2.5 meter from the floor'],
    answer: 3,
  },
  {
    question: 'The conductor connecting the impedance grounding device to the system source shall:',
    options: ['be identified black or blue', 'be identified white or grey', 'be identified red or green', 'be identified orange or black'],
    answer: 1,
  },
  {
    question: 'A dry core open ventilated 100KVA transformer needs to be installed on a concrete wall. What is the minimum separation between the enclosure of the transformer and the mounting wall?',
    options: ['6mm', '50mm', '300mm', '600mm'],
    answer: 2,
  },
  {
    question: 'Which of the following steps is to be followed before removing an ammeter from the secondary circuit of a current transformer on a de-energized circuit?',
    options: ['De-energize the primary circuit', 'Short the secondary circuit', 'Remove the voltmeter first', 'Short the primary circuit'],
    answer: 1,
  },
  {
    question: 'At what minimum distance, a receptacle can be installed from a bath tub without being protected by a class A GFCI?',
    options: ['Less than one meter from the sink', 'More than one meter from the sink', 'Less than 1.5 meters from the sink', 'More than 1.5 meters from the sink'],
    answer: 3,
  },
  {
    question: 'The main purpose served by a heat anticipator is:',
    options: ['To safely stop current flow to a motor before it becomes overheated.', 'To shut down fuel flow to a furnace before it reaches a pre-set temperature.', 'To prevent transformer overheating', 'To allow adjustment of the differential'],
    answer: 3,
  },
  {
    question: 'When is it safe to switch to parallel alternators while using the three light synchronization method?',
    options: ['When three light are light', 'When two lights are light', 'When all lights are out', 'When one of three lights is flashing'],
    answer: 2,
  },
  {
    question: 'The maximum weight of a light fixture installed on a wall mount box is___________.',
    options: ['5 KG', '10 KG', '13 KG', '23 KG'],
    answer: 2,
  },
  {
    question: 'What is the maximum distance a receptacle box can be recessed into a gyproc wall?',
    options: ['2mm', '4mm', '6mm', 'It must be mounted flush with finished surface.'],
    answer: 3,
  },
  {
    question: 'The plumbing riser diagrams are found in:',
    options: ['Architectural drawings', 'Electrical', 'Structural', 'Mechanical drawings'],
    answer: 3,
  },
  {
    question: 'For how long must an emergency system be capable of supplying 91% of the full voltage battery power supply?',
    options: ['One hour.', 'Forty-five minutes.', 'Thirty minutes.', 'Five minutes.'],
    answer: 2,
  },
  {
    question: 'A wall switch controlling a light in a shower room is located less than 1 meter and more than 500mm from the shower, what is the best way of protection in this case?',
    options: ['It must be marked for "damp or wet" locations.', 'It must be sealed in a waterproof box.', 'It cannot be located there.', 'It must be protected by a Class A type GFCI.'],
    answer: 3,
  },
  {
    question: 'Which one out of the following four types of motor would best suited to supply air compressor?',
    options: ['A capacitor start capacitor runs motor.', 'A squirrel cage motor.', 'A synchronous motor.', 'Delta-Wye start motor.'],
    answer: 0,
  },
  {
    question: 'Where an electrical system is connected to an impedance grounding device, the system:Where an electrical system is connected to an impedance grounding device, the system:',
    options: ['can be maintained by anyone', 'must be maintained by a qualified person', 'does not need to be maintained', 'can only be maintained by the system owner'],
    answer: 1,
  },
  {
    question: 'Which of the following statements is true when lights are installed in a school?',
    options: ['Lights must be controller by switching relays.', 'Lights must be protected by metal reflectors.', 'Lights must be recessed to avoid damage.', 'Lights must be the unbreakable type bulb.'],
    answer: 1,
  },
  {
    question: 'When installing smoke detectors in a dwelling unit they can be supplied by the following circuit?',
    options: ['A GFCI circuit.', 'A switched circuit.', 'A circuit containing lights and plugs.', 'A fridge circuit.'],
    answer: 2,
  },
  {
    question: 'Aluminum boxes may be installed in concrete provided?',
    options: ['The box has been treated with bituminous base paint.', 'The concrete contains Chloride additives.', 'The box is sectional construction.', 'The box is mounted on the surface of the concrete.'],
    answer: 0,
  },
  {
    question: 'What is the minimum bending radius of armored cable with diameter of 2 inches?',
    options: ['6 inches.', '12 inches.', '18 inches.', '24 inches.'],
    answer: 1,
  },
  {
    question: 'Where would you install an over current protection when a 120/240 volt panel is tapped off a 600 volt splitter?',
    options: ['The supply side of the splitter.', 'The load side of the splitter.', 'The supply side of the panel.', 'Protection is not required.'],
    answer: 2,
  },
  {
    question: 'What is the minimum clearance needed from the edge of a closest stud or joint when armored cable is run in an installation?',
    options: ['32mm', '50mm', '100mm', '300mm'],
    answer: 0,
  },
  {
    question: 'Consumer service equipment located on the outside of a building shall have mechanical protection unless it is:',
    options: ['9 meters above grade.', '2 meters above grade.', '1.5 meters above stairs or decks.', '1 meter below roof line.'],
    answer: 1,
  },
  {
    question: 'All portions of the fence surrounding a high voltage location must be grounded. The fabric of the fence may be woven in how many places?',
    options: ['one', 'two', 'three', 'four'],
    answer: 1,
  },
  {
    question: 'How is a start button installed in a motor control circuit?',
    options: ['In parallel with the stop button.', 'In series with the run circuit.', 'In series with the hold circuit.', 'In series with the stop button.'],
    answer: 3,
  },
  {
    question: 'A switch that controls electric-discharge lights must have a current rating of?',
    options: ['Same as current rating of the lamps.', '1.5 times the current rating of the lamps.', 'Twice the current rating of the lamps.', '2 .5 times the current rating of the lamps.'],
    answer: 2,
  },
  {
    question: 'When a furnace calls for heat what is the correct process?',
    options: ['Fan/Ignition/Boiler heats', 'Ignition/Fan/Boiler heats', 'Boiler heats/Ignition/Fan', 'Ignition/Boiler heats/Fan'],
    answer: 3,
  },
  {
    question: 'When you replace ballast, what is done with the unserviceable ballast?',
    options: ['Send it to the appropriate place for disposal.', 'Throw ballast in the garbage.', 'Place ballast in recycle bin.', 'Place ballast in scrap bin.'],
    answer: 0,
  },
  {
    question: 'What happens to a motor when the centrifugal switch is stuck open?',
    options: ['Motor will start and run windings will overheat', 'Motor will start at slow speed', 'Motor will start and start winding will overheat', 'Motor will not start'],
    answer: 3,
  },
  {
    question: 'What would make a lamp last longer?',
    options: ['Higher voltage.', 'Higher current.', 'Lower current.', 'Lower voltage'],
    answer: 3,
  },
  {
    question: 'On what type of drawing would you find the thickness of the gyproc?',
    options: ['Architectural.', 'Structural.', 'Electrical.', 'Mechanical.'],
    answer: 1,
  },
  {
    question: 'The National Building Code of Canada requires that the installation of conductors to a fire pump must have what minimum fire rating?',
    options: ['0.5 hr fire rating.', '1 hr fire rating.', '2 hr fire rating.', '3 hr fire rating.'],
    answer: 1,
  },
  {
    question: 'If an analog wattmeter is installed backwards, what would you observe?',
    options: ['The meter reads correctly.', 'The needle points in the reverse direction.', 'It cannot be installed backwards.', 'The meter would burn up.'],
    answer: 1,
  },
  {
    question: 'In a 120V two wire circuit, the white wire is called?',
    options: ['Identified conductor.', 'Neutral conductor.', 'Grounding conductor.', 'Bonding conductor.'],
    answer: 0,
  },
  {
    question: 'What can be used to control an exit luminaire?',
    options: ['A wall switch', 'Lighting circuit', 'Circuit used for no other purpose.', 'Receptacle circuit.'],
    answer: 2,
  },
  {
    question: 'What are the colors of 3-phase wires in a three phase delta system?',
    options: ['Black, Red, White.', 'Black, Red, Grey.', 'Black, Red, Blue.', 'Red, Blue, white.'],
    answer: 2,
  },
  {
    question: 'A three phase 600 volt motor uses a two pulley four V-belt system to drive a large fan, if one belt breaks what would you do?',
    options: ['Replace the outside belts.', 'Replace the inside belts.', 'Replace only the broken belt.', 'Replace all belts.'],
    answer: 3,
  },
  {
    question: 'What is the maximum number of bends allowed in one run of raceway?',
    options: ['Equivalent of four 45 degree bends including bends at outlet or fittings.', 'Equivalent of four 45 degree bends excluding bends at outlet or fittings.', 'Equivalent of three 90 degree bends including bends at outlet or fittings.', 'Equivalent of four 90 degree bends including bends at outlet or fittings.'],
    answer: 3,
  },
  {
    question: 'Which of the following will cause a ground fault interrupter to trip?',
    options: ['A fault live to ground.', 'Overload on the circuit.', 'A voltage spike.', 'A current spike.'],
    answer: 0,
  },
  {
    question: 'Metering equipment can be connected on the supply side of a service box where?',
    options: ['The supply exceeds 300v between conductors and service is 200A.', 'The supply does not exceed 300v between conductors and service is 200A', 'The supply does not exceed 300v and service is 600A indoor location.', 'The supply exceeds 300v and service is 600A outdoor location.'],
    answer: 1,
  },
  {
    question: 'When working in an area where hazardous chemicals are present, what is required by the worker?',
    options: ['WHIMIS training and access to MSDS sheets.', 'Must be checked by a doctor and medically fit.', 'Must have experience working with hazardous material.', 'Must be authorized by employer and permitted to work in hazardous areas.'],
    answer: 0,
  },
  {
    question: 'When using an extension ladder to gain access to roof, what is the minimum distance that the ladder must extend above the roof line?',
    options: ['2 feet', '2.5 feet', '3 feet', '4 feet'],
    answer: 2,
  },
  {
    question: 'What is an acceptable location for a light in a clothes closet?',
    options: ['On the ceiling using pendant lighting.', 'On the back wall.', 'On the front wall above the door.', 'On the side wall.'],
    answer: 2,
  },
  {
    question: 'How often are rubber insulating gloves that are required to be used for diagnostic testing be tested after issued service?',
    options: ['3 months', '6 months', '9 months', '12 months'],
    answer: 1,
  },
  {
    question: 'How many months are rubber insulating gloves used as PPE for electricians allowed to be in storage before they are required to be tested to be issued for service?',
    options: ['3 months', '6 months', '9 months', '12 months'],
    answer: 1,
  },
  {
    question: 'A tachometer is placed on the feedback of an op amp to a controller, what is it used for?',
    options: ['Open loop feedback', 'Closed loop feedback', 'Instrumentation', 'Grounding'],
    answer: 1,
  },
  {
    question: 'What should be done to change the angle of a luminaries’ light pattern?',
    options: ['Change the reflector', 'Change the photo cell', 'Change the light bulb', 'Change the luminaire'],
    answer: 0,
  },
  {
    question: 'In a two stage, class A fire alarm circuit what is indicated by an illuminated light in the panel?',
    options: ['System is operation', 'System is in alarm stage', 'System is in alert stage, action must be taken within 5 minutes', 'System requires service'],
    answer: 2,
  },
  {
    question: 'Nurse emergency calls can be re-set at which of the following location?',
    options: ['Duty Room', 'Central station.', 'Nurse call station.', 'Safety Station.'],
    answer: 1,
  },
  {
    question: 'Why can you not replace a pinned shackle with bolt?',
    options: ['Because the metal in the bolt is different.', 'You do not know the strength of the bolt.', 'The bolt does not have a pin to prevent slippage.', 'The bolt is prone to wear.'],
    answer: 2,
  },
  {
    question: 'What is the best method to train an apprentice to do new task?',
    options: ['Complete a detailed report at the end of each work day.', 'Demonstrate, let the apprentice perform and give feedback.', 'Demonstrate, let the apprentice perform and make a report.', 'Let the apprentice work alone and check his work at the end of the day.'],
    answer: 1,
  },
  {
    question: 'When do you start electrical rough-in in a building?',
    options: ['After the walls have been erected.', 'After the windows and doors are installed.', 'After walls and doors installed.', 'After walls and roof is weather tight.'],
    answer: 3,
  },
  {
    question: 'The circuit breakers on a motor control circuit shuts down the motor. What would the electrician check first?',
    options: ['Voltage', 'Current', 'Watts', 'Continuity'],
    answer: 1,
  },
  {
    question: 'The electric hot water heater is attached to the power source but is not producing any hot water. Which tool would you use to test the heater?',
    options: ['Disconnect the power and use continuity tester', 'Wheat stone bridge', 'Clamp on Ammeter', 'Wattmeter'],
    answer: 0,
  },
  {
    question: 'What operations does a punch down tool do?',
    options: ['Cuts cable only', 'Terminates cable only.', 'Cuts then terminate cable', 'Terminates then cuts cable'],
    answer: 3,
  },
  {
    question: 'Three drive belts are connected, one belt from pulley A to B, one belt from pulley B to C and one belt from pulley C to D. If the belt between pulley A and B break, which belts should be replaced?',
    options: ['Only the belt on pulleys A and B', 'Only the belt on pulleys Band C', 'Only the belt on pulleys C and D', 'Replace all belts.'],
    answer: 3,
  },
  {
    question: 'A recently replaced drive belt on a motor pulley is badly worn on one side, what should be done?',
    options: ['Replace the worn belt.', 'Replace the belt and align pulleys.', 'Replace belt with next larger size.', 'Replace the motor'],
    answer: 1,
  },
  {
    question: 'A three phase motor is missing one phase. What should the electrician check first?',
    options: ['Over current devices.', 'Overload devices.', 'Continuity of windings.', 'Bonding connection.'],
    answer: 1,
  },
  {
    question: 'When testing PLC inputs and outputs, what procedure is followed?',
    options: ['Test input and output together', 'Test inputs then outputs', 'Test input.', 'Test output.'],
    answer: 0,
  },
  {
    question: 'What type of conduit can be used in a building constructed of combustible and non­ combustible construction?',
    options: ['EMT', 'Electrical non-metallic tubing.', 'Rigid PVC conduit.', 'Rigid HFT conduit.'],
    answer: 0,
  },
  {
    question: 'What type of cable is used for fire alarm system on the outside wall made of concrete?',
    options: ['FAS105, installed in EMT.', 'FAS 200', 'ELC', 'FCC'],
    answer: 0,
  },
  {
    question: 'Where the connections between the branch circuit and the internal conductors of fixed equipment pass through an access cover,  when the cover is removed, the bonding conductor connection:',
    options: ['shall be interrupted', 'shall remain continuous', 'shall pause', 'shall reset'],
    answer: 1,
  },
  {
    question: 'Which of the following devices is needed in a low voltage release motor control circuit?',
    options: ['N/O switch', 'N/C switch', 'A single pole switch', 'A double pole switch'],
    answer: 1,
  },
  {
    question: 'You receive a shipment containing hazardous material, what should you do?',
    options: ['Sign for shipment.', 'Check waybill and sign for shipment', 'Ask a qualified person to check and sign for shipment.', 'Check shipment, sign for shipment and file MSDS sheet.'],
    answer: 3,
  },
  {
    question: 'Motor and motor starter or controller disconnecting means shall be located?',
    options: ['Within 3 meters of the equipment.', 'Within 9 meters of the equipment.', 'Within 9 meters of the equipment and in sight of equipment.', 'Within 9 meters and in sight of the equipment and within 9 meters and in sight of controller.'],
    answer: 3,
  },
  {
    question: 'To replace the coil in a motor controller contact, the electrician must know?',
    options: ['Voltage and physical size of coil.', 'Voltage and current in control circuit.', 'FLC and service factor of motor.', 'Overload and over current rating of motor.'],
    answer: 0,
  },
  {
    question: 'The electrician has replaced all three windings in a 230V, 3 phase motor. The “A” phase winding has a resistance reading of "infinity". What is the problem?',
    options: ['Rating of winding is incorrect.', '"A" phase winding is cross wired with phase B or C.', '"A" phase winding circuit is open.', '"A" phase winding is shorted to ground'],
    answer: 2,
  },
  {
    question: 'Holes in wooden stud, to run NMD90 cable, must be drilled____________.',
    options: ['32mm from the ceiling.', '32mm from the floor.', 'In the center of the stud.', 'Near the edge of the stud.'],
    answer: 2,
  },
  {
    question: 'A motor is exposed to moisture and circuit breakers opened up the circuit. What action should an electrician take?',
    options: ['Dry the moisture with a heat gun and re-start.', 'Isolate the motor and megger on each phase.', 'Isolate the motor and ohm meter on each phase.', 'Replace the motor.'],
    answer: 2,
  },
  {
    question: 'What is the maximum distance emergency lighting can be installed from its supply connection?',
    options: ['2 meters', '1.5 meters', '1 meters', '0.5 meters'],
    answer: 1,
  },
  {
    question: 'A 600 volt single phase motor will not start, phase to ground is 600V, and voltage across overloads is 600V,what is the problem?',
    options: ['Overload has tripped.', 'Circuit breakers tripped.', 'Circuit breaker installed incorrectly.', 'Loose connection at T1.'],
    answer: 0,
  },
  {
    question: 'What information is required on a "motor lockout tag"?',
    options: ['Motor and outage time.', 'Outage time.', 'Reason for outage.', 'Name and contact number of person locking the equipment.'],
    answer: 3,
  },
  {
    question: 'What is the minimum distance between the two largest conduits during an angle pull in a pull box?',
    options: ['8 times the diameter of the largest conduit.', '6 times the diameter of the largest conduit.', '6 times the diameter of the largest conduit plus the diameter of all others?', '8 times the diameter of the largest conduit plus the diameter of all others?'],
    answer: 1,
  },
  {
    question: 'A non metallic cable is installed through a wooden stud with less than 32mm of clearance from the surface of the stud, how must the conductor be protected?',
    options: ['With a ceramic plate', 'With a protector plate approved for this specific purpose.', 'Must be move to another location', 'With a plastic plate'],
    answer: 1,
  },
  {
    question: 'Electrician replaced a 600v three phase motor in a commercial business. Using two way radios, which of the following statement is correct?',
    options: ['One electrician to press start button and the other at the motor to check motor voltage.', 'One electrician to press start button and other at the motor to check motor rotation.', 'One electrician to press start button and other at the motor to check the amperage.', 'One electrician at the motor controller and other one at the motor to check main disconnect.'],
    answer: 1,
  },
  {
    question: 'A circuit breaker, for a single phase motor, shall be connected to which of the following points?',
    options: ['L1 to T1', 'L2 to T2', 'L1 to T2', 'L1 to N" neutral'],
    answer: 0,
  },
  {
    question: 'A 120/208V, three phase four wire service, has following voltage readings. What is the problem?Phase A to Phase C is 208 V. Phase C to neutral is 120 V. Phase B to neutral is 0 V. Phase A to B is 0 V.',
    options: ['Neutral conductor is broken open.', 'Phase C fuse has blown.', 'Phase A fuse has blown.', 'Phase B fuse has blown.'],
    answer: 3,
  },
  {
    question: 'Which one of the following statements is true when installing conductors in parallel?',
    options: ['Conductors are run in parallel to reduce eddy currents.', 'Conductors are run in parallel to prevent cross phasing.', 'Conductors are run in parallel such that the orientation will minimize different inductive reactance.', 'Conductors are run in parallel to reduce conduit fill.'],
    answer: 2,
  },
  {
    question: 'How often should emergency lights be tested?',
    options: ['Once a month.', 'Once a week.', 'Once per day.', 'Twice a month.'],
    answer: 0,
  },
  {
    question: 'What is the first thing you must check after replacing a three phase motor?',
    options: ['Voltage', 'Rotation', 'Current', 'Continuity'],
    answer: 1,
  },
  {
    question: 'When installing a heating cable below a driveway made of concrete, what is the minimum depth to which these cables must be embedded?',
    options: ['50mm.', '100mm.', '150mm.', '300mm.'],
    answer: 0,
  },
  {
    question: 'What is the minimum thickness of steel barrier required to create separation between conductors that are connected to different power sources in the same box?',
    options: ['1.3mm', '1.6mm', '2.0mm', '6mm'],
    answer: 0,
  },
  {
    question: 'What is the purpose for a short cycle timer, in a fridge?',
    options: ['To stop the fridge compressor.', 'To start the fridge compressor.', 'To stop the fridge from cycling on and off.', 'It is the normal cycle of the fridge compressor.'],
    answer: 2,
  },
  {
    question: 'A 200 KVA, single phase transformers is installed in parallel with another 200KVA transformer, what is the total KVA output of this new installation?',
    options: ['100 KVA', '200 KVA', '400 KVA', '800 KVA'],
    answer: 3,
  },
  {
    question: 'Which of the following is one way to change the rotation of a DC shunt motor?',
    options: ['Change the phases', 'Reversing armature winding', 'Reverse both windings', 'Reverse position of motorReverse position of motor'],
    answer: 1,
  },
  {
    question: 'In hazardous areas, the space within a dispenser and enclosure up to _____ vertically above the base is considered as Zone 1 location?',
    options: ['450mm', '900mm', '1m', '1.2m'],
    answer: 3,
  },
  {
    question: 'Which of the following will cause overheating of a 10 HP, 3 phase 480V induction motor?',
    options: ['Overloads set to low.', 'Overcurrent device set to low.', 'Under voltage.', 'Too light of a load.'],
    answer: 2,
  },
  {
    question: 'When using a lift, equipped with a safety harness, who is responsible for the serviceability of the equipment?',
    options: ['The operator.', 'The supervisor on duty.', 'The owner of the equipment.', 'Site manager.'],
    answer: 0,
  },
  {
    question: 'When are you allowed to deviate from the CEC?',
    options: ['Electricians are never allowed to deviate from the code.', 'Electricians can deviate from the code if approved by an inspector.', 'Electricians can deviate from the code if they are from Portugal.', 'Electrician requires special permission, prior to proceeding with work, and only for that particular installation, to deviate from code.'],
    answer: 3,
  },
  {
    question: 'How often are high voltage gloves that are not in use to be tested?',
    options: ['90 days', '180 days', '270 year', '365 years'],
    answer: 3,
  },
  {
    question: 'When using an extension ladder to gain access to roof , what is the minimum distance the ladder is to extend above the roof line?',
    options: ['600 mm', '900 mm', '1000 mm', '1200 mm'],
    answer: 1,
  },
  {
    question: 'What is the minimum clearance distance that must be behind the rungs of a vertical ladder used to gain access to working platform of scaffold?',
    options: ['50 mm', '100 mm', '150 mm', '200 mm'],
    answer: 2,
  },
  {
    question: 'When connecting an aluminum lug to a copper bus bar using a 19mm nut and bolt, what must be used?',
    options: ['Flat steel washer', 'Conical spring washer', 'Star lock washer', 'Helical spring washer only'],
    answer: 1,
  },
  {
    question: 'How long does it take to rough in the electrical system for a 2 bedroom single dwelling unit?',
    options: ['7 to 11 days', '12 to 15 days', '16 to 19 days', '20 to 23 days'],
    answer: 1,
  },
  {
    question: 'A hand signal used to instruct the crane operator to lower the boom is.',
    options: ['Extend arm and close fingers and point thumb upward.', 'Extend arm and close fingers and point thumb downward.', 'Extend arm and point for fingers down moving arm in small circles.', 'Extend right arm and point thumb downward and left arm upward.'],
    answer: 1,
  },
  {
    question: 'Who is responsible to put stickers on hazardous materials?',
    options: ['Supplier', 'Manufacturers', 'Retailers', 'User'],
    answer: 0,
  },
  {
    question: 'There is an enclosed stairway and an Electrician is assigned to put a light on the wall 5 meter high. What can he use to do this work?',
    options: ['Scissor lift', 'Extension ladder', 'Step ladder', 'Baker stage'],
    answer: 3,
  },
  {
    question: 'A maintenance blueprint has a scale of 1:20. A line on the drawing is 100mm. What is the length of line in meters?',
    options: ['0.2m', '20m', '2m', '200m'],
    answer: 2,
  },
  {
    question: 'The contactor in a relay is humming loudly. What is the problem?',
    options: ['Voltage is too high', 'under sized shaded pole', 'Voltage is low', 'Loose lamination'],
    answer: 2,
  },
  {
    question: 'Centrifugal switch of a motor is stuck closed. What will happen to the motor operation?',
    options: ['Motor may not start', 'Motor will not reach to its full speed', 'Run winding will burn out', 'Start winding may burn out'],
    answer: 1,
  },
  {
    question: 'Three lamps are used to provide ground fault detection on a 480V ungrounded three phase line. If Phase A is grounded mistakenly, what will happen to the lights?',
    options: ['All 3 lights will go off', '1 will go on and 2 will go off', 'All 3 lights will go on', 'Phase A will go off and other 2 will stay on'],
    answer: 3,
  },
  {
    question: 'Out of the following four device, which one is used to control a hot water tank that is hooked up to a boiler?',
    options: ['Thermostat', 'Accustat', 'Zone Valve', 'Solenoid'],
    answer: 2,
  },
  {
    question: 'Power of a transformer is measured in:',
    options: ['Kilovolts', 'Kilowatts', 'Kilovolt-amperes', 'Watts'],
    answer: 2,
  },
  {
    question: 'You need to install an aluminum pole for light on the street. What is the proper process?',
    options: ['Pour base, put conduit, stand pole', 'Put conduit, frame for pour, install bolts, pour cement', 'Install pole, pull wires.', 'Pour cement, install conduit, pull wire, install pole'],
    answer: 1,
  },
  {
    question: 'Which standard controls where to install exit signs?',
    options: ['Canadian Electrical Code', 'Canadian Plumbing Code', 'National Building code of Canada', 'National Fire Code'],
    answer: 2,
  },
  {
    question: 'What device does a UPS (uninterrupted power supply) use to supply AC to the load from the battery?',
    options: ['Capacitor', 'Transformer', 'Inverter', 'Coil'],
    answer: 2,
  },
  {
    question: 'To change the direction of a DC shunt motor, which is the common method?',
    options: ['Switch run and start winding', 'Change the polarity of armature coil', 'Take the motor apart and rotate the rotor shaft end for end.', 'Interchange supply leads.'],
    answer: 1,
  },
  {
    question: 'How do you reverse the direction of a 3 phase motor?',
    options: ['Interchange any 2 supply leads', 'Turn the motor around', 'Interchange the start and run winding', 'Direction cannot be changes'],
    answer: 0,
  },
  {
    question: 'What must be done to ensure safety when performing a lockout on an electrical circuit?',
    options: ['De-energize circuit, tag the switch and lock it.', 'De-energize circuit, tag the switch and inform supervisor.', 'Tag the switch, lock it and inform supervisor.', 'Remove the fuse and tag.'],
    answer: 0,
  },
  {
    question: 'What is required for personnel to work on a site where chemicals are in use?',
    options: ['WHMIS qualification and availability of MSDS information.', 'Authorization by the foreman and the use of a breathing apparatus.', 'Authorization by a medical officer and availability of MSDS information.', 'First aid certification and the use of a breathing apparatus.'],
    answer: 0,
  },
  {
    question: 'In which circuit conductor must switches for lighting be connected?',
    options: ['Neutral conductor.', 'Identified conductor.', 'Grounded conductor.', 'Ungrounded conductor.'],
    answer: 3,
  },
  {
    question: 'Where are overload relays (OLRs) of a magnetic starter physically located?',
    options: ['At the contactor.', 'At the starter station.', 'At the motor.', 'At the distribution panel.'],
    answer: 0,
  },
  {
    question: 'Where electric motor controllers are supplied by two or more different sources of voltage, what precaution must be taken?',
    options: ['Use a separate means of disconnect for each source of ungrounded conductors.', 'Use a single means of disconnect to isolate all ungrounded conductors.', 'Use a single means of disconnect to isolate all grounded and ungrounded conductors.', 'Use a separate means of disconnect for each source of all grounded and ungrounded conductors.'],
    answer: 1,
  },
  {
    question: 'What is the minimum height allowed for point of attachment of service supply conductors in an alley?',
    options: ['3.5 m', '4.0 m', '5 m', '5.5 m'],
    answer: 3,
  },
  {
    question: 'Which three-phase system requires that the three wattmeter method be used to measure power?',
    options: ['Balanced delta-connected system.', 'Three-wire balanced wye-connected system.', 'Four-wire unbalanced system.', 'Four-wire balanced wye-connected system.'],
    answer: 2,
  },
  {
    question: 'How often should the ground fault circuit interrupter be tested?',
    options: ['Once a year.', 'Once a month.', 'Once a week.', 'Once a day.'],
    answer: 1,
  },
  {
    question: 'What would happen if correct polarity was not observed during the installation of a signaling device in a fire alarm system?',
    options: ['A general alarm would sound.', 'A trouble signal would sound.', 'The batteries would discharge.', 'The signaling devices would not operate.'],
    answer: 1,
  },
  {
    question: 'Continuous water and waste water systems can, under certain circumstances, carry impressed currents from lightning strikes or faults in neighbouring buildings.',
    options: ['True', 'False', '', ''],
    answer: 0,
  },
  {
    question: 'Which type of motor starter is installed to provide low-voltage release?',
    options: ['Manual motor starter with no holding contact.', 'Magnetic motor starter with a start button in parallel with the holding contacts.', 'Magnetic motor starter with a start button in series with the holding contacts.', 'Magnetic motor starter utilizing the holding contacts'],
    answer: 0,
  },
  {
    question: 'What kind of wire can be used in fire alarm system?',
    options: ['Teck 90', 'AC 90', 'NMD 90', 'FAS 200'],
    answer: 3,
  },
  {
    question: 'What is an extra PPE you can use when going up in a crane bucket?',
    options: ['Class c hard hat', 'Visible vest', 'Glasses', 'None'],
    answer: 1,
  },
  {
    question: 'What would you use to install a 45KVA transformer in an attic?',
    options: ['Chain hoist', 'Crane', 'Scissor lift', 'Hoist motor'],
    answer: 1,
  },
  {
    question: 'Aluminum conductors cant be used in which environment?',
    options: ['Wet location', 'Dry location', 'Explosive', 'Humid'],
    answer: 0,
  },
  {
    question: 'Generator belts have uneven wear, what should be done in future?',
    options: ['Protector', 'Align pulleys', 'Change pulleys19', 'Use adhesive material'],
    answer: 1,
  },
  {
    question: 'If end of line resistor is shorted what will happen?',
    options: ['Alarm in building', 'Trouble Signal', 'Red warning', 'Signal Sound'],
    answer: 1,
  },
  {
    question: 'Centrifugal switch is open due to malfunction, what would happen?',
    options: ['No voltage to stator winding', 'Run winding burn out', 'Start winding burn out', ''],
    answer: 2,
  },
  {
    question: 'Where do you ground a generators supply?',
    options: ['Load end', 'Generator', 'Consumer', 'Supply end'],
    answer: 3,
  },
  {
    question: 'When working in an area where hazardous chemicals are present, what is required by the worker?',
    options: ['WHMIS training and access to MSDS sheets.', 'Must be checked by a doctor and medically fit.', 'Must have experience working with hazardous material.', 'Must be authorized by employer and permitted to work in hazardous areas.'],
    answer: 0,
  },
  {
    question: 'Which of following is not a DC generator?',
    options: ['Series generator', 'Shunt generator', 'Compound generator', 'Compound parallel wound generator'],
    answer: 3,
  },
  {
    question: 'Which drawing gives information on sprinkler system in a building?',
    options: ['Fire alarm drawing', 'Systematic drawing', 'Plumbing drawing', ''],
    answer: 2,
  },
  {
    question: 'Which of the following surfaces can be used for equipotential bonding purpose?',
    options: ['The continuous metal water piping system of a building supplied with electric power', 'Raised floors of conductive material with electrical wiring under the raised floor', 'Neither A nor B', 'Both A and B'],
    answer: 3,
  },
  {
    question: 'How audible trouble signals must be wired in installation of emergency power supply?',
    options: ['Such that they can be silenced, red light flashes.', 'Such that they cant be silenced, red light on.', 'Such that they cant be silenced, red light flashes.', 'Such that they can be silenced, red light on.'],
    answer: 0,
  },
  {
    question: 'If you were adding components to a VFD, what drawings would represent this change?',
    options: ['Plumbing drawing', 'Electrical drawing', 'Mechanical drawing', 'Architectural drawing'],
    answer: 1,
  },
  {
    question: 'What happens to class B fire alarm system if EOL resistor burns out?',
    options: ['alarm will sound', 'trouble signal will sound', 'system will shut down', 'nothing will happen'],
    answer: 1,
  },
  {
    question: 'In a 3-phase delta system, B-lamp of ground fault detection system goes out on the indicator lights. What is the possible cause?',
    options: ['A phase grounded', 'B phase grounded', 'C phase grounded', 'All phases grounded'],
    answer: 1,
  },
  {
    question: 'Which conductor is allowed to be used in Nurse Call system?',
    options: ['NMD 90', 'AC 90', 'LVT', 'RA 90'],
    answer: 2,
  },
  {
    question: 'Which type of cable is allowed to be used in exit signs or emergency supply?',
    options: ['FAS 90', 'NMD 90', 'RA 90', 'TECH 90'],
    answer: 0,
  },
  {
    question: 'Which one of the following can be used as fastening hardware in electrical work in marine wharves?',
    options: ['Stainless steel', 'Metal', 'Plastic', 'Iron'],
    answer: 0,
  },
  {
    question: 'What is maximum temperature rating of CMR cable?',
    options: ['60°C', '70°C', '80°C', '75°C'],
    answer: 0,
  },
  {
    question: 'What is the demand factor of common area load that is added in main service of an apartment building?',
    options: ['75%', '80%', '70%', '60%'],
    answer: 0,
  },
  {
    question: 'What is nominal voltage of a SCIM motor if rated voltage on name plate is 575 V?',
    options: ['450V', '500V', '600V', '650V'],
    answer: 2,
  },
  {
    question: 'What type of flexible cord is required in installation of Photo Voltaic (PV) system?',
    options: ['Extra hard usage', 'RPVU Cables', 'Armoured Cable', 'Non-metalic sheathed cable'],
    answer: 0,
  },
  {
    question: 'Can temporary installation be interconnected with circuits of permanent installation?',
    options: ['Never', 'Yes, only with special permission', 'Yes, without any permission', 'No'],
    answer: 1,
  },
  {
    question: 'Except for automobile heater receptacle, all receptacles installed outdoors and within ____ m of finished grade shall be protected with GFCI of class A type?',
    options: ['3.2m', '2.3m', '2.5m', '4.2m'],
    answer: 2,
  },
  {
    question: 'What reflects the direction of light on a light fixture?',
    options: ['Conductor', 'Reflector', 'Radiaor', 'Semi-conductor'],
    answer: 1,
  },
  {
    question: 'When can lockout be done?',
    options: ['When machine is in operation and broken.', 'When machine is not in operation', 'When machine is broken', 'When machine is not broken'],
    answer: 0,
  },
  {
    question: 'How should you terminate and splice aluminum conductors?',
    options: ['Brush clean only', 'Brush clean and use antioxidant', 'Use antioxidant only', 'Use a cleaning agent'],
    answer: 1,
  },
  {
    question: 'How will you connect aluminum lug to copper bus bar?',
    options: ['Helical spring washer or conical spring washer', 'flat steel washer', 'steel washer', 'bolts or studs'],
    answer: 0,
  },
  {
    question: 'Phase to phase is 208 volt. What is phase to ground voltage in a balanced three-phase, 4 wire Wye circuit?',
    options: ['110V', '120V', '105V', '150V'],
    answer: 1,
  },
  {
    question: 'When using a multi meter what should you do first?',
    options: ['Clean it', 'Restart it', 'Check continuity', 'Check wires'],
    answer: 2,
  },
  {
    question: 'When is the final inspection done?',
    options: ['When only circuits ar energized', 'When at least two wires are done', 'When all wires are connected', 'Final inspection is done when all circuits are energized and wiring is done.'],
    answer: 3,
  },
  {
    question: 'How can you maintain constant torque in Variable Frequency Drive?',
    options: ['Voltage/Frequency', 'Only Voltage', 'Only Frequency', 'With Reflector'],
    answer: 0,
  },
  {
    question: 'Which code dictates installation requirements of fire alarm system?',
    options: ['National Building', 'Canada Building', 'National Building Code of Canada.', 'Code of Canada'],
    answer: 2,
  },
  {
    question: 'Which drawing gives you information on plumbing parts?',
    options: ['Mechanical drawing.', 'Electrical drawing', 'Electronic drawing', 'Plumbing drawing'],
    answer: 3,
  },
  {
    question: 'At what location, communication jacks cannot be installed in a dwelling unit?',
    options: ['In Kitchen', 'In washroom', 'In living room', 'In office'],
    answer: 1,
  },
  {
    question: 'In emergency systems, how should audible trouble signals be wired?.',
    options: ['With visual trouble signals', 'With an emergency power supply', 'Such that they can be silenced when needed to', 'With a red warning and trouble light'],
    answer: 2,
  },
  {
    question: 'Minimum Spaces to be left in a 200amp single dwelling panel for future breakers:',
    options: ['1', '2', '4', '6'],
    answer: 2,
  },
  {
    question: 'Where the ground must be terminated on a delta wye transformer?',
    options: ['At X0 point', 'At X1 point', 'Use a ground lug', 'At the chassis'],
    answer: 0,
  },
  {
    question: 'If the disconnecting means for air conditioner motor is not lockable, then it must be within sight and not further away than:',
    options: ['3 m', '5 m', '9 m', '10 m'],
    answer: 0,
  },
  {
    question: 'At the end of a project who keeps the as built drawings and commissioning documentation?',
    options: ['The Electrical Contractor', 'The Builder', 'The Engineer', 'The Owner'],
    answer: 3,
  },
  {
    question: 'An SCR may be turned on by the following methods. Which is the preferred method?',
    options: ['A high rate of change in anode to cathode voltage', 'Anode to cathode voltage exceeding breakover voltage', 'Pulsing the gate with a positive pulse while applying a forward bias.', 'Allowing the SCR to get too hot.'],
    answer: 1,
  },
  {
    question: 'After splicing a cable, when using heat shrink to reinstate the insulation what is the minimum degree of insulation resistance the heat shrink must provide?',
    options: ['80%', '90%', '100%', '110%'],
    answer: 2,
  },
  {
    question: 'A relay or contactor consist of the following basic components:',
    options: ['Core, armature, contacts', 'Contacts, springs, coil', 'Core, contacts, coil', 'Core, armature, coil'],
    answer: 3,
  },
  {
    question: 'What should be used to clean a flame sensor on a precision boiler?',
    options: [' Sand paper', 'Steel wool', ' Emery cloth', 'Stone'],
    answer: 1,
  },
  {
    question: 'As load is applied to a synchronous motor, the angle between the center of the rotating magnetic pole on the stator and the center of the rotor pole will increase. This angle is referred to as the ___________angle.',
    options: ['Displacement', 'Power Factor', 'Torque', 'Slip'],
    answer: 3,
  },
  {
    question: '___________ will safely shut down a domestic forced air furnace should the plenum temperature becomes too high.',
    options: ['Auxiliary contact', 'Thermocouple', 'Damper', 'Fan limit switch'],
    answer: 3,
  },
  {
    question: 'What direction does a DC shaded pole motor rotate?',
    options: ['Clockwise from the armature end', 'Anticlockwise from the armature end', 'Clockwise from the commutator end', 'Anticlockwise from the commutator end'],
    answer: 0,
  },
  {
    question: 'Why do we need to seal a conduit installed in a Zone 0 location?',
    options: ['Prevent the passage of gases or vapors through the conduit system.', 'Prevent dust or any other item from entering the system.', 'An explosion from occurring within the system.', 'Protects from an explosion in the surrounding.'],
    answer: 0,
  },
  {
    question: 'What device is used for measuring insulation resistance?',
    options: ['Megaohmmeter', 'Voltmeter', 'Wattmeter', 'Transducer'],
    answer: 0,
  },
  {
    question: 'How often must the emergency system in an apartment building be checked?',
    options: ['Once every year', 'Once every month', 'Twice a year', 'Every other month'],
    answer: 1,
  },
  {
    question: 'It is imperative that the impedance to ground of individually isolated branch circuits in patient care areas be tested at regular intervals, and that maintenance procedures be instituted for the system and the equipment connected to it as necessary to limit the hazard index to ________mA.',
    options: ['12', '10', '2', '1'],
    answer: 2,
  },
  {
    question: 'When the receptacles in a patient care environment are supplied from ____ branch circuits in the same raceway, a single equipment bonding conductor shall be permitted to shared by the circuits.',
    options: ['2 wire', '3 wire', 'Three phase', 'Delta connected'],
    answer: 0,
  },
  {
    question: 'The best starting method in terms of reducing the starting current while maintaining starting torque is:',
    options: ['Wound rotor starting.', 'Autotransformer starting.', 'Wye-delta starting.', 'Part-winding starting.'],
    answer: 0,
  },
  {
    question: 'In a Wye configuration where will the voltmeter read 208V when phase to ground voltmeter reads 120V?',
    options: ['Line A to ground', 'Line B to ground', 'Line C to neutral', 'Line A to Line C'],
    answer: 3,
  },
  {
    question: 'How is a visible or object line represented on a drawing?',
    options: ['A dashed line', 'A solid dark line', 'A rectangle dotted line', 'A zig zag line'],
    answer: 1,
  },
  {
    question: 'In case of a 15A branch circuit supplying fluorescent lights at 347V, what must the circuit breaker be labeled as?',
    options: ['DWS', 'Non-IC', 'IC', 'SWD'],
    answer: 3
  },
  {
    question: 'Under what conditions can metering equipment be connected on the supply side of a service box?',
    options: ['The supply exceeds 300v between conductors and service is 200A.', 'The supply does not exceed 300v between conductors and service is 200A', 'The supply does not exceed 300v and service is 600A indoor location.', 'The supply exceeds 300v and service is 600A outdoor location.'],
    answer: 1,
  },
  {
    question: 'Out of the following devices, which device has two inputs coming in at the same time?',
    options: ['In exit light', 'In VFD', 'In data communication box', 'In transfer switch'],
    answer: 3,
  },
  {
    question: 'A bonding connection shall be made at every non-metallic outlet box for any fitting or device that requires connection to a bonding conductor.',
    options: ['True', 'False', '', ''],
    answer: 0,
  },
  {
    question: 'If you install an instantaneous trip circuit breaker, it will protect a circuit from:',
    options: ['Overloads or short circuits.', 'Continuous operation.', 'Short circuits only.', 'Overloads only.'],
    answer: 2,
  },
  {
    question: 'The maximum amount of short circuit current that a transformer can withstand depends upon the:',
    options: ['Continuous current rating of the transformer.', 'Inrush current of the transformer.', 'Interrupting rating of the fuse.', 'KVA rating of the transformer and percentage impedance.'],
    answer: 3,
  },
  {
    question: 'An overload heater has a maximum rating that is based on motors___________________',
    options: ['Resistance.', 'Start up current.', '300% of full load current.', 'Name plate service factor and current.'],
    answer: 3,
  },
  {
    question: 'The bonding conductor to conduits, cabinets, equipment, and the like can be attached by means that depend on solder.',
    options: ['True', 'False', '', ''],
    answer: 1,
  },
  {
    question: 'What type of cable is used to wire an annunciator panel in a fire alarm system?',
    options: ['TECK 90', 'FAS 90', 'NMDH', 'OFNP'],
    answer: 1,
  },
  {
    question: 'A 45 micro-farad, 347V capacitor has gone faulty and needs to be replaced. The original capacitor size is not available, what size capacitor is suitable to use as the replacement?',
    options: ['45 micro farad, 250V', '35 micro farad, 347V', '55 micro farad, 120V', '45 micro farad, 120V'],
    answer: 2,
  },
  {
    question: 'How often should a visual inspection be done on high voltage gloves?',
    options: ['Weekly', 'Monthly', 'Every 6 months', 'Before every use'],
    answer: 3,
  },
  {
    question: 'The purpose of a ground detection device is:',
    options: ['To disconnect the grounded supply conductors when a fault is detected.', 'To indicate the presence of a ground fault on a 4 wire delta system.', 'To indicate the presence of a ground fault on an isolated supply.', 'To disconnect ungrounded supply conductors when a fault is detected.'],
    answer: 3,
  },
  {
    question: 'The holding contact in a motor magnetic starter is connected:',
    options: ['In series with the start button.', 'In parallel with the start button.', 'In parallel with the operating coil.', 'Directly in series with the stop button.'],
    answer: 1,
  },
  {
    question: 'What prevents a scaffold from collapsing?',
    options: ['Cross braces', 'Out riggers', 'Toe boards', 'Hand rails'],
    answer: 0,
  },
  {
    question: 'What type of protection is required on an outdoor receptacle installed 1m above grade in a single dwelling unit?',
    options: ['AFCI', 'T- receptacle', 'GFCI-Class A type', 'Attachment plug'],
    answer: 2,
  },
  {
    question: 'In a delta wye transformer, which statement is true?',
    options: ['The secondary winding has the lower resistance than primary winding.', 'The primary winding has the lower resistance than secondary winding.', 'The secondary winding has no resistance.', 'KVA rating of primary winding is more than KVA rating of secondary winding.'],
    answer: 0,
  },
  {
    question: 'A contactor controlling a lighting circuit is chattering, what is the possible cause?',
    options: ['Short circuit', 'Rust on magnet faces', 'Abnormal inrush current', 'Voltage is low'],
    answer: 3,
  },
  {
    question: 'What are the 3 fundamental concepts of WHIMS?',
    options: ['Worker education, MSDS, cautionary labeling of containers', 'worker education, safety training and MSDS', 'worker education, cautionary labeling of containers, safety training', ''],
    answer: 0,
  },
  {
    question: 'What is installed first in a VFD?',
    options: ['Rectifier', 'Inverter', 'SCR', 'Surge protection'],
    answer: 3,
  },
  {
    question: 'What type of conductor or cable is most commonly used in wood construction buildings?',
    options: ['NMDU90', 'GTF', 'NMD90', 'PXT'],
    answer: 1,
  },
  {
    question: 'If a single phase capacitor starts motor starts slowly and takes a longer time to reach to its full speed than usual, the reason is that___________.',
    options: ['Capacitor is open.', 'Centrifugal switch is shorted.', 'Centrifugal switch is stuck in the open position.', 'Capacitor has deteriorated from its capacity.'],
    answer: 3,
  },
  {
    question: 'An advantage of synchronous motor is that it can be used to drive a load at a constant speed and also provide____________:',
    options: ['A variable speed option.', 'Power factor correction.', 'Constant horsepower.', 'More efficient operation.'],
    answer: 1,
  },
  {
    question: 'Panel boards used in the sub-division of a main consumer’s service shall be provided with a ____ service box except special permission is granted otherwise.',
    options: ['GCFI protected.', 'Arc fault protected.', 'Separate', 'Grouped'],
    answer: 2,
  },
  {
    question: 'What is the lowest range of current that will usually kill a person?',
    options: ['1-8 mA', '8-15 mA', '100-200 mA', 'Over 200 mA'],
    answer: 2,
  },
  {
    question: 'During the installation of hospital wiring in a three-phase isolated system, circuit conductor for phase A must be identified by colour __________.',
    options: ['Orange', 'Blue', 'Brown', 'Green'],
    answer: 0,
  },
  {
    question: 'In a gasoline dispensing area, with respect to hazardous locations, the space within a dispenser enclosure up to ____m vertically above its base including the space below the dispenser shall be considered to be a Zone 1 location.',
    options: ['2.3', '2.1', '1.2', '0.9'],
    answer: 2,
  },
  {
    question: 'A 120/240V-240/480V, single-phase transformer is connected to 240 V source. The output of this transformer is connected t a load working on 480 V. Out of the following 4 configurations ,  which one represents correct installation?',
    options: ['Series-Series', 'Parallel-Parallel', 'Series-Parallel', 'Parallel-Series'],
    answer: 1,
  },
  {
    question: 'A ______ switch of type “Low Water Cut Out” (LWCO) is the most commonly used in a hot water heating system.',
    options: ['Temperature', 'Pressure', 'Light', 'Float'],
    answer: 3,
  },
  {
    question: 'The low voltage circuit of a domestic furnace contains which of the following devices?',
    options: ['Fan control switch, the transformer secondary and the thermostat.', 'Thermostat, gas valve and the transformer secondary.', 'Transformer secondary, blower and the power unit.', 'High limit, power unit and the fan control switch'],
    answer: 1,
  },
  {
    question: 'Define a thermistor:',
    options: ['Highly sensitive furnace control', 'Half wave thermocuple', 'Ohmic varying temperature controlled resistor', 'Double insulated germanium resistor'],
    answer: 2,
  },
  {
    question: 'Which drawing is marked to reflect changes made during construction process?',
    options: ['Structural drawing', 'Mechanical drawing', 'Electrical drawing', 'As-built drawing'],
    answer: 3,
  },
  {
    question: 'What type of motor has a high starting torque?',
    options: ['Spilt phase motor', 'Wound rotor motor', 'Induction motor', 'Synchronous motor'],
    answer: 1,
  },
  {
    question: 'What voltage does nurse call system work at?',
    options: ['12V', '24V', '30V', '120V'],
    answer: 1,
  },
  {
    question: 'Out of three lights in an outlet tester, red light is lit and the other two lights are dark. What could be the possible problem?',
    options: ['Line is open', 'Poor Ground or Poor Neutral', 'Ground is open', 'There is no problem'],
    answer: 1,
  },
  {
    question: 'What type of meter is used to check current in a motor when power is switched on?',
    options: ['Ohmmeter', 'Clamp meter', 'Megger', 'Wattmeter'],
    answer: 1,
  },
  {
    question: 'How does air conditioning function in a room or a building?',
    options: ['uses air from outside to cool the room', 'uses air within the room to cool the room', 'blows hot air inside to cool the room', 'blows cool air outside to cool the room'],
    answer: 0,
  },
  {
    question: 'What should be used to clean a flame sensor on a precision boiler?',
    options: ['Sand paper', 'Wire Wool', 'Emery cloth', ''],
    answer: 1,
  },
  {
    question: 'There is no marking on step down transformer. The current in secondary winding will be:',
    options: ['Less than primary', 'More than primary', 'Equal to primary', 'zero'],
    answer: 1,
  },
  {
    question: 'What sort of motor controller is best suited to a motor that starts, stops and reverses quite often?',
    options: ['3 wire controller', '4 wire controller', 'Over the line controller', 'Drum controller'],
    answer: 1,
  },
  {
    question: 'What switch can be used to control 347V ballast?',
    options: ['Isolated Switch', 'General use switch', 'Knife switch', 'Any switch can be used'],
    answer: 2,
  },
  {
    question: 'While servicing photovoltaic (PV) panel in the field, what is the acceptable practice?',
    options: ['Cover cells with opaque cover', 'Cover cells with plastic cover and ground', 'Operate the solid state isolator', 'Manually operate transfer switch'],
    answer: 0,
  },
  {
    question: 'If a 3 phase motor has a blown fuse on one phase and motor is started, what will happen?',
    options: ['Nothing', 'Motor will start and run in a 2 phase condition for a short period of time', 'Motor overload will trip', 'Motor will run as per usual'],
    answer: 1,
  },
  {
    question: 'What starter is best used for forward reverse in a motor?',
    options: ['3 point starter', '4 point starter', 'Across the line starter', 'Drum Controller'],
    answer: 3,
  },
  {
    question: 'What else is part of electrical maintenance?',
    options: ['how the work is done', 'who does the work', 'where to do the work', 'when the work is to be completed by'],
    answer: 0,
  },
  {
    question: 'What is the purpose of a shunt field in a DC motor?',
    options: ['excite the field windings', 'prevent from starting', 'Stop the motor', 'rotate the motor backwards'],
    answer: 0,
  },
  {
    question: 'At existing outlets where grounding means doesnt exist in a receptacle enclosure, grounding type receptacle without a bonding conductor shall be permitted to install, provided that each receptacle is:',
    options: ['Protected by AFCI', 'Protected by GFCI', 'Protected by a switch', 'Extra protection is not needed'],
    answer: 1,
  },
  {
    question: 'What does WHIMIS stand for:',
    options: ['Workplace hazardous management information system', 'Workplace hazardous management information service', 'Workplace hazardous material information system', 'Workplace hazardous material information services'],
    answer: 2,
  },
  {
    question: 'How many watts per meter are added for show window lighting demand calculations:',
    options: ['250', '450', '650', '800'],
    answer: 2,
  },
  {
    question: 'Define thermography:',
    options: ['Tracing circuits with heat guns', 'Designing convection flow thru a house for a furnace', 'Creating an electrical graph using temperature difference', 'Graphing out linear expansion for different material used in electrical installs'],
    answer: 2,
  },
  {
    question: 'During normal operation, a single-phase ventilated motor overheats and causes the overloads to trip. What is the cause?',
    options: ['The motor housing is full of dust', 'The motor centrifugal switch is open', 'Undersized overcurrent protection', 'Uneven voltage supply from the utility'],
    answer: 0,
  },
  {
    question: 'Emergency-signaling equipment is located in a shower of a basic care area. Which type of additional protection is required?',
    options: ['Anti-corrosion', 'Ground fault', 'Electrical isolation', 'Water tightness'],
    answer: 3,
  },
  {
    question: 'What are the requirments for an on-site transfer switch supplying a fire pump?',
    options: ['It is protected by AFCI.', 'It is protected by GFCI.', 'It provides power to all emergency circuit.', 'It provides power solely for the pump.'],
    answer: 0,
  },
  {
    question: 'What causes a Class A ground fault circuit breaker to disconnect the supply to a circuit?',
    options: ['Low voltage, overload and ground fault', 'Short circuit, reverse current and ground fault', 'Overload, short circuit and ground fault.', 'Open circuit, low voltage and ground fault'],
    answer: 2,
  },
  {
    question: 'What is required when outdoor receptacles are installed within 2.5 m of grade level on a single family dwelling?',
    options: ['A solid cover must be provided', 'The circuit must be GFCI protected', 'An insulated ground conductors must be used', 'The enclosures must be provided with drain holes'],
    answer: 0,
  },
  {
    question: 'What is the minimum height from the floor level that emergency lighting unit must be installed?',
    options: ['1.5 m', '2.0 m', '2.5 m', '3.0 m'],
    answer: 1,
  },
  {
    question: 'What is the multiplier that must be used to multiply the FLA of 3 phase motor while calculating overload protection size when service factor is not marked ?',
    options: ['Parallel overload protection', '115% of rated current', '125% of rated current', 'No overload protection required'],
    answer: 1,
  },
  {
    question: 'Where is the emergency supply circuit breaker located when installing fire pump?',
    options: ['Downstream of the main supply', 'After the transfer switch', 'In parallel with the jockey pump', 'Upstream of the main supply'],
    answer: 0,
  },
  {
    question: 'Which condition must be met when installing a temporary service conduits?',
    options: ['The service may not exceed 100 A', 'The service equipment must be lockable.', 'The lightning branch circuits must be combined with power branch circuits', 'A maximum of two permanent power branch circuit may be fed from a temporary distribution centre'],
    answer: 1,
  },
  {
    question: 'Which type of heating system requires ground fault circuit protection?',
    options: ['An electric unit heater', 'A baseboard heater', 'A central electric furnace', 'A heating cable set'],
    answer: 3,
  },
  {
    question: 'There is inconsistency in voltage readings on a 600/347V grounded AC system. what is done first?',
    options: ['check the transformer tap setting', 'check the turn ratio on each phase', 'check the load on each phase', 'check the XO grounding connections'],
    answer: 3,
  },
  {
    question: '600V is measured at the supply side of consumers service. what is the minimum allowable voltage at a HVAC unit rated for 600V operation?',
    options: ['558V', '570V', '582V', '600V'],
    answer: 2,
  },
  {
    question: 'A 150 KVA transformer is to be relocated within an electrical room. where is the rigging connected?',
    options: ['to the bus bar', 'to the transformer frame', 'to the conduit holes', 'to the attachment points'],
    answer: 3,
  },
  {
    question: 'A CMP communication cable is being installed in a ceiling space used as an air-handling plenum. when the cable is supplying a public address system, what is the maximum conductor temperature rating?',
    options: ['60 degrees celsius', '75 degrees celsius', '90 degrees celsius', '105 degrees celsius'],
    answer: 0,
  },
  {
    question: 'a dry-core ventilated transformer is sitting on the floor in proximity to a plywood wall. what is the minimum seperation distance between the transformer and wall?',
    options: ['6mm', '50mm', '150mm', '300mm'],
    answer: 3,
  },
  {
    question: 'A line voltage thermostat controls heating equipment. what is the minimum current rating of the thermostat?',
    options: ['75%', '80%', '100%', '125%'],
    answer: 2,
  },
  {
    question: 'A maintenance receptacle is installed on a rooftop of a building. which CSA configuration is required?',
    options: ['5-15R', '5-20R', '6-15R', '6-20R'],
    answer: 1,
  },
  {
    question: 'A metal faceplate is installed on a box containing a receptacle. what is the minimum allowable distance between the receptacle face and the metal faceplate?',
    options: ['0.4mm', '0.675mm', '4.0mm', '6.750mm'],
    answer: 0,
  },
  {
    question: 'A pole mounted flood light is terminated using open taps with exposed wiring. what connection is required?',
    options: ['Exothermic', 'split-bolt', 'insulated conductor', 'screw type connection'],
    answer: 2,
  },
  {
    question: 'A renewable DC supply system is equipped with a ground fault protection device. How is the grouded conductor connected to the grounding electrode?',
    options: ['by grouding directly to the electrode via the DC ground fault protection devices', 'by grounding to the service neutral via the DC ground fault protection device', 'by grouding through the DC ground fault protection device or leaving the ground floating', 'by grounding directly to the electrode or through the DC supply'],
    answer: 0,
  },
  {
    question: 'A rigid steel counduit is used for mechanical protection for an AC grounding conductor. What is done to the conduit?',
    options: ['Connect to the grounding conductor at one end only', 'connect to the grounding conductor at both ends', 'connecting to the bonding conductor at the service', 'connect to the upstream side of the grounding conductor'],
    answer: 1,
  },
  {
    question: 'A rooftop-mounted photovaltaic system is to be installed. After determining demand load, what is the next step?',
    options: ['install rooftop mounting rails', 'determine conductor lenghts', 'perform shading calculations', 'mount combiner box and charge controller'],
    answer: 2,
  },
  {
    question: 'A shielded cable is installed between the PLC analog output card and a sensor. where is the shield bonded?',
    options: ['at both the PLC panel and the AC system ground', 'at both AC system ground and the sensor', 'to the dedicated terminal at the PLC panel', 'at either the AC system ground or the PLC panel'],
    answer: 2,
  },
  {
    question: 'A zero sequnce filter is used on a 600V to 208/120V 3 phase system. The neutral conductor to the zero sequence filter is running hot. What is the cause?',
    options: ['The winding on one of the phase is open', 'The zero sequnce filter is ungrounded.', 'The neutral is sized to small', 'The harmonic load is too low'],
    answer: 2,
  },
  {
    question: 'After de-energizing the circuit and verifying zero potential, what is the next step to test the insulation of a heat trace cable set?',
    options: ['connect heating lead conductors to ground', 'isolate the heat trace cable from circuit conductor', 'connect an insulation tester between the heating leads', 'test the resistance of the temperature probe'],
    answer: 1,
  },
  {
    question: 'An AC generator in a plant did not start during a power outage. what is the cause?',
    options: ['the utility breaker is open', 'the output breaker is open', 'the transfer switch was left in the auto position', 'the battery charger failed to charge the batteries'],
    answer: 3,
  },
  {
    question: 'An AC generator is installed to supply emergency power for life safety system. what is the raceway installation requirements for the conductor supplying associated equipment?',
    options: ['installed in a rigid metal conduit with mechanical protection', 'installed in a rigid PVC conduit with mechanical protection', 'embedded in concrete providing 30 min fire rating', 'embedded in concrete prividing 60 min fire rating'],
    answer: 2,
  },
  {
    question: 'An emergency battery bank is used for emergency lighting. how is it connected to a 347V AC source?',
    options: ['by installing a rated twist lock receptacle', 'by installing a permanent connection to the supply', 'by installing an attachment plug and receptacle', 'by installing an attachment plug and using a flexible cord'],
    answer: 1,
  },
  {
    question: 'An occupancy sensor controls the heating system of a building. the internal temperature 15 degrees celsius while occupied.The occupied set point temperature is programmed for 21 degrees celsius. What is the cause?',
    options: ['the thermostat is in heat only', 'occupancy sensor is failed open', 'sensitivity setting of sensor is set too high', 'the thermostat is failed closed'],
    answer: 2,
  },
  {
    question: 'An overload heater will not reset. What is the cause?',
    options: ['Control fuse has blown', 'solder pot has cooled', 'solder pot has melted', 'control relay is open'],
    answer: 2,
  },
  {
    question: 'during initial startup of an AC generator, the phase sequency of the output voltage is incorrect. What is done to achieve the proper phase sequence?',
    options: ['Reverse the postion of the pole pieces', 'rewind the generator', 'reverse the polarity of the exciter', 'interchange any 2 leads'],
    answer: 3,
  },
  {
    question: 'During maintenance of a 600V ungrounded system. it is observed that on the ground fault detection device, the light for phase B has gone out. what is the voltage reading be from phase B to ground?',
    options: ['0V', '120V', '347V', '600V'],
    answer: 0,
  },
  {
    question: 'During the installation of an in-floor heating cable set, the cable as tested on the reel and then tested after the installation. Before energizing, it was noted that the cable resistance is significantly lower than the than the pre-installation test. What is the cause?',
    options: ['The in-floor sensor has failed open', 'the in-floor sensor has failed closed', 'A staple has penetrated the heating cable', 'The heating cable spacing is incorrect'],
    answer: 2,
  },
  {
    question: 'How is a high-level switch wired to turn on a pump-motor? ( Diagram Missing)',
    options: ['NC in series with the coil', 'NO in series with the coil', 'NC in parallel with the coil', 'NO in parallel with the coil'],
    answer: 1,
  },
  {
    question: 'How is noise mitigated on the supply side of a VFD?',
    options: ['by increasing the rating of the line reactor', 'by increasing the clamping voltage on the MOV', 'by increasing the voltage threshold of the SCR', 'by increasing the acceleration ramp in the drive'],
    answer: 1,
  },
  {
    question: 'How many overload devices are required to protect a 1/3 HP 230V single phase motor?',
    options: ['0', '1', '2', '3'],
    answer: 0,
  },
  {
    question: 'In a 3 wire motor control circuit, the start button energizes the coil, but it drops out when the start button is released.What is the cause?',
    options: ['Faulty holding contact', 'tripped overload contact', 'faulty magnetic coil', 'incorrect coil voltage'],
    answer: 0,
  },
  {
    question: 'In cold weather, the prime mover engine will not start on an AC generator, what is the cause?',
    options: ['the bypass swith is in test mode', 'the oil viscosity in the engine is to low', 'the radiator damper did not open', 'the battery case heater failed'],
    answer: 3,
  },
  {
    question: 'On a photovoltaic DC supply circuit, what is required to be grounded in a 2 wire system?',
    options: ['no conductors', '1 conductor', '2 conductors', 'common conductor'],
    answer: 1,
  },
  {
    question: 'What will happen to the motor when there is a blown fuse on line 2?',
    options: ['It will overheat', 'It will not Start', 'It will only start when button 1 is held in', 'it will start, and run in a single phase condition'],
    answer: 3,
  },
  {
    question: 'A thermogrphic image of a 4-pole lighting contactor displays X light brighter. what is the problem?',
    options: ['contacts are fused', 'contacts are open', 'contacts are pitted', 'contacts are oversized'],
    answer: 0,
  },
  {
    question: 'There are 2 exterior receptacles that are 1m high from floor level and 3 plugs that are 3m high from floor level. How many exterior receptacle must be class A GFCI protected?',
    options: ['Only first two', 'Only last two', 'All 4 receptacles ', 'None of them'],
    answer: 0,
  },
  {
    question: 'In the 120/240V system supplying a 240V heating load. fuse in line 2 is not blown. what voltage reading confirms that the fuse in line 1 is blown',
    options: ['0V', '120V', '208V', '240V'],
    answer: 3,
  },
  {
    question: 'The labeling on a fall arrest harness is no longer legible. what is done?',
    options: ['continue to use if no visible defects are found', 'Tag it out of service', 'notify supervisor and return to storage', 'make a new label and return to service'],
    answer: 1,
  },
  {
    question: 'The thermostat controlling a central heater is calling for heat. what happens if the circulating fan fails to start?',
    options: ['the high limit switch opens and the solenoid de-energizes', 'the high limit switch remains closed and the solenoid remains energized', 'the high limit switch opens and the solenoid remains energized', 'the high limit switch remains closed and the solenoid de-energized'],
    answer: 0,
  },
  {
    question: 'what is a hazard when using a grinder to cut metal support components to lenght?',
    options: ['arc flashes', 'off gases', 'contaminations', 'sparks discharge'],
    answer: 3,
  },
  {
    question: 'what is done to avoid random nuisance tripping of a class A GFCI receptacle?',
    options: ['keep identified conductor isolated from ground on the load side of the GFCI.', 'keep identified conductor isolated from ground on the line side of the GFCI', 'Ensure that the line and load connections are not reversed on the GFCI', 'The GFCI must be coordinated with overcurrent protection devices'],
    answer: 0,
  },
  {
    question: 'what is the color code for the 3 phase system',
    options: ['red black blue', 'red black white', 'blue black red', 'red white black'],
    answer: 0,
  },
  {
    question: 'What is the first step when performing a group lock-out procedure?',
    options: ['install a lock-out hasp', 'identify the potential energy sources', 'demonstrate zero energy potential', 'complete the lock-out log'],
    answer: 1,
  },
  {
    question: 'What is the maximum distance between a central electric heating unit and its disconnecting means?',
    options: ['it must be within sight and within 3m', 'it must be in an adjacent locked room and within 3m', 'it must be within sight and within 9m', 'it must be in an adjacent locked room and within 9m'],
    answer: 2,
  },
  {
    question: 'What is the minimum height for the point of attachment where conductors are run above areas accessible by pedestrians?',
    options: ['3.5m', '4.5m', '5m', '5.5m'],
    answer: 0,
  },
  {
    question: 'what is the minimum requirement when connecting a 100A lighting panel, located 5m away, to a 600A splitter?',
    options: ['100A conductor with fusible disconnect 1m after the splitter', '100A conductor with fusible disconnect adjacent to the panel', '600A conductor with fusible disconnect 1m after the splitter', '600A conductor with fusible disconnect adjacent to the panel'],
    answer: 1,
  },
  {
    question: 'what is the minimum size staple required to support a 14/3 NMD90 on a vertical wooden stud?',
    options: ['S1', 'S2', 'S3', 'S4'],
    answer: 1,
  },
  {
    question: 'What is the minimum work space required when installing a low voltage MCC?',
    options: ['1m', '1.5m', '1.7m', '2.2m'],
    answer: 0,
  },
  {
    question: 'What is the procedures for an initial startup for a VFD?',
    options: ['program relevant parameter, bump test, energize VFD, then run.', 'program relevant parameters, energie VFD, bump test, then run.', 'Energize VFD, bump test, program relevant parameters, then run.', 'energize VFD, program relevant parameters, bump test, then run.'],
    answer: 3,
  },
  {
    question: 'What is the starting sequence for rooftop make-up air unit?',
    options: ['return fan starts, dampers open, end switch closes, then make-up air', 'Supply fan starts, damper opens, end switch closes, then make-up air', 'make-up air starts, damper opens, end switch closes, then return fan starts', 'Exhaust fan starts, damper opens, end switch closes,then make-up air starts'],
    answer: 3,
  },
  {
    question: 'What is used to attach 160A disconnect to a strut channel?',
    options: ['self tapping screws and washers', 'Lag bolts and spring nuts', 'threaded rods and nylon bolts', 'Bolts and spring nuts'],
    answer: 3,
  },
  {
    question: 'what is used to identify hot spots in electrical connections?',
    options: ['megohmeter', 'hi-pot tester', 'non-contact voltage detector', 'infrared camera'],
    answer: 3,
  },
  {
    question: 'When a magnetic starter is installed with a holding contact connected in parallel with the start button, which type of protection is provided?',
    options: ['low voltage protection', 'overvoltage protection', 'low current protection', 'overcurrent protection'],
    answer: 0,
  },
  {
    question: 'when commissioning a 15A countertop split receptacle, the circuit breaker trips instantly. what is done?',
    options: ['verify if the tab is broken on the neutral side of the receptacle', 'verify if the tab is broken on the ungrounded side of the receptacle', 'verify if the receptacle is bonded', 'verify the phasing of the breaker in the panel'],
    answer: 1,
  },
  {
    question: 'when commissioning a new 4-20mA pressure transmitter, the circuit is in fault. what is checked first?',
    options: ['circuit voltage', 'circuit wattage', 'circuit resistance', 'circuit current'],
    answer: 0,
  },
  {
    question: 'When cutting aluminum cable tray with an angle grinder, what additional PPE is required?',
    options: ['flame retardant coveralls', 'face shield', 'double hearing protection', 'respirator'],
    answer: 1,
  },
  {
    question: 'When installing a back-fed breaker from a photovoltaic inverter into a residential panel, where is the breaker panel located?',
    options: ['At the adjacent side to the incoming feeder', 'At the opposite end from the incoming feeder', 'At any available space in the panel', 'At a dedicated sub panel'],
    answer: 1,
  },
  {
    question: 'When installing a central heating unit, which ungrounded conductors must the disconnecting means open?',
    options: ['conductors supplying the controller', 'conductors supplying the central unit', 'conductors supplying either the controller or central unit', 'conductors supplying both the controller and central unit'],
    answer: 3,
  },
  {
    question: 'when is rough-in inspection required?',
    options: ['before any portion of work is concealed', 'before the main service is installed', 'after the devices are installed', 'after the grounding is completed'],
    answer: 0,
  },
  {
    question: 'when performing a lock-out procedures, what must be verified to work on the equipment?',
    options: ['emergency stops have been activated', 'source of energy has been isolated', 'supervisor has been given a lock-out key', 'circuit have been turned off'],
    answer: 1,
  },
  {
    question: 'When performing regular testing of a GFCI receptacle on a pool deck, the receptacle fails to reset. What is the cause?',
    options: ['faulty receptacle', 'overvoltage to the receptacle', 'receptacle is not grounded', 'open ground'],
    answer: 0,
  },
  {
    question: 'When terminating CATV cable, what is done?',
    options: ['Strip outer jacket and and dielectric, fold back shield and braid, install connector, then crimp connector', 'Strip outer jacket only, install connector, crimp connector, then remove the excess shield and braid', 'cut the center conductor to lenght, fold back shield and braid, install connector, then crimp connector', 'cut the center conductor to lenght, install connector, crimp connector, then remove the excess shield and braid'],
    answer: 1,
  },
  {
    question: 'when using RA90 in an overhead service, what is done at the service head location after striping the aluminum sheath',
    options: ['Install a weather head', 'Install an aluminum plate', 'seal the cable', 'bond the sheaths'],
    answer: 3,
  },
  {
    question: 'when working on the secondary circuit of a transformer, which hazard is present for the available fault current?',
    options: ['pinch points', 'arc flashes', 'toxic fumes', 'hot surfaces'],
    answer: 1,
  },
  {
    question: 'where is the information on how to handle or store hazardous material?',
    options: ['supplier label', 'safety data sheet', 'safe work permit', 'shipping label'],
    answer: 1,
  },
  {
    question: 'Which anchor is used to attach a surface mounted electrical panel to the wall?',
    options: ['drop-in insert', 'toggle bolt', 'Drywall fastener', 'lag bolt'],
    answer: 1,
  },
  {
    question: 'Which authority presides over the requirements of exits signs?',
    options: ['canadian electrical code', 'local electrical insection department', 'canadian standards association', 'national building code of canada'],
    answer: 3,
  },
  {
    question: 'Which portion of extra-low voltage decorative area lighting is grounded?',
    options: ['The light fixture', 'The transformer primary', 'The transformer secondary', 'The base of the light support'],
    answer: 1,
  },
  {
    question: 'which terminal is grounded on a wye-connected secondary of a 600V to 120/208V dry type transformer?',
    options: ['H0', 'H1', 'X0', 'X1'],
    answer: 2,
  },
  {
    question: 'who coordinates the schedule of subtrades on a job site?',
    options: ['inspector', 'design engineer', 'foreman', 'general contractor'],
    answer: 3,
  },
  {
    question: 'Emergency-signaling equipment is located in a shower of a basic care area. Which type of additional protection is required?',
    options: ['Anti-corrosion', 'Ground fault', 'Electrical isolation', 'Water tightness'],
    answer: 3,
  },
  {
    question: 'What are the requirments for an on-site transfer switch supplying a fire pump?',
    options: ['It is protected by AFCI.', 'It is protected by GFCI.', 'It provides power to all emergency circuit.', 'It provides power solely for the pump.'],
    answer: 3,
  },
  {
    question: 'What causes a Class A ground fault circuit breaker to disconnect the supply to a circuit?',
    options: ['Low voltage, overload and ground fault', 'Short circuit, reverse current and ground fault', 'Overload, short circuit and ground fault.', 'Open circuit, low voltage and ground fault'],
    answer: 2,
  },
  {
    question: 'What is required when installing a communication circuit through a fire separation?',
    options: ['The fittings shall have seals', 'The opening shall be closed or sealed', 'The circuit must be clearly identified as a communication circuit', 'The circuit must be protected for a minimum of 1 m on either side of the fire separation'],
    answer: 1,
  },
  {
    question: 'What is required when outdoor receptacles are installed within 2.5 m of grade level on a single family dwelling?',
    options: ['A solid cover must be provided', 'The circuit must be GFCI protected', 'An insulated ground conductors must be used', 'The enclosures must be provided with drain holes'],
    answer: 1,
  },
  {
    question: 'What is the minimum height from the floor level that emergency lighting unit must be installed?',
    options: ['1.5m', '2.0m', '2.5m', '3.0m'],
    answer: 1,
  },
  {
    question: 'What is the minimum requirements when connecting a 100 A lighting circuit, 25 m away ,  to a 600 A splitter?',
    options: ['100 A conductors with fusable disconnected at the splitter', '100 A conductors with fusable disconnected at the panel', '600 A conductors with fusable disconnected at the splitter', '600 A conductors with fusable disconnected at the panel'],
    answer: 2,
  },
  {
    question: 'What is the minimum time allowed for the emergency standby supply to maintain the emergency lighting loads?',
    options: ['15 min.', '30 min.', '60 min.', '90 min.'],
    answer: 1,
  },
  {
    question: 'What is the multiplier that must be used to multiply the FLA of 3 phase motor while calculating overload protection size when service factor is not marked ?',
    options: ['Parallel overload protection', '115% of rated current', '125% of rated current', 'No overload protection required'],
    answer: 1,
  },
  {
    question: 'When determining conductor size, what is the demand factor of 2 KW electric baseboard heat controlled by individual thermostat in a single dwelling unit?',
    options: ['25%', '75%', '80%', '100%'],
    answer: 3,
  },
  {
    question: 'Where is the emergency supply circuit breaker located when installing fire pump?',
    options: ['Downstream of the main supply', 'After the transfer switch', 'In parallel with the jockey pump', 'Upstream of the main supply'],
    answer: 0,
  },
  {
    question: 'Which condition must be met when installing a temporary service conduits?',
    options: ['The service may not exceed 100 A', 'The service equipment must be lockable.', 'The lightning branch circuits must be combined with power branch circuits', 'A maximum of two permanent power branch circuit may be fed from a temporary distribution centre'],
    answer: 1,
  },
  {
    question: 'Which service conductor demand factor is used for the lighting, heating and power loads not located in the dwelling unit of a twelve-unit apartment building?',
    options: ['65%', '100%', '85%', '75%'],
    answer: 3,
  },
  {
    question: 'Which type of heating system requires ground fault circuit protection?',
    options: ['An electric unit heater', 'A baseboard heater', 'A central electric furnace', 'A heating cable set'],
    answer: 3,
  },
  {
    question: 'Coil of a motor control circuit if over heating. What do you think is the problem?',
    options: ['Broken shading coil', 'Insufficient Tip pressure', 'Dirt or rust on pole faces', 'Sustained overload'],
    answer: 2,
  },
  {
    question: 'Cables included as part of photovoltaic modules shall be permitted for the interconnection of photovoltaic modules within an array, provided that the photovoltaic source and output circuits operate at a maximum system voltage of __________V or less.',
    options: ['6V', '12V', '24V', '30V'],
    answer: 3,
  },
  {
    question: 'Who is responsible  to provide MSDS sheet for any material used on a construction site?',
    options: ['Owner', 'Apprentice', 'Contractor', 'Supplier'],
    answer: 3,
  },
  {
    question: 'What should an electrician do when a safety harness does not work?',
    options: ['Call the supplier and report', 'Fix it and then use it', 'You can still use it', 'Mark it and put it out of service'],
    answer: 3,
  },
  {
    question: 'Coil of a motor control circuit if over heating. What do you think is the problem?',
    options: ['Broken shading coil', 'Insufficient Tip pressure', 'Dirt or rust on pole faces', 'Sustained overload'],
    answer: 2,
  },
  ]



  
const setupScreen = document.getElementById('cec-setup-screen');
const quizScreen = document.getElementById('quiz-screen');
const sectionOptionsEl = document.getElementById('section-options');
const countButtons = document.querySelectorAll('[data-question-count]');
const progressEl = document.getElementById('progress');
const questionEl = document.getElementById('question');
const answersEl = document.getElementById('answers');
const nextBtn = document.getElementById('next-btn');
const previousBtn = document.getElementById('previous-btn');
const resetBtn = document.getElementById('reset-btn');
const notesToggleBtn = document.getElementById('notes-toggle-btn');
const notesPanel = document.getElementById('notes-panel');
const noteInput = document.getElementById('note-input');
const saveNoteBtn = document.getElementById('save-note-btn');
const notesList = document.getElementById('notes-list');

let quizQuestions = [];
let currentQuestion = 0;
let score = 0;
let answered = false;
let quizFinished = false;
let selectedSection = '';
let answerSelections = [];
let notes = JSON.parse(localStorage.getItem('redSealNotes') || 'null') || ['Vou passar no Red Seal 2026'];

const sectionNames = [...new Set(questions.map((question) => question.section || 'General CEC 2024'))];
selectedSection = sectionNames[0];

function saveNotes() {
  localStorage.setItem('redSealNotes', JSON.stringify(notes));
}

function renderNotes() {
  notesList.innerHTML = '';

  if (notes.length === 0) {
    notesList.innerHTML = '<p class="empty-notes">Nenhuma anotação ainda.</p>';
    return;
  }

  notes.forEach((note, index) => {
    const noteItem = document.createElement('div');
    noteItem.className = 'note-item';

    const noteText = document.createElement('span');
    noteText.textContent = note;

    const deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.className = 'delete-note-btn';
    deleteButton.textContent = 'Excluir';
    deleteButton.addEventListener('click', () => {
      notes.splice(index, 1);
      saveNotes();
      renderNotes();
    });

    noteItem.append(noteText, deleteButton);
    notesList.appendChild(noteItem);
  });
}

notesToggleBtn.addEventListener('click', () => {
  const isOpen = !notesPanel.hidden;
  notesPanel.hidden = isOpen;
  notesToggleBtn.setAttribute('aria-expanded', String(!isOpen));
  if (!isOpen) noteInput.focus();
});

saveNoteBtn.addEventListener('click', () => {
  const note = noteInput.value.trim();
  if (!note) return;

  notes.push(note);
  saveNotes();
  noteInput.value = '';
  renderNotes();
});

function renderSectionOptions() {
  sectionOptionsEl.innerHTML = '';
  sectionOptionsEl.hidden = sectionNames.length <= 1;

  if (sectionNames.length <= 1) {
    return;
  }

  const sections = sectionNames;

  sections.forEach((section) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'section-btn';
    button.textContent = section;
    button.dataset.section = section;
    button.addEventListener('click', () => {
      selectedSection = section;
      sectionOptionsEl.querySelectorAll('.section-btn').forEach((sectionButton) => {
        sectionButton.classList.toggle('active', sectionButton === button);
      });
    });
    sectionOptionsEl.appendChild(button);
  });

  sectionOptionsEl.querySelector('.section-btn').classList.add('active');
}

function shuffleQuestions(questionList) {
  for (let index = questionList.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [questionList[index], questionList[randomIndex]] = [questionList[randomIndex], questionList[index]];
  }
}

function renderQuestion() {
  const item = quizQuestions[currentQuestion];

  if (!item || !Array.isArray(item.options)) {
    progressEl.textContent = 'Question unavailable';
    questionEl.textContent = 'This question could not be loaded.';
    answersEl.innerHTML = '';
    nextBtn.disabled = true;
    return;
  }

  progressEl.textContent = `Question ${currentQuestion + 1} of ${quizQuestions.length}`;
  questionEl.textContent = item.question;
  answersEl.innerHTML = '';

  item.options.forEach((option, index) => {
    if (!option || !option.trim()) return;

    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'answer-btn';
    button.textContent = option;
    button.dataset.index = String(index);
    button.addEventListener('click', () => selectAnswer(index));
    answersEl.appendChild(button);
  });

  answered = answerSelections[currentQuestion] !== null;
  if (answered) {
    displayAnswer(answerSelections[currentQuestion]);
  }
  previousBtn.disabled = currentQuestion === 0;
  nextBtn.disabled = !answered;
  nextBtn.textContent = currentQuestion === quizQuestions.length - 1 ? 'Finish' : 'Next';
}

function displayAnswer(index) {
  const buttons = [...answersEl.querySelectorAll('.answer-btn')];
  const correctIndex = quizQuestions[currentQuestion].answer;

  buttons.forEach((button) => {
    button.disabled = true;
    const buttonIndex = Number(button.dataset.index);

    if (buttonIndex === correctIndex) {
      button.classList.add('correct');
    }
  });

  const selectedButton = buttons.find((button) => Number(button.dataset.index) === index);

  if (index === correctIndex) {
    selectedButton.classList.add('correct');
  } else {
    selectedButton.classList.add('wrong');
  }
}

function selectAnswer(index) {
  if (answered) return;

  answered = true;
  answerSelections[currentQuestion] = index;
  score = answerSelections.reduce(
    (total, selection, questionIndex) => total + (selection === quizQuestions[questionIndex]?.answer ? 1 : 0),
    0,
  );
  displayAnswer(index);

  nextBtn.disabled = false;
}

function showResult() {
  const percentage = Math.round((score / quizQuestions.length) * 100);

  progressEl.textContent = 'Final result';
  questionEl.textContent = 'Quiz completed!';

  answersEl.innerHTML = `
    <div class="result-box">
      <h2>${score} correct</h2>
      <p class="score-summary">You got ${score} out of ${quizQuestions.length} questions correct (${percentage}%).</p>
      <p>
      ${score === quizQuestions.length
          ? 'Excellent! You got every question correct.'
          : percentage >= 60
            ? 'Very good! You did well on the quiz.'
            : 'You can try again to improve your score.'}
      </p>
    </div>
  `;

  nextBtn.textContent = 'Restart';
  nextBtn.disabled = false;
  resetBtn.hidden = true;
  previousBtn.hidden = true;
}

function resetQuiz() {
  quizQuestions = [];
  currentQuestion = 0;
  score = 0;
  answered = false;
  quizFinished = false;
  quizScreen.hidden = true;
  setupScreen.hidden = false;
  quizScreen.classList.add('hidden');
  setupScreen.classList.remove('hidden');
  resetBtn.hidden = false;
  previousBtn.hidden = false;
  previousBtn.disabled = true;
  countButtons.forEach((button) => {
    button.disabled = false;
  });
}

function startQuiz(questionCount) {
  const sourceQuestions = questions.filter(
    (question) => (question.section || 'General CEC 2024') === selectedSection,
  );

  quizQuestions = [...sourceQuestions];
  shuffleQuestions(quizQuestions);
  if (questionCount !== 'all') {
    quizQuestions = quizQuestions.slice(0, Number(questionCount));
  }
  currentQuestion = 0;
  score = 0;
  answered = false;
  quizFinished = false;
  answerSelections = Array(quizQuestions.length).fill(null);
  resetBtn.hidden = false;
  previousBtn.hidden = false;
  countButtons.forEach((button) => {
    button.disabled = true;
  });
  setupScreen.hidden = true;
  quizScreen.hidden = false;
  setupScreen.classList.add('hidden');
  quizScreen.classList.remove('hidden');
  renderQuestion();
}

countButtons.forEach((button) => {
  button.addEventListener('click', () => {
    startQuiz(button.dataset.questionCount);
  });
});

nextBtn.addEventListener('click', () => {
  if (!answered && !quizFinished) {
    return;
  }

  if (!quizFinished && currentQuestion < quizQuestions.length - 1) {
    currentQuestion += 1;
    renderQuestion();
    return;
  }

  if (!quizFinished && currentQuestion === quizQuestions.length - 1) {
    quizFinished = true;
    showResult();
    return;
  }

  resetQuiz();
});

resetBtn.addEventListener('click', resetQuiz);

previousBtn.addEventListener('click', () => {
  if (quizFinished || currentQuestion === 0) return;

  currentQuestion -= 1;
  renderQuestion();
});

renderSectionOptions();
renderNotes();
