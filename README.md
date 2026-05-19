# WebVM

[![Discord server](https://img.shields.io/discord/988743885121548329?color=%235865F2&logo=discord&logoColor=%23fff)](https://discord.gg/yWRr2YnD9c)
[![Issues](https://img.shields.io/github/issues/leaningtech/webvm)](https://github.com/leaningtech/webvm/issues)

This repository hosts the source code for [https://webvm.io](https://webvm.io), a Linux virtual machine that runs in your browser.

> **Personal fork** — I'm using this to experiment with WebAssembly-based virtualization and learn how CheerpX works under the hood.

Try out the new Alpine / Xorg / i3 graphical environment: [https://webvm.io/alpine.html](https://webvm.io/alpine.html)

<img src="/assets/welcome_to_WebVM_alpine_2024.png" width="90%">

## What is WebVM?

WebVM is a server-less virtual environment running fully client-side in HTML5/WebAssembly. It's designed to be Linux ABI-compatible and runs an unmodified Debian distribution including many native development toolchains.

WebVM is powered by the **CheerpX** virtualization engine, which provides:

- x86-to-WebAssembly JIT compiler
- Virtual block-based file system
- Linux syscall emulator
- Safe, sandboxed client-side execution

## Table of Contents

- [Networking](#networking)
- [Development & Customization](#development--customization)
  - [Deploy to GitHub Pages](#deploy-to-github-pages)
  - [Local Serving & Image Configuration](#local-serving--image-configuration)
- [Claude AI Integration](#claude-ai-integration)
- [Community & Support](#community--support)
- [Learn More](#learn-more)
- [License](#license)

> [!NOTE]
> Visit [https://webvm.io](https://webvm.io) to get started immediately in your browser. No setup required.
>
> For local setup, custom image builds, and fork/deploy guidance, see [Development & Customization](#development--customization).

## Networking

WebVM supports **Tailscale** integration. So your browser VM can reach your private network and, with an exit node, the public internet too.

> [!NOTE]
> Some low-level networking operations (especially ICMP used by `ping`) are not currently available in this environment. For connectivity checks, use `curl` or `wget`.

### Local network

1.  Open the "Networking" panel from the sidebar
2.  Click "Connect to Tailscale"
3.  Log in (create a free account at [tailscale.com](https://tailscale.com) if needed)
4.  Click "Connect" when prompted

WebVM now has access to all machines in your Tailscale network!

### Internet Usage Tips

> [!TIP]
> On slower connections there may be a short delay before initialisation. Connection status is shown as a colored dot on the button: orange = local network, green = global/internet. The button text shows your Tailscale IP address once connected.

To access the public internet from WebVM, set up an **Exit Node** on another device in your Tailscale network:

1. Follow the [Tailscale Exit Node quickstart](https://tailscale.com/kb/1408/quick-guide-exit-nodes?tab=linux) (sections: "Advertise a device as an exit node")
2. WebVM automatically uses the exit node once advertised

### Using an Auth Key

As an alternative to interactive login, add your Tailscale a