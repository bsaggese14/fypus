ocpu.seturl("http://public.opencpu.org/ocpu/library/base/R")

function regress(data) {
    var relationship = [];
    var user = [];
    //var title = [];
    var industry = [];
    var sector = [];
    var revenue = [];
    var employees = [];
    var sex = [];
    var age = [];
    var pitch = [];
    var contact = [];

    // assign local variables with latest values in database
    Object.keys(data).forEach(function (k) {
        relationship.push(data[k]["Personal Relationship"]);
        if (data[k]["User"] == "Y") {
            user.push(1);
        } else {
            user.push(0);
        }
        //title.push(data[k]["Title"]);
        industry.push(data[k]["Industry"]);
        sector.push(data[k]["Sector"]);
        revenue.push(data[k]["Revenue"]);
        employees.push(data[k]["Employees"]);
        sex.push(data[k]["Sex"]);
        age.push(data[k]["Age"]);
        pitch.push(data[k]["Pitch"]);
        contact.push(data[k]["Contact"]);
    });

    // transform variables into vectors for use in R
    relationshipVector = "c(";
    for (var i = 0; i < relationship.length; i++) {
        if (i < relationship.length - 1) {
            relationshipVector += '"' + relationship[i] + '"' + ",";
        }
        else {
            relationshipVector += '"' + relationship[i] + '"' + ")";
        }
    }
    userVector = "c(";
    for (var i = 0; i < user.length; i++) {
        if (i < user.length - 1) {
            userVector += user[i] + ",";
        }
        else {
            userVector += user[i] + ")";
        }
    }
    industryVector = "c(";
    for (var i = 0; i < industry.length; i++) {
        if (i < industry.length - 1) {
            industryVector += '"' + industry[i] + '"' + ",";
        }
        else {
            industryVector += '"' + industry[i] + '"' + ")";
        }
    }
    sectorVector = "c(";
    for (var i = 0; i < sector.length; i++) {
        if (i < sector.length - 1) {
            sectorVector += '"' + sector[i] + '"' + ",";
        }
        else {
            sectorVector += '"' + sector[i] + '"' + ")";
        }
    }
    revenueVector = "c(";
    for (var i = 0; i < revenue.length; i++) {
        if (i < revenue.length - 1) {
            revenueVector += revenue[i] + ",";
        }
        else {
            revenueVector += revenue[i] + ")";
        }
    }
    employeesVector = "c(";
    for (var i = 0; i < employees.length; i++) {
        if (i < employees.length - 1) {
            employeesVector += employees[i] + ",";
        }
        else {
            employeesVector += employees[i] + ")";
        }
    }
    sexVector = "c(";
    for (var i = 0; i < sex.length; i++) {
        if (i < sex.length - 1) {
            sexVector += '"' + sex[i] + '"' + ",";
        }
        else {
            sexVector += '"' + sex[i] + '"' + ")";
        }
    }
    ageVector = "c(";
    for (var i = 0; i < age.length; i++) {
        if (i < age.length - 1) {
            ageVector += age[i] + ",";
        }
        else {
            ageVector += age[i] + ")";
        }
    }
    pitchVector = "c(";
    for (var i = 0; i < pitch.length; i++) {
        if (i < pitch.length - 1) {
            pitchVector += '"' + pitch[i] + '"' + ",";
        }
        else {
            pitchVector += '"' + pitch[i] + '"' + ")";
        }
    }
    contactVector = "c(";
    for (var i = 0; i < contact.length; i++) {
        if (i < contact.length - 1) {
            contactVector += '"' + contact[i] + '"' + ",";
        }
        else {
            contactVector += '"' + contact[i] + '"' + ")";
        }
    }

    // two operations
    $("#submit").on("click", function () {
        // prediction
        if ($("#shouldPredict").is(':checked')) {
            var varsToPredict = "";
            $('.danger').removeClass('danger');
            var regressionSnip = "userVector=" + userVector + '\n';
            var tempString = "";

            // currently 9 explanatory variables
            if ($('#PersonalRelationshipCheck').is(':checked')) {
                checkInput($('select[name="PersonalRelationshipInput"]').val(), null);
                // select
                regressionSnip += "relationshipVector=" + relationshipVector + '\n';
                varsToPredict += ",relationshipVector=" + '"' + $('select[name="PersonalRelationshipInput"]').val() + '"';
                tempString += "+relationshipVector";
            }
            if ($('#IndustryCheck').is(':checked')) {
                checkInput($('select[name="IndustryInput"]').val(), null);
                regressionSnip += "industryVector=" + industryVector + '\n';
                varsToPredict += ",industryVector=" + '"' + $('select[name="IndustryInput"]').val() + '"';
                tempString += "+industryVector";
            }
            if ($('#SectorCheck').is(':checked')) {
                checkInput($('select[name="SectorInput"]').val(), null);
                regressionSnip += "sectorVector=" + sectorVector + '\n'
                varsToPredict += ",sectorVector=" + '"' + $('select[name="SectorInput"]').val() + '"';
                tempString += "+sectorVector";
            }
            if ($('#RevenueCheck').is(':checked')) {
                checkInput($('input[name="RevenueInput"]').val(), 0);
                // input
                regressionSnip += "revenueVector=" + revenueVector + '\n';
                varsToPredict += ",revenueVector=" + $('input[name="RevenueInput"]').val();
                tempString += "+revenueVector";
            }
            if ($('#EmployeesCheck').is(':checked')) {
                checkInput($('input[name="EmployeesInput"]').val(), 0);
                regressionSnip += "employeesVector=" + employeesVector + '\n';
                varsToPredict += ",employeesVector=" + $('input[name="EmployeesInput"]').val();
                tempString += "+employeesVector";
            }
            if ($('#SexCheck').is(':checked')) {
                checkInput($('select[name="SexInput"]').val(), null);
                regressionSnip += "sexVector=" + sexVector + '\n';
                varsToPredict += ",sexVector=" + '"' + $('select[name="SexInput"]').val() + '"';
                tempString += "+sexVector";
            }
            if ($('#AgeCheck').is(':checked')) {
                checkInput($('input[name="AgeInput"]').val(), 0);
                regressionSnip += "ageVector=" + ageVector + '\n';
                varsToPredict += ",ageVector=" + $('input[name="AgeInput"]').val();
                tempString += "+ageVector";
            }
            if ($('#PitchCheck').is(':checked')) {
                checkInput($('select[name="PitchInput"]').val(), null);
                regressionSnip += "pitchVector=" + pitchVector + '\n';
                varsToPredict += ",pitchVector=" + '"' + $('select[name="PitchInput"]').val() + '"';
                tempString += "+pitchVector";
            }
            if ($('#ContactMethodCheck').is(':checked')) {
                checkInput($('select[name="ContactMethodInput"]').val(), null);
                regressionSnip += "contactVector=" + contactVector + '\n';
                varsToPredict += ",contactVector=" + '"' + $('select[name="ContactMethodInput"]').val() + '"';
                tempString += "+contactVector";
            }

            tempString = tempString.substring(1);
            varsToPredict = varsToPredict.substring(1);
            //
            var snipForPrediction = regressionSnip;
            snipForPrediction += "\ntestmodel = glm(userVector~" + tempString + ",family = binomial(link='logit'))\nnewdata = data.frame(" + varsToPredict + ")\npredict(testmodel, newdata, type='response')";
            snipForPrediction = new ocpu.Snippet(snipForPrediction);
            //
            regressionSnip += "testmodel<-glm(userVector~" + tempString + ",family = binomial(link='logit'))\nsummary(testmodel)";
            regressionSnip = new ocpu.Snippet(regressionSnip);


            // apply the model, get p values and odds ratio for each coefficient
            $("button").attr("disabled", "disabled");
            var req = ocpu.call("identity", {"x": regressionSnip}, function (session) {
                session.getConsole(function (result) {
                    var resultSplit = result.split("\n");
                    var pValues = [];
                    for (var i = 0; i < resultSplit.length; i++) {
                        var lineSplit = resultSplit[i].split(/\ +/);
                        if (lineSplit[0].indexOf("Vector") !== -1) {
                            //var pValuePair = {[lineSplit[0]]: lineSplit[4]};
                            //var coefficients = {[lineSplit[0]]: lineSplit[1]};
                            //pValues.push(pValuePair);
                            //console.log(pValuePair);
                            //console.log(coefficients);
                            displayResults(lineSplit[0], lineSplit[4], lineSplit[1]);
                        }
                    }
                });
            });
            req.fail(function () {
                alert("Server error: " + req.responseText);
            });
            req.always(function () {
                $("button").removeAttr("disabled");
            });


            // predict the odds
            var req2 = ocpu.call("identity", {"x": snipForPrediction}, function (session2) {
                session2.getConsole(function (result2) {
                    var resultSplit2 = result2.split("\n");
                    $(".resultsDiv").css("display", "block");
                    //$(".resultsDiv").html(100 * parseFloat(resultSplit2[resultSplit2.length - 1]) + "%");
				            $(".resultsDiv").html("Result: " + 100 * parseFloat(resultSplit2[resultSplit2.length-1]) + "% <img class = 'closeResults' src = 'cancel.png'>");
                    $(".resultsDiv").on("click", function() {
                        $(".resultsDiv").css("display", "none");
                    });
                });
            });
            req2.fail(function () {
                alert("Server error: " + req2.responseText);
            });
            req2.always(function () {
                $("button").removeAttr("disabled");
            });
        }

        // entering data
        else {
            var dataRef = firebase.database().ref();
            dataRef.push({
                "User": 1,
                "Personal Relationship": $('select[name="PersonalRelationshipInput"]').val(),
                "Industry": $('select[name="IndustryInput"]').val(),
                "Sector": $('select[name="SectorInput"]').val(),
                "Revenue": parseFloat($('input[name="RevenueInput"]').val()),
                "Employees": parseFloat($('input[name="EmployeesInput"]').val()),
                "Sex": $('select[name="SexInput"]').val(),
                "Age": parseFloat($('input[name="AgeInput"]').val()),
                "Pitch": $('select[name="PitchInput"]').val(),
                "Contact": $('select[name="ContactMethodInput"]').val()
            });
						console.log("Enter successfully");
        }
    });
}

function displayResults(vectorName, pValue, coefficient) {
    pValue = parseFloat(pValue);
    oddsRatio = Math.exp(parseFloat(coefficient));
    oddsRatio = oddsRatio.toFixed(2);

    if (vectorName.indexOf("revenue") !== -1) {
        if (isNaN(pValue) || pValue > .1) {
            $("input[name=RevenueInput]").addClass("danger");
        }
        document.getElementById("RevenueOddsRatio").textContent=oddsRatio;
    }
    if (vectorName.indexOf("age") !== -1) {
        if (isNaN(pValue) || pValue > .1) {
            $("input[name=AgeInput]").addClass("danger");
        }
        document.getElementById("AgeOddsRatio").textContent=oddsRatio;
    }
    if (vectorName.indexOf("employees") !== -1) {
        if (isNaN(pValue) || pValue > .1) {
            $("input[name=EmployeesInput]").addClass("danger");
        }
        document.getElementById("EmployeesOddsRatio").textContent=oddsRatio;
    }
    if (vectorName.indexOf("sector") !== -1) {
        if (isNaN(pValue) || pValue > .1) {
            $("select[name=SectorInput]").addClass("danger");
        }
    }
    if (vectorName.indexOf("industry") !== -1) {
        if (isNaN(pValue) || pValue > .1) {
            $("select[name=IndustryInput]").addClass("danger");
        }
    }
    if (vectorName.indexOf("sex") !== -1) {
        if (isNaN(pValue) || pValue > .1) {
            $("select[name=SexInput]").addClass("danger");
        }
    }
    if (vectorName.indexOf("relationship") !== -1) {
        if (isNaN(pValue) || pValue > .1) {
            $("select[name=PersonalRelationshipInput]").addClass("danger");
        }
    }
    if (vectorName.indexOf("pitch") !== -1) {
        if (isNaN(pValue) || pValue > .1) {
            $("select[name=PitchInput]").addClass("danger");
        }
    }
    if (vectorName.indexOf("contact") !== -1) {
        if (isNaN(pValue) || pValue > .1) {
            $("select[name=ContactMethodInput]").addClass("danger");
        }
    }
}

function checkInput(input, invalid) {
    if (input == invalid) {
        $(".errorDiv").css("display", "block");
        $(".errorDiv").html("Please make sure all inputs for checked fields are valid.");
        $(".errorDiv").on("click", function() {
            $(".errorDiv").css("display", "none");
        });
        //location.reload();
        throw new Error("Invalid input.");
    }
}
