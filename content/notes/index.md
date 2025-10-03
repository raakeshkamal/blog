

## Rust tools
### Zed editor
brew install --cask zed
curl -f https://zed.dev/install.sh | sh
### Bun
curl -fsSL https://bun.sh/install | bash
### Wezterm
config.color_scheme = 'Batman'
### Zoxide
brew install zoxide
### Starship
curl -sS https://starship.rs/install.sh | sh
starship preset catppuccin-powerline -o ~/.config/starship.toml

### Cargo install
bacon
cargo-binstall
cargo-edit
cargo-nextest
cargo-update
du-dust
dysk
exa
fd-find
gitoxide
lstr
skim
yazi-fm


### ZSHRC
# --- ENV & PATH SETUP ---
export PATH=$HOME/.local/bin:$PATH
. "$HOME/.cargo/env"
export OPENROUTER_API_KEY="sk-or-v1-xxx"

# bun
export BUN_INSTALL="$HOME/.bun"
export PATH="$BUN_INSTALL/bin:$PATH"

eval "$(zoxide init zsh)"

# --- ALIASES ---
alias ls="exa --icons --group-directories-first"
alias find="fd"
alias fzf="sk"
alias cd="z"
alias cat="bat --paging=never"
alias bat="batcat" # This was a duplicate, one is enough.
alias python="uv run python"
alias pip="uv pip"
alias pbcopy='xclip -selection clipboard'
alias pbpaste='xclip -selection clipboard -o'

# bun
export BUN_INSTALL="$HOME/.bun"
export PATH="$BUN_INSTALL/bin:$PATH"
eval "$(starship init zsh)"

# A generic function to fuzzy-find a file and open it in a specified editor.
ffo() {
  # If no editor command is provided, print usage and return.
  if [[ -z "$1" ]]; then
    echo "Usage: ffo <editor-command>"
    return 1
  fi

  local file
  # Find files and let the user select one with skim.
  file=$(fd --type f --hidden --exclude .git . | sk --reverse)

  # If a file was selected, open it with the provided editor command.
  if [[ -n "$file" ]]; then
    # "$1" is the first argument passed to the function (e.g., "code" or "zed")
    # "$@" passes all remaining arguments, though not used here it's good practice
    "$1" "$file"
  fi
}

# Then, create simple aliases to call this function.
alias vf="ffo code"
alias zf="ffo zed"

# --- PLUGINS (Source these LAST) ---
source ~/.zsh/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
source ~/.zsh/zsh-autosuggestions/zsh-autosuggestions.zsh

### Running Blog
bun run quartz -- create
bun run quartz -- build --serve
