/** it's entirely possible I had way too much fun doing this. **/

var app = angular.module('app', ['ui.bootstrap', 'ngStorage']);

app.controller('Ctrl', ['$scope', '$localStorage', 'typeFactory', 'modelFactory', 'majorFactory', 'minorFactory', 'humanFactory', 'prayerFactory', 'ritualFactory', 'structureFactory', 'holidayFactory', 'ageritesFactory', 'marryritesFactory', 'deathritesFactory', 'clergyFactory', 'orderFactory', 'originFactory', 'afterFactory', 'principleFactory', 'ethicFactory', 'cultureFactory', 'symbolFactory',
function Ctrl($scope, $localStorage, typeFactory, modelFactory, majorFactory, minorFactory, humanFactory, prayerFactory, ritualFactory, structureFactory, holidayFactory, ageritesFactory, marryritesFactory, deathritesFactory, clergyFactory, orderFactory, originFactory, afterFactory, principleFactory, ethicFactory, cultureFactory, symbolFactory) {

    $scope.box1 = true;
    $scope.box2 = true;
    $scope.box3 = true;

    $scope.data = [];
    $scope.rollDice = function (val) {
        var vbase = typeFactory();
        $scope.data[val] = {
            val: val,
            type: vbase.name,
            model: modelFactory(vbase.name),
            major: majorFactory(vbase.tval),
            minor: minorFactory(vbase.tval),
            human: humanFactory(vbase.tval),
            origin: originFactory(vbase.tval),
            after: afterFactory(vbase.tval),
            principle: principleFactory(),
            ethic: ethicFactory(),
            culture: cultureFactory(),
            prayer: prayerFactory(vbase.pval),
            ritual: ritualFactory(),
            symbol: symbolFactory(),
            calendar: holidayFactory(),
            adult: ageritesFactory(),
            marry: marryritesFactory(),
            death: deathritesFactory(),
            structure: structureFactory(),
            clergy: clergyFactory(),
            order: orderFactory()

        };
        var total = $scope.data[val];
        // console.log(total);
        // $scope.$storage[val] = $localStorage.$default(total);
    };

}]);


app.factory('typeFactory',  function() {
    return  function() {
        var tval = Math.floor(Math.random()*31);
        if (tval > 27) {
            return types[9];
        } else if (tval > 15 ) {
            return types[8];
        } else if (tval > 9 ) {
            return types[7];
        } else if (tval > 7 ) {
            return types[6];
        } else if (tval > 5 ) {
            return types[5];
        } else {
            return types[tval];
        }
    };
});

app.factory('modelFactory',  function() {
    return function(val) {
        var line = 'The system is ' + val + '. The divine ';
        var ind = Math.floor(Math.random()*12);
        var modelAdj1 = shuffle(modelAdjs1);
        var modelAdj2 = shuffle(modelAdjs2);
        var modelNoun = shuffle(modelNouns);
        if(ind % 2 === 0) {
            if (ind < 4) {
                var adjsel = modelAdj2[0];
            } else {
                var adjsel = modelAdj1[0];
            }
            var line = line + 'is considered ' + adjsel + ', and follows a ' + modelNoun[0] + ' model.';
        } else {
            var line = line + 'follows a ' + modelNoun[0] + ' model.';
        }
        return line;
    };
});

app.factory('majorFactory',  function() {
    return function(val) {
        var arr = [];
        if (val === 1) {
            var major = shuffle(majors);
            var god = shuffle(gods);
            var title = 'the ' + major[0] + ' ' + god[0];
            arr.push(title);
        } else if ( val === 2 ) {
            var num = Math.floor(Math.random()* (19) + 1);
            var major = shuffle(majors);
            for(  var i = 0; i < num; i++ ) {
                var god = shuffle(gods);
                var title = 'the ' + major[i] + ' ' + god[0];
                arr.push(title);
            }
        }
        return arr;
    }
});

app.factory('minorFactory',  function() {
    return function(val) {
        var arr = [];
        var minor = shuffle(minors);
        var patron = shuffle(patrons);
        var god = shuffle(gods);
        if (val === 1) {
            var num = Math.floor(Math.random()* (19) + 1);
            for(  var i = 0; i < num; i++ ) {
                var title = 'patron of ' + minor[i];
                arr.push(title);
            }
        } else if ( val === 2 ) {
            var num = Math.floor(Math.random()* (19) + 1);
            for(  var i = 0; i < num; i++ ) {
                var god = shuffle(gods);
                var title = god[0] + ' of ' + minor[i];
                arr.push(title);
            }
        }
        return arr;
    }
});

app.factory('humanFactory',  function() {
    return  function(val) {
        var arr = [];
        var teach = Math.floor(Math.random()*100);
        if (teach === 1 ) {
            var line = teach + ' teacher';
            arr.push(line);
        } else if (teach > 1 ) {
            var line = teach + ' teachers';
            arr.push(line);
        }
        if (val < 3) {
            var proph = Math.floor(Math.random()*20);
            if (proph === 1 ) {
                var line = proph + ' prophet';
                arr.push(line);
            } else if (proph > 1 ) {
                var line = proph + ' prophets';
                arr.push(line);
            }
        }
        if ( (val === 2) || (val === 1) ) {
            var dei = Math.floor(Math.random()*100);
            if (dei === 1 ) {
                var line = dei + ' deified human';
                arr.push(line);
            } else if (dei > 1 ) {
                var line = dei + ' deified humans';
                arr.push(line);
            }
        }
        return arr;
    };
});

app.factory('prayerFactory',  function() {
    return  function(val) {
        var arr = [];
        if ( val > 0 ) {
            var pray1 = Math.floor(Math.random()*20);
            var pray2 = Math.floor(Math.random()*20);

            if ( pray1 < 2 ) {
                line = 'The divine ignores or denies all petitions.';
                arr.push(line);
            } else {
                var divfreq = shuffle(divfreqs);
                var possessive = shuffle(possessives);
                var rank = shuffle(ranks);
                var negation = shuffle(negations);
                var position = shuffle(positions);
                var add = Math.floor(Math.random()*4);
                line = 'The divine ' + divfreq[0] + ' hear ' + possessive[0] + ' petition';
                if ( add === 1 ) {
                    if ( rank[0].indexOf("#N#") > -1 ) {
                        var num = Math.floor(Math.random()*(80) + 10);
                        rank[0] = rank[0].replace("#N#", num);
                    }
                    line = line + ', unless the person is ' +  rank[0];
                    rank[0] = rank[0].replace(num, "#N#");
                } else {
                    if ( add > 0 ) {
                        line = line + ', if the person is ' +  position[0];
                    };
                    if (add > 1 ) {
                        var num = Math.floor(Math.random()*(80) + 10);
                        if ( rank[0].indexOf("#N#") > -1 ) {
                            rank[0] = rank[0].replace("#N#", num);
                        }
                        line = line + ' and ' + negation[0] + ' ' +  rank[0];
                        rank[0] = rank[0].replace(num, "#N#");
                    };
                }
                line = line + '.';
                arr.push(line);
            }

            if ( pray2 < 2 ) {
                line = 'The divine never speaks.';
                arr.push(line);
            } else {
                var divfreq = shuffle(divfreqs);
                var listener = shuffle(listeners);
                var num = Math.floor(Math.random()* (3) + 1);
                for(  var i = 0; i < num; i++ ) {
                    line = 'The divine ' + divfreq[i] + ' speak ' + listener[i] + '.';
                    arr.push(line);
                }
            }

        } else {
            line = 'The divine never speaks.';
            arr.push(line);
        }

        return arr;
    };
});

app.factory('ritualFactory',  function() {
    return  function(val) {
        var arr = [];

        var num1 = Math.floor(Math.random()* (3) + 1);
        var num2 = Math.floor(Math.random()*(30) + 2);
        var num3 = Math.floor(Math.random()*(80) + 10);
        var freq = shuffle(freqs);
        var style = shuffle(styles);
        var allowance = shuffle(allowances);
        var location = shuffle(locations);
        if ( allowance[0].indexOf("#N#") > -1 ) {
            allowance[0] = allowance[0].replace("#N#", num2);
        }
        line1 = 'Rituals are ' + freq[0] + ' ' + style[0] + ', ' + allowance[0] + ', and take place ' + location[0] + '. ';
        arr.push(line1);
        allowance[0] = allowance[0].replace(num2, "#N#");

        if ( num1 > 1 ) {
            var negation = shuffle(negations);
            var rank = shuffle(ranks);
            if ( rank[0].indexOf("#N#") > -1 ) {
                rank[0] = rank[0].replace("#N#", num3);
            }
            line2 = 'Participants must ' + negation[0] + ' be ' + rank[0] + '.';
            arr.push(line2);
            rank[0] = rank[0].replace(num3, "#N#");
        }

        var preparation = shuffle(preparations);
        var line3 = 'Preparation involves ' + preparation[0] + ', ' + preparation[1] + ', and ' + preparation[2] + '.';
        arr.push(line3);

        var use = shuffle(uses);
        var line4 = 'Rituals include ' + use[0] + ', ' + use[1] + ', and sometimes ' + use[2] + '.';
        arr.push(line4);

        var time = shuffle(times);
        var start = shuffle(starts);
        var last = shuffle(lasts);
        var freq = shuffle(freqs);
        var line5 = 'The ritual calendar is set according to ' + time[0] + '. Rituals begin at ' + start[0] + ' and ' + freq[0] + ' last ' + last[0] + '.';
        arr.push(line5);

        return arr;
    };
});

app.factory('holidayFactory', function() {
    return  function() {
        var arr = [];
        var start = shuffle(starts);
        var last = shuffle(lasts);
        var freq = shuffle(freqs);
        var holidaypurpose = shuffle(holidaypurposes);

        var num4 = Math.floor(Math.random()*(127) + 3);
        var line1 = 'There are ' + num4 + ' holy days in a calendar year.';

        var num1 = Math.floor(Math.random()*(30) + 50);
        var num2 = Math.floor(num4 * (num1/100));
        var line1 = line1 + ' ' + num2 + ' holy days focus on ' + holidaypurpose[0] + '. '
        var num3 = num4 - num2;
        if (num3 < 5 ) {
            line1 = line1 + ' The remainder commemorate ' + holidaypurpose[1] + ' and ' + holidaypurpose[2] + '. ';
        } else {
            var num10 = Math.floor(Math.random()*(30) + 50);
            var num20 = Math.floor(num3 * (num10/100));
            var line1 = line1 + ' ' + num20 + ' holy days celebrate ' + holidaypurpose[1] + '. '
            if (num3 < 2 ) {
                line1 = line1 + ' The remainder commemorate ' + holidaypurpose[2] + ' and ' + holidaypurpose[3] + '. ';
            }
        }

        var line3 = 'Holy days begin at ' + start[0] + ' and ' + freq[0] + ' last ' + last[0] + '.';
        arr.push(line1);

        var holiday = shuffle(holidays);
        var conjunction = shuffle(conjunctions);
        var line2 = 'Celebrations usually include ' + holiday[0] + ' and ' + holiday[1] + conjunction[0] + holiday[2] + '.';
        arr.push(line2);
        return arr;
    };
});

app.factory('ageritesFactory',  function() {
    return  function() {
        var line = '';

        var agerite = shuffle(agerites);
        var conjunction = shuffle(conjunctions);
        var num1 = Math.floor(Math.random()*(12) + 3);
        var num2 = Math.floor(Math.random()*(7) + 1);
        var num3 = Math.floor(Math.random()*(15) + 5);
        var line = 'Coming-of-age rites require ';

        if ( agerite[0].indexOf("#N#") > -1 ) {
            agerite[0] = agerite[0].replace("#N#", num1);
        }
        line = line + agerite[0];

        if ( agerite[1].indexOf("#N#") > -1 ) {
            agerite[1] = agerite[1].replace("#N#", num2);
        }
        line = line + ', ' + agerite[1];

        if ( agerite[2].indexOf("#N#") > -1 ) {
            agerite[2] = agerite[2].replace("#N#", num3);
        }
        line = line + conjunction[0] + agerite[2] + '.';

        agerite[0] = agerite[0].replace(num1, "#N#");
        agerite[1] = agerite[1].replace(num2, "#N#");
        agerite[2] = agerite[2].replace(num3, "#N#");

        return line;
    };
});


app.factory('marryritesFactory',  function() {
    return  function() {
        var arr = [];

        var marryrite = shuffle(marryrites);
        var conjunction = shuffle(conjunctions);
        var num1 = Math.floor(Math.random()*(12) + 2);
        var num2 = Math.floor(Math.random()*(7) + 2);
        var num3 = Math.floor(Math.random()*(15) + 2);
        var num4 = Math.floor(Math.random()*(7) + 2);
        var num5 = Math.floor(Math.random()*(7) + 2);

        var line1 = 'Marriage is ';

        if ( marryrite[0].indexOf("#N#") > -1 ) {
            marryrite[0] = marryrite[0].replace("#N#", num1);
        }
        line1 = line1 + marryrite[0];

        if ( marryrite[1].indexOf("#N#") > -1 ) {
            marryrite[1] = marryrite[1].replace("#N#", num2);
        }
        line1 = line1 + ', ' + marryrite[1];

        if ( marryrite[2].indexOf("#N#") > -1 ) {
            marryrite[2] = marryrite[2].replace("#N#", num3);
        }
        line1 = line1 + conjunction[0] + marryrite[2] + '.';
        arr.push(line1);

        var marryask = shuffle(marryasks);
        var conjunction = shuffle(conjunctions);
        line2 = ' Initiating or arranging a marriage is usually a ' + marryask[0] + ' role' + conjunction[1] + 'a ' + marryask[1] + ' role.';

        var marrycele = shuffle(marryceles);
        var conjunction = shuffle(conjunctions);
        if ( marrycele[0].indexOf("#N#") > -1 ) {
            marrycele[0] = marrycele[0].replace("#N#", num4);
        }
        if ( marrycele[1].indexOf("#N#") > -1 ) {
            marrycele[1] = marrycele[1].replace("#N#", num5);
        }
        line2 = line2 + ' Marriages usually include ' + marrycele[0] + conjunction[1] + marrycele[1] + '.';
        arr.push(line2);

        marryrite[0] = marryrite[0].replace(num1, "#N#");
        marryrite[1] = marryrite[1].replace(num2, "#N#");
        marryrite[2] = marryrite[2].replace(num3, "#N#");
        marrycele[0] = marrycele[0].replace(num4, "#N#");
        marrycele[1] = marrycele[1].replace(num5, "#N#");

        return arr;
    };
});


app.factory('deathritesFactory',  function() {
    return  function() {
        var line = '';

        var deathrite = shuffle(deathrites);
        var burial = shuffle(burials);
        var altconjunction = shuffle(altconjunctions);
        var num1 = Math.floor(Math.random()*(12) + 3);
        var num2 = Math.floor(Math.random()*(7) + 1);
        var num3 = Math.floor(Math.random()*(15) + 5);
        var line = 'Death rites require ';

        if ( deathrite[0].indexOf("#N#") > -1 ) {
            deathrite[0] = deathrite[0].replace("#N#", num1);
        }
        line = line + deathrite[0];

        if ( deathrite[1].indexOf("#N#") > -1 ) {
            deathrite[1] = deathrite[1].replace("#N#", num2);
        }
        line = line + ', ' + deathrite[1];

        if ( deathrite[2].indexOf("#N#") > -1 ) {
            deathrite[2] = deathrite[2].replace("#N#", num3);
        }
        line = line + altconjunction[0] + deathrite[2] + '.';
        line = line + ' Bodies are ' + burial[0] + '.';
        deathrite[0] = deathrite[0].replace(num1, "#N#");
        deathrite[1] = deathrite[1].replace(num2, "#N#");
        deathrite[2] = deathrite[2].replace(num3, "#N#");

        return line;
    };
});

app.factory('structureFactory',  function() {
    return  function(val) {
        var arr = [];

        var heirarchy = shuffle(heirarchys);
        var clergyfunction = shuffle(clergyfunctions);
        var altconjunction = shuffle(altconjunctions);
        var role = shuffle(roles);

        var line2 = 'The religious heirarchy is ' + heirarchy[0] + ', and religious roles are ' + role[0] + '. ';
        var line2 = line2 + ' Primary functions are to ' + clergyfunction[0] + ', ' + clergyfunction[1] + altconjunction[0] + clergyfunction[2] + '.';
        arr.push(line2);

        return arr;
    };
});

app.factory('clergyFactory',  function() {
    return  function(val) {
        var arr = [];

        var altconjunction = shuffle(altconjunctions);
        var num = Math.floor(Math.random()*(80) + 10);
        var person = shuffle(persons);
        var rank = shuffle(ranks);
        var negation = shuffle(negations);
        var position = shuffle(positions);
        var clergystart = shuffle(clergystarts);


        if ( rank[0].indexOf("#N#") > -1 ) {
            rank[0] = rank[0].replace("#N#", num);
        }
        var line1 = 'Clergy are ' + person[0] + ' who are ' + rank[0] + ' and ' + negation[0] + ' ' + position[0] + '.';
        var line1 = line1 + ' To join a religious order requires being ' + clergystart[0] + altconjunction[1] + clergystart[1] + '.';
        arr.push(line1);
        rank[0] = rank[0].replace(num, "#N#");

        return arr;
    };
});

app.factory('orderFactory',  function() {
    return  function(val) {
        var arr = [];

        var altconjunction = shuffle(altconjunctions);
        var clergystyle = shuffle(clergystyles);
        var clergyfamily = shuffle(clergyfamilys);
        var clergydisplay = shuffle(clergydisplays);

        var line3 = ' The average clergical lifestyle is ' + clergystyle[0] + ', although some live in a ' + clergystyle[1] + ' manner.';
        var line3 = line3 + ' Clergy are expected to be ' + clergyfamily[0] + ', and display their status with ' + clergydisplay[0] + altconjunction[2] + clergydisplay[1] + '.';
        arr.push(line3);

        return arr;
    };
});

app.factory('originFactory',  function() {
    return  function(val) {
        var arr = [];
        var ind = Math.floor(Math.random()*12);
        if (( val < 1 ) || ( ind < 2 )) {
            var line1 = 'The myth does not have a creation story, or does not consider it important.';
            arr.push(line1);
        } else {
            var creation = shuffle(creations);
            var mortal = shuffle(mortals);
            var line1 = 'The world was created ' + creation[0] + ', and ';
            line1 = line1 + 'humans were made from ' + mortal[0] + '.';
            arr.push(line1);
            if(ind % 2 === 0) {
                line2 = 'It is heresy to say humans were made from ' + mortal[1] + ', or from ' + mortal[2] + '.';
                arr.push(line2);
            }
        }
        return arr;
    };
});

app.factory('afterFactory',  function() {
    return  function(val) {
        var arr = [];
        var ind = Math.floor(Math.random()*12);
        if (( val < 1 ) || ( ind < 2 )) {
            var line1 = 'There is no belief in an afterlife.';
            arr.push(line1);
        } else {
            var altconjunction = shuffle(altconjunctions);
            var afterlife = shuffle(afterlifes);
            var line1 = 'Life after death is ' + afterlife[0] + ',  although minor sects say the afterlife is ' + afterlife[1] + '.';
            arr.push(line1);

            var negation = shuffle(negations);
            line2 = 'The afterlife can ' + negation[0] + ' be reached by living humans.';
            arr.push(line2);
        }
        return arr;
    };
});

app.factory('principleFactory',  function() {
    return  function(val) {
        var arr = [];

        var altconjunction = shuffle(altconjunctions);
        var goal = shuffle(goals);
        var afterlife = shuffle(afterlifes);
        var line1 = 'In general, the religion is focused on ' + goal[0] + ', ' + goal[1] + ', and to a lesser degree, ' + goal[2] + '.';
        arr.push(line1);

        var goal = shuffle(goals);
        var line2 = 'On a personal level, people focus on ' + goal[0] + ', ' + goal[1] + ', and sometimes ' + goal[2] + '.';
        arr.push(line2);

        return arr;
    };
});

app.factory('ethicFactory',  function() {
    return  function(val) {
        var arr = [];
        var virtue = shuffle(virtues);
        var line3 = 'Good people are expected to be ' + virtue[0] + ' and ' + virtue[1] + '.';
        arr.push(line3);

        var vice = shuffle(vices);
        var line4 = 'Evil is defined as ' + vice[0] + ', ' + vice[1] + ', and ' + vice[2] + '.';
        arr.push(line4);

        var taboo = shuffle(taboos);
        var altconjunction = shuffle(altconjunctions);
        var line5 = 'Taboo subjects are ' + taboo[0] + ', ' + taboo[1] + altconjunction[0] + taboo[2] + '.';
        arr.push(line5);

        return arr;
    };
});

app.factory('cultureFactory',  function() {
    return  function(val) {
        var arr = [];

        var altconjunction = shuffle(altconjunctions);
        var spirit = shuffle(spirits);
        var attitude = shuffle(attitudes);
        var line1 = 'The spirit world includes ' + spirit[0] + ', ' + spirit[1] + altconjunction[0] + spirit[2] + '.';
        var line1 = line1 + ' The average person ' + attitude[1] + ' any spirits' + altconjunction[1] + attitude[2] + ' them.';
        arr.push(line1);

        var art = shuffle(arts);
        var line2 = 'The highest art forms are ' + art[0] + ', ' + art[1] + altconjunction[2] + art[2] + '.';
        arr.push(line2);

        var outsider = shuffle(outsiders);
        var altconjunction = shuffle(altconjunctions);
        var line3 = 'Outsiders are usually ' + outsider[0] + altconjunction[0] + outsider[1] + '.';
        arr.push(line3);

        return arr;
    };
});

app.factory('symbolFactory',  function() {
    return  function(val) {
        var arr = [];

        var num1 = Math.floor(Math.random()*(12) + 2);
        var num2 = Math.floor(Math.random()*(12) + 2);
        var num3 = Math.floor(Math.random()*(12) + 2);
        var num4 = Math.floor(Math.random()*(12) + 2);
        var symbol = shuffle(symbols);
        if ( symbol[0].indexOf("#N#") > -1 ) {
            symbol[0] = symbol[0].replace("#N#", num1);
        }
        if ( symbol[1].indexOf("#N#") > -1 ) {
            symbol[1] = symbol[1].replace("#N#", num2);
        }
        if ( symbol[2].indexOf("#N#") > -1 ) {
            symbol[2] = symbol[2].replace("#N#", num3);
        }
        if ( symbol[3].indexOf("#N#") > -1 ) {
            symbol[3] = symbol[3].replace("#N#", num4);
        }
        var line1 = 'The most important symbol consists of ' + symbol[0] + ' and ' + symbol[1] + ". Lesser symbols are " + symbol[2] + ' and ' + symbol[3] + '.';
        arr.push(line1);
        symbol[0] = symbol[0].replace(num1, "#N#");
        symbol[1] = symbol[1].replace(num2, "#N#");
        symbol[2] = symbol[2].replace(num3, "#N#");
        symbol[3] = symbol[3].replace(num4, "#N#");

        var color = shuffle(colors);
        var altconjunction = shuffle(altconjunctions);
        var line2 = 'The most common liturgical colors are  ' + color[0] + ' and ' + color[1] + '. The highest religious ranks wear ' + color[2] + ', and ' + color[3] + ' is reserved for holy days.';
        arr.push(line2);

        return arr;
    };
});

function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};