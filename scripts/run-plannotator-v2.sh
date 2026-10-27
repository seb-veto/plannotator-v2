#!/bin/sh
set -eu
plannotator_v2_root=$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)
export PLANNOTATOR_INBOX_CONNECT="${PLANNOTATOR_INBOX_CONNECT:-0}"
export PLANNOTATOR_DATA_DIR="${PLANNOTATOR_DATA_DIR:-${HOME}/.plannotator-v2}"
plannotator_v2_binary="${PLANNOTATOR_V2_BINARY:-${plannotator_v2_root}/.local/runtime/plannotator}"
if [ ! -x "$plannotator_v2_binary" ]; then
  echo 'Build plannotator-v2 first; see docs/plannotator-v2/README.md.' >&2
  exit 1
fi
if [ "$#" -eq 0 ]; then
  set -- inbox
fi
exec "$plannotator_v2_binary" "$@"
