export interface AIClientConfig {
  provider: "openai" | "anthropic";
  apiKey: string;
  model?: string;
}

const DEFAULT_MODELS = {
  openai: "gpt-4o",
  anthropic: "claude-sonnet-4-6",
};

export async function generateContent(
  config: AIClientConfig,
  systemPrompt: string,
  userPrompt: string,
  maxTokens: number = 16000
): Promise<string> {
  const model = config.model ?? DEFAULT_MODELS[config.provider];

  if (config.provider === "openai") {
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${config.apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model,
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt },
        ],
        temperature: 0.7,
        max_tokens: maxTokens,
        response_format: { type: "json_object" },
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      throw new Error(`OpenAI API error (${res.status}): ${err}`);
    }

    const data = await res.json();
    return data.choices[0].message.content;
  } else {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "x-api-key": config.apiKey,
        "anthropic-version": "2023-06-01",
        "anthropic-dangerous-direct-browser-access": "true",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        model,
        system: systemPrompt,
        messages: [{ role: "user", content: userPrompt }],
        max_tokens: maxTokens,
        temperature: 0.7,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      throw new Error(`Anthropic API error (${res.status}): ${err}`);
    }

    const data = await res.json();
    return data.content[0].text;
  }
}
