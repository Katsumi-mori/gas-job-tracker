function sendSlackTest() {
  const webhookUrl = PropertiesService.getScriptProperties().getProperty('SLACK_WEBHOOK_URL');

  const payload = {
    text: 'GASからこんにちは！'
  };

  const options = {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify(payload)
  };

  UrlFetchApp.fetch(webhookUrl, options);
}

function sendUrgentSlack() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = sheet.getDataRange().getValues();
  const today = new Date();
  const threeDaysLater = new Date();
  threeDaysLater.setDate(today.getDate() + 3);

  const webhookUrl = PropertiesService.getScriptProperties().getProperty('SLACK_WEBHOOK_URL');

  let body = '【締切間近】3日以内に締め切りの選考があります！\n\n';
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

  const payload = {
    text: body
  };

  const options = {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify(payload)
  };

  UrlFetchApp.fetch(webhookUrl, options);
}
