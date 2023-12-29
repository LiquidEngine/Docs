---
sidebar_position: 3
---

# Physics

```lua
local physics = game:get('Physics')
```

Physics service provides signals and utilities related to physics world.

## Reference

### `on_collision_start:connect(handler: (event: CollisionEvent): void): void` {#on_collision_start}

Triggered when two entities start colliding.

```lua
local physics = game:get('Physics')
physics.on_collision_start:connect(function(e)
  local a = e.a
  local b = e.b
end)
```

**Parameters:**

- `event`: Collision event
  - `event.a`: First collided entity. The value is an [entity](../entity/entity.md).
  - `event.b`: Second collided entity. The value is an [entity](../entity/entity.md).


### `on_collision_end:connect(handler: (event: CollisionEvent): void): void` {#on_collision_end}

Triggered when two entities end colliding.

```lua
local physics = game:get('Physics')
physics.on_collision_end:connect(function(e)
  local a = e.a
  local b = e.b
end)
```

**Parameters:**

- `event`: Collision event
  - `event.a`: First collided entity. The value is an [entity](../entity/entity.md).
  - `event.b`: Second collided entity. The value is an [entity](../entity/entity.md).
