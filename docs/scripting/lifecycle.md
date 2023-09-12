---
sidebar_position: 1
---

# Script lifecycle

Every script **must have** the following functions defined: `start` and `update`.

## `start`

`start` function is called when the script is started for the first this. This can occur when a new script is attached to an entity for the first time. This function is typically used to set up the necessary data for the script to run properly:

```lua
position = 0

function start()
  position = 0
end
```

## `update`

`update` function is called on every update. This is the main method to update entities using script. This method accepts the time delta as a parameter:

```lua
position = 0

function start()
  position = 0
end

function update(dt)
  position = position + 5.0 * dt
end
```
