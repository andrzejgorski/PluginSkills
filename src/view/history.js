(function(){
  LifeGamification.history = {};
  LifeGamification.history.name = "History";

  LifeGamification.history.render = function() {
    $('#content').html('');
    render(LifeGamification.skillsCollection.data);
  }

  const render = function(skills){
    $('#content').append(`<div id="history"> </div>`)
    let code = `
      <div id="history__wrapper">
        <p class="history__message">Select skill and time limits:</p>
        <p>Skill:
          <select class="history__select-skill">
      `;
    for(let name in skills){
      code += `<option value="${name}">${name}</option>`;
    }
    code += `
          </select>
          Minimum time: <input class="history__min-time"> Maximum time: <input class="history__max-time">
          <button class="history__filter-button">Filter</button>
        </p>
        <p class="history__result"></p>
      </div>
    `;
    $("#history").html(code);
    handleHistoryFilterButton();
  }

  const handleHistoryFilterButton = function(){
    $(".history__filter-button").click(function(){
      const skillName = $(".history__select-skill").val();
      const skill = LifeGamification.skillsCollection.data[skillName];
      const minTime = $(".history__min-time").val();
      const maxTime = $(".history__max-time").val();
      const sessionsNum = skill.timer.findNumberOfSessions(minTime, maxTime);
      $(".history__result").html(`${sessionsNum} sessions`);
    });
  }
})();
