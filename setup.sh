#!/bin/bash
pnpm bin -g
pnpm add -g pnpm
pnpm install
touch .env.local
pnpm dev
