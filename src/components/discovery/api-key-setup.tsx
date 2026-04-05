"use client";

import { useState, useEffect } from "react";
import { db } from "@/lib/db";
import { Key, Eye, EyeOff, CheckCircle2 } from "lucide-react";

interface ApiKeySetupProps {
  locale: string;
  onSaved: () => void;
  onCancel: () => void;
}

export function ApiKeySetup({ locale, onSaved, onCancel }: ApiKeySetupProps) {
  const [provider, setProvider] = useState<"openai" | "anthropic">("openai");
  const [apiKey, setApiKey] = useState("");
  const [showKey, setShowKey] = useState(false);
  const [testing, setTesting] = useState(false);
  const [testResult, setTestResult] = useState<"success" | "error" | null>(null);

  useEffect(() => {
    async function loadExisting() {
      const settings = await db.userSettings.toCollection().first();
      if (settings?.aiProvider) setProvider(settings.aiProvider);
      if (settings?.openaiApiKey && settings.aiProvider !== "anthropic") {
        setApiKey(settings.openaiApiKey);
      } else if (settings?.anthropicApiKey && settings.aiProvider === "anthropic") {
        setApiKey(settings.anthropicApiKey);
      }
    }
    loadExisting();
  }, []);

  async function handleTest() {
    setTesting(true);
    setTestResult(null);
    try {
      if (provider === "openai") {
        const res = await fetch("https://api.openai.com/v1/models", {
          headers: { Authorization: `Bearer ${apiKey}` },
        });
        setTestResult(res.ok ? "success" : "error");
      } else {
        const res = await fetch("https://api.anthropic.com/v1/messages", {
          method: "POST",
          headers: {
            "x-api-key": apiKey,
            "anthropic-version": "2023-06-01",
            "anthropic-dangerous-direct-browser-access": "true",
            "content-type": "application/json",
          },
          body: JSON.stringify({
            model: "claude-sonnet-4-20250514",
            max_tokens: 10,
            messages: [{ role: "user", content: "hi" }],
          }),
        });
        setTestResult(res.ok ? "success" : "error");
      }
    } catch {
      setTestResult("error");
    }
    setTesting(false);
  }

  async function handleSave() {
    const settings = await db.userSettings.toCollection().first();
    if (settings?.id) {
      if (provider === "openai") {
        await db.userSettings.update(settings.id, {
          aiProvider: provider,
          openaiApiKey: apiKey,
        });
      } else {
        await db.userSettings.update(settings.id, {
          aiProvider: provider,
          anthropicApiKey: apiKey,
        });
      }
    }
    onSaved();
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Key className="h-5 w-5 text-primary" />
        <h3 className="text-lg font-bold">
          {locale === "zh" ? "设置 AI 密钥" : "Set Up AI Key"}
        </h3>
      </div>

      <p className="text-sm text-muted-foreground">
        {locale === "zh"
          ? "生成国家内容需要 AI API 密钥。选择你的提供商："
          : "An AI API key is needed to generate nation content. Choose your provider:"}
      </p>

      {/* Provider toggle */}
      <div className="flex gap-2">
        {(["openai", "anthropic"] as const).map((p) => (
          <button
            key={p}
            onClick={() => {
              setProvider(p);
              setApiKey("");
              setTestResult(null);
            }}
            className={`flex-1 text-sm px-3 py-2 rounded-lg border transition-colors ${
              provider === p
                ? "bg-primary text-primary-foreground border-primary"
                : "border-border hover:bg-accent"
            }`}
          >
            {p === "openai" ? "OpenAI" : "Anthropic (Claude)"}
          </button>
        ))}
      </div>

      {/* API key input */}
      <div className="relative">
        <input
          type={showKey ? "text" : "password"}
          value={apiKey}
          onChange={(e) => {
            setApiKey(e.target.value);
            setTestResult(null);
          }}
          placeholder={
            provider === "openai" ? "sk-..." : "sk-ant-..."
          }
          className="w-full rounded-lg border bg-background px-3 py-2.5 text-sm pr-10 focus:outline-none focus:ring-2 focus:ring-primary/30"
        />
        <button
          onClick={() => setShowKey(!showKey)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
        >
          {showKey ? (
            <EyeOff className="h-4 w-4" />
          ) : (
            <Eye className="h-4 w-4" />
          )}
        </button>
      </div>

      {/* Test result */}
      {testResult === "success" && (
        <div className="flex items-center gap-2 text-sm text-green-600">
          <CheckCircle2 className="h-4 w-4" />
          {locale === "zh" ? "连接成功！" : "Connection successful!"}
        </div>
      )}
      {testResult === "error" && (
        <p className="text-sm text-destructive">
          {locale === "zh"
            ? "连接失败，请检查密钥"
            : "Connection failed. Please check your key."}
        </p>
      )}

      {/* Security note */}
      <p className="text-xs text-muted-foreground">
        🔒{" "}
        {locale === "zh"
          ? "密钥仅存储在此设备上，不会发送到其他服务器。"
          : "Your key is stored only on this device and never sent to any server except the API provider."}
      </p>

      {/* Actions */}
      <div className="flex gap-2">
        <button
          onClick={onCancel}
          className="flex-1 rounded-lg border py-2.5 text-sm hover:bg-accent"
        >
          {locale === "zh" ? "取消" : "Cancel"}
        </button>
        <button
          onClick={handleTest}
          disabled={!apiKey || testing}
          className="flex-1 rounded-lg border py-2.5 text-sm hover:bg-accent disabled:opacity-50"
        >
          {testing
            ? locale === "zh"
              ? "测试中..."
              : "Testing..."
            : locale === "zh"
              ? "测试连接"
              : "Test Connection"}
        </button>
        <button
          onClick={handleSave}
          disabled={!apiKey}
          className="flex-1 rounded-lg bg-primary text-primary-foreground py-2.5 text-sm font-medium disabled:opacity-50"
        >
          {locale === "zh" ? "保存" : "Save"}
        </button>
      </div>
    </div>
  );
}
