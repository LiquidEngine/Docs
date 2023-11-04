---
sidebar_position: 1
---

# Collision

Collision events are triggered when the entity that is attached to the script collides with another entity.

## Reference

### `on_collision_start(collision: CollisionEvent): void` {#on_collision_start}

This event is triggered at the start of event colliding with another entity.

```lua
function on_collision_start()
  local collided_with = collision.target
end
```

**Parameters:**

- `collision.target`: Target entity that this entity collided with. This value is a number that represents internal id of event. **Note:** The internal identifier is not persisted. The value can change to anything. Use this value to **only** check values dynamically.

### `on_collision_end(collision: CollisionEvent): void` {#on_collision_end}

This event is triggered at the end of event colliding with another entity.

```lua
function on_collision_end()
  local collided_with = collision.target
end
```

**Parameters:**

- `collision.target`: Target entity that this entity collided with. This value is a number that represents internal id of event. **Note:** The internal identifier is not persisted. The value can change to anything. Use this value to **only** check values dynamically.
