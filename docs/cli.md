---
sidebar_position: 3
---

# CLI Introduction

The CLI is the best way to use the Apex Battle Pass Calculator, let's see how the CLI works.

## First Steps

First things first, make sure you have Node.js v16 or higher installed, you can get that **[here](https://nodejs.org)**.

Next, we'll install the Apex Battle Pass Calculator CLI. Open a terminal, then run this:

```bash
npm install -g @yoshiboi18303/apex-bp-calculator
```

:::info The npm CLI

NPM comes bundled with Node.js without any extra installations.

This ensures that you won't have to find any extra installation files to get it.

:::

:::info About the `-g` option

The `-g` option means **"global"**, which means the package will be installed onto your system rather than in a project.

This is useful for stuff like CLIs.

:::

## Usage

Now, let's use it for the first time! After installation, run this:

```bash
abp
```

:::info

Once the package was installed globally, the `abp` command was added to your `PATH` environment variable.

The `PATH` environment variable in simple terms references most stuff that can be run in the terminal. For example, the `code` command for Visual Studio Code.

NPM does a similar thing, except it references for example this path:

```txt
%APPDATA%\npm
```

Which on Windows, would equate to:

```txt
C:\Users\yourusername\AppData\Roaming\npm
```

:::

You will then be asked a series of questions, answer them, then you'll be given a **rough estimate** of the amount of stars needed to get to your goal level.

**Please wait for the GIF to load, they can load pretty slowly.**

You will then be asked a series of questions. Here's a GIF demonstrating the interactive process:

![GIF Showing The Questions](https://cdn.discordapp.com/attachments/1028104425371340851/1125833416194129930/ABPC.gif)

Answer the questions as prompted, and you'll be given a rough estimate of the amount of stars needed to reach your goal level.
