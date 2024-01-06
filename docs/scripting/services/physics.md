---
sidebar_position: 400
---

# Physics

```lua
local physics = game:get('Physics')
```

Physics service provides signals and utilities related to physics world.

## Signals

### `onCollisionStart:connect(handler: (event: CollisionEvent): void): void` {#signal-onCollisionStart}

Triggered when two entities start colliding.

```lua
local physics = game:get('Physics')
physics.onCollisionStart:connect(function(e)
  local a = e.a
  local b = e.b
end)
```

**Parameters:**

- `event`: Collision event
  - `event.a`: First collided entity. The value is an [entity](../entity/entity.md).
  - `event.b`: Second collided entity. The value is an [entity](../entity/entity.md).


### `onCollisionEnd:connect(handler: (event: CollisionEvent): void): void` {#signal-onCollisionEnd}

Triggered when two entities end colliding.

```lua
local physics = game:get('Physics')
physics.onCollisionEnd:connect(function(e)
  local a = e.a
  local b = e.b
end)
```

**Parameters:**

- `event`: Collision event
  - `event.a`: First collided entity. The value is an [entity](../entity/entity.md).
  - `event.b`: Second collided entity. The value is an [entity](../entity/entity.md).
