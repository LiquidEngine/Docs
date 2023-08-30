---
sidebar_position: 3
---

# Project structure

Every liquid project has the following structure:

```
/assets
/cache
/settings
/[name].liquid
/.gitignore
```

## Assets directory

Assets directory is where all your assets live. Anytime you import an asset in editor, it will always be imported into this directory or a subdirectory of this directory. **This directory must be checked into your version control.**

## Cache directory

Cache directory stores all the engine optimized versions of your assets. Any imported asset is going to create the engine optimized version of the asset in this direcotry. **This directory must NOT be checked into your version control.** For convenience, we already provide a `.gitignore` that excludes this directory.

## Settings directory

Settings directory stores **user settings** in your project. This can include the UI layout that you have defined for yourself, whether you enabled editor grid, last position of editor camera. By default, we **exclude** this directory from version control because these settings are merely user settings.
