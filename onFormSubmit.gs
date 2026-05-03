function onFormSubmit(e) {
  const webhookUrl = PropertiesService.getScriptProperties().getProperty('SLACK_WEBHOOK_URL');
  
  const values = e.values;
  const timestamp = values[0];
  const company = values[1];
  const phase = values[2];
  const date = values[3];
  const memo = values[4];
  
  const text = `📝 新しい選考情報が登録されました\n\n` +
    `会社名: ${company}\n` +
    `フェーズ: ${phase}\n` +
    `日時: ${date}\n` +
    `メモ: ${memo}`;
  
  const payload = { text: text };
  
  const options = {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify(payload)
  };
  
  UrlFetchApp.fetch(webhookUrl, options);
}