---
sidebar_position: 7
---

# Collidable

Collidable API allows modifying the collidable shape and material of an entity.

## Reference

### `sweep(dx: number, dy: number, dz: number, distance: number): boolean, CollisionHit` {#sweep}

Perform sweep test with collidable against other collidables in a given direction that have querying enabled.

```lua
local collided, info = entity.collidable:sweep(0.0, 0.0, 1.0, 0.2)

if collided then
  logger.log(info.normal.x, info.normal.y, info.normal.z)
end
```

**Parameters:**

- `dx`: Direction vector x axis
- `dx`: Direction vector x axis
- `dx`: Direction vector x axis
- `distance`: Collision distance

**Return:**

This function returns two values:

1. First value is a boolean value that checks if there was a collision (`true` if collided, `false` otherwise)
2. Second value provides information about the collision hit. This object has the following structure:

```ts
CollisionHit {
  normal: { x: number, y: number, z: number }
}
```

If no collidable does not have collision, the returned value is `nil`.

---

### `set_default_material(): void` {#set_default_material}

Set default collidable material. Default material has the following values:

- static friction = 0.0
- dynamic friction = 0.0
- restitution = 1.0

```lua
entity.collidable:set_default_material()
```

---

### `get_static_friction(): number` {#get_static_friction}

Get static friction of collidable.

```lua
local static_friction = entity.collidable:get_static_friction()
```

**Returns:**

Static friction of collidable. The returned value is a number.

### `set_static_friction(static_friction: number): void` {#set_static_friction}

Set static friction of collidable.

```lua
entity.collidable:set_static_friction(0.4)
```

**Parameters:**

- `static_friction`: Static friction that you want to set. The parameter accepts non-negative number.

---

### `get_dynamic_friction(): number` {#get_dynamic_friction}

Get dynamic friction of collidable.

```lua
local dynamic_friction = entity.collidable:get_dynamic_friction()
```

**Returns:**

Dynamic friction of collidable. The returned value is a number.

### `set_dynamic_friction(dynamic_friction: number): void` {#set_dynamic_friction}

Set dynamic friction of collidable.

```lua
entity.collidable:set_dynamic_friction(0.2)
```

**Parameters:**

- `static_friction`: Static friction that you want to set. The parameter accepts non-negative number.

---

### `get_restitution(): number` {#get_restitution}

Get restitution of collidable material.

```lua
local restitution = entity.collidable:get_restitution()
```

**Returns:**

Restitution of collidable material. The return value is a number.

### `set_restitution(restitution: number): void` {#set_restitution}

Set restitution of collidable material.

```lua
entity.collidable:set_restitution(1.2)
```

**Parameters:**

- `restitution`: Restitution that you want to set. The value accepts a non-negative number.

---

### `set_box_geometry(x: number, y: number, z: number): void` {#set_box_geometry}

Set collidable geometry to box. Setting the geometry replaces previously set shape.

```lua
entity.collidable:set_box_geometry(0.5, 1.0, 2.5)
```

**Parameters:**

- `x`: Half extent in x direction. The value accepts positive numbers.
- `y`: Half extent in y direction. The value accepts positive numbers.
- `z`: Half extent in z direction. The value accepts positive numbers.

---

### `set_sphere_geometry(radius: number): void` {#set_sphere_geometry}

Set collidable geometry to sphere. Setting the geometry replaces previously set shape.

```lua
entity.collidable:set_sphere_geometry(radius)
```

**Parameters:**

- `radius`: Sphere radius. The value accepts positive numbers.

---

### `set_capsule_geometry(radius: number, half_height: number): void` {#set_capsule_geometry}

Set collidable geometry to capsule. Setting the geometry replaces previously set shape.

```lua
entity.collidable:set_capsule_geometry(2.5, 10.0)
```

**Parameters:**

- `radius`: Capsule radius. Value accepts positive numbers.
- `half_height`: Capsule half height. Value accepts positive numbers.

---

### `set_plane_geometry(): void`

Set collidable geometry to plane. Setting the geometry replaces previously set shape.

```lua
entity.collidable:set_plane_geometry()
```

---

### `delete(): void`

Delete collidable component.

```lua
entity.collidable:delete()
```
