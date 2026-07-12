# OWL 마켓브리프

투자·경제 리포트를 자동 발행하는 **비용 0원 정적 사이트** (GitHub Pages + Astro).

- 사이트: https://herbpot.github.io/owl-marketbrief/
- 목적: finance 프로필이 생산하는 마크다운 리포트를 SEO 친화적으로 자동 발행, 구글 유입
- 스택: Astro 5 (static) + @astrojs/sitemap + GitHub Pages
- 디자인: Kami 디자인 시스템 (양피지 캔버스 / Ink Blue 강조)

## 구조

```
src/
  layouts/Base.astro      # Kami 디자인, SEO/OG, AdSense 슬롯, Pro CTA
  pages/
    index.astro           # 최신 리포트 목록
    pro.astro             # Pro 랜딩
    reports/[slug].astro  # 리포트 상세 (markdown 렌더)
  content/
    config.ts             # reports 컬렉션 스키마
    reports/*.md          # 리포트 (frontmatter: title/date/type/tags/summary/keywords/canonical/proOnly/adSlot)
public/  robots.txt, favicon.svg
.github/workflows/
  deploy.yml              # push main → Astro 빌드 → Pages 배포
  sync-reports.yml        # (비활성화) cron 06:00 KST 리포트 동기화 — GH_PAT 필요
```

## 로컬 개발 (메모리 충분한 환경에서)

```bash
npm install
npm run dev      # http://localhost:4321/owl-marketbrief/
npm run build    # dist/ 생성
```

> 서버(956M)에서는 빌드를 하지 않습니다. 빌드는 GitHub Actions 가 담당합니다.

## 배포

`main` 브랜치 push 또는 `workflow_dispatch` 로 `deploy.yml` 실행 → Pages 배포.

## TODO

- [ ] GH_PAT 발급 후 `sync-reports.yml` 활성화 (소스 repo 연결)
- [ ] AdSense 승인 후 슬롯 ID 채우기
- [ ] OG 이미지 생성 (public/og-*.png)
