# Warehouse Safety Simulator — V28.5

**Rule-Based Multi-Agent Path Planning and Safety Evaluation for Humanoid Robots in Industrial Logistics**

## 1. Overview

Warehouse Safety Simulator is a research-oriented simulation platform developed to investigate the implementation and evaluation of safety rules for humanoid robots operating in dynamic industrial logistics environments.

The simulator integrates grid-based path planning, multi-agent coordination, dynamic obstacle modelling, and rule-based safety interventions into a unified experimental environment.

The project supports a bachelor's thesis on risk-based safety concepts for humanoid robots in industrial logistics.

### Research Objectives

- Translate selected safety requirements into executable simulation constraints.
- Investigate how safety rules influence agent movement and interaction.
- Compare simulation behavior with safety rules enabled and disabled.
- Quantify the relationship between safety-related interventions and operational efficiency.
- Provide reproducible experimental scenarios and structured data exports.

## 2. Main Features

### 2.1 Grid-Based A* Path Planning

- Two-dimensional grid representation of industrial logistics environments.
- A* pathfinding with obstacle and spatial constraint handling.
- Agent-specific movement and footprint considerations.
- Route recalculation in response to selected safety constraints.
- Direction-aware movement modelling for forklifts.

### 2.2 Multi-Agent Simulation

The simulation supports several agent types, including:

- Humanoid robots
- Forklifts
- Human workers

Agents execute automatically generated transport or movement missions within shared logistics environments.

Multi-agent coordination mechanisms include yielding, replanning, retreat, and controlled access to shared areas.

### 2.3 Rule-Based Safety Enforcement

Six safety rules from the research rulebook have been implemented as configurable simulation constraints.

| Rule | Safety Function |
|---|---|
| SR-009 | Authorized operating zones and spatial restrictions |
| SR-016 | Static obstacle and occupied-cell avoidance |
| SR-018 | Passage clearance and spatial separation constraints |
| SR-024 | Dynamic obstacle handling and route revalidation |
| SR-042 | Traffic conflict management and forklift-related coordination |
| SR-012 | Controlled access to shared handover areas |

Rules can be enabled individually or in combinations to evaluate their influence on simulation outcomes.

### 2.4 Dynamic Hazard Generation

- Configurable static and dynamic hazards.
- Randomized hazard placement using reproducible seeds.
- Multiple hazard-density configurations.
- Scheduled dynamic obstacle movement.
- Periodic hazard activity for time-dependent interaction scenarios.

### 2.5 Experiment Generation and Evaluation

- Automated mission generation.
- Reproducible scenario configurations.
- Matched rule-OFF and rule-ON simulation comparisons.
- Individual-rule and combined-rule experiments.
- Low-, medium-, and high-complexity map configurations.
- Structured exports for subsequent quantitative analysis.

## 3. What's New in V28.5?

V28.5 represents a later development stage of the simulator, incorporating improvements introduced during the V28 series.

### Dynamic Safety and Coordination

- Enhanced time-aware handling of dynamic obstacles under SR-024.
- Improved consideration of completed agents that remain present within the simulation environment.
- Additional coordination between dynamic hazard handling and traffic conflict management.
- Refinements to path replanning and safety-related movement behavior.

### Experimental Reproducibility

- Deterministic mission generation using configurable random seeds.
- Repeatable dynamic hazard schedules.
- Support for matched OFF/ON scenario comparisons.
- Expanded technical acceptance and regression testing resources.

### V28.5 Ready to Experiment

The Ready to Experiment distribution provides:

- Updated software version labeling.
- Revised technical acceptance criteria.
- A randomized acceptance test matrix.
- Reproducible regression testing scripts.
- Source-file checksums for software integrity verification.

The Ready to Experiment packaging does not introduce additional simulation-engine changes relative to the preceding V28.5 Candidate.

## 4. Experimental Evaluation

The associated thesis study evaluated 33 paired experimental configurations, consisting of:

- **18 single-rule experiments (E1):** Six safety rules evaluated across three map-complexity levels.
- **15 combined-rule experiments (E2):** Five rule combinations evaluated across three map-complexity levels.

The experiments compared identical scenario inputs with selected safety rules disabled (OFF) and enabled (ON).

All 33 recorded pairs completed their assigned missions under both conditions.

### Selected Experimental Results

| Metric | Rules OFF | Rules ON | Change |
|---|---:|---:|---:|
| Cumulative weighted penalty | 108,015.56 | 45,530.87 | −57.85% |
| Agent–agent contact pair-steps | 712 | 277 | −61.10% |
| Total movement (grid cells) | 147,163 | 151,051 | +2.64% |
| Sum of scenario makespans (s) | 41,069 | 43,234 | +5.27% |

**Key observations:**

- All 33 recorded configurations showed lower cumulative weighted penalties with the selected safety rules enabled.
- Mission completion was maintained across all recorded experiments.
- Safety interventions generally introduced additional movement, waiting, or execution time.
- Some individual-rule scenarios exhibited increased contact counts or residual dynamic obstacle contacts.

These results describe the behavior of the evaluated simulation scenarios under a researcher-defined scoring system. They do not establish a calibrated reduction in physical accident risk.

The historical experiment archives do not include a per-run engine hash. Consequently, exact build-level provenance of the exported results cannot be independently established from those archives alone.

## 5. Getting Started

### Option A — Run the Standalone Simulator

1. Download the repository as a ZIP file.
2. Extract the archive.
3. Locate `V28_5_READY_TO_EXPERIMENT.html`.
4. Open the file using a modern desktop web browser.

The standalone HTML distribution contains the simulator application and does not require a separate local installation.

### Option B — Explore the Source Code

The repository also includes the development source files:

- `engine.js` — Simulation engine, planning, and rule execution.
- `ui.js` — User interface and experimental controls.
- `maps.js` — Map definitions and related utilities.
- `index.html` — Browser application entry point.

The standalone HTML file is the recommended starting point for first-time users.

## 6. Experimental Outputs

The simulator supports exporting structured experimental records, including:

- `scenario_config.json`
- `generated_missions.json`
- `trajectory.csv`
- `rule_events.csv`
- `contacts.csv`
- `score_history.csv`
- `mission_results.csv`
- `summary.csv`

These outputs enable post-processing of trajectories, rule-related events, contact measurements, mission completion, and weighted performance metrics.

## 7. Research Scope and Limitations

This simulator is an academic research prototype.

It uses simplified 2D representations of industrial logistics environments and selected operational safety constraints.

Important limitations include:

- The implementation does not provide complete coverage of all safety requirements in the underlying research rulebook.
- The simulator is not a certified industrial robot safety controller.
- Residual contacts may occur even when safety rules are enabled.
- The weighted penalty function represents experimental evaluation criteria, not calibrated injury severity or accident probability.
- Simulation findings require further validation before application to physical robotic systems.

The software is intended for research, experimentation, and educational use.

## 8. Version Information

**Software:** Warehouse Safety Simulator  
**Version:** V28.5 — Ready to Experiment  
**Application:** 2D Multi-Agent Logistics Safety Simulation  
**Project Type:** Bachelor's Thesis Research Prototype

---

*This project investigates the translation of structured safety requirements into executable simulation constraints and their evaluation through multi-agent path planning experiments.*
