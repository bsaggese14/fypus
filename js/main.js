
ocpu.seturl("https://public.opencpu.org/ocpu/library/base/R")

function regress(data) {
	var revenue = [];
	var age = [];
	var user = [];
	var contactEmail = [];
	var contactInPerson = [];
	var contactPhone = [];
	var industryContractor = [];
	var industryManufacturer = [];
	var industryRestaurant = [];
	var pitchLowerPrice = [];
	var pitchNegotiating = [];
	var pitchGroupPurchasing = [];
	var relationship = [];
	var sectorIndustrial = [];
	var sectorService =[];
	var sexM = [];
	var titleOwner = [];
	var titlePurchaser = [];
	var titleVP = [];
	var employees = [];

	Object.keys(data).forEach(function(k){
	    	revenue.push(data[k]["Revenue"]);
	    	age.push(data[k]["Age"]);	
	    	user.push(data[k]["User"]);	
	    	contactEmail.push(data[k]["Contact-Email"]);		    	
	    	contactInPerson.push(data[k]["Contact-In-Person"]);		    	
	    	contactPhone.push(data[k]["Contact-Phone"]);		    	
	    	industryContractor.push(data[k]["Industry-Contractor"]);		    	
	    	industryManufacturer.push(data[k]["Industry-Manufacturer"]);		    	
	    	industryRestaurant.push(data[k]["Industry-Restaurant"]);
	    	pitchGroupPurchasing.push(data[k]["Pitch-Group-Purchasing"]);		    	
		    	pitchNegotiating.push(data[k]["Pitch-Negotiating"]);		    	
	    	pitchLowerPrice.push(data[k]["Pitch-Lower-Price"]);		
	    	relationship.push(data[k]["Relationship-Yes"]);   
	    	sectorIndustrial.push(data[k]["Sector-Industrial"]); 	
	    	sectorService.push(data[k]["Sector-Service"]);
	    	sexM.push(data[k]["Sex-M"]);
	    	titleOwner.push(data[k]["Title-Owner"]);
	    	titlePurchaser.push(data[k]["Title-Purchaser"]);
	    	titleVP.push(data[k]["Title-VP"]);
	    	employees.push(data[k]["Employees"]);

	});

	employeesVector = "c(";
	for(var i = 0;i < employees.length; i++) {
		if(i < employees.length-1) {employeesVector+=employees[i]+",";}
		else {employeesVector+=employees[i]+")";}
	}
	relationshipVector = "c(";
	for(var i = 0;i < relationship.length; i++) {
		if(i < relationship.length-1) {relationshipVector+=relationship[i]+",";}
		else {relationshipVector+=relationship[i]+")";}
	}
	sectorIndustrialVector = "c(";
	for(var i = 0;i < sectorIndustrial.length; i++) {
		if(i < sectorIndustrial.length-1) {sectorIndustrialVector+=sectorIndustrial[i]+",";}
		else {sectorIndustrialVector+=sectorIndustrial[i]+")";}
	}
	sectorServiceVector = "c(";
	for(var i = 0;i < sectorService.length; i++) {
		if(i < sectorService.length-1) {sectorServiceVector+=sectorService[i]+",";}
		else {sectorServiceVector+=sectorService[i]+")";}
	}
	sexMVector = "c(";
	for(var i = 0;i < sexM.length; i++) {
		if(i < sexM.length-1) {sexMVector+=sexM[i]+",";}
		else {sexMVector+=sexM[i]+")";}
	}
	titleOwnerVector = "c(";
	for(var i = 0;i < titleOwner.length; i++) {
		if(i < titleOwner.length-1) {titleOwnerVector+=titleOwner[i]+",";}
		else {titleOwnerVector+=titleOwner[i]+")";}
	}
	titlePurchaserVector = "c(";
	for(var i = 0;i < titlePurchaser.length; i++) {
		if(i < titlePurchaser.length-1) {titlePurchaserVector+=titlePurchaser[i]+",";}
		else {titlePurchaserVector+=titlePurchaser[i]+")";}
	}
	titleVPVector = "c(";
	for(var i = 0;i < titleVP.length; i++) {
		if(i < titleVP.length-1) {titleVPVector+=titleVP[i]+",";}
		else {titleVPVector+=titleVP[i]+")";}
	}

																			
	userVector = "c(";
	for(var i = 0;i < user.length; i++) {
		if(i < user.length-1) {userVector+=user[i]+",";}
		else {userVector+=user[i]+")";}
	}
	revenueVector = "c(";
	for(var i = 0;i < revenue.length; i++) {
		if(i < revenue.length-1) {revenueVector+=revenue[i]+",";}
		else {revenueVector+=revenue[i]+")";}
	}
	ageVector = "c(";
	for(var i = 0;i < age.length; i++) {
		if(i < age.length-1) {ageVector+=age[i]+",";}
		else {ageVector+=age[i]+")";}
	}
	contactEmailVector = "c(";
	for(var i = 0;i < contactEmail.length; i++) {
		if(i < contactEmail.length-1) {contactEmailVector+=contactEmail[i]+",";}
		else {contactEmailVector+=contactEmail[i]+")";}
	}		
	contactInPersonVector = "c(";
	for(var i = 0;i < contactInPerson.length; i++) {
		if(i < contactInPerson.length-1) {contactInPersonVector+=contactInPerson[i]+",";}
		else {contactInPersonVector+=contactInPerson[i]+")";}
	}	
	contactPhoneVector = "c(";
	for(var i = 0;i < contactPhone.length; i++) {
		if(i < contactPhone.length-1) {contactPhoneVector+=contactPhone[i]+",";}
		else {contactPhoneVector+=contactPhone[i]+")";}
	}	
	industryContractorVector = "c(";
	for(var i = 0;i < industryContractor.length; i++) {
		if(i < industryContractor.length-1) {industryContractorVector+=industryContractor[i]+",";}
		else {industryContractorVector+=industryContractor[i]+")";}
	}
	industryManufacturerVector = "c(";
	for(var i = 0;i < industryManufacturer.length; i++) {
		if(i < industryManufacturer.length-1) {industryManufacturerVector+=industryManufacturer[i]+",";}
		else {industryManufacturerVector+=industryManufacturer[i]+")";}
	}	
	industryRestaurantVector = "c(";
	for(var i = 0;i < industryRestaurant.length; i++) {
		if(i < industryRestaurant.length-1) {industryRestaurantVector+=industryRestaurant[i]+",";}
		else {industryRestaurantVector+=industryRestaurant[i]+")";}
	}
	pitchGroupPurchasingVector = "c(";
	for(var i = 0;i < pitchGroupPurchasing.length; i++) {
		if(i < pitchGroupPurchasing.length-1) {pitchGroupPurchasingVector+=pitchGroupPurchasing[i]+",";}
		else {pitchGroupPurchasingVector+=pitchGroupPurchasing[i]+")";}
	}
	pitchNegotiatingVector = "c(";
	for(var i = 0;i < pitchNegotiating.length; i++) {
		if(i < pitchNegotiating.length-1) {pitchNegotiatingVector+=pitchNegotiating[i]+",";}
		else {pitchNegotiatingVector+=pitchNegotiating[i]+")";}
	}
	pitchLowerPriceVector = "c(";
	for(var i = 0;i < pitchLowerPrice.length; i++) {
		if(i < pitchLowerPrice.length-1) {pitchLowerPriceVector+=pitchLowerPrice[i]+",";}
		else {pitchLowerPriceVector+=pitchLowerPrice[i]+")";}
	}	


	$("#submit").on("click", function(){

		if($("#shouldPredict").is(':checked')) {
			var varsToPredict = ""

			$('.danger').removeClass('danger');
			var regressionSnip = "userVector="+userVector+'\n';

			if($('#RevenueCheck').is(':checked')) {
				var nameOfField = $('#RevenueCheck').val();
				var valueOfField = $('input[name="RevenueInput"]').val();
				regressionSnip+="revenueVector="+revenueVector+'\n';
				varsToPredict+=",revenueVector="+valueOfField;

			}
			if($('#AgeCheck').is(':checked')) {
				var nameOfField = $('#AgeCheck').val();
				var valueOfField = $('input[name="AgeInput"]').val();
				regressionSnip+="ageVector="+ageVector+'\n';
				varsToPredict+=",ageVector="+valueOfField;					

			}
			if($('#EmployeesCheck').is(':checked')) {
				var nameOfField = $('#EmployeesCheck').val();
				var valueOfField = $('input[name="EmployeesInput"]').val();
				regressionSnip+="employeesVector="+employeesVector+'\n';
				varsToPredict+=",employeesVector="+valueOfField;					

			}
			if($('#SectorCheck').is(':checked')) {
				var nameOfField = $('#SectorCheck').val();
				var valueOfField = $('select[name="SectorInput"]').val();
				regressionSnip+="sectorIndustrialVector="+sectorIndustrialVector+'\n'
				regressionSnip+="sectorServiceVector="+sectorServiceVector+'\n';

				var valueOfIndustry = '';
				var valueOfService = '';
				if(valueOfField == "Service") {
					valueOfService = "1";
					valueOfIndustry = "0";
				}
				else {
					valueOfService = "0";
					valueOfIndustry = "1";
				}

				varsToPredict+=",sectorIndustrialVector="+valueOfIndustry;
				varsToPredict+=",sectorServiceVector="+valueOfService;

			}
			if($('#IndustryCheck').is(':checked')) {
				var nameOfField = $('#IndustryCheck').val();
				var valueOfField = $('select[name="IndustryInput"]').val();
				regressionSnip+="industryRestaurantVector="+industryRestaurantVector+'\n';
				regressionSnip+="industryManufacturerVector="+industryManufacturerVector+'\n';
				regressionSnip+="industryContractorVector="+industryContractorVector+'\n';

				var valueOfRestaurant = '';
				var valueOfManufacturer = '';
				var valueOfContractor = '';
				if(valueOfField == "Restaurant") {
					valueOfContractor = "0";
					valueOfManufacturer = "0";
					valueOfRestaurant = "1";

				}
				else if(valueOfField == "Manufacturer") {
					valueOfContractor = "0";
					valueOfManufacturer = "0";
					valueOfRestaurant = "1";
				}
				else {
					valueOfContractor = "0";
					valueOfManufacturer = "0";
					valueOfRestaurant = "1";
				}

				varsToPredict+=",industryContractorVector="+valueOfContractor;
				varsToPredict+=",industryManufacturerVector="+valueOfManufacturer;
				varsToPredict+=",industryRestaurantVector="+valueOfRestaurant;

			}
			// if($('#ProductCheck').is(':checked')) {
			// 	var nameOfField = $('#ProductCheck').val();
			// 	var valueOfField = $('input[name="ProductInput"]').val();
			//	regressionSnip+="revenueVector="+revenueVector;

			// }	
			if($('#ContactMethodCheck').is(':checked')) {
				var nameOfField = $('#ContactMethodCheck').val();
				var valueOfField = $('select[name="ContactMethodInput"]').val();
				regressionSnip+="contactEmailVector="+contactEmailVector+'\n';
				regressionSnip+="contactPhoneVector="+contactPhoneVector+'\n';
				regressionSnip+="contactInPersonVector="+contactInPersonVector+'\n';

				var valueOfEmail = '';
				var valueOfPhone = '';
				var valueOfInPerson = '';
				if(valueOfField == "Phone") {
					valueOfEmail = "0";
					valueOfInPerson = "0";
					valueOfPhone = "1";

				}
				else if(valueOfField == "Email") {
					valueOfPhone = "0";
					valueOfInPerson = "0";
					valueOfEmail = "1";
				}
				else {
					valueOfPhone = "0";
					valueOfEmail = "0";
					valueOfInPerson = "1";
				}

				varsToPredict+=",contactPhoneVector="+valueOfPhone;
				varsToPredict+=",contactInPersonVector="+valueOfInPerson;
				varsToPredict+=",contactEmailVector="+valueOfEmail;					

			}
			if($('#SexCheck').is(':checked')) {
				var nameOfField = $('#SexCheck').val();
				var valueOfField = $('select[name="SexInput"]').val();
				regressionSnip+="sexMVector="+sexMVector+'\n';

				if(valueOfField == "Male") {
					varsToPredict+=",sexMVector=1";
				}
				else {
					varsToPredict+=",sexMVector=0";
				}


			}		
			if($('#PersonalRelationshipCheck').is(':checked')) {
				var nameOfField = $('#PersonalRelationshipCheck').val();
				var valueOfField = $('input[name="PersonalRelationshipInput"]').val();
				regressionSnip+="relationshipVector="+relationshipVector+'\n';

				if(valueOfField == "Yes") {
					varsToPredict+=",relationshipVector=1";
				}
				else {
					varsToPredict+=",relationshipVector=0";						
				}

			}	
			if($('#PitchCheck').is(':checked')) {
				var nameOfField = $('#PitchCheck').val();
				var valueOfField = $('select[name="PitchInput"]').val();
				regressionSnip+="pitchNegotiatingVector="+pitchNegotiatingVector+'\n';
				regressionSnip+="pitchGroupPurchasingVector="+pitchGroupPurchasingVector+'\n';
				regressionSnip+="pitchLowerPriceVector="+pitchLowerPriceVector+'\n';

				var valueOfNegotiating = '';
				var valueOfGroup = '';
				var valueOfLower = '';
				if(valueOfField == "Negotiating") {
					valueOfGroup = "0";
					valueOfLower = "0";
					valueOfNegotiating = "1";

				}
				else if(valueOfField == "Lower Price") {
					valueOfGroup = "0";
					valueOfNegotiating = "0";
					valueOfLower = "1";
				}
				else {
					valueOfLower = "0";
					valueOfNegotiating = "0";
					valueOfGroup = "1";
				}

				varsToPredict+=",pitchNegotiatingVector="+valueOfNegotiating;
				varsToPredict+=",pitchGroupPurchasingVector="+valueOfGroup;
				varsToPredict+=",pitchLowerPriceVector="+valueOfLower;							

			}		
			
			varsToPredict = varsToPredict.substring(1);
			var predictionSnip = "\nnewdata = data.frame("+varsToPredict+")";
			predictionSnip+="\npredict(testmodel, newdata, type='response')";
			
			var snipForPrediction = regressionSnip;

			regressionSnip+="testmodel<-glm(userVector~";


			var tempString = "";                               
			if($('#RevenueCheck').is(':checked')) {tempString+="+revenueVector";}
			if($('#AgeCheck').is(':checked')) {tempString+="+ageVector";}
			if($('#EmployeesCheck').is(':checked')) {tempString+="+employeesVector";}
			if($('#SectorCheck').is(':checked')) {tempString+="+sectorServiceVector+sectorIndustrialVector";}
			if($('#IndustryCheck').is(':checked')) {tempString+="+industryManufacturerVector+industryContractorVector+industryRestaurantVector";}
			//if($('#ProductCheck').is(':checked')) {tempString+="";}	
			if($('#ContactMethodCheck').is(':checked')) {tempString+="+contactInPersonVector+contactPhoneVector+contactEmailVector";}
			if($('#SexCheck').is(':checked')) {tempString+="+sexMVector";}		
			if($('#PersonalRelationshipCheck').is(':checked')) {tempString+="+relationshipVector";}	
			if($('#PitchCheck').is(':checked')) {tempString+="+pitchLowerPriceVector+pitchGroupPurchasingVector+pitchNegotiatingVector";}	
			tempString = tempString.substring(1);

			regressionSnip+=tempString;

			regressionSnip+=",family = binomial(link='logit'))\nsummary(testmodel)";		

			snipForPrediction += "\ntestmodel = glm(userVector~"+tempString+",family = binomial(link='logit'))"+predictionSnip;
			snipForPrediction = new ocpu.Snippet(snipForPrediction);

			//regressionSnip+=snipForPrediction;

			regressionSnip = new ocpu.Snippet(regressionSnip);
		    //disable button
		    $("button").attr("disabled", "disabled");

			var req = ocpu.call("identity", {"x" : regressionSnip}, function(session){
					session.getConsole(function(result){
							var resultSplit = result.split("\n");
							var pValues = [];
							for(var i = 0; i < resultSplit.length; i++) {
								var lineSplit = resultSplit[i].split(/\ +/);
								if(lineSplit[0].indexOf("Vector") !== -1) {
									var pValuePair = {[lineSplit[0]] : lineSplit[4]};
									pValues.push(pValuePair);

									checkForDanger(lineSplit[0], lineSplit[4]);
								}
							}
					});
			});
		    req.fail(function(){
		        alert("Server error: " + req.responseText);
		    });
		    req.always(function(){
		        $("button").removeAttr("disabled");
		    });

		   // console.log(snipForPrediction);
		    predict(snipForPrediction); 
		}
    	else {

			var valueOfIndustry = 0;
			var valueOfService = 0;
			if($('#SectorCheck').is(':checked')) {
				var nameOfField = $('#SectorCheck').val();
				var valueOfField = $('select[name="SectorInput"]').val();


				if(valueOfField == "Service") {
					valueOfService = 1;
					valueOfIndustry = 0;
				}
				else {
					valueOfService = 0;
					valueOfIndustry = 1;
				}

			}

			var valueOfRestaurant = 0;
			var valueOfManufacturer = 0;
			var valueOfContractor = 0;					
			if($('#IndustryCheck').is(':checked')) {
				var nameOfField = $('#IndustryCheck').val();
				var valueOfField = $('select[name="IndustryInput"]').val();


				if(valueOfField == "Restaurant") {
					valueOfContractor = 0;
					valueOfManufacturer = 0;
					valueOfRestaurant = 1;

				}
				else if(valueOfField == "Manufacturer") {
					valueOfContractor = 0;
					valueOfManufacturer = 0;
					valueOfRestaurant = 1;
				}
				else {
					valueOfContractor = 0;
					valueOfManufacturer = 0;
					valueOfRestaurant = 1;
				}

			}
			// if($('#ProductCheck').is(':checked')) {
			// 	var nameOfField = $('#ProductCheck').val();
			// 	var valueOfField = $('input[name="ProductInput"]').val();
			//	regressionSnip+="revenueVector="+revenueVector;

			// }	

			var valueOfEmail = 0;
			var valueOfPhone = 0;
			var valueOfInPerson = 0;					
			if($('#ContactMethodCheck').is(':checked')) {
				var nameOfField = $('#ContactMethodCheck').val();
				var valueOfField = $('select[name="ContactMethodInput"]').val();


				if(valueOfField == "Phone") {
					valueOfEmail = 0;
					valueOfInPerson = 0;
					valueOfPhone = 1;

				}
				else if(valueOfField == "Email") {
					valueOfPhone = 0;
					valueOfInPerson = 0;
					valueOfEmail = 1;
				}
				else {
					valueOfPhone = 0;
					valueOfEmail = 0;
					valueOfInPerson = 1;
				}				

			}

			valueOfSex = 0;
			if($('#SexCheck').is(':checked')) {
				var nameOfField = $('#SexCheck').val();
				var valueOfField = $('select[name="SexInput"]').val();
				regressionSnip+="sexMVector="+sexMVector+'\n';

				if(valueOfField == "Male") {
					varsToPredict+=",sexMVector=1";
					valueOfSex = 1;
				}
				else {
					varsToPredict+=",sexMVector=0";
					valueOfSex = 1;
				}


			}		

			valueOfRelationship = 0;
			if($('#PersonalRelationshipCheck').is(':checked')) {
				var nameOfField = $('#PersonalRelationshipCheck').val();
				var valueOfField = $('input[name="PersonalRelationshipInput"]').val();

				if(valueOfField == "Yes") {
					varsToPredict+=",relationshipVector=1";
					valueOfRelationship = 1;
				}
				else {
					varsToPredict+=",relationshipVector=0";			
					valueOfRelationship = 0;			
				}

			}	


			var valueOfNegotiating = 0;
			var valueOfGroup = 0;
			var valueOfLower = 0;

			if($('#PitchCheck').is(':checked')) {
				var nameOfField = $('#PitchCheck').val();
				var valueOfField = $('select[name="PitchInput"]').val();


				if(valueOfField == "Negotiating") {
					valueOfGroup = 0;
					valueOfLower = 0;
					valueOfNegotiating = 1;

				}
				else if(valueOfField == "Lower Price") {
					valueOfGroup = 0;
					valueOfNegotiating = 0;
					valueOfLower = 1;
				}
				else {
					valueOfLower = 0;
					valueOfNegotiating = 0;
					valueOfGroup = 1;
				}						

			}	
    		console.log("enter");
			var dataRef = firebase.database().ref("Data/");
			//write data
			dataRef.push ({
			      "Age": parseFloat($('input[name="AgeInput"]').val()),
			      "Revenue": parseFloat($('input[name="RevenueInput"]').val()),
			      "Employees": parseFloat($('input[name="EmployeesInput"]').val()),	
			      "Contact-Email": valueOfEmail,
			      "Contact-Phone": valueOfPhone,
			      "Contact-In-Person": valueOfInPerson,
			      "Industry-Restaurant": valueOfRestaurant,
			      "Industry-Manufacturer": valueOfManufacturer,
			      "Industry-Contractor": valueOfContractor,
			      "Pitch-Negotiating": valueOfNegotiating,
			      "Pitch-Lower-Price": valueOfLower,
			      "Pitch-Group-Purchasing": valueOfGroup,
			      "Relationship-Yes": valueOfRelationship,
			      "Sector-Service": valueOfService,
			      "Sector-Industrial": valueOfIndustry,
			      "Sex-M": valueOfSex,
			      "Title-Purchaser": 0,
			      "Title-VP": 0,
			      "Title-Owner": 1,
			      "User" :1

			});
    	}
	});

}

function predict(snip) {
	var req2 = ocpu.call("identity", {"x" : snip}, function(session2){
			session2.getConsole(function(result2){

				var resultSplit2 = result2.split("\n");

				$(".resultsDiv").css("display", "block");
				$(".resultsDiv").html("Result: "+100*parseFloat(resultSplit2[resultSplit2.length-1])+"% <img class = 'closeResults' src = 'images/cancel.png'>");

			});
	});
    req2.fail(function(){
        alert("Server error: " + req2.responseText);
    });
    req2.always(function(){
        $("button").removeAttr("disabled");
    });		
}

function checkForDanger(vectorName, pValue) {
	pValue = parseFloat(pValue);
	if(isNaN(pValue) || pValue > .1) {
		if (vectorName.indexOf("revenue") !== -1) {$("input[name=RevenueInput]").addClass("danger")};
		if (vectorName.indexOf("age") !== -1) {$("input[name=AgeInput]").addClass("danger")};
		if (vectorName.indexOf("employees") !== -1) {$("input[name=EmployeesInput]").addClass("danger")};
		if (vectorName.indexOf("sector") !== -1) {$("select[name=SectorInput]").addClass("danger")};
		if (vectorName.indexOf("industry") !== -1) {$("select[name=IndustryInput]").addClass("danger");};
		if (vectorName.indexOf("sex") !== -1) {$("select[name=SexInput]").addClass("danger")};
		if (vectorName.indexOf("relationship") !== -1) {$("select[name=PersonalRelationshipInput]").addClass("danger")};
		if (vectorName.indexOf("pitch") !== -1) {$("select[name=PitchInput]").addClass("danger")};
		if (vectorName.indexOf("contact") !== -1) {$("select[name=ContactMethodInput]").addClass("danger")};
	}

}

$( document ).ready(function() {
	$(".resultsDiv").on("click", function() {
		$(".resultsDiv").css("display", "none");
		console.log("test")

	})
});




