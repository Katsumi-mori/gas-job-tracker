function addToCalendar() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = sheet.getDataRange().getValues();
  const calendar = CalendarApp.getDefaultCalendar();

  for (let i = 1; i < data.length; i++) {
    const company = data[i][1]; // B列: 会社名
    const nextDate = data[i][2]; // C列: 次回日時

    if (!company || !nextDate) continue;

    const startTime = new Date(nextDate);
    if (isNaN(startTime.getTime())) continue;

    const title = `${company} - 選考`;
    const endTime = new Date(startTime.getTime() + 60 * 60 * 1000);

    // 重複チェック: 同日の同タイトル・同開始時刻のイベントを検索
    const startOfDay = new Date(startTime);
    startOfDay.setHours(0, 0, 0, 0);
    const endOfDay = new Date(startTime);
    endOfDay.setHours(23, 59, 59, 999);

    const existingEvents = calendar.getEvents(startOfDay, endOfDay);
    const alreadyExists = existingEvents.some(event =>
      event.getTitle() === title &&
      event.getStartTime().getTime() === startTime.getTime()
    );

    if (alreadyExists) continue;

    const event = calendar.createEvent(title, startTime, endTime);
    event.addPopupReminder(30);
  }
}
