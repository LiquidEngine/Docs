---
sidebarPosition: 800
---

# Rigid body

Rigid body API allows modifying rigid body of entity. To learn more about rigid bodies and their types, check out [rigid body manual](../../manual/working-with-entities/rigid-body.md).

## Enums

### `RigidBodyType` {#enum-RigidBodyType}

Represents rigid body type:

- `RigidBodyType.Dynamic`: Dynamic rigid body type
- `RigidBodyType.Kinematic`: Kinematic rigid body type

## Properties

### `type: RigidBodyType` *(readonly)* {#prop-type}

Rigid body type provided as `RigidBodyType`:

```lua
local type = entity.rigidBody.type
if type == RigidBodyType.Dynamic then
  logger.debug('Type is dynamic')
elseif type == RigidBodyType.Kinematic then
  logger.debug('Type is kinematic')
end
```

### `mass: number` {#prop-mass}

*Only applicable for **dynamic** rigid bodies.*

Mass of rigid body in kilograms.

```lua
local mass = entity.rigidBody.mass
entity.rigidBody.mass = 5.0
```

### `inertia: Vector3` {#prop-inertia}

*Only applicable for **dynamic** rigid bodies.*

Inertia of rigid body.

```lua
local inertia = entity.rigidBody.inertia
entity.rigidBody.inertia = Vector3.new(0.2, 0.5, 0.2)
```

### `isGravityApplied: boolean` {#prop-isGravityApplied}

*Only applicable for **dynamic** rigid bodies.*

Check or set if gravity is applied to rigid body. Note that, once gravity is applied, all the
forces of the rigid body will stay even if gravity is disabled in the future.

```lua
local isGravityApplied = entity.rigidBody.isGravityApplied
entity.rigidBody.isGravityApplied = false
```

## Methods

### `setDefaultParams(): void` {#method-setDefaultParams}

*Only applicable for **dynamic** rigid bodies.*

Set default rigid body parameters. Default parameters are:

- Mass: 1.0
- Inertia: (0, 0, 0)
- Gravity enabled

```lua
entity.rigidBody:setDefaultParams()
```

---

### `applyForce(x: number, y: number, z: number): void` {#method-applyForce}

*Only applicable for **dynamic** rigid bodies.*

Apply force **once.** If you want to apply the force continuously, you need to apply it on every update.

```lua
entity.rigidBody:applyForce(100.0, 0.0, -20.0)
```

**Parameters:**

- `x`: Force in x direction. The value is measured in Newtons.
- `y`: Force in y direction. The value is measured in Newtons.
- `z`: Force in z direction. The value is measured in Newtons.

---

### `applyImpulse(x: number, y: number, z: number): void` {#method-applyImpulse}

*Only applicable for **dynamic** rigid bodies.*

Apply impulse **once.** If you want to apply the impulse continuously, you need to apply it on every update.

```lua
entity.rigidBody:applyImpulse(100.0, 0.0, -20.0)
```

**Parameters:**

- `x`: Impulse in x direction. The value is measured in Newtons x s.
- `y`: Impulse in y direction. The value is measured in Newtons x s .
- `z`: Impulse in z direction. The value is measured in Newtons x s.

---

### `applyTorque(x: number, y: number, z: number): void` {#method-applyTorque}

*Only applicable for **dynamic** rigid bodies.*

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

*Only applicable for **dynamic** rigid bodies.*

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
