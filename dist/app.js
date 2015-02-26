(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*global React, _, require */

(function(React, _) {
    var Crossword = require('./components/Crossword.jsx'),
        CrosswordModel = require('./models/CrosswordModel.js'),
        data = require('./data.js');

    document.onready = function() {
        var model = new CrosswordModel(data.cells, data.gridinfo.size, data);
        React.render(React.createElement(Crossword, {model: model, rawData: data, title: data.gridinfo.name, clues: data.clues, numbered: data.numbered, cells: data.cells, size: data.gridinfo.size}), document.getElementById('app'));
    };
}(React, _));

},{"./components/Crossword.jsx":5,"./data.js":6,"./models/CrosswordModel.js":8}],2:[function(require,module,exports){
(function(React, module, undefined) {
  module.exports = React.createClass({displayName: "exports",
    getInitialState: function() {
      return {
        value: this.props.value
      };
    },
    
    render: function() {
      var fontSize = 100 / this.props.size,
          style = {
            width: this.props.size + "%",
            fontSize: fontSize + 'pt',
            paddingTop: this.props.size + "%"
          },
          numStyle = {
            fontSize: this.props.size + 'pt'
          },
          classes = React.addons.classSet({
            'cell': true,
            'input-cell': this.props.selected,
            'flex-centered': true,
            'focused': this.props.focused === true,
            'unplayable': !this.props.playable
          });
      
      return (
        React.createElement("div", {style: style, className: classes}, 
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
      cw = require('../models/Crossword.js'),
      UNPLAYABLE = "#",
      DIRECTIONS = require('../models/Directions.js');

  module.exports = React.createClass({displayName: "exports",
    getInitialState: function() {
      return {
        direction: DIRECTIONS.ACROSS,
        keyIsDown: false,
        cellValues: []
      }
    },
    
    makeActive: function(id) {
      if (this.props.values[id] !== UNPLAYABLE) {
        this.props.makeActive(id);
      }
    },
    
    handleKeyDown: function(e) {
      if (this.props.activeCell) {
          
        var values = this.state.cellValues,
            direction = this.props.direction;
            
        if (this.keysDown > 1) {
          this.go(1);
        }

        if (e.which == 8) {
          e.preventDefault();
          e.stopPropagation();
          
          if (values[this.props.activeCell] == undefined) {
            this.go(-1);
            values[this.props.activeCell] = undefined;
          } else {
            values[this.props.activeCell] = undefined;
            this.go(-1);
          }

        }
        
        if (e.which >= 65 && e.which <= 90 && !e.metaKey && !e.ctrlKey) {
          values[this.props.activeCell] = String.fromCharCode(e.which);
          this.go(1);
        }

        if (e.which >= 37 && e.which <= 40) {
          switch (e.which) {
            case 37:
              if (direction == DIRECTIONS.ACROSS) {
                this.go(-1);
              } else {
                this.props.toggleDirection();
              }
              break;
            case 39:
              if (direction == DIRECTIONS.ACROSS) {
                this.go(1);
              } else {
                this.props.toggleDirection();
              }
              break;              
            case 38:
              if (direction == DIRECTIONS.DOWN) {
                this.go(-1);
              } else {
                this.props.toggleDirection();
              }
              break;
            case 40:
              if (direction == DIRECTIONS.DOWN) {
                this.go(1);
              } else {
                this.props.toggleDirection();
              }
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
      var direction = this.props.direction;
      
      nextCell += (this.props.direction == DIRECTIONS.ACROSS ? 1 : this.props.size) * delta;

      if (nextCell > this.props.values.length) {
        nextCell -= this.props.values.length;
      }
      
      if (nextCell < 0) {
        nextCell = this.props.values.length + nextCell;
      }
      
      return nextCell;
    },

    go: function(delta) {
      var initial = this.goOne(this.props.activeCell, delta),
          next = initial;
      
      while (this.props.values[next] === UNPLAYABLE) {        
        next = this.goOne(next, delta);
      }
      
      this.props.makeActive(next);
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
      this.props.toggleDirection();
    },
    
    render: function() {
      var size = this.props.size,
          numbers = this.props.numbered,
          count = 1,
          highlightedCells = this.props.highlightedCells;
      
      for (var k in numbers) {
        numbers[k] = count++;
      }
      return (
        React.createElement("div", {onKeyUp: this.handleKeyUp, className: "cell-list"}, 
          this.props.values.split("").map(function(cell, id) {    

            return (
              React.createElement(Cell, {onClick: this.makeActive.bind(this, id), 
                    number: numbers[id + 1], 
                    focused: highlightedCells.indexOf(id) > -1, 
                    selected: id == this.props.activeCell, 
                    key: id, 
                    value: this.state.cellValues[id], 
                    playable: cell !== UNPLAYABLE, 
                    correctValue: cell, 
                    size: 100 / size}));
           }, this), 

          React.createElement("div", {className: "clearfix"})
        )
      );
    }
  });
}(React, module));

},{"../models/Crossword.js":7,"../models/Directions.js":9,"./Cell.jsx":2}],4:[function(require,module,exports){
(function (React, module, undefined) {
  module.exports = React.createClass({displayName: "exports",
    handleClick: function(clueId) {
      this.props.handleClueClick(clueId, this.props.directionEnum);
    },
    
    render: function () {
      var templated = Object.keys(this.props.clues).map(function(clueId) {
        var clue = this.props.clues[clueId],
            classes = React.addons.classSet({
              'clue-container': true,
              'active-clue': clueId === this.props.activeClue
            });
        return (
          React.createElement("li", {className: classes, key: this.props.direction + "_" + clueId}, 
            React.createElement("div", {className: "clue-phrase", onClick: this.handleClick.bind(this, clueId, this.props.directionEnum)}, 
              React.createElement("div", {className: "clue-number"}, clue.clue_number), 
              clue.clue_text
            )
          )
        )
      }, this);
      
      return React.createElement("div", null, 
       React.createElement("h2", null, this.props.direction), 
       React.createElement("div", {className: "clue-list-container"}, 
         React.createElement("ul", {className: "clue-list"}, 
           templated
         )
       )
      )
    }
  });
}(React, module));

},{}],5:[function(require,module,exports){
(function(React, module, undefined) {
  var Cells = require('./Cells.jsx'),
      ClueList = require('./ClueList.jsx'),
      CrosswordModel = require('../models/CrosswordModel.js'),
      UNPLAYABLE = "#",
      DIRECTIONS = require('../models/Directions.js');
  
  module.exports = React.createClass({displayName: "exports",

    buildLookupObject: function(cells, size) {
      
    },
    
    getInitialState: function() {
      return {
        activeCell: undefined,
        direction: DIRECTIONS.ACROSS
      };
    },

    toggleDirection: function() {
      this.setState({direction: this.state.direction == DIRECTIONS.ACROSS ? DIRECTIONS.DOWN : DIRECTIONS.ACROSS});
    },
    
    componentDidMount: function() {
    },
    
    handleMakeActive: function(cellId) {      
      this.setState({
        activeCell: cellId
      });
    },
    
    handleClueClick: function(clueId, direction) {
      this.setState({
        direction: direction,
        activeCell: this.props.model.lookupTable.numberToCell[clueId] - 1,
        activeClue: clueId
      });
    },
    
    render: function() {
      return (
        React.createElement("div", {className: "row"}, 
          React.createElement("div", {className: "col-xs-8"}, 
            React.createElement("h1", null, this.props.title), 
            React.createElement(Cells, {numbered: this.props.numbered, 
                   highlightedCells: this.props.model.wordAt(this.state.activeCell, this.state.direction), 
                   makeActive: this.handleMakeActive, 
                   activeCell: this.state.activeCell, 
                   direction: this.state.direction, 
                   toggleDirection: this.toggleDirection, 
                   values: this.props.cells, 
                   size: this.props.size})
          ), 
          React.createElement("div", {className: "col-xs-4"}, 
            React.createElement(ClueList, {direction: "Across", 
                      directionEnum: DIRECTIONS.ACROSS, 
                      activeClue: this.state.activeClue, 
                      clues: this.props.clues.Across, 
                      handleClueClick: this.handleClueClick}), 
            React.createElement(ClueList, {direction: "Down", 
                      directionEnum: DIRECTIONS.DOWN, 
                      activeClue: this.state.activeClue, 
                      clues: this.props.clues.Down, 
                      handleClueClick: this.handleClueClick})
          )
        )
      );
    }
  });
}(React, module));

},{"../models/CrosswordModel.js":8,"../models/Directions.js":9,"./Cells.jsx":3,"./ClueList.jsx":4}],6:[function(require,module,exports){
(function(module) {
    module.exports = {"numbered":{"2":2,"3":63,"4":64,"5":77,"7":7,"8":95,"9":81,"10":69,"11":70,"13":13,"14":84,"15":85,"16":86,"19":61,"25":23,"31":28,"35":87,"37":33,"43":38,"49":44,"54":44,"55":50,"60":50,"62":54,"67":60,"73":66,"80":71,"84":82,"86":76,"95":81,"97":94,"102":88,"103":99,"109":146,"110":147,"111":148,"112":149,"114":95,"118":154,"119":139,"127":106,"131":150,"135":123,"139":115,"140":157,"141":169,"142":170,"143":171,"144":172,"145":121,"152":164,"158":130,"163":135,"170":139,"175":211,"181":151,"186":178,"188":154,"192":182,"204":165,"205":190,"209":255,"213":172,"217":201,"218":233,"219":248,"220":249,"221":250,"226":254,"230":257,"235":189,"241":194,"242":238,"243":253,"247":200,"249":244,"250":245,"251":246,"252":247,"253":206,"258":251,"260":210,"265":216,"271":222,"278":227,"282":256,"284":232,"290":237,"296":242,"302":247,"309":251,"314":256,"320":260},"gridinfo":{"size":18,"name":"Randomly Generated Crossword","randid":59690},"clues":{"Across":{"1":{"clue_number":1,"clue_text":"touch with the lips or press the lips (against someone's mouth or other body part) as an expression of love, greeting, etc."},"5":{"clue_number":5,"clue_text":"a friend or comrade"},"10":{"clue_number":10,"clue_text":"a Hebrew shepherd and minor prophet"},"14":{"clue_number":14,"clue_text":"try presumptuously"},"15":{"clue_number":15,"clue_text":"of or belonging to or suitable for a duke"},"16":{"clue_number":16,"clue_text":"a summary at the end that repeats the substance of a longer discussion"},"18":{"clue_number":18,"clue_text":"tree (as opposed to shrub)"},"19":{"clue_number":19,"clue_text":"a person who makes deceitful pretenses"},"20":{"clue_number":20,"clue_text":"medium-sized penguins occurring in large colonies on the ______ Coast of Antarctica"},"22":{"clue_number":22,"clue_text":"an adrenal-cortex hormone (trade names Hydrocortone or ______) that is active in carbohydrate and protein metabolism"},"24":{"clue_number":24,"clue_text":"a movable screen placed behind home base to catch balls during batting practice"},"25":{"clue_number":25,"clue_text":"become chocked with silt"},"26":{"clue_number":26,"clue_text":"any of several herbs of the genus Dipsacus native to the Old World having flower heads surrounded by spiny bracts"},"27":{"clue_number":27,"clue_text":"a businessman who buys or sells for another in exchange for a commission"},"29":{"clue_number":29,"clue_text":"emit a _____"},"30":{"clue_number":30,"clue_text":"`Father' is a term of address for priests in some churches (especially the Roman Catholic Church or the Orthodox Catholic Church); `Padre' is frequently used in the military"},"32":{"clue_number":32,"clue_text":"inclined toward or displaying love"},"34":{"clue_number":34,"clue_text":"drain consisting of a U-shaped section of drainpipe that holds liquid and so prevents a return flow of sewer gas"},"38":{"clue_number":38,"clue_text":"being one more than fifteen"},"39":{"clue_number":39,"clue_text":"the arrangement of the hair (especially a woman's hair)"},"41":{"clue_number":41,"clue_text":"restored to a new condition"},"43":{"clue_number":43,"clue_text":"a gonadotropic hormone that is secreted by the anterior pituitary and stimulates growth of Graafian follicles in female mammals, and activates the cells in male mammals that form sperm"},"44":{"clue_number":44,"clue_text":"the superior of a group of nuns"},"50":{"clue_number":50,"clue_text":"a religious sect founded in the United States in 1966; based on Vedic scriptures; groups engage in joyful chanting of `Hare Krishna' and other mantras based on the name of the Hindu god Krishna; devotees usually wear saffron robes and practice vegetarianism and celibacy"},"51":{"clue_number":51,"clue_text":"tall evergreen of Japan and China yielding valuable soft wood"},"52":{"clue_number":52,"clue_text":"ions are accelerated along a linear path by voltage differences on electrodes along the path"},"53":{"clue_number":53,"clue_text":"a chain of more than 200 islands about 400 miles long in the western central Pacific Ocean"},"54":{"clue_number":54,"clue_text":"the United Nations agency concerned with civil aviation"},"55":{"clue_number":55,"clue_text":"French writer and existentialist philosopher (1905-1980)"},"56":{"clue_number":56,"clue_text":"a member of the people inhabiting an area of northern Mongolia and eastern Siberia"},"58":{"clue_number":58,"clue_text":"type genus of the Suidae"},"59":{"clue_number":59,"clue_text":"Danish composer (1865-1931)"},"60":{"clue_number":60,"clue_text":"a girl or young woman who is unmarried"},"62":{"clue_number":62,"clue_text":"Canadian hockey player (born 1948)"},"63":{"clue_number":63,"clue_text":"having an eye or eyes or eyelike feature especially as specified; often used in combination"},"64":{"clue_number":64,"clue_text":"capital of the state of Nebraska; located in southeastern Nebraska; site of the University of Nebraska"},"69":{"clue_number":69,"clue_text":"the capital of Cape Verde on Sao Tiago Island"},"71":{"clue_number":71,"clue_text":"the idea of something that is perfect; something that one hopes to attain"},"72":{"clue_number":72,"clue_text":"an organ shaped like a helmet; usually a vaulted and enlarged petal as in Aconitum"},"75":{"clue_number":75,"clue_text":"make ugly"},"80":{"clue_number":80,"clue_text":"lacking foresight or scope"},"82":{"clue_number":82,"clue_text":"cause to spin"},"83":{"clue_number":83,"clue_text":"a member of the lowest or worker Hindu caste"},"84":{"clue_number":84,"clue_text":"a small recess opening off a larger room"},"85":{"clue_number":85,"clue_text":"dried out by heat or excessive exposure to sunlight"},"87":{"clue_number":87,"clue_text":"very tired"},"88":{"clue_number":88,"clue_text":"a person who avoids the company or assistance of others"},"89":{"clue_number":89,"clue_text":"terms referring to the Judeo-Christian God"},"90":{"clue_number":90,"clue_text":"designed or arranged to offer the least resistant to fluid flow"},"91":{"clue_number":91,"clue_text":"Roman Emperor notorious for his monstrous vice and fantastic luxury (was said to have started a fire that destroyed much of Rome in 64) but the Roman Empire remained prosperous during his rule (37-68)"},"92":{"clue_number":92,"clue_text":"the head administrative officer of a college or university"},"93":{"clue_number":93,"clue_text":"(Norse mythology) god of war and strife and son of Odin; identified with Anglo-Saxon Tiu"}},"Down":{"1":{"clue_number":1,"clue_text":"delicately iridescent thimble-shaped ctenophores"},"2":{"clue_number":2,"clue_text":"a region of complete shadow resulting from total obstruction of light"},"3":{"clue_number":3,"clue_text":"spots before the eyes caused by opaque cell fragments in the vitreous humor and lens"},"4":{"clue_number":4,"clue_text":"United States film actress (born in 1949)"},"5":{"clue_number":5,"clue_text":"an ester of adenosine that is converted to ATP for energy storage"},"6":{"clue_number":6,"clue_text":"sometimes placed in family Hyacinthaceae"},"7":{"clue_number":7,"clue_text":"any period of time during which glaciers covered a large part of the earth's surface"},"8":{"clue_number":8,"clue_text":"accepted or approved instance or example of a quantity or quality against which others are judged or measured or compared"},"9":{"clue_number":9,"clue_text":"long past"},"10":{"clue_number":10,"clue_text":"a river that rises in northeastern Turkey (near the source of the Euphrates) and flows generally eastward through Armenia to the Caspian Sea; ancient name was Araxes"},"11":{"clue_number":11,"clue_text":"a city in western Saudi Arabia; site of the tomb of Muhammad; the second most holy city of Islam"},"12":{"clue_number":12,"clue_text":"nocturnal wildcat of Central America and South America having a dark-spotted buff-brown coat"},"13":{"clue_number":13,"clue_text":"the second treaty between the United States and the Union of Soviet Socialist Republics resulting from the Strategic Arms Limitation Talks"},"14":{"clue_number":14,"clue_text":"consideration in dealing with others and avoiding giving offense"},"17":{"clue_number":17,"clue_text":"Italian pope from 1566 to 1572 who led the reformation of the Roman Catholic Church; he excommunicated Elizabeth I (1504-1572)"},"21":{"clue_number":21,"clue_text":"a fencing sword similar to a foil but with a heavier blade"},"23":{"clue_number":23,"clue_text":"of hair color; pale yellowish to yellowish brown"},"28":{"clue_number":28,"clue_text":"of or relating to Thailand"},"31":{"clue_number":31,"clue_text":"a digital recording (as of a movie) on an optical disk that can be played on a computer or a television set"},"33":{"clue_number":33,"clue_text":"a master's degree in fine arts"},"34":{"clue_number":34,"clue_text":"(biology) a taxonomic category between a genus and a subfamily"},"35":{"clue_number":35,"clue_text":"sew again"},"36":{"clue_number":36,"clue_text":"a gliding joint between the distal ends of the tibia and fibula and the proximal end of the talus"},"37":{"clue_number":37,"clue_text":"smooth brown oval nut of south central United States"},"39":{"clue_number":39,"clue_text":"a tear gas that is stronger than CN gas but wears off faster; can be deployed by grenades or cluster bombs; can cause skin burns and fatal pulmonary edema"},"40":{"clue_number":40,"clue_text":"a midwestern state in north central United States in the Great Lakes region"},"42":{"clue_number":42,"clue_text":"United States writer (born in 1915)"},"43":{"clue_number":43,"clue_text":"any member of the genus _____"},"45":{"clue_number":45,"clue_text":"of bluish-black or grey-blue"},"46":{"clue_number":46,"clue_text":"cause a floating log to rotate by treading"},"47":{"clue_number":47,"clue_text":"the Uralic language spoken by the Yeniseian"},"48":{"clue_number":48,"clue_text":"a dress worn primarily by Hindu women; consists of several yards of light material that is draped around the body"},"49":{"clue_number":49,"clue_text":"rise or heave upward under the influence of a natural force such as a wave"},"51":{"clue_number":51,"clue_text":"express or utter with a hiss"},"55":{"clue_number":55,"clue_text":"the brightest star in the sky; in Canis Major"},"57":{"clue_number":57,"clue_text":"distressing"},"59":{"clue_number":59,"clue_text":"a powerful lobby that advocates the right to own and bear arms and rejects any gun regulation by the government"},"61":{"clue_number":61,"clue_text":"a civilian reserve component of the United States Air Force that provides prompt mobilization during war and assistance during national emergencies"},"62":{"clue_number":62,"clue_text":"oral stimulation of the genitals"},"64":{"clue_number":64,"clue_text":"capital and largest city and economic center of Peru; located in western Peru; was capital of the Spanish empire in the New World until the 19th century"},"65":{"clue_number":65,"clue_text":"a musical composition that evokes rural life"},"66":{"clue_number":66,"clue_text":"a conservative who subscribes to ______servatism"},"67":{"clue_number":67,"clue_text":"United States gangster who terrorized Chicago during prohibition until arrested for tax evasion (1899-1947)"},"68":{"clue_number":68,"clue_text":"United States jazz musician who influenced the style of Louis Armstrong (1885-1938)"},"69":{"clue_number":69,"clue_text":"a wig for men that was fashionable in the 17th and 18th centuries"},"70":{"clue_number":70,"clue_text":"struck with fear, dread, or consternation"},"73":{"clue_number":73,"clue_text":"a unit of current equal to 10 amperes"},"74":{"clue_number":74,"clue_text":"a measuring system that detects and locates objects on the same principle as radar but uses light from a laser; a potential technology for detecting air turbulence that can affect aircraft"},"76":{"clue_number":76,"clue_text":"French composer (born in Italy) who was the court composer to Louis XIV and founded the national French opera (1632-1687)"},"77":{"clue_number":77,"clue_text":"person who does no work"},"78":{"clue_number":78,"clue_text":"flesh of a medium-sized young chicken suitable for frying"},"79":{"clue_number":79,"clue_text":"an American who lives in the North (especially during the American Civil War)"},"81":{"clue_number":81,"clue_text":"large mackerel with long pointed snout; important food and game fish of the eastern Atlantic coast southward to Brazil"},"86":{"clue_number":86,"clue_text":"test the limits of"}}},"words":{"across":{"1":"buss","5":"amigo","10":"amos","14":"tempt","15":"ducal","16":"recap","18":"arbor","19":"pseud","20":"adelie","22":"cortef","24":"cage","25":"siltup","26":"teasel","27":"agent","29":"noise","30":"padre","32":"amative","34":"trap","38":"xvi","39":"coif","41":"renewed","43":"fsh","44":"abbess","50":"iskcon","51":"sugi","52":"linac","53":"belau","54":"icao","55":"sartre","56":"ewenki","58":"sus","59":"nielsen","60":"lass","62":"orr","63":"eyed","64":"lincoln","69":"praia","71":"ideal","72":"galea","75":"uglify","80":"myopic","82":"birl","83":"shudra","84":"alcove","85":"adust","87":"allin","88":"loner","89":"maker","90":"sleek","91":"nero","92":"prexy","93":"tyrr"},"down":{"1":"beroe","2":"umbra","3":"spots","4":"streep","5":"adp","6":"muscari","7":"iceage","8":"gauge","9":"olden","10":"aras","11":"medina","12":"ocelot","13":"saltii","14":"tact","17":"piusv","21":"epee","23":"flaxen","28":"tai","31":"dvd","33":"mfa","34":"tribe","35":"resew","36":"ankle","37":"pecan","39":"csgas","40":"ohio","42":"wouk","43":"fucus","45":"blae","46":"birle","47":"entsy","48":"saree","49":"scend","51":"siss","55":"sirius","57":"ill","59":"nra","61":"ang","62":"oralsex","64":"lima","65":"idyll","66":"neocon","67":"capone","68":"oliver","69":"peruke","70":"aghast","73":"abamp","74":"lidar","76":"lully","77":"idler","78":"frier","79":"yank","81":"cero","86":"try"}},"cells":"#buss#amigo#amos##tempt#ducal#recap#arbor#pseud#adeliecortef#cage#siltupteasel#agent#noise####padre##amativetrap#xvi#coif#####renewed#fsh#abbessiskcon#sugi##linacbelau##icao#sartreewenki#sus#nielsen#####lass#orr#eyedlincoln##praia####ideal#galea#uglifymyopic#birl#shudraalcove#adust#allin#loner#maker#sleek##nero#prexy#tyrr#","grid":{},"is_random":true};
    
}(module));

},{}],7:[function(require,module,exports){
/*global React, module */

(function (React, module) {
    var DIRECTIONS = require('./Directions.js');
    
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

    module.exports = {
        init: function(cells, size) {
            this.cells = cells;
            this.size = size;
        },
        
        wordAt: function(position, direction) {
            var cells = [], result = [], start, end;
            if (direction == DIRECTIONS.ACROSS) {
                start = Math.floor(position / this.size) * this.size;
                end = start + this.size;
                cells = range(start, end);
            } else {
                start = position % this.size;
                end = this.cells.length;
                cells = range(start, end, this.size);
            }
            var cellIndex = cells.indexOf(position),
                left = [],
                right = [],
                i;
            for (i = cellIndex; i < cells.length; i++) {
                if (this.cells[cells[i]] !== '#') {
                    right.push(cells[i]);
                } else {
                    break;
                }
            }
            for (i = cellIndex; i >= 0; i--) {
                if (this.cells[cells[i]] !== '#') {
                    left.push(cells[i]);
                } else {
                    break;
                }
            }
            return left.concat(right);
        }
    };

}(React, module));

},{"./Directions.js":9}],8:[function(require,module,exports){
/*global React, module, require */

(function (React, module) {
    var DIRECTIONS = require('./Directions.js'),
        UNPLAYABLE = require('./Unplayable.js'),
        model = function (cells, size, rawData) {
            this.cells = cells,
            this.size = size;
            this.rawData = rawData;
            this.lookupTable = this.buildLookupTable();
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

    model.prototype = {

        buildLookupTable: function() {
            
            var acrossKey = DIRECTIONS.ACROSS,
                downKey = DIRECTIONS.DOWN,
                result = {},
                numberedCells = Object.keys(this.rawData.numbered);

            result.numberToCell = {};
            for (var i = 1, l = numberedCells.length; i <= l; i++) {
                result.numberToCell[i] = numberedCells[i - 1];
            }
            console.log(this.rawData.numbered, result.numberToCell);
            return result;
        },
        
        wordAt: function(position, direction) {
            var cells = [], result = [], start, end;
            if (direction == DIRECTIONS.ACROSS) {
                start = Math.floor(position / this.size) * this.size;
                end = start + this.size;
                cells = range(start, end);
            } else {
                start = position % this.size;
                end = this.cells.length;
                cells = range(start, end, this.size);
            }
            var cellIndex = cells.indexOf(position),
                left = [],
                right = [],
                i;
            for (i = cellIndex; i < cells.length; i++) {
                if (this.cells[cells[i]] !== '#') {
                    right.push(cells[i]);
                } else {
                    break;
                }
            }
            for (i = cellIndex; i >= 0; i--) {
                if (this.cells[cells[i]] !== '#') {
                    left.push(cells[i]);
                } else {
                    break;
                }
            }
            return left.concat(right);
        }

    };

    module.exports = model;
}(React, module));

},{"./Directions.js":9,"./Unplayable.js":10}],9:[function(require,module,exports){
(function(module) {
    module.exports = {
        ACROSS: [1, 0],
        DOWN: [0, 1]
    };
}(module));

},{}],10:[function(require,module,exports){
(function(module) {
    module.exports = '#';
}(module));

},{}]},{},[1])