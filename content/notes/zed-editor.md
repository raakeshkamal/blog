## Zed editor

```
brew install --cask zed
curl -f https://zed.dev/install.sh | sh
```

```
{
  "terminal": {
    "font_family": "JetBrainsMono Nerd Font",
    "font_size": 14,
    "line_height": {
      "custom": 1.5
    },
    "shell": {
      "with_arguments": {
        "program": "/bin/zsh",
        "args": ["--login"]
      }
    }
  },
  "icon_theme": "Zed (Default)",
  "ui_font_size": 16,
  "buffer_font_family": "JetBrainsMono Nerd Font",
  "buffer_font_size": 15,
  "theme": {
    "mode": "dark",
    "light": "Ayu Light",
    "dark": "Catppuccin Latte"
  },
  "format_on_save": "on",
  "soft_wrap": "editor_width",
  "inlay_hints": {
    "enabled": true,
    "show_type_hints": true,
    "show_parameter_hints": true,
    "show_other_hints": true
  },
  "autosave": {
    "after_delay": {
      "milliseconds": 1000
    }
  },
  "agent": {
    "default_profile": "write",
    "default_model": {
      "provider": "openrouter",
      // "model": "openai/gpt-5-codex"
      "model": "openai/gpt-5-codex"
    },
    "inline_assistant_model": {
      "provider": "openrouter",
      // "model": "openai/gpt-5-codex"
      "model": "x-ai/grok-4-fast:free"
    },
    "commit_message_model": {
      "provider": "openrouter",
      "model": "deepseek/deepseek-chat-v3.1"
      // "model": "x-ai/grok-4-fast:free"
    },
    "thread_summary_model": {
      "provider": "openrouter",
      // "model": "deepseek/deepseek-chat-v3.1"
      "model": "x-ai/grok-4-fast:free"
    }
  },
  "features": {
    "edit_prediction_provider": "supermaven"
  },
  "edit_predictions": {
    "mode": "subtle"
  },
  "lsp": {
    "rust-analyzer": {
      "initialization_options": {
        "check": {
          "command": "clippy"
        }
      }
    }
  }
}
```