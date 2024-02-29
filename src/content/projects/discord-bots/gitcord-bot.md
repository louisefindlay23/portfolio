---
title: GitCord Bot
publishDate: 2021-07-28 00:00:00
img: /src/img/gitcord-bot.png
img_alt: A GitHub Octocat with a Discord logo inside it
description: |
  The ultimate Discord Bot that helps you manage your GitHub activity from Discord.
tags:
  - Discord Bot
  - JavaScript
  - API Integration
links:
  - icon: "mdi:github"
    url: "https://github.com/MLH-Fellowship/gitcord-bot/"
    text: "GitHub Repository"
  - icon: "mdi:globe"
    url: "https://mlh-fellowship.github.io/gitcord-bot/"
    text: "Website"
---

## Problem

During the Major League Hacking Pre-Fellowship, I noticed a documentation problem. It was great to use Discord for quick communication but it was time consuming to have to cross-post the information to GitHub so we could store project information for the future.

## Solution

We created GitCord Bot to cross-post our Discord messages to GitHub using Discord.js and Octokit.js. 

I developed the GitHub API integration and bot commands to post comments on GitHub issues and PRs, post and edit standup notes in GitHub organizations, and create and manage GitHub projects.

## Screenshot

![GitCord Bot PR Comment](../../../img/gitcord-bot-github-comment.png)