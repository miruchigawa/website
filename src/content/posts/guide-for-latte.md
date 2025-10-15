---
title: Guide for Latte
date: 2025-10-14T21:09:10.455Z
lastMod: 2025-10-15T01:38:14.845Z
category: 'Tutorial'
tags: ['Go', 'WhatsApp', 'Bot', 'Open Source']
comments: true
draft: false
---

# Quick Guilde to Get Started with latte

Latte is my personal bot for managing groups and some serval conversation. This project is open source as it was and will always be open source.

In this blog we will be bringing about topics like how to use this, what we should know before we begin, and what requirements should be fulfilled before we begin.

I'm not explaining technical stuff, but only basically how to use it. If you're a beginner, I don't recommend using this project unless you have great documentation reading skills, because you will be reading a lot on other library documentation, such as whatsmeow and more.

## Notice before beginning

This project is still in the development phase. I'm too lazy to maintain this, so new features would be slow to add.

Before you begin, you should know any knowledge about Go and some reading documentation skills. This project doesn't have any great documentation yet, and you will be implementing some serval features by yourself, so great reading documentation skills are required here. I don't want to answer for already answered questions here.

I also use some tools for maintaining this project, like using claude-code to make everything align perfectly and make my code readable for you. I'm also setting up CLAUDE.md for you if you want to do something similar to me.

Also, please note, this project only implemented what I needed. For example, this project doesn't have the ability to delete messages, or the ability to send images, so in this case you would be able to implement that stuff by yourself.

## All requirements to run this project

This project uses the Go programming language. Of course, you should have go installed. On other packages, like webp, libwebp, webpmux, and ffmpeg, so make sure all of them are already installed.

Also, for third party APIs like Cobalt and Waifu2X APIs, you can run them yourself. All can be found here:

- [Cobalt API](https://github.com/imputnet/cobalt/blob/main/docs/run-an-instance.md)
- [Waifu2X API](https://github.com/nanakura/waifu2x-modal)

## How to run

This project uses a pairing method and only that method is available for now, but of course, you can change that and implement other methods as you need.

Before you run, you should set up the required environment variables, like `PHONE`, your bot phone number with country code without `+`. For example: `61234567890`.

In development, I have already setup air for hot reloading so you don't need to kill and run by yourself, just type in `make dev` or `make watch`.

## Your question hasn't already been answered yet?

If you have any questions, you can comment below and tell me your problem.
