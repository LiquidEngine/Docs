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

We strongly recommend to define all variables and functions (except for special functions) that are you are not planning to export to with `local` to store them in local context, which can improve performance when accessing these variables.

:::

## `update`

`update` function is called on every update. This is the main method to update entities using script. This method accepts the time delta as a parameter:

```lua
local position = 0

function update(dt)
  position = position + 5.0 * dt
end
```
