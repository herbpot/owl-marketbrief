---
title: OWL 주식 시뮬레이션 주간 리밸런싱
date: '2026-09-28'
profile: finance
domain: economics
type: weekly
tags:
- economics
- simulation
- weekly
- rebalance
- paper-trading
summary: 2026-09-21~2026-09-28 paper 포트폴리오 주간 -1.59%, 현재 1,030,860원
keywords:
- OWL
- paper trading
- weekly rebalance
- KOSPI
- portfolio
canonical: https://herbpot.github.io/owl-marketbrief/reports/2026-09-28-owl-weekly-rebalance
proOnly: false
cross-profile: false
---

# 📊 OWL 주식 시뮬레이션 주간 리밸런싱

📅 **2026-09-21 ~ 2026-09-28** · PAPER ONLY · 실제 주문 없음

## 주간 성과
- 시작 NAV: 1,047,560원 (2026-09-21)
- 현재 NAV: **1,030,860원** (2026-09-28)
- 주간 수익률: **-1.59%**
- KOSPI 구간 수익률: -1.68%
- KOSDAQ 구간 수익률: +1.23%
- 베스트 공통 보유종목: HD한국조선해양 (-1.77%)
- 워스트 공통 보유종목: 기아 (-2.74%)

## 리밸런싱 판정
- 시장 regime: **보합/중립**
- 현금 10% 이상: **True** (19.45%)
- 섹터 수: **4** (금융, 반도체/IT, 자동차, 조선/중공업)
- 40% 초과 종목: **없음**
- 일일 엔진 손절/익절/현금 트리거 상태: `{"cash_below_10pct": false, "stop_loss_minus15": false, "take_profit_plus20": false, "take_profit_plus30": false, "weight_over_40pct": false}`

## 월요일 일일 엔진에서 실행된 paper 거래
- **없음 — 주간 job은 중복매매를 하지 않음**

## 현재 포트폴리오
| 종목 | 수량 | 현재가 | 손익률 | 비중 | 섹터 |
|---|---:|---:|---:|---:|---|
| 신한지주 | 1 | 110,800원 | +14.11% | 10.75% | 금융 |
| HD한국조선해양 | 1 | 332,500원 | -2.64% | 32.25% | 조선/중공업 |
| 삼성전자 | 1 | 270,000원 | +5.06% | 26.19% | 반도체/IT |
| 기아 | 1 | 117,100원 | -5.87% | 11.36% | 자동차 |

## 엔진 정책
- 매매 state mutation은 `owl_simulation_daily.py` 단일 소유
- 주간 job은 verified snapshot 집계/감사/report만 수행
- 월요일 일일 job 완료 전에는 fail-closed
- broker/order API 없음

⚠️ 가상투자 시뮬레이션이며 투자 권유가 아닙니다.

## 관련 노트

<!-- wiki-auto-link:start -->
[[2026-09-07-owl-weekly-rebalance]]
[[2026-09-21-owl-weekly-rebalance]]
[[2026-09-11-owl-stock-simulation-daily-report]]
<!-- wiki-auto-link:end -->
