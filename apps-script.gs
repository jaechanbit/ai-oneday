/**
 * 구글 시트에 신청을 자동으로 쌓는 코드 (Google Apps Script)
 *
 * 사용 순서
 * 1) 구글 시트를 새로 만들고, 1행에 아래 제목을 순서대로 적습니다.
 *    신청일 | 성함 | 상호 | 연락처 | 희망일정 | 인원 | 관심결과물 | 만들고 싶은 것 | 유입경로
 * 2) 시트 메뉴 → 확장 프로그램 → Apps Script 를 열고 이 파일 내용을 붙여 넣습니다.
 * 3) 배포 → 새 배포 → 유형 '웹 앱'
 *      - 실행: 나
 *      - 액세스 권한: 모든 사용자
 *    → 배포 후 나오는 웹 앱 URL(.../exec)을 복사합니다.
 * 4) index.html 의 COURSE.endpoint 에 그 URL을 넣습니다.
 * 5) 신청이 들어오면 시트에 한 줄씩 쌓이고, 원하면 메일 알림도 보냅니다.
 */

var NOTIFY_EMAIL = ''; // 예: 'anvicnw@gmail.com' — 비워 두면 메일 알림 없음

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    var body = JSON.parse(e.postData.contents);
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['신청일', '성함', '상호', '연락처', '희망일정', '인원', '관심결과물', '만들고 싶은 것', '유입경로']);
    }
    sheet.appendRow([
      body.stamp || new Date(),
      body.name || '',
      body.shop || '',
      body.phone || '',
      body.when || '',
      body.people || '',
      body.pick || '',
      body.want || '',
      body.page || ''
    ]);

    if (NOTIFY_EMAIL) {
      MailApp.sendEmail({
        to: NOTIFY_EMAIL,
        subject: '[특강 신청] ' + (body.shop || '') + ' ' + (body.name || ''),
        body: [
          '성함: ' + (body.name || ''),
          '상호: ' + (body.shop || ''),
          '연락처: ' + (body.phone || ''),
          '희망일정: ' + (body.when || ''),
          '인원: ' + (body.people || ''),
          '관심 결과물: ' + (body.pick || ''),
          '만들고 싶은 것: ' + (body.want || ''),
          '신청일: ' + (body.stamp || '')
        ].join('\n')
      });
    }
    return ContentService.createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

function doGet() {
  return ContentService.createTextOutput(JSON.stringify({ ok: true, message: 'apply endpoint alive' }))
    .setMimeType(ContentService.MimeType.JSON);
}
