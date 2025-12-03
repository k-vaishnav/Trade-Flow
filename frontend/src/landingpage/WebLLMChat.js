// src/components/WebLLMChat.jsx
import React, { useEffect, useRef, useState } from "react";

// We'll dynamically import so dev builds don't crash if env doesn't support WebGPU
let CreateMLCEngine; // will be assigned after dynamic import

const MODEL_NAME = "Llama-3.2-1B-Instruct-q4f16_1-MLC"; // pick a small instruct model
const systemPrompt = `
You are TradeFlow AI: an expert stock trading assistant.
Your goals:
- Give short, accurate answers.
- No hallucinations.
- Only provide factual trading info.
- Explain in clear simple language.
- If user asks personal financial advice, give safe general guidance only.

Always reply in <200 words.
`;

export default function WebLLMChat() {
  const [engineReady, setEngineReady] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(null);
  const [isTyping, setIsTyping] = useState(false);

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi — I'm TradeFlow AI (local). Ask me about stocks, indicators, or trading terms.",
    },
  ]);
  const [input, setInput] = useState("");
  const engineRef = useRef(null);

  useEffect(() => {
    let mounted = true;

    async function init() {
      try {
        // dynamic import so bundlers handle optional dependency gracefully
        const webllm = await import("@mlc-ai/web-llm");
        CreateMLCEngine =
          webllm.CreateMLCEngine || webllm.createEngine || webllm.CreateEngine;

        // create engine and load model (progress callback)
        const engine = await CreateMLCEngine(MODEL_NAME, {
          // This callback is called repeatedly during model download/init
          initProgressCallback: ({ progress, stage, status }) => {
            // progress: 0..1
            if (!mounted) return;
            setLoadingProgress({ progress, stage, status });
          },
          cache: true,
        });

        engineRef.current = engine;
        if (!mounted) return;
        setEngineReady(true);
        setLoadingProgress(null);
      } catch (err) {
        console.error("Failed to initialize WebLLM engine:", err);
        // show friendly message in UI
        setLoadingProgress({
          error: true,
          message: "Could not load local model on this device.",
        });
      }
    }

    init();

    return () => {
      mounted = false;
    };
  }, []);

  const sendMessage = async () => {
    const txt = input.trim();
    if (!txt) return;

    const userMsg = { sender: "user", text: txt };
    setMessages((m) => [...m, userMsg]);
    setInput("");

    // show typing animation
    setIsTyping(true);

    try {
      const engine = engineRef.current;
      if (!engine) throw new Error("Engine not ready");

      const chatResponse = await engine.chat.completions.create({
        model: MODEL_NAME,
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: txt },
        ],
        max_tokens: 256,
        stream: false,
      });

      const replyText =
        chatResponse?.choices?.[0]?.message?.content ||
        chatResponse?.data?.[0]?.text ||
        chatResponse?.text ||
        "I couldn’t generate a reply.";

      // remove typing UI and prepare empty bubble for bot
      setIsTyping(false);

      setMessages((m) => [...m, { sender: "bot", text: "" }]);

      // typing effect
      let displayedText = "";
      for (let i = 0; i < replyText.length; i++) {
        displayedText += replyText[i];

        setMessages((m) => {
          const updated = [...m];
          updated[updated.length - 1] = {
            sender: "bot",
            text: displayedText,
          };
          return updated;
        });

        await new Promise((res) => setTimeout(res, 7)); // speed
      }
    } catch (err) {
      console.error("AI reply error:", err);

      setIsTyping(false);

      setMessages((m) => [
        ...m,
        { sender: "bot", text: "Error generating response on this device." },
      ]);
    }
  };

  return (
    <div
      style={{
        width: 360,
        border: "1px solid #ddd",
        borderRadius: 10,
        background: "#fff",
      }}
    >
      <h3
        style={{
          marginTop: 0,
          borderBottom: "1px solid #ddd",
          padding: 12,
          background: "#4f8cff",
          width: "100%",
          color: "white",
          borderRadius: 8,
          fontSize: 20,
        }}
      >
        TradeFlow Local AI
      </h3>

      {!engineReady && loadingProgress && !loadingProgress.error && (
        <div style={{ marginBottom: 12, padding: 12 }}>
          <div>
            Loading model: {Math.round((loadingProgress.progress || 0) * 100)}%
          </div>
          <div style={{ fontSize: 12, color: "#666" }}>
            {loadingProgress.stage || loadingProgress.status}
          </div>
        </div>
      )}

      {!engineReady && loadingProgress?.error && (
        <div style={{ marginBottom: 12, color: "crimson", padding: 12 }}>
          {loadingProgress.message ||
            "Model failed to load. Try a different browser or smaller model."}
        </div>
      )}

      <div
        style={{
          height: 300,
          overflowY: "auto",
          padding: 8,
          border: "1px solid #eee",
          borderRadius: 8,
        }}
      >
        {messages.map((m, i) => (
          <div
            key={i}
            style={{
              marginBottom: 10,
              textAlign: m.sender === "user" ? "right" : "left",
            }}
          >
            <div
              style={{
                display: "inline-block",
                padding: "8px 10px",
                borderRadius: 8,
                background: m.sender === "user" ? "#4f8cff" : "#f1f1f1",
                color: m.sender === "user" ? "#fff" : "#000",
                maxWidth: "80%",
              }}
            >
              {m.text}
            </div>
          </div>
        ))}
        {isTyping && (
          <div style={{ marginBottom: 10, textAlign: "left" }}>
            <div
              style={{
                display: "inline-block",
                padding: "8px 12px",
                borderRadius: 8,
                background: "#f1f1f1",
                color: "#555",
                fontStyle: "italic",
              }}
            >
              <span className="typing-dots">● ● ●</span>
            </div>
          </div>
        )}
      </div>

      <div style={{ display: "flex", marginTop: 8 }}>
        <input
          type="text"
          placeholder="Ask TradeFlow AI..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          style={{
            flex: 1,
            padding: 8,
            borderRadius: 6,
            border: "1px solid #ddd",
          }}
        />
        <button
          onClick={sendMessage}
          style={{
            marginLeft: 8,
            padding: "8px 12px",
            borderRadius: 6,
            background: "#4f8cff",
            color: "#fff",
            border: "none",
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}
