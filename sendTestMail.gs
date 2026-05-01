function sendTestMail() {
  const myEmail = Session.getActiveUser().getEmail();
  GmailApp.sendEmail(
    myEmail,
    '【テスト】選考管理ツールから送信',
    'GASからメール送信できました！'
  );
}



function sendTodayMail() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = sheet.getDataRange().getValues();
  
  let body = '【選考管理】登録中の企業一覧\n\n';
  for (let i = 1; i < data.length; i++) {
    body += `${data[i][0]} - ${data[i][1]}\n`;
  }
  
  const myEmail = Session.getActiveUser().getEmail();
  GmailApp.sendEmail(myEmail, '今日の選考状況', body);
}

function sendUrgentMail() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = sheet.getDataRange().getValues();
  const today = new Date();
  const threeDaysLater = new Date();
  threeDaysLater.setDate(today.getDate() + 3);
  
  let body = '【3日以内に締切の案件】\n\n';
  let count = 0;
  
  for (let i = 1; i < data.length; i++) {
    const deadline = new Date(data[i][3]);
    if (deadline >= today && deadline <= threeDaysLater) {
      body += `${data[i][0]} - 締切: ${data[i][3]}\n`;
      count++;
    }
  }
  
  if (count === 0) {
    body += '該当なし';
  }
  
  const myEmail = Session.getActiveUser().getEmail();
  GmailApp.sendEmail(myEmail, '締切間近の案件', body);
}