---
sidebar_position: 8
---

# Rigid body

Rigid body API allows modifying dynamic rigid body of entity.

## Reference

### `set_default_params(): void` {#set_default_params}

Set default rigid body parameters. Default parameters are:

- Mass: 1.0
- Inertia: (0, 0, 0)
- Gravity enabled

```lua
entity.rigid_body:set_default_params()
```

---

### `get_mass(): number` {#get_mass}

Get mass of rigid body.

```lua
local mass = entity.rigid_body.get_mass()
```

**Returns:**

Mass of rigid body. The value is a number.

### `set_mass(mass: number): void` {#set_mass}

Set mass of rigid body.

```lua
entity.rigid_body.set_mass(5.0)
```

**Parameters:**

- `mass`: Mass of rigid body. The value accepts non-negative numbers in kilograms.

---

### `get_inertia(): number, number, number` {#get_inertia}

Get moment of inertia of rigid body.

```lua
local x, y, z = entity.rigid_body.get_inertia()
```

**Returns:**

Moment of inertia of rigid body. The function returns three values -- inertia in x, y, and z directions represented in kg x m2.

### `set_inertia(x: number, y: number, z: number): void` {#set_inertia}

Set moment of inertia inertia of rigid body.

```lua
entity.rigid_body:set_inertia(0.2, 0.5, 0.2)
```

**Parameters:**

- `x`: Moment of inertia in x direction. The value is a number represented in kg x m2.
- `y`: Moment of inertia in y direction. The value is a number represented in kg x m2.
- `z`: Moment of inertia in z direction. The value is a number represented in kg x m2.

---

### `is_gravity_applied(): boolean` {#is_gravity_applied}

```lua
local is_gravity_applied = entity.rigid_body:is_gravity_applied()
```

**Returns:**

Returns `true` is gravity is applied to entity. Returns `false` is gravity is not applied to entity.

### `apply_gravity(apply: boolean): void` {#apply_gravity}

Apply gravity to the rigid body. Note that, once gravity is applied, all the forces of the rigid body will stay even if gravity is disabled in the future.

```lua
entity.rigid_body:apply_gravity(false)
```

**Parameters:**

- `apply`: Boolean value that determines if gravity should be applied. If value is `true`, gravity is applied. If value is `false`, gravity will not be applied.

---

### `apply_force(x: number, y: number, z: number): void` {#apply_force}

Apply force **once.** If you want to apply the force continuously, you need to apply it on every update.

```lua
entity.rigid_body:apply_force(100.0, 0.0, -20.0)
```

**Parameters:**

- `x`: Force in x direction. The value is measured in Newtons.
- `y`: Force in y direction. The value is measured in Newtons.
- `z`: Force in z direction. The value is measured in Newtons.

### `apply_impulse(x: number, y: number, z: number): void` {#apply_impulse}

Apply impulse **once.**

```lua
entity.rigid_body:apply_impulse(100.0, 0.0, -20.0)
```

**Parameters:**

- `x`: Impulse in x direction. The value is measured in Newtons x s.
- `y`: Impulse in y direction. The value is measured in Newtons x s .
- `z`: Impulse in z direction. The value is measured in Newtons x s.

### `apply_torque(x: number, y: number, z: number): void` {#apply_torque}

Apply torque **once.** If you want to apply the torque continuously, you need to apply it on every update.

```lua
entity.rigid_body:apply_torque(100.0, 0.0, -20.0)
```

**Parameters:**

- `x`: Torque in x direction. The value is measured in Newtons x meter.
- `y`: Torque in y direction. The value is measured in Newtons x meter.
- `z`: Torque in z direction. The value is measured in Newtons x meter.

---

### `clear(): void` {#clear}

Clear all currently applied forces. This is particularly useful when disabling gravity for the rigid body.

```lua
entity.rigid_body:clear()
```

---

### `delete(): void` {#delete}

Delete rigid body component.

```lua
entity.rigid_body:delete()
```
