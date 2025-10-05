
## env & path setup
```
export PATH=$HOME/.local/bin:$PATH
. "$HOME/.cargo/env"
export OPENROUTER_API_KEY="sk-or-v1-xxx"

# bun
export BUN_INSTALL="$HOME/.bun"
export PATH="$BUN_INSTALL/bin:$PATH"
```

## cli-tools

```
curl -sS https://starship.rs/install.sh | sh
starship preset catppuccin-powerline -o ~/.config/starship.toml
```

```
eval "$(zoxide init zsh)"
eval "$(starship init zsh)"
```

## rust-aliases
```
alias ls="eza --icons --group-directories-first"
alias tree="lstr --icons -L 2"
alias find="fd"
alias fzf="sk"
alias cd="z"
alias grep="rg"
alias cat="bat --paging=never"
alias python="uv run python"
alias pip="uv pip"
alias pbcopy='xclip -selection clipboard'
alias pbpaste='xclip -selection clipboard -o'
```

## some useful commands
```
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
```

## zshrc plugins
```
brew install zsh-autosuggestions
brew install zsh-syntax-highlighting
```
```
source ~/.zsh/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
source ~/.zsh/zsh-autosuggestions/zsh-autosuggestions.zsh
```

## Rsync tools

```
rsync -avzP /path/to/source/ /path/to/destination/
rsync -avzP /path/to/source/ user@remote.host:/path/to/destination/
```