---
title: OWL 주식 시뮬레이션 주간 리밸런싱
date: '2026-10-02'
profile: finance
domain: economics
type: weekly
tags:
- economics
- simulation
- weekly
- rebalance
- paper-trading
summary: 2026-09-25~2026-10-02 paper 포트폴리오 주간 -0.85%, 현재 1,022,060원
keywords:
- OWL
- paper trading
- weekly rebalance
- KOSPI
- portfolio
canonical: https://herbpot.github.io/owl-marketbrief/reports/2026-10-02-owl-weekly-rebalance
proOnly: false
cross-profile: false
---

# 📊 OWL 주식 시뮬레이션 주간 리밸런싱

📅 **2026-09-25 ~ 2026-10-02** · PAPER ONLY · 실제 주문 없음

## 주간 성과
- 시작 NAV: 1,030,860원 (2026-09-28)
- 현재 NAV: **1,022,060원** (2026-10-02)
- 주간 수익률: **-0.85%**
- KOSPI 구간 수익률: +1.65%
- KOSDAQ 구간 수익률: +5.52%
- 베스트 공통 보유종목: 삼성전자 (+2.22%)
- 워스트 공통 보유종목: 신한지주 (-4.42%)

## 리밸런싱 판정
- 시장 regime: **보합/중립**
- 현금 10% 이상: **True** (19.61%)
- 섹터 수: **4** (금융, 반도체/IT, 자동차, 조선/중공업)
- 40% 초과 종목: **없음**
- 일일 엔진 손절/익절/현금 트리거 상태: `{"cash_below_10pct": false, "stop_loss_minus15": false, "take_profit_plus20": false, "take_profit_plus30": false, "weight_over_40pct": false}`

## 월요일 일일 엔진에서 실행된 paper 거래
- **없음 — 주간 job은 중복매매를 하지 않음**

## 현재 포트폴리오
| 종목 | 수량 | 현재가 | 손익률 | 비중 | 섹터 |
|---|---:|---:|---:|---:|---|
| 신한지주 | 1 | 105,900원 | +9.06% | 10.36% | 금융 |
| HD한국조선해양 | 1 | 326,500원 | -4.39% | 31.95% | 조선/중공업 |
| 삼성전자 | 1 | 276,000원 | +7.39% | 27.00% | 반도체/IT |
| 기아 | 1 | 113,200원 | -9.00% | 11.08% | 자동차 |

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
[[2026-09-28-owl-weekly-rebalance]]
<!-- wiki-auto-link:end -->
