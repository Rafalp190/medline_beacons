(function(window, undefined) {
  var dictionary = {
    "ac41b230-7ecf-49e9-b139-607e88d8ac44": "Login",
    "d4d465dd-6364-4854-86a9-4c50c0292b4f": "Settings",
    "32577bc4-e65e-484b-82e8-196fa1ddef34": "Client_Home",
    "5c072a1b-edfc-496c-86d5-d4ebdd0e90cd": "My Doctors",
    "e9cef1cf-a6b6-4598-b4de-70bd1e211cd4": "Medical History",
    "bee64e06-92ac-4fe2-83d5-13ad80ec8487": "Emergency Services",
    "388264bd-4c24-4461-8836-17e9804d41c4": "Prescriptions",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);