---
title: OWL 주식 시뮬레이션 주간 리밸런싱
date: '2026-09-21'
profile: finance
domain: economics
type: weekly
tags:
- economics
- simulation
- weekly
- rebalance
- paper-trading
summary: 2026-09-14~2026-09-21 paper 포트폴리오 주간 +2.19%, 현재 1,047,560원
keywords:
- OWL
- paper trading
- weekly rebalance
- KOSPI
- portfolio
canonical: https://herbpot.github.io/owl-marketbrief/reports/2026-09-21-owl-weekly-rebalance
proOnly: false
cross-profile: false
---

# 📊 OWL 주식 시뮬레이션 주간 리밸런싱

📅 **2026-09-14 ~ 2026-09-21** · PAPER ONLY · 실제 주문 없음

## 주간 성과
- 시작 NAV: 1,025,160원 (2026-09-15)
- 현재 NAV: **1,047,560원** (2026-09-21)
- 주간 수익률: **+2.19%**
- KOSPI 구간 수익률: +5.74%
- KOSDAQ 구간 수익률: +2.94%
- 베스트 공통 보유종목: 삼성전자 (+9.78%)
- 워스트 공통 보유종목: 기아 (-1.55%)

## 리밸런싱 판정
- 시장 regime: **강세장 — 성장주 비중 확대 검토**
- 현금 10% 이상: **True** (19.14%)
- 섹터 수: **4** (금융, 반도체/IT, 자동차, 조선/중공업)
- 40% 초과 종목: **없음**
- 일일 엔진 손절/익절/현금 트리거 상태: `{"cash_below_10pct": false, "stop_loss_minus15": false, "take_profit_plus20": false, "take_profit_plus30": false, "weight_over_40pct": false}`

## 월요일 일일 엔진에서 실행된 paper 거래
- **없음 — 주간 job은 중복매매를 하지 않음**

## 현재 포트폴리오
| 종목 | 수량 | 현재가 | 손익률 | 비중 | 섹터 |
|---|---:|---:|---:|---:|---|
| 신한지주 | 1 | 113,200원 | +16.58% | 10.81% | 금융 |
| HD한국조선해양 | 1 | 338,500원 | -0.88% | 32.31% | 조선/중공업 |
| 삼성전자 | 1 | 275,000원 | +7.00% | 26.25% | 반도체/IT |
| 기아 | 1 | 120,400원 | -3.22% | 11.49% | 자동차 |

## 엔진 정책
- 매매 state mutation은 `owl_simulation_daily.py` 단일 소유
- 주간 job은 verified snapshot 집계/감사/report만 수행
- 월요일 일일 job 완료 전에는 fail-closed
- broker/order API 없음

⚠️ 가상투자 시뮬레이션이며 투자 권유가 아닙니다.

## 관련 노트

<!-- wiki-auto-link:start -->
[[2026-09-07-owl-weekly-rebalance]]
[[2026-09-11-owl-stock-simulation-daily-report]]
[[2026-09-15-owl-stock-simulation-daily-report]]
<!-- wiki-auto-link:end -->
