var m = require('mithril');
var partial = require('chessground').util.partial;
var util = require('./util');
var arena = require('./arena');
var pairings = require('./pairings');
var playerInfo = require('./playerInfo');
var pagination = require('../pagination');
var myCurrentGameId = require('../tournament').myCurrentGameId;

module.exports = {
  main: function(ctrl) {
    var gameId = myCurrentGameId(ctrl);
    var pag = pagination.players(ctrl);
    return [
      m('div.tournament_clock.title_tag', {
          config: util.clock(ctrl.data.secondsToFinish)
        },
        m('div.time')),
      util.title(ctrl),
      gameId ? m('a.is.is-after.pov.button.glowed', {
        href: '/' + gameId
      }, [
        'You are playing!',
        m('span.text[data-icon=G]', ctrl.trans('joinTheGame'))
      ]) : null,
      arena.standing(ctrl, pag)
    ];
  },
  side: function(ctrl) {
    return ctrl.vm.playerInfo.id ? playerInfo(ctrl) : pairings(ctrl);
  }
};
