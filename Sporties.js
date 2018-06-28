onEvent("About_button", "click", function() {
  setScreen("About us");
});
onEvent("start_button", "click", function() {
  setScreen("catscreen");
});
onEvent("boardgamebutton", "click", function() {
  setScreen("BOARD-GAMES");
});
onEvent("ludobutton", "click", function() {
  setScreen("ludoscreen");
});
onEvent("chessbutton", "click", function() {
  setScreen("chessscreen");
});
onEvent("cluedbutton", "click", function() {
  setScreen("cluedbutton");
});
onEvent("othellobutton", "click", function() {
  setScreen("othelloscreen");
});
onEvent("monopolybutton", "click", function() {
  setScreen("monopolyscreen");
});
onEvent("backfromaboutus", "click", function() {
  setScreen("Home");
});
onEvent("backfromcatscreen", "click", function() {
  setScreen("Home");
});

onEvent("backfromludoscreen", "click", function() {
  setScreen("BOARD-GAMES");
});
onEvent("backfromchessscreen", "click", function() {
  setScreen("BOARD-GAMES");
});
onEvent("backfromothello", "click", function() {
  setScreen("BOARD-GAMES");
});
onEvent("backfrommonopoly", "click", function() {
  setScreen("BOARD-GAMES");
});
onEvent("backfromcluedoscreen", "click", function() {
  setScreen("BOARD-GAMES");
});
onEvent("cardgamebutton", "click", function() {
  setScreen("CARD-GAMES");
});
onEvent("pokerbutton", "click", function() {
  setScreen("pokerscreen");
});
onEvent("unobutton", "click", function() {
  setScreen("unoscreen");
});
onEvent("backfrompoker", "click", function() {
  setScreen("CARD-GAMES");
});
onEvent("backfromuno", "click", function() {
  setScreen("CARD-GAMES");
});
onEvent("backfromcardgames", "click", function() {
  setScreen("indoor_sports");
});
onEvent("cluedbutton", "click", function() {
  setScreen("cluedoscreen");
});
onEvent("backfromboardgames", "click", function() {
  setScreen("indoor_sports");
});
onEvent("backfromfootball", "click", function() {
  setScreen("outdoorsports");
});
onEvent("indianfootballerbutton", "click", function() {
  setScreen("INDIANFOOTBALLER");
});
onEvent("backfromindianfootballer", "click", function() {
  setScreen("football");
});
onEvent("footballbutton", "click", function() {
  setScreen("football");
});
onEvent("cricketbutton", "click", function() {
  setScreen("CRICKET");
});
onEvent("backfromcricket", "click", function() {
  setScreen("outdoorsports");
});
onEvent("famouscrickertrsbutton", "click", function() {
  setScreen("famouscricketers");
});
onEvent("backfromcricketers", "click", function() {
  setScreen("CRICKET");
});
onEvent("basketballbutton", "click", function() {
  setScreen("basketball");
});
onEvent("famousbasketbalplayers", "click", function() {
  setScreen("basketballplayers");
});
onEvent("backfrombasketballplayers", "click", function() {
  setScreen("basketball");
});
onEvent("backbasketballbutton", "click", function() {
  setScreen("outdoorsports");
});
onEvent("backfromoutdoorsport", "click", function() {
  setScreen("catscreen");
  setProperty("dropdown1", "value", "CHOOSE YOUR SPORT");
  
});
onEvent("backfromindoor", "click", function() {
  setScreen("catscreen");
  setProperty("dropdown1", "value", "CHOOSE YOUR SPORT");
});
onEvent("badmintonbutton", "click", function() {
  setScreen("badminton");
});
onEvent("famousplayers", "click", function() {
  setScreen("badmintonplayers");
});
onEvent("backfrombadminton", "click", function() {
  setScreen("badminton");
});
onEvent("bbackfrombadminton", "click", function() {
  setScreen("outdoorsports");
});
onEvent("backfromhockeyplayers", "click", function() {
  setScreen("hockey");
});
onEvent("button14", "click", function() {
  setScreen("famoushockeyplayers");
});
onEvent("backfromhockey", "click", function() {
  setScreen("outdoorsports");
});
onEvent("hockeybutton", "click", function() {
  setScreen("hockey");
});
onEvent("Home", "click", function() {
  console.log("Home clicked!");
});
onEvent("dropdown1", "change", function() {
  if (getText("dropdown1")=="INDOOR SPORTS") {
  setScreen("indoor_sports");
  } else if (getText("dropdown1")=="OUTDOOR SPORTS") {
  setScreen("outdoorsports"); 
  } else {
  setScreen("catscreen");  
  }
});
onEvent("button-FEEDBACK", "click", function() {
  setScreen("FEEDBACKSCREEN");
});
onEvent("SUBMIT-BUTTON-FEEDBACK-SCREEN", "click", function() {
  createRecord("USER DATA", {NAME:getText("text_input1"),FEEDBACK:getText("textbox_feedback")}, function(record) {
    console.log("table updated");  
  });
  setScreen("THANKYOU-SCREEN");
});
onEvent("thanktohome", "click", function() {
  setScreen("Home");
});
setSize("image5", 120, 80);
setSize("image6", 120, 80);
setSize("image7", 120, 80);
onEvent("backfromfeedback", "click", function() {
  setScreen("Home");
});
