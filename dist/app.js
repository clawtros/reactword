(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*global React, _, require */

(function(React, _) {
    var Crossword = require('./components/Crossword.jsx'),

        data = {"numbered":{"2":2,"3":52,"4":28,"6":6,"7":43,"8":31,"9":44,"11":11,"12":34,"13":47,"14":48,"16":50,"21":19,"26":24,"30":49,"31":28,"36":32,"41":37,"46":40,"50":43,"54":46,"55":63,"58":49,"61":54,"64":58,"70":57,"72":64,"79":60,"81":72,"83":109,"84":97,"87":67,"88":100,"89":101,"90":79,"91":103,"92":104,"93":105,"96":75,"97":95,"102":79,"106":82,"111":87,"115":110,"118":90,"121":94,"124":113,"127":98,"132":117,"136":106,"141":125,"145":112,"146":129,"154":115,"155":150,"161":120,"163":156,"164":157,"165":158,"166":146,"167":159,"168":160,"170":126,"172":163,"174":165,"175":166,"178":132,"181":137,"184":161,"187":141,"188":164,"192":167,"196":150,"202":154,"207":158,"212":162,"217":166,"222":169},"gridinfo":{"size":15,"name":"Randomly Generated Crossword","randid":59655},"clues":{"Across":{"1":{"clue_number":1,"clue_text":"one who is playfully mischievous"},"4":{"clue_number":4,"clue_text":"a brace that extends from the rear of the keel to support the rudderpost"},"8":{"clue_number":8,"clue_text":"a genus of Strigidae"},"12":{"clue_number":12,"clue_text":"a material effigy that is worshipped"},"13":{"clue_number":13,"clue_text":"a furnace for firing or burning or drying such things as porcelain or bricks"},"14":{"clue_number":14,"clue_text":"being seven more than forty"},"16":{"clue_number":16,"clue_text":"Roman Emperor notorious for his monstrous vice and fantastic luxury (was said to have started a fire that destroyed much of Rome in 64) but the Roman Empire remained prosperous during his rule (37-68)"},"17":{"clue_number":17,"clue_text":"the inner and longer of the two bones of the human forearm"},"18":{"clue_number":18,"clue_text":"an ax used by mountain climbers for cutting footholds in ice"},"19":{"clue_number":19,"clue_text":"an independent nonpartisan federal agency that acts as the investigative arm of Congress making the executive branch accountable to Congress and the government accountable to citizens of the United States"},"20":{"clue_number":20,"clue_text":"the ultimate principle of the universe"},"21":{"clue_number":21,"clue_text":"the rate at which words are produced (as in speaking or typing)"},"23":{"clue_number":23,"clue_text":"quantifier; used with either mass or count nouns to indicate the whole number or amount of or every one of a class"},"24":{"clue_number":24,"clue_text":"alders"},"26":{"clue_number":26,"clue_text":"grant use or occupation of under a term of contract"},"28":{"clue_number":28,"clue_text":"a paramilitary group of Protestants in Northern Ireland that tries to prevent any political settlement with the Irish Republic; attacks interests of Catholic civilians in Northern Ireland; responsible for arson and bombing and murder"},"30":{"clue_number":30,"clue_text":"a branch of the Tai languages"},"32":{"clue_number":32,"clue_text":"United States composer noted for his innovative use of polytonality (1874-1954)"},"36":{"clue_number":36,"clue_text":"Celtic underworld god"},"39":{"clue_number":39,"clue_text":"a mythical Greek hero; a warrior who fought against Troy in the Iliad"},"41":{"clue_number":41,"clue_text":"the fleshy, waxy covering at the base of the upper beak of some birds"},"42":{"clue_number":42,"clue_text":"a former French coin of low denomination; often used of any small amount of money"},"43":{"clue_number":43,"clue_text":"(Middle Ages) a person who is bound to the land and owned by the feudal lord"},"45":{"clue_number":45,"clue_text":"an agency that is the primary source in the State Department for interpretive analyses of global developments and focal point for policy issues and activities of the Intelligence Community"},"46":{"clue_number":46,"clue_text":"creative activity (writing or pictures or films etc.) of no literary or artistic value other than to stimulate sexual desire"},"48":{"clue_number":48,"clue_text":"a gas burner used in laboratories; has an air valve to regulate the mixture of gas and air"},"49":{"clue_number":49,"clue_text":"(pathology) an elevation of the skin filled with serous fluid"},"50":{"clue_number":50,"clue_text":"the gene that is mutated in cystic fibrosis"},"51":{"clue_number":51,"clue_text":"an undergarment worn by women to support their breasts"},"52":{"clue_number":52,"clue_text":"British dominion over India (1757-1947)"},"54":{"clue_number":54,"clue_text":"an oral vaccine (containing live but weakened poliovirus) that is given to provide immunity to poliomyelitis"},"56":{"clue_number":56,"clue_text":"a person who makes deceitful pretenses"},"60":{"clue_number":60,"clue_text":"make an ___ition by combining numbers"},"63":{"clue_number":63,"clue_text":"(astronomy) a measure of time defined by Earth's orbital motion; terrestrial time is mean solar time corrected for the irregularities of the Earth's motions"},"65":{"clue_number":65,"clue_text":"behave in a certain manner; show a certain behavior; conduct or comport oneself"},"67":{"clue_number":67,"clue_text":"put to the test, as for its quality, or give experimental use to"},"68":{"clue_number":68,"clue_text":"small tropical gannet having a bright bill or bright feet or both"},"70":{"clue_number":70,"clue_text":"catch sight of"},"72":{"clue_number":72,"clue_text":"a branch of the Tai languages"},"73":{"clue_number":73,"clue_text":"a member of the Bantu-speaking people of Malawi and eastern Zambia and northern Zimbabwe"},"74":{"clue_number":74,"clue_text":"Canada's main foreign intelligence agency that gathers and analyzes information to provide security intelligence for the Canadian government"},"75":{"clue_number":75,"clue_text":"a sequence of 8 bits (enough to represent one character of alphanumeric data) processed as a single unit of information"},"76":{"clue_number":76,"clue_text":"affected manners intended to impress others"},"77":{"clue_number":77,"clue_text":"a form of energy that is transferred by a difference in temperature"},"78":{"clue_number":78,"clue_text":"a general name for beer made with a top fermenting yeast; in some of the United States an ___ is (by law) a brew of more than 4% alcohol by volume"}},"Down":{"1":{"clue_number":1,"clue_text":"the idea of something that is perfect; something that one hopes to attain"},"2":{"clue_number":2,"clue_text":"a person of subnormal intelligence"},"3":{"clue_number":3,"clue_text":"a political movement uniting Palestinian Arabs in an effort to create an independent state of Palestine; when formed in 1964 it was a terrorist organization dominated by Yasser Arafat's al-Fatah; in 1968 Arafat became chairman; received recognition by the United Nations and by Arab states in 1974 as a government in exile; has played a largely political role since the creation of the Palestine National Authority"},"4":{"clue_number":4,"clue_text":"gull-like jaeger of northern seas"},"5":{"clue_number":5,"clue_text":"one thousand grams; the basic unit of mass adopted under the Systeme International d'Unites"},"6":{"clue_number":6,"clue_text":"a Marxist terrorist group formed in 1963 by Colombian intellectuals who were inspired by the Cuban Revolution; responsible for a campaign of mass kidnappings and resistance to the government's efforts to stop the drug trade"},"7":{"clue_number":7,"clue_text":"become ground down or deteriorate"},"8":{"clue_number":8,"clue_text":"any compound containing the group -C=NOH"},"9":{"clue_number":9,"clue_text":"considerate and solicitous care"},"10":{"clue_number":10,"clue_text":"the part of the eye that contains the iris and ciliary body and choroid"},"11":{"clue_number":11,"clue_text":"the granitelike rocks that form the outermost layer of the earth's crust; rich in silicon and aluminum"},"12":{"clue_number":12,"clue_text":"any tree or shrub of the genus ____ having pinnate leaves and showy usually white flowers; cultivated as ornamentals"},"15":{"clue_number":15,"clue_text":"being nine more than thirty"},"20":{"clue_number":20,"clue_text":"anterior pituitary hormone that stimulates the function of the thyroid gland"},"22":{"clue_number":22,"clue_text":"one of the strands twisted together to make yarn or rope or thread; often used in combination"},"25":{"clue_number":25,"clue_text":"a large vase that usually has a pedestal or feet"},"27":{"clue_number":27,"clue_text":"a local and habitual twitching especially in the face"},"29":{"clue_number":29,"clue_text":"the longer of the two telegraphic signals used in Morse code"},"30":{"clue_number":30,"clue_text":"a resort city in Crimea in the southern Ukraine on the Black Sea; site of the Allied conference between Roosevelt, Stalin, and Churchill in February 1945"},"31":{"clue_number":31,"clue_text":"long nerve fiber that conducts away from the cell body of the neuron"},"33":{"clue_number":33,"clue_text":"to obscure, or conceal with or as if with a ____"},"34":{"clue_number":34,"clue_text":"bulky greyish-brown eagle with a short wedge-shaped white tail; of Europe and Greenland"},"35":{"clue_number":35,"clue_text":"a member of a Slavic people who settled in ____ia and neighboring areas in the 6th and 7th centuries"},"36":{"clue_number":36,"clue_text":"an Algerian extremist Islamic offshoot of the Armed Islamic Group; now the largest and most active armed terrorist group in Algeria that seeks to overthrow the government; a major source of support and recruitment for al-Qaeda operations in Europe and northern Africa"},"37":{"clue_number":37,"clue_text":"the yarn woven across the warp yarn in weaving"},"38":{"clue_number":38,"clue_text":"a circular domed dwelling that is portable and self-supporting; originally used by nomadic Mongol and Turkic people of central Asia but now used as inexpensive alternative or temporary housing"},"40":{"clue_number":40,"clue_text":"showing your contempt by derision"},"44":{"clue_number":44,"clue_text":"coat with ___"},"47":{"clue_number":47,"clue_text":"an intelligence agency in the United States Department of Defense that designs and builds and operates space reconnaissance systems to detect trouble spots worldwide and to monitor arms control agreements and environmental issues and to help plan military operations"},"49":{"clue_number":49,"clue_text":"the agency in the Department of Justice that is the primary source of criminal justice statistics for federal and local policy makers"},"51":{"clue_number":51,"clue_text":"trademark for men's underwear"},"53":{"clue_number":53,"clue_text":"(usually followed by `to') naturally disposed toward"},"55":{"clue_number":55,"clue_text":"Asian rat snakes"},"57":{"clue_number":57,"clue_text":"the univalent hydrocarbon radical C2H5 derived from ethane by the removal of one hydrogen atom"},"58":{"clue_number":58,"clue_text":"a salt of uric acid"},"59":{"clue_number":59,"clue_text":"a unit of force equal to the force that imparts an acceleration of 1 cm\/sec\/sec to a mass of 1 gram"},"60":{"clue_number":60,"clue_text":"the elementary stages of any subject (usually plural)"},"61":{"clue_number":61,"clue_text":"the capital and chief port of Qatar"},"62":{"clue_number":62,"clue_text":"an agency that collects political and economic and technical information about energy matters and makes the Department of Energy's technical and analytical expertise available to other members of the Intelligence Community"},"64":{"clue_number":64,"clue_text":"a school teaching mechanical and industrial arts and the applied sciences"},"65":{"clue_number":65,"clue_text":"the capital of Western Samoa"},"66":{"clue_number":66,"clue_text":"a small anatomically normal sac or bladderlike structure (especially one containing fluid)"},"69":{"clue_number":69,"clue_text":"a nuclear reactor that uses water as a coolant and moderator; the water boils in the reactor core and the steam produced can drive a steam turbine"},"71":{"clue_number":71,"clue_text":"the compass point midway between south and southeast"},"72":{"clue_number":72,"clue_text":"an independent agency of the United States government that protects the interests of small businesses and ensures that they receive a fair share of government contracts"}}},"words":{"across":{"1":"imp","4":"skeg","8":"otus","12":"idol","13":"kiln","14":"xlvii","16":"nero","17":"ulna","18":"iceax","19":"gao","20":"tao","21":"wpm","23":"all","24":"alnus","26":"let","28":"rhd","30":"yay","32":"ives","36":"gwyn","39":"ajax","41":"cere","42":"sou","43":"helot","45":"inr","46":"porn","48":"etna","49":"bleb","50":"cftr","51":"bra","52":"raj","54":"opv","56":"pseud","60":"add","63":"tdt","65":"act","67":"try","68":"booby","70":"espy","72":"shan","73":"chewa","74":"csis","75":"byte","76":"airs","77":"heat","78":"ale"},"down":{"1":"ideal","2":"moron","3":"plo","4":"skua","5":"kilo","6":"eln","7":"gnaw","8":"oxime","9":"tlc","10":"uvea","11":"sial","12":"inga","15":"ixl","20":"tsh","22":"ply","25":"urn","27":"tic","29":"dah","30":"yalta","31":"axon","33":"veil","34":"erne","35":"serb","36":"gspc","37":"woof","38":"yurt","40":"jeer","44":"tar","47":"nro","49":"bjs","51":"bvd","53":"apt","55":"ptyas","57":"ethyl","58":"urate","59":"dyne","60":"abc","61":"doha","62":"doei","64":"tech","65":"apia","66":"cyst","69":"bwr","71":"sse","72":"sba"}},"cells":"#imp#skeg#otus#idol#kiln#xlviinero#ulna#iceaxgao#tao#wpm#allalnus####let######rhd#yay#ivesgwyn#ajax##ceresou##helot##inrporn##etna#blebcftr#bra#raj######opv####pseudadd#tdt#act#trybooby#espy#shanchewa#csis#byte#airs#heat#ale#","grid":{},"is_random":true};
    data = {"numbered":{"2":2,"3":52,"4":28,"6":6,"7":43,"8":31,"9":44,"11":11,"12":34,"13":47,"14":48,"16":50,"21":19,"26":24,"30":49,"31":28,"36":32,"41":37,"46":40,"50":43,"54":46,"55":63,"58":49,"61":54,"64":58,"70":57,"72":64,"79":60,"81":72,"83":109,"84":97,"87":67,"88":100,"89":101,"90":79,"91":103,"92":104,"93":105,"96":75,"97":95,"102":79,"106":82,"111":87,"115":110,"118":90,"121":94,"124":113,"127":98,"132":117,"136":106,"141":125,"145":112,"146":129,"154":115,"155":150,"161":120,"163":156,"164":157,"165":158,"166":146,"167":159,"168":160,"170":126,"172":163,"174":165,"175":166,"178":132,"181":137,"184":161,"187":141,"188":164,"192":167,"196":150,"202":154,"207":158,"212":162,"217":166,"222":169},"gridinfo":{"size":15,"name":"Randomly Generated Crossword","randid":59658},"clues":{"Across":{"1":{"clue_number":1,"clue_text":"a metric unit of volume or capacity equal to 10 liters"},"4":{"clue_number":4,"clue_text":"of bluish-black or grey-blue"},"8":{"clue_number":8,"clue_text":"driven by lust; preoccupied with or exhibiting lustful desires"},"12":{"clue_number":12,"clue_text":"a Chadic language spoken in northern Nigeria"},"13":{"clue_number":13,"clue_text":"a jaunty rhythm in music"},"14":{"clue_number":14,"clue_text":"flexible twig of a willow tree"},"16":{"clue_number":16,"clue_text":"cause to become loose"},"17":{"clue_number":17,"clue_text":"father of the gods and consort of Tiamat"},"18":{"clue_number":18,"clue_text":"100 _____a formerly equaled 1 markka in Finland"},"19":{"clue_number":19,"clue_text":"the 19th letter of the Greek alphabet"},"20":{"clue_number":20,"clue_text":"a dark-skinned member of a race of people living in Australia when Europeans arrived"},"21":{"clue_number":21,"clue_text":"being one more than two"},"23":{"clue_number":23,"clue_text":"athletic facility equipped for sports or physical training"},"24":{"clue_number":24,"clue_text":"tent that is an Eskimo summer dwelling"},"26":{"clue_number":26,"clue_text":"a federal agency in the Department of Health and Human Services; located in Atlanta; investigates and diagnoses and tries to control or prevent diseases (especially new and unusual diseases)"},"28":{"clue_number":28,"clue_text":"an event that fails badly or is totally ineffectual"},"30":{"clue_number":30,"clue_text":"street names for methylenedioxymethamphetamine"},"32":{"clue_number":32,"clue_text":"having nine hinged bands of bony plates; ranges from Texas to Paraguay"},"36":{"clue_number":36,"clue_text":"a lymph node that is inflamed and swollen because of plague or gonorrhea or tuberculosis"},"39":{"clue_number":39,"clue_text":"a blow that renders the opponent unconscious"},"41":{"clue_number":41,"clue_text":"wading birds of warm regions having long slender down-curved bills"},"42":{"clue_number":42,"clue_text":"United States musician (born in Japan) who married John Lennon and collaborated with him on recordings (born in 1933)"},"43":{"clue_number":43,"clue_text":"common black European thrush"},"45":{"clue_number":45,"clue_text":"a militant organization of Irish nationalists who used terrorism and guerilla warfare in an effort to drive British forces from Northern Ireland and achieve a united independent Ireland"},"46":{"clue_number":46,"clue_text":"United States writer noted for his droll epigrams (1902-1971)"},"48":{"clue_number":48,"clue_text":"unpleasantly and excessively suave or ingratiating in manner or speech"},"49":{"clue_number":49,"clue_text":"the elapsed time it takes for a signal to travel from Earth to a spacecraft (or other body) and back to the starting point"},"50":{"clue_number":50,"clue_text":"an intensive care unit designed with special equipment to care for premature or seriously ill newborn"},"51":{"clue_number":51,"clue_text":"the portion of the vertebrate nervous system consisting of the brain and spinal cord"},"52":{"clue_number":52,"clue_text":"a unit of information equal to 1024 pebibytes or 2^60 bytes"},"54":{"clue_number":54,"clue_text":"the sound made by a cow or bull"},"56":{"clue_number":56,"clue_text":"being seven more than ninety"},"60":{"clue_number":60,"clue_text":"address a question to and expect an answer from"},"63":{"clue_number":63,"clue_text":"the pace of music measured by the number of beats occurring in 60 seconds"},"65":{"clue_number":65,"clue_text":"a close friend who accompanies his buddies in their activities"},"67":{"clue_number":67,"clue_text":"macaws"},"68":{"clue_number":68,"clue_text":"any thick, viscous matter"},"70":{"clue_number":70,"clue_text":"by bad luck"},"72":{"clue_number":72,"clue_text":"proceed for an extended period of time"},"73":{"clue_number":73,"clue_text":"British writer of novels about nature; one of three literary brothers (1872-1963)"},"74":{"clue_number":74,"clue_text":"(New Testament) disciple of Jesus; traditionally considered to be the author of the first Gospel"},"75":{"clue_number":75,"clue_text":"an international organization created in 1949 by the North Atlantic Treaty for purposes of collective security"},"76":{"clue_number":76,"clue_text":"the period of ____ a prisoner is imprisoned"},"77":{"clue_number":77,"clue_text":"a visual representation (of an object or scene or person or abstraction) produced on a surface"},"78":{"clue_number":78,"clue_text":"used of a single unit or thing; not two or more"}},"Down":{"1":{"clue_number":1,"clue_text":"the 2nd longest European river (after the Volga); flows from southwestern Germany to the Black Sea"},"2":{"clue_number":2,"clue_text":"develop into"},"3":{"clue_number":3,"clue_text":"the fifth sign of the zodiac; the sun is in this sign from about July 23 to August 22"},"4":{"clue_number":4,"clue_text":"speak (about unimportant matters) rapidly and incessantly"},"5":{"clue_number":5,"clue_text":"Chinese lyric poet (700-762)"},"6":{"clue_number":6,"clue_text":"thickening of tissue in the motor tracts of the lateral columns and anterior horns of the spinal cord; results in progressive muscle atrophy that starts in the limbs"},"7":{"clue_number":7,"clue_text":"small ornamental ladies' bag for small articles"},"8":{"clue_number":8,"clue_text":"medication (trade name _____) used to lower the levels of triglyceride in the blood"},"9":{"clue_number":9,"clue_text":"the compass point midway between east and southeast"},"10":{"clue_number":10,"clue_text":"(in flight formation) a position to the side and just to the rear of another aircraft"},"11":{"clue_number":11,"clue_text":"refuse to recognize or acknowledge"},"12":{"clue_number":12,"clue_text":"sports equipment consisting of an object set up for a marksman or archer to aim at"},"15":{"clue_number":15,"clue_text":"(basketball) the hoop from which the net is suspended"},"20":{"clue_number":20,"clue_text":"a Kwa language spoken by the Yoruba in southwestern Nigeria"},"22":{"clue_number":22,"clue_text":"a former independent federal agency that supervised and set rates for carriers that transported goods and people between states; was terminated in 1995"},"25":{"clue_number":25,"clue_text":"an artificial language that is a revision and simplification of Esperanto"},"27":{"clue_number":27,"clue_text":"an index of the cost of all goods and services to a typical consumer"},"29":{"clue_number":29,"clue_text":"a metric unit of length equal to ten meters"},"30":{"clue_number":30,"clue_text":"chiefly American marsh plants, having usually yellow flowers"},"31":{"clue_number":31,"clue_text":"value measured by what must be given or done or undergone to obtain something"},"33":{"clue_number":33,"clue_text":"a unit of information equal to 1000 petabits or 10^18 bits"},"34":{"clue_number":34,"clue_text":"cause to spin"},"35":{"clue_number":35,"clue_text":"of or relating to a system to destroy satellites in orbit"},"36":{"clue_number":36,"clue_text":"a city in western Germany on the Rhine River; was the capital of West Germany between 1949 and 1989"},"37":{"clue_number":37,"clue_text":"relatively small fast-moving sloth with two long claws on each front foot"},"38":{"clue_number":38,"clue_text":"greenish-yellow pear"},"40":{"clue_number":40,"clue_text":"(Gnosticism) a divine power or nature emanating from the Supreme Being and playing various roles in the operation of the universe"},"44":{"clue_number":44,"clue_text":"attention to what is seen"},"47":{"clue_number":47,"clue_text":"an Islamic fundamentalist group in Pakistan that fought the Soviet Union in Afghanistan in the 1980s; now operates as a terrorist organization primarily in Kashmir and seeks Kashmir's accession by Pakistan"},"49":{"clue_number":49,"clue_text":"a mature blood cell that contains hemoglobin to carry oxygen to the bodily tissues; a biconcave disc that has no nucleus"},"51":{"clue_number":51,"clue_text":"uncomplimentary terms for a policeman"},"53":{"clue_number":53,"clue_text":"being nine more than thirty"},"55":{"clue_number":55,"clue_text":"excessively fat"},"57":{"clue_number":57,"clue_text":"any of various large tropical carnivorous lizards of Africa and Asia and Australia; fabled to warn of crocodiles"},"58":{"clue_number":58,"clue_text":"feeling or showing extreme anger"},"59":{"clue_number":59,"clue_text":"the villain in William Shakespeare's tragedy who tricked Othello into murdering his wife"},"60":{"clue_number":60,"clue_text":"of southern Europe; similar to but smaller than the adder"},"61":{"clue_number":61,"clue_text":"a small slit (as for inserting a coin or depositing mail)"},"62":{"clue_number":62,"clue_text":"a native or inhabitant of New Zealand"},"64":{"clue_number":64,"clue_text":"a landlocked republic in northwestern Africa; achieved independence from France in 1960; ____ was a center of West African civilization for more than 4,000 years"},"65":{"clue_number":65,"clue_text":"peafowl"},"66":{"clue_number":66,"clue_text":"the seventh month of the Hindu calendar"},"69":{"clue_number":69,"clue_text":"a metric unit of length equal to 10,000 meters"},"71":{"clue_number":71,"clue_text":"the basic unit of money in Albania"},"72":{"clue_number":72,"clue_text":"(biochemistry) a long linear polymer found in the nucleus of a cell and formed from nucleotides and shaped like a double helix; associated with the transmission of genetic information"}}},"words":{"across":{"1":"dal","4":"blae","8":"lewd","12":"bade","13":"lilt","14":"osier","16":"undo","17":"apsu","18":"penni","19":"tau","20":"abo","21":"iii","23":"gym","24":"tupik","26":"cdc","28":"dud","30":"xtc","32":"peba","36":"bubo","39":"kayo","41":"ibis","42":"ono","43":"merle","45":"ira","46":"nash","48":"oily","49":"rtlt","50":"nicu","51":"cns","52":"eib","54":"moo","56":"xcvii","60":"ask","63":"bpm","65":"pal","67":"ara","68":"slime","70":"alas","72":"drag","73":"powys","74":"levi","75":"nato","76":"time","77":"ikon","78":"ane"},"down":{"1":"danau","2":"addup","3":"leo","4":"blab","5":"lipo","6":"als","7":"etui","8":"lopid","9":"ese","10":"wing","11":"deny","12":"butt","15":"rim","20":"aku","22":"icc","25":"ido","27":"cpi","29":"dkm","30":"xyris","31":"toll","33":"ebit","34":"birl","35":"asat","36":"bonn","37":"unai","38":"bosc","40":"aeon","44":"eye","47":"hum","49":"rbc","51":"cop","53":"ixl","55":"obese","57":"varan","58":"irate","59":"iago","60":"asp","61":"slot","62":"kiwi","64":"mali","65":"pavo","66":"asin","69":"mym","71":"lek","72":"dna"}},"cells":"#dal#blae#lewd#bade#lilt#osierundo#apsu#pennitau#abo#iii#gymtupik####cdc######dud#xtc#pebabubo#kayo##ibisono##merle##iranash##oily#rtltnicu#cns#eib######moo####xcviiask#bpm#pal#araslime#alas#dragpowys#levi#nato#time#ikon#ane#","grid":{},"is_random":true};

    document.onready = function() {
        React.render(React.createElement(Crossword, {numbered: data.numbered, cells: data.cells, size: data.gridinfo.size}), document.getElementById('app'));
    };
}(React, _));

},{"./components/Crossword.jsx":4}],2:[function(require,module,exports){
(function(React, module, undefined) {
  module.exports = React.createClass({displayName: "exports",
    getInitialState: function() {
      return {
        value: this.props.value
      };
    },

    handleMouseEnter: function() {
      this.setState({ focused: true });
    },
    
    handleMouseExit: function() {
      this.setState({ focused: false });
    },
    
    render: function() {
      var style = {
        width: this.props.size + "%",
        fontSize: (this.props.size - 3) + "vw",
        paddingTop: this.props.size + "%"
      },
          numStyle = {
            fontSize: (this.props.size * 0.25) + 'vw'
          },
          cx = React.addons.classSet,
          classes = cx({
            'cell': true,
            'input-cell': this.props.selected,
            'flex-centered': true,
            'focused': this.props.focused === true,
            'unplayable': !this.props.playable
          });
      
      return (
        React.createElement("div", {style: style, className: classes }, 
          
          React.createElement("div", {style: numStyle, className: "cell-number"}, this.props.number), 
          React.createElement("div", {onClick: this.props.onClick, 
               className: "cell-content flex-centered"}, 
            this.props.playable ? this.props.value : ""
          )
        )
      );
    }
  });
}(React, module));

},{}],3:[function(require,module,exports){
(function(React, module, undefined) {
  var Cell = require('./Cell.jsx'),
      DIRECTIONS = {
        ACROSS: [1, 0],
        DOWN: [0, 1]
      };
  
  function range(start, stop, step){
    if (typeof stop=='undefined'){
      // one param defined
      stop = start;
      start = 0;
    };
    if (typeof step=='undefined'){
      step = 1;
    };
    if ((step>0 && start>=stop) || (step<0 && start<=stop)){
      return [];
    };
    var result = [];
    for (var i=start; step>0 ? i < stop : i > stop; i+=step){
      result.push(i);
    };
    return result;
  };

  module.exports = React.createClass({displayName: "exports",
    keysDown: 0,
    
    getInitialState: function() {
      return {
        activeCell: undefined,
        direction: DIRECTIONS.ACROSS,
        keyIsDown: false,
        cellValues: []
      }
    },
    
    makeActive: function(id) {
      if (this.props.values[id] !== "#") {
        this.setState({ activeCell: id });
      }
    },
    
    currentWord: function() {
      var position = this.state.activeCell,
          direction = this.state.direction,
          cells = [], result = [];
      if (direction == DIRECTIONS.ACROSS) {
        var start = Math.floor(position / this.props.size) * this.props.size,
            end = start + this.props.size;
        cells = range(start, end);
      } else {
        var start = position % this.props.size,
            end = this.props.values.length;
        cells = range(start, end, this.props.size);
      }
      var cellIndex = cells.indexOf(position),
          left = [],
          right = [],
          i;
      for (i = cellIndex; i < cells.length; i++) {
        if (this.props.values[cells[i]] !== '#') {
          right.push(cells[i]);
        } else {
          break;
        }
      }
      for (i = cellIndex; i >= 0; i--) {
        if (this.props.values[cells[i]] !== '#') {
          left.push(cells[i]);
        } else {
          break;
        }
      }

      return left.concat(right);
    },

    inWord: function(cell, cells) {
      return cells.indexOf(cell) > -1;
    },
    
    handleKeyDown: function(e) {

      if (this.state.activeCell) {
          
        var values = this.state.cellValues,
            direction = this.state.direction;
            
        if (this.keysDown > 1) {
          this.go(1);
        }

        if (e.which == 8) {
          e.preventDefault();
          e.stopPropagation();
          this.currentWord();
          if (values[this.state.activeCell] == undefined) {
            this.go(-1);
            values[this.state.activeCell] = undefined;
          } else {
            values[this.state.activeCell] = undefined;
            this.go(-1);
          }

        }
        
        if (e.which >= 65 && e.which <= 90 && !e.metaKey && !e.ctrlKey) {
          values[this.state.activeCell] = String.fromCharCode(e.which);
          this.go(1);
        }

        if (e.which >= 37 && e.which <= 40) {
          switch (e.which) {
            case 37:
              if (direction == DIRECTIONS.ACROSS) {
                this.go(-1);
              }
              direction = DIRECTIONS.ACROSS;
              break;
            case 39:
              if (direction == DIRECTIONS.ACROSS) {
                this.go(1);
              }
              direction = DIRECTIONS.ACROSS;
              break;              
            case 38:
              if (direction == DIRECTIONS.DOWN) {
                this.go(-1);
              }
              direction = DIRECTIONS.DOWN;
              break;
            case 40:
              if (direction == DIRECTIONS.DOWN) {
                this.go(1);
              }
              direction = DIRECTIONS.DOWN;
              break;
          }
        }

        this.setState({
          direction: direction,
          cellValues: values
        });
        
      }
    },

    goOne: function(nextCell, delta) {
      var direction = this.state.direction;
      
      nextCell += (this.state.direction == DIRECTIONS.ACROSS ? 1 : this.props.size) * delta;

      if (nextCell > this.props.values.length) {
        nextCell -= this.props.values.length;
      }
      
      if (nextCell < 0) {
        nextCell = this.props.values.length + nextCell;
      }
      
      return nextCell;
    },

    go: function(delta) {
      var initial = this.goOne(this.state.activeCell, delta),
          next = initial;
      
      while (this.props.values[next] === "#") {
        
        next = this.goOne(next, delta);
      }
      
      this.setState({
        activeCell: next
      });

    },
    
    componentDidMount: function() {
      window.addEventListener('dblclick', this.toggleDirection);

      window.addEventListener('keydown', this.handleKeyDown);
    },

    componentWillUnmount: function() {
      window.removeEventListener('keydown', this.handleKeyDown);
      window.removeEventListener('dblclick', this.handleDoubleClick);
    },

    handleDoubleClick: function(e) {
      e.preventDefault();
      e.stopPropagation();
      this.toggleDirection();
    },

    toggleDirection: function() {
      this.setState({direction: this.state.direction == DIRECTIONS.ACROSS ? DIRECTIONS.DOWN : DIRECTIONS.ACROSS});
    },
    
    render: function() {
      var size = this.props.size,
          numbers = this.props.numbered,
          count = 1,
          currentWord = this.currentWord();
      
      for (var k in numbers) {
        numbers[k] = count++;
      }
      return (
        React.createElement("div", {onKeyUp: this.handleKeyUp, className: "cell-list"}, 
          this.props.values.split("").map(function(cell, id) {    

            return (
              React.createElement(Cell, {onClick: this.makeActive.bind(this, id), 
                    number: numbers[id + 1], 
                    focused: currentWord.indexOf(id) > -1, 
                    selected: id == this.state.activeCell, 
                    key: id, 
                    value: this.state.cellValues[id], 
                    playable: cell !== "#", 
                    correctValue: cell, 
                    size: 100 / size}));
           }, this), 

          React.createElement("div", {className: "clearfix"})
        )
      );
    }
  });
}(React, module));

},{"./Cell.jsx":2}],4:[function(require,module,exports){
(function(React, module, undefined) {
    var Cells = require('./Cells.jsx');
    module.exports = React.createClass({displayName: "exports",
        render: function() {
            return (
                React.createElement(Cells, {numbered: this.props.numbered, values: this.props.cells, size: this.props.size})
            );
        }
    });
}(React, module));
},{"./Cells.jsx":3}]},{},[1])