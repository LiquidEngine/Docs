---
sidebarPosition: 800
---

# Rigid body

Rigid body API allows modifying dynamic rigid body of entity.

## Properties

### `mass: number` {#prop-mass}

Mass of rigid body in kilograms.

```lua
local mass = entity.rigidBody.mass
entity.rigidBody.mass = 5.0
```

### `isGravityApplied: number` {#prop-isGravityApplied}

Check or set if gravity is applied to rigid body. Note that, once gravity is applied, all the
forces of the rigid body will stay even if gravity is disabled in the future.

```lua
local isGravityApplied = entity.rigidBody.isGravityApplied
entity.rigidBody.isGravityApplied = false
```

## Methods

### `setDefaultParams(): void` {#method-setDefaultParams}

Set default rigid body parameters. Default parameters are:

- Mass: 1.0
- Inertia: (0, 0, 0)
- Gravity enabled

```lua
entity.rigidBody:setDefaultParams()
```

---

### `getInertia(): number, number, number` {#method-getInertia}

Get moment of inertia of rigid body.

```lua
local x, y, z = entity.rigidBody.getInertia()
```

**Returns:**

Moment of inertia of rigid body. The function returns three values -- inertia in x, y, and z directions represented in kg x m2.

### `setInertia(x: number, y: number, z: number): void` {#method-setInertia}

Set moment of inertia inertia of rigid body.

```lua
entity.rigidBody:setInertia(0.2, 0.5, 0.2)
```

**Parameters:**

- `x`: Moment of inertia in x direction. The value is a number represented in kg x m2.
- `y`: Moment of inertia in y direction. The value is a number represented in kg x m2.
- `z`: Moment of inertia in z direction. The value is a number represented in kg x m2.

---

---

### `applyForce(x: number, y: number, z: number): void` {#method-applyForce}

Apply force **once.** If you want to apply the force continuously, you need to apply it on every update.

```lua
entity.rigidBody:applyForce(100.0, 0.0, -20.0)
```

**Parameters:**

- `x`: Force in x direction. The value is measured in Newtons.
- `y`: Force in y direction. The value is measured in Newtons.
- `z`: Force in z direction. The value is measured in Newtons.

### `applyImpulse(x: number, y: number, z: number): void` {#method-applyImpulse}

Apply impulse **once.** If you want to apply the impulse continuously, you need to apply it on every update.

```lua
entity.rigidBody:applyImpulse(100.0, 0.0, -20.0)
```

**Parameters:**

- `x`: Impulse in x direction. The value is measured in Newtons x s.
- `y`: Impulse in y direction. The value is measured in Newtons x s .
- `z`: Impulse in z direction. The value is measured in Newtons x s.

### `applyTorque(x: number, y: number, z: number): void` {#method-applyTorque}

Apply torque **once.** If you want to apply the torque continuously, you need to apply it on every update.

```lua
entity.rigidBody:applyTorque(100.0, 0.0, -20.0)
```

**Parameters:**

- `x`: Torque in x direction. The value is measured in Newtons x meter.
- `y`: Torque in y direction. The value is measured in Newtons x meter.
- `z`: Torque in z direction. The value is measured in Newtons x meter.

---

### `clear(): void` {#method-clear}

Clear all currently applied forces. This is particularly useful when disabling gravity for the rigid body.

```lua
entity.rigidBody:clear()
```

---

### `delete(): void` {#method-delete}

Delete rigid body component.

```lua
entity.rigidBody:delete()
```
