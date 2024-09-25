---
sidebar_position: 700
---

# Collidable

Collidable API allows modifying the collidable shape and material of an entity.

## Properties

### `staticFriction: number` {#prop-staticFriction}

Static friction of collidable represented as non-negative number.

```lua
local staticFriction = entity.collidable.staticFriction
entity.collidable.staticFriction = 0.4
```

### `dynamicFriction: number` {#prop-dynamicFriction}

Dynamic friction of collidable represented as non-negative number.

```lua
local dynamicFriction = entity.collidable.dynamicFriction
entity.collidable.dynamicFriction = 0.2
```

### `restitution: number` {#prop-restitution}

Restitution of collidable represented as non-negative number.

```lua
local restitution = entity.collidable.restitution
entity.collidable.restitution = 1.2
```

## Methods

### `sweep(dx: number, dy: number, dz: number, maxDistance: number): boolean, CollisionHit` {#method-sweep}

Perform sweep test with collidable against other collidables in a given direction that have querying enabled.

```lua
local logger = game:get('Logger')
local collided, info = entity.collidable:sweep(0.0, 0.0, 1.0, 0.2)

if collided then
  logger.debug(info.normal.x, info.normal.y, info.normal.z)
end
```

**Parameters:**

- `dx`: Direction vector x axis
- `dy`: Direction vector y axis
- `dz`: Direction vector z axis
- `maxDistance`: Maximum distance to search along the sweep

**Return:**

This function returns two values:

1. First value is a boolean value that checks if there was a collision (`true` if collided, `false` otherwise)
2. Second value provides information about the collision hit. This object has the following structure:

```lua
CollisionHit {
  normal: { x: number, y: number, z: number },
  entity: Entity
}
```

If collidable does not have collision, the returned value is `nil`.

---

### `setDefaultMaterial(): void` {#method-setDefaultMaterial}

Set default collidable material. Default material has the following values:

- static friction = 0.0
- dynamic friction = 0.0
- restitution = 1.0

```lua
entity.collidable:setDefaultMaterial()
```

---

### `setBoxGeometry(x: number, y: number, z: number): void` {#method-setBoxGeometry}

Set collidable geometry to box. Setting the geometry replaces previously set shape.

```lua
entity.collidable:setBoxGeometry(0.5, 1.0, 2.5)
```

**Parameters:**

- `x`: Half extent in x direction. The value accepts positive numbers.
- `y`: Half extent in y direction. The value accepts positive numbers.
- `z`: Half extent in z direction. The value accepts positive numbers.

---

### `setSphereGeometry(radius: number): void` {#method-setSphereGeometry}

Set collidable geometry to sphere. Setting the geometry replaces previously set shape.

```lua
entity.collidable:setSphereGeometry(radius)
```

**Parameters:**

- `radius`: Sphere radius. The value accepts positive numbers.

---

### `setCapsuleGeometry(radius: number, halfHeight: number): void` {#method-setCapsuleGeometry}

Set collidable geometry to capsule. Setting the geometry replaces previously set shape.

```lua
entity.collidable:setCapsuleGeometry(2.5, 10.0)
```

**Parameters:**

- `radius`: Capsule radius. Value accepts positive numbers.
- `halfHeight`: Capsule half height. Value accepts positive numbers.

---

### `setPlaneGeometry(): void` {#method-setPlaneGeometry}

Set collidable geometry to plane. Setting the geometry replaces previously set shape.

```lua
entity.collidable:setPlaneGeometry()
```

---

### `delete(): void` {#method-delete}

Delete collidable component.

```lua
entity.collidable:delete()
```
