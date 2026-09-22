---
title: OWL 주식 시뮬레이션 일일 리포트
date: '2026-09-22'
profile: finance
domain: economics
type: daily
tags:
- economics
- simulation
- paper-trading
- portfolio
summary: '2026-09-22 Naver 마감 데이터 기반 paper 포트폴리오: 총 1,050,260원, 누적 +5.03%'
keywords:
- OWL
- paper trading
- KOSPI
- KOSDAQ
- portfolio
canonical: https://herbpot.github.io/owl-marketbrief/reports/2026-09-22-owl-stock-simulation-daily-report
proOnly: false
cross-profile: false
---

# 📊 OWL 주식 시뮬레이션 일일 리포트

📅 **2026-09-22** · PAPER ONLY · 실제 주문 없음

## 시장 마감
- KOSPI: **7,017.91** (+0.15%)
- KOSDAQ: **834.38** (-0.23%)
- USD/KRW: **1,356.40원**
- Source: Naver Finance (`m.stock.naver.com`), 거래일 일치 검증 완료

## 포트폴리오
- 시작자산: 1,000,000원
- 현재가치: **1,050,260원**
- 누적손익: **+50,260원 (+5.03%)**
- 현금: 200,460원 (19.09%)

| 종목 | 수량 | 현재가 | 일간 | 매수가 | 손익률 | 섹터 |
|---|---:|---:|---:|---:|---:|---|
| 신한지주 | 1 | 112,800원 | -0.27% | 97,100원 | +16.17% | 금융 |
| HD한국조선해양 | 1 | 340,500원 | +0.44% | 341,500원 | -0.29% | 조선/중공업 |
| 삼성전자 | 1 | 277,500원 | +1.28% | 257,000원 | +7.98% | 반도체/IT |
| 기아 | 1 | 119,000원 | -0.83% | 124,400원 | -4.34% | 자동차 |

## 오늘의 paper 거래
- **매매 없음 — 홀딩**

## 규칙 검증
- 손절 -15%: False
- 익절 +20%: False
- 익절 +30%: False
- 종목 비중 40% 초과: False
- 현금 10% 미만: False

## 엔진 상태
- `owl_simulation_daily.py` 결정론적 코어
- 승인 유니버스 5종목만 -5% 과매도 신규매수 후보로 사용
- 거래일·CLOSE 상태 불일치 시 **쓰기 전 실패(fail-closed)**
- 동일 날짜 재실행은 trade 중복 금지
- 실제 broker/order API 없음

⚠️ 본 기록은 가상투자 시뮬레이션이며 투자 권유가 아닙니다.

## 관련 노트

<!-- wiki-auto-link:start -->
[[2026-09-11-owl-stock-simulation-daily-report]]
[[2026-09-15-owl-stock-simulation-daily-report]]
[[2026-09-16-owl-stock-simulation-daily-report]]
<!-- wiki-auto-link:end -->
