"use client";
import { useState } from "react";
import { cyberRange as copy, redesign } from "@/content/site-content";

// An explainer, not a lab control plane. No requests, polling, CLI or attack execution.
export function CyberRange() {
  const [selected, setSelected] = useState<string>("router");
  const [stage, setStage] = useState<number | null>(null);
  const [track, setTrack] = useState(0);
  const node =
    copy.topology.find((item) => item.id === selected) ?? copy.topology[1];
  const program = copy.tracks[track];
  const step = stage === null ? null : copy.stages[stage];
  const chooseNode = (id: string) => {
    setSelected(id);
    setStage(null);
  };
  const advance = () => {
    const next =
      stage === null || stage === copy.stages.length - 1 ? 0 : stage + 1;
    setStage(next);
    setSelected(copy.stages[next].node);
  };
  return (
    <>
      <section className="range-panel" aria-labelledby="range-title">
        <div className="range-heading">
          <div>
            <p className="eyebrow">{copy.label}</p>
            <h2 id="range-title">{copy.title}</h2>
            <p>{copy.intro}</p>
          </div>
          <span className="pill">{redesign.common.planned}</span>
        </div>
        <p className="range-demo-label">{copy.badge}</p>
        <div className="range-workspace">
          <div
            className="range-topology"
            role="group"
            aria-label={copy.diagramLabel}
          >
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
              className="range-wires"
            >
              <path d="M18 28H46H74V76H46H18V28" />
              <path d="M46 28V76" />
              <path
                className="range-wire-accent"
                d={
                  selected === "firewall" || selected === "services"
                    ? "M46 28H74V76"
                    : selected === "exercise" || selected === "telemetry"
                      ? "M18 76H46"
                      : "M18 28H46"
                }
              />
            </svg>
            <span className="range-boundary-label">{copy.isolated}</span>
            {copy.topology.map((item) => (
              <button
                type="button"
                className="range-node"
                key={item.id}
                style={{ left: `${item.x}%`, top: `${item.y}%` }}
                aria-pressed={selected === item.id}
                onClick={() => chooseNode(item.id)}
              >
                <span className="range-node-code">{item.code}</span>
                <span>{item.label}</span>
                <i aria-hidden="true" />
              </button>
            ))}
          </div>
          <div
            className="range-inspector"
            aria-live="polite"
            aria-atomic="true"
          >
            <span className="eyebrow">
              {step
                ? `${copy.exerciseLabel} · ${copy.step} ${stage! + 1} ${copy.stepCount} ${copy.stages.length}`
                : copy.choose}
            </span>
            <h3>{step?.title ?? node.label}</h3>
            <p>{step?.description ?? node.description}</p>
            <p className="range-practice">{node.practice}</p>
            <div className="range-step-markers" aria-hidden="true">
              {copy.stages.map((item, i) => (
                <span
                  key={item.node}
                  data-active={
                    stage !== null && i <= stage ? "true" : undefined
                  }
                />
              ))}
            </div>
          </div>
        </div>
        <div className="range-actions">
          <div className="actions">
            <button type="button" className="button" onClick={advance}>
              {stage === copy.stages.length - 1
                ? copy.scenarioEnd
                : stage === null
                  ? copy.scenario
                  : copy.nextStage}
              <span aria-hidden="true">↗</span>
            </button>
            <button
              type="button"
              className="range-reset"
              onClick={() => {
                setStage(null);
                setSelected("router");
              }}
            >
              {copy.reset}
            </button>
          </div>
          <p className="fine-print">{copy.noExecution}</p>
        </div>
      </section>
      <section className="range-tracks" aria-labelledby="tracks-title">
        <div className="section-header">
          <h2 id="tracks-title">{copy.tracksTitle}</h2>
          <p>{copy.tracksLabel}</p>
        </div>
        <div
          className="track-selector"
          role="group"
          aria-label={copy.tracksLabel}
        >
          {copy.tracks.map((item, i) => (
            <button
              type="button"
              key={item.id}
              aria-pressed={track === i}
              onClick={() => setTrack(i)}
            >
              <span>{item.title}</span>
              <span>{item.focus}</span>
            </button>
          ))}
        </div>
        <div className="track-detail" aria-live="polite" aria-atomic="true">
          <div>
            <span className="pill">{redesign.common.planned}</span>
            <h3>{program.focus}</h3>
            <p>{program.result}</p>
          </div>
          <div>
            <ul>
              {program.topics.map((topic) => (
                <li key={topic}>{topic}</li>
              ))}
            </ul>
            <a
              className="text-link"
              href={program.official}
              target="_blank"
              rel="noopener noreferrer"
            >
              {copy.officialLink}
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
        <p className="fine-print">{copy.affiliation}</p>
      </section>
      <section className="range-principles" aria-labelledby="range-safety">
        <h2 id="range-safety">{copy.safetyTitle}</h2>
        <div>
          {copy.principles.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
