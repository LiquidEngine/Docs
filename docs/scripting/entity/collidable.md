---
sidebar_position: 7
---

# Collidable

Collidable API allows modifying the collidable shape and material of an entity.

## Reference

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
static_friction = entity.collidable:get_static_friction()
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
dynamic_friction = entity.collidable:get_dynamic_friction()
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
restitution = entity.collidable:get_restitution()
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
