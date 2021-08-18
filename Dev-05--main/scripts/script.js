$(document).ready(function() {

  $.each(devProfile, function(key, valueObj) {

      if (key == 'pic') {
          console.log('<img src="' + valueObj + '" alt="dev pic" class="mx-auto d-block img-fluid rounded"/>');
          $('#dev-profile-data').append('<img src="' + valueObj + '" alt="dev pic" class="mx-auto d-block img-fluid rounded"/>');
      } else {
          $('#dev-profile-data').append("<p><b>" + key + ":</b>" + " " + valueObj + "</p>");
      }
  });

  $('#month-box li').click(function() {
      $('#console-box').text($(this).text());
      $(this).toggleClass('selected').siblings().removeClass('selected');;
  });


});

const devProfile = {
  "name":["uriel","kodia"],
    "pic": "https://camo.githubusercontent.com/63dd79341795dcabe86885975fbdb6cd45203a9b8db05ee09ee54425a1435c99/68747470733a2f2f6672696e6b6961632e636f6d2f6d656d652f5330374530382f313030333736382e6a70673f6236346c696e65733d4945527649456b6761323576647942336147463043694169636d686c6447397961574e6862434a745a574675637a383d",
    "Major":"Computer informatin system",
    "github":" https://github.com/urielkodia",
    "grad year": "2022",
    "Experience": "IT Student assistant",
    "Interest": "Sports",
    "side project": "none",
    "must know something about dev tech": "Basic front end  and basic back end ",
    "skills": "html5, css3, bs4, jQuery, js, json, so many wow...visual studio code, github, gist, markdown, codepen..."
  };