---
sidebar_position: 1
---

# Script lifecycle

## Starting script

The script is immediately evaluated when it is processed by the scripting system. This occurs when script is attached to the entity for the first time in runtime. In editor, the script is always reevaluated at the start of simulation. We recommend to initialize all the necessary data for the script by defining them in the global context.

```lua
local position = 0
```

:::tip "Tip"

We strongly recommend to define all variables and functions that are you are not planning to export to with `local` to store them in local context, which can improve performance when accessing these variables.

:::

## Register updater

Every script register custom update logic that is called on every update. To register this updater, you need to use the `on_update` signal that is available from `game` object:

```lua
local position = 0.0

game.on_update:connect(function(dt)
  position = position + 5.0 * dt
end)
```

In this signal, `dt` represents the delta time of each update.

You can register and unregister multiple updaters from the script:

```lua
local position = 0.0
local disable_update = true

local position_updater = game.on_update:connect(function(dt)
  position = position + 5.0 * dt
end)

if disable_update then
  position_updater:disconnect()
end
```
