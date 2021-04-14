//ability score API call
document.getElementById("attributeSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("attributeInput").value;
  if (value === "Strength" || value === "strength") {
    var abilityValue = "str";
  }
  else if (value === "Dexterity" || value === "dexterity") {
    abilityValue = "dex";
  }
  else if (value === "Constitution" || value === "constitution") {
    abilityValue = "con";
  }
  else if (value === "Intelligence" || value === "intelligence") {
    abilityValue = "int";
  }
  else if (value === "Wisdom" || value === "wisdom") {
    abilityValue = "wis";
  }
  else if (value === "Charisma" || value === "charisma") {
    abilityValue = "cha";
  }
  else if (value === "")
    return;
  console.log(value);

  const url = "https://www.dnd5eapi.co/api/ability-scores/" + abilityValue;
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
  //beginning of the json file results formatting
      let results = "";
      results += "<h3>Let's see what " + json.full_name + " is all about.</h3>";
      results += "<p>" + json.desc + "</p>";


      document.getElementById("attributeResults").innerHTML = results;
  });
});

//proficiencies API call
document.getElementById("skillSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("skillInput").value;

  if (value === "sleight of hand" || value === "Sleight of hand" || value === "Sleight of Hand" || value === "Sleight Of Hand") {
    var skillValue = "sleight-of-hand";
  }
  else if (value === "animal handling" || value === "Animal Handling" || value === "Animal handling" || value === "animalhandling") {
    skillValue = "animal-handling";
  }
  else if (value === "Athletics" || value === "athletics") {
    skillValue = "athletics";
  }
  else if (value === "Acrobatics" || value === "acrobatics") {
    skillValue = "acrobatics";
  }
  else if (value === "Stealth" || value === "stealth") {
    skillValue = "stealth";
  }
  else if (value === "Arcana" || value === "arcana") {
    skillValue = "arcana";
  }
  else if (value === "History" || value === "history") {
    skillValue = "history";
  }
  else if (value === "Investigation" || value === "investigation") {
    skillValue = "investigation";
  }
  else if (value === "Nature" || value === "nature") {
    skillValue = "nature";
  }
  else if (value === "Religion"|| value === "religion") {
    skillValue = "religion";
  }
  else if (value === "Insight"|| value === "insight") {
    skillValue = "insight";
  }
  else if (value === "Medicine"|| value === "medicine") {
    skillValue = "medicine";
  }
  else if (value === "Perception"|| value === "perception") {
    skillValue = "perception";
  }
  else if (value === "Survival"|| value === "survival") {
    skillValue = "survival";
  }
  else if (value === "Deception"|| value === "deception") {
    skillValue = "deception";
  }
  else if (value === "Intimidation"|| value === "intimidation") {
    skillValue = "intimidation";
  }
  else if (value === "Performance"|| value === "performance") {
    skillValue = "performance";
  }
  else if (value === "Persuasion"|| value === "persuasion") {
    skillValue = "persuasion";
  }

  const url = "https://www.dnd5eapi.co/api/skills/" + skillValue;
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      let results = "";
          results += "<h3>Let's see what " + json.name + " is all about.</h3>";
          results += "<p>" + json.desc + "</p>";

          document.getElementById("skillsResults").innerHTML = results;
    });
  });

//Player race info API call
  document.getElementById("raceSubmit").addEventListener("click", function(event) {
    event.preventDefault();
    const value = document.getElementById("raceInput").value;

    //place conditional statements on PC races here
    if (value === "Dwarf"|| value === "dwarf") {
      var raceValue = "dwarf";
    }
    else if (value === "Gnome"|| value === "gnome") {
      raceValue = "gnome";
    }
    else if (value === "Tiefling"|| value === "tiefling" || value === "Tielfing" || value === "tielfing") {
      raceValue = "tiefling";
    }
    else if (value === "Half-elf"|| value === "half-elf" || value === "Half elf" || value === "half elf") {
      raceValue = "half-elf";
    }
    else if (value === "Human"|| value === "human") {
      raceValue = "human";
    }
    else if (value === "Elf"|| value === "elf") {
      raceValue = "elf";
    }
    else if (value === "Halfling"|| value === "halfling") {
      raceValue = "halfling";
    }
    else if (value === "Half-orc"|| value === "half-orc" || value === "Half orc" || value === "half orc") {
      raceValue = "half-orc";
    }
    else if (value === "Dragonborn"|| value === "dragonborn") {
      raceValue = "dragonborn";
    }

    const url = "https://www.dnd5eapi.co/api/races/" + raceValue;
    fetch(url)
      .then(function(response) {
        return response.json();
      }).then(function(json) {
        let results = "";
            results += "<h3>Let's see what the " + json.name + " is all about.</h3>";
            results += "<p>You can run " + json.speed + " feet in a turn. Nice!</p>";
            results += "<p>" + json.alignment + "</p>";
            results += "<p>" + json.age + "</p>";
            results += "<p>" + json.size_description + "</p>";
            results += "<p>" + json.language_desc + "</p>";

            document.getElementById("raceResults").innerHTML = results;
      });
    });
