function createFormFromSheet() {
  //var
  const sheet = SpreadsheetApp.getActiveSpreadsheet();
  const ui = SpreadsheetApp.getUi();

  // Tạo form mới
  const form = FormApp.create("Form được tạo từ Google Sheet");
  form.setIsQuiz(true);
  
  // nhập dòng
  const promptLine = ui.prompt("Tạo Form", "Nhập dòng start-end:", ui.ButtonSet.OK_CANCEL);
  if (prompt.getSelectedButton() !== ui.Button.OK) return;
  const inputLine = prompt.getResponseText().replace(/\s+/g, "");
  let [startRow, endRow] = input.includes("-") ? input.split("-") : input.split(",");

  startRowLine = parseInt(startRow, 10);
  endRowLine = parseInt(endRow, 10);

  if (isNaN(startRowLine) || isNaN(endRowLine) || startRowLine < 2 || endRowLine < startRowLine) {
  ui.alert("Giá trị không hợp lệ.");
  return;
  } 
  // nhập cột
  const promptCol = ui.prompt("Tạo Form", "Nhập cột start-end:", ui.ButtonSet.OK_CANCEL);
  if (prompt.getSelectedButton() !== ui.Button.OK) return;
  const input = prompt.getResponseText().replace(/\s+/g, "");

  startRowCol = parseInt(startRow, 10);
  endRowCol = parseInt(endRow, 10);

  if (isNaN(startRow) || isNaN(endRow) || startRow < 2 || endRow < startRow) {
  ui.alert("Giá trị không hợp lệ.");
  return;
  } 

  const name = "Diktat "
  const q1 = "Hören Sie zu und schreiben Sie auf, was Sie hören\nNghe và chép lại những gì bạn nghe được"
  const q2 = "Vor- und Nachname\nHọ và tên"
  const q3 = "Telefonnummer\nSố điện thoại"
  const q4 = "E-Mail"
  const type = "short answer"
  const data = sheet.getRange(`${startRowCol}${startRowLine}:${endRowCol}${endRowLine}`).getValues();

  for (let i = startRowLine; i <= endRowLine; i++) {
    for (let j = startRowCol; j < endRowCol; j++){
      const data[i][j] = 
    }


    switch (type) {
      case "short answer":
        form.addTextItem().setTitle(question);
        break;

      case "paragraph":
        form.addParagraphTextItem().setTitle(question);
        break;

      case "multiple choice":
        form.addMultipleChoiceItem()
            .setTitle(question)
            .setChoiceValues(options);
        break;

      case "checkbox":
        form.addCheckboxItem()
            .setTitle(question)
            .setChoiceValues(options);
        break;

      case "dropdown":
        form.addListItem()
            .setTitle(question)
            .setChoiceValues(options);
        break;

      case "date":
        form.addDateItem().setTitle(question);
        break;

      case "time":
        form.addTimeItem().setTitle(question);
        break;

      case "linear scale":
        if (options.length >= 1) {
          const [range, label1, label2] = optionsRaw.split(";");
          const [min, max] = range.split("-").map(Number);
          form.addScaleItem()
              .setTitle(question)
              .setBounds(min, max)
              .setLabels(label1, label2);
        }
        break;

      default:
        Logger.log("Không hỗ trợ loại câu hỏi: " + type);
        break;
    }
  }

  Logger.log("Form đã được tạo: " + form.getEditUrl());

}

function columnLetterToNumber(letter) {
  let col = 0;
  letter = letter.toUpperCase();
  for (let i = 0; i < letter.length; i++) {
    col *= 26;
    col += letter.charCodeAt(i) - 64; // A = 1
  }
  return col;
}
