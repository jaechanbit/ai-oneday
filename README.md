# 소상공인 AI 원데이 특강 — 홍보·신청 랜딩페이지 (v3 · 3시간 5가지 결과물 + 가상 가게 샘플)

비트컴퓨터학원(남원) 안재찬 원장의 원데이 특강 홍보 페이지입니다. 파일 하나(`index.html`)로 동작하고, 빌드 도구가 필요 없습니다.

**v3 변경(2026-11-15)** — 수업에서 나오는 결과물을 미리 보여 주는 **가상 가게 「서원로 커피」(남원 광한루 앞 로스터리 카페)** 샘플 5종을 실제로 만들어 넣었습니다.
결과물 카드마다 샘플 썸네일이 붙고, 04 카드에는 12초 세로 샘플 영상이 바로 재생되며, 「가상 가게 샘플」 섹션(`#samples`)에서 메뉴판·배너·명함·홈페이지·시트·영상·홍보글·리뷰 답글을 크게 볼 수 있습니다.
**v2 변경** — 수업이 2시간 30분·결과물 3종에서 **3시간(180분)·결과물 5종**으로 커졌습니다. 히어로 카피, "오늘 직접 가져가는 5가지 결과물" 섹션, 180분 타임테이블, 수강 안내, FAQ, 신청폼(관심 결과물 선택)을 모두 그에 맞춰 고쳤습니다.

## 5가지 결과물

| # | 결과물 | 파트·시간 |
| --- | --- | --- |
| 1 | 메뉴판 · 홍보 배너 · 명함 이미지 | 파트 1 · 30분 |
| 2 | 우리 가게 홈페이지 + QR코드 | 파트 2 · 40분 |
| 3 | 신청폼 → 구글 시트·알림 자동 접수 | 파트 3 · 30분 |
| 4 | 사진 10장 → 인스타·쇼츠 세로 영상(MP4) + AI BGM | 파트 4 · 35분 |
| 5 | 당근·블로그·인스타 홍보글 & 리뷰 답글 프롬프트 키트 | 파트 5 · 30분 (+ Q&A) |

오프닝 & AI 세팅 15분을 더해 180분입니다.

## 가상 가게 샘플 5종 (v3)

가게·대표 이름·연락처는 **모두 가상**입니다(수업 예시). 사진은 AI로 생성하고 글자·가격·QR은 그 위에 얹었습니다.

| 결과물 | 파일 | 비고 |
| --- | --- | --- |
| ① 메뉴판 (A4 세로) | `assets/samples/sample-menu-card.png` | 1000×1415 |
| ② 가게 앞 배너 (3:5) | `assets/samples/sample-banner.png` | 860×1290 |
| ③ 명함 앞뒤 | `assets/samples/sample-bizcard.png` | 1800×662 (인쇄용 명함 비율) |
| ④ 가게 홈페이지 + QR | `samples/cafe-demo.html` · `assets/samples/sample-cafe-site.png` | 라이브: `/ai-oneday/samples/cafe-demo.html` |
| ⑤ 신청 → 구글 시트 자동 접수 | `assets/samples/sample-sheet.png` | 예시 화면 |
| ⑥ 숏폼 영상 + BGM | `assets/samples/sample-cafe-reel.mp4` · `sample-reel-poster.jpg` | 1080×1920 · 12.6초 · 3.2MB · 자체 합성 BGM |
| ⑦⑧ 홍보글 3종 · 리뷰 답글 5종 | `index.html` `#samples` 섹션 · 노션 교안 | 텍스트 예시 |

샘플 사진 원본은 `assets/samples/cafe-*.jpg` (AI 생성), QR은 `assets/samples/qr-cafe-demo.png`(샘플 페이지 주소)입니다.

## 구성 파일

| 파일 | 설명 |
| --- | --- |
| `index.html` | 페이지 전체 (HTML + CSS + JS 한 파일) |
| `samples/cafe-demo.html` | 샘플 가게 「서원로 커피」 홈페이지 (메뉴·가격·오시는 길·예약폼·QR) |
| `assets/schedule-desktop.png` | 실제 결과물 스크린샷 (전북새일·전주새일 강의일정 홈페이지, PC) |
| `assets/schedule-mobile.png` | 같은 홈페이지 휴대폰 화면 |
| `assets/og-cover-v2.png` | 카카오톡·문자 공유 시 뜨는 미리보기 카드 (1200×630, 3시간·5가지 버전) |
| `assets/og-cover-v2.src.html` | 위 카드의 원본 HTML (문구를 고쳐 다시 캡처할 때 사용) |
| `assets/og-cover.png` | v1 공유 카드 (2시간 30분 문구, 보관용) |
| `assets/samples/*` | 가상 가게 샘플 5종 (위 표) |
| `apps-script.gs` | 신청 내용을 구글 시트에 쌓는 Apps Script 코드 (자동 접수용) |
| `preview-v3-desktop.png` / `preview-v3-mobile.png` | 1280px / 390px 전체 화면 캡처 (v3) |
| `preview-v3-*-top.png`, `preview-v3-*-samples.png` | 첫 화면 / 샘플 섹션 캡처 |
| `preview-v2-*.png`, `preview-*.png` | 이전 버전 캡처 (비교용) |

## 고칠 곳 (index.html)

1. **가격·일시·정원** — 본문 "수강 안내" 표와 히어로 문구, `<script>` 위쪽 `COURSE` 주석 참고
2. **연락처** — 검색해서 `010-5112-6706` 을 학원 대표번호로 바꾸면 됩니다 (본문·푸터·문자 링크)
3. **신청 자동 접수** — `COURSE.endpoint` 에 Apps Script 웹앱 주소(`.../exec`)를 넣으면 구글 시트에 자동 저장 (아래 참고)
4. **결과물 링크** — `https://jaechanbit.github.io/instructor-schedule/`
5. **샘플 5종** — `assets/samples/` 파일을 다른 가게 사진·메뉴로 바꾸면 섹션 전체가 그대로 따라 바뀝니다 (`samples/cafe-demo.html`의 가게 정보도 함께)

## 신청을 구글 시트로 자동 접수하기

1. 구글 시트 새로 만들기 → 1행 제목: `신청일 | 성함 | 상호 | 연락처 | 희망일정 | 인원 | 관심결과물 | 만들고 싶은 것 | 유입경로`
2. 시트 메뉴 → 확장 프로그램 → Apps Script → `apps-script.gs` 내용 붙여넣기
3. (선택) `NOTIFY_EMAIL` 에 알림 받을 메일 주소 입력
4. 배포 → 새 배포 → 웹 앱 / 실행: 나 / 액세스: 모든 사용자 → 나온 URL 복사
5. 메인 페이지 `COURSE.endpoint` 에 그 URL 붙여넣기

> `apps-script.gs` 는 v2 기준으로 `관심결과물` 열까지 저장합니다. 시트 1행 제목도 같은 순서로 맞춰 주세요.

## 배포 (GitHub Pages)

저장소: <https://github.com/jaechanbit/ai-oneday> (Public, `main`) — `index.html`, `samples/`, `assets/`, `apps-script.gs`, 이 README가 올라가 있습니다. `preview-*.png` 캡처 파일은 올리지 않습니다.

- 라이브: <https://jaechanbit.github.io/ai-oneday/> (Pages `main` / root, 빌드 완료)
- 샘플 가게 페이지: <https://jaechanbit.github.io/ai-oneday/samples/cafe-demo.html>

> `index.html` 의 `og:image` 는 절대 주소(`https://jaechanbit.github.io/ai-oneday/assets/og-cover-v2.png`), `og:url` 은 `https://jaechanbit.github.io/ai-oneday/` 입니다.

## 로컬에서 확인하기

```bash
python3 -m http.server 8899
# 브라우저에서 http://127.0.0.1:8899/ 열기 (저장소 루트 기준)
```

캡처·점검 스크립트는 `work/verify_v3.py` (Playwright, 390px/1280px 전체 캡처 · 콘솔 오류 · 이미지·영상 로드 확인).
