---
title: OWL 주식 시뮬레이션 일일 리포트
date: '2026-11-06'
profile: finance
domain: economics
type: daily
tags:
- economics
- simulation
- paper-trading
- portfolio
summary: '2026-11-06 Naver 마감 데이터 기반 paper 포트폴리오: 총 865,453원, 누적 -13.45%'
keywords:
- OWL
- paper trading
- KOSPI
- KOSDAQ
- portfolio
canonical: https://herbpot.github.io/owl-marketbrief/reports/2026-11-06-owl-stock-simulation-daily-report
proOnly: false
cross-profile: false
---

# 📊 OWL 주식 시뮬레이션 일일 리포트

📅 **2026-11-06** · PAPER ONLY · 실제 주문 없음

## 시장 마감
- KOSPI: **5,059.69** (-6.02%)
- KOSDAQ: **644.27** (-5.03%)
- USD/KRW: **1,355.30원**
- Source: Naver Finance (`m.stock.naver.com`), 거래일 일치 검증 완료

## 포트폴리오
- 시작자산: 1,000,000원
- 현재가치: **865,453원**
- 누적손익: **-134,547원 (-13.45%)**
- 현금: 240,553원 (27.80%)

| 종목 | 수량 | 현재가 | 일간 | 매수가 | 손익률 | 섹터 |
|---|---:|---:|---:|---:|---:|---|
| 신한지주 | 1 | 87,100원 | -1.80% | 97,100원 | -10.30% | 금융 |
| HD한국조선해양 | 1 | 244,000원 | -0.81% | 255,750원 | -4.59% | 조선/중공업 |
| 기아 | 1 | 100,300원 | -0.50% | 94,800원 | +5.80% | 자동차 |
| 삼성전자 | 1 | 193,500원 | -3.97% | 201,500원 | -3.97% | 반도체/IT |

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
