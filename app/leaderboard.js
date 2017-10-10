PlayersList = new Mongo.Collection('players');

if(Meteor.isClient){
  // this code only runs on the client
  console.log("Hello client");

  Template.leaderboard.events({
    // events go here
    'click .player': function(){
      var playerId = this._id;
      Session.set('selectedPlayer', playerId);
    }
  });

  Template.leaderboard.helpers({
    'player': function(){
      return PlayersList.find();
    },
    'selectedClass': function(){
      // code goes here
      var playerId = this._id;
      var selectedPlayer = Session.get('selectedPlayer');
      if(playerId == selectedPlayer){
        return "selected"
      }
    }
  });
}

if(Meteor.isServer){
  console.log("Hello server");
}