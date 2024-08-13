function doGet() {
  return HtmlService.createHtmlOutputFromFile('index');
}

function submitForm(username, email, password) {
  var sheet = SpreadsheetApp.openById('1SKK-4ninAZFZ_DPInozPx6P6zR6LyBsDBTmoYslv--8').getSheetByName('Sheet1');
  var newRow = [username, email, password];
  sheet.appendRow(newRow);
}

function checkCredentials(email, password) {
  var sheet = SpreadsheetApp.openById('1SKK-4ninAZFZ_DPInozPx6P6zR6LyBsDBTmoYslv--8').getSheetByName('Sheet1');
  var data = sheet.getDataRange().getValues();
  
  for (var i = 1; i < data.length; i++) {
    if (data[i][1] === email && data[i][2] === password) {
      return true; // Credentials matched
    }
  }
  return false; // Credentials not found
}
