---
sidebar_position: 15
---

# Rigid body

Rigid bodies are undeformable physics objects that are affected by external forces.

![Rigid bodies](./img/rigid-body.png)

Rigid bodies have mass and inertia. You cannot apply forces to rigid body from the editor.

## Type

There are two types of rigid bodies -- dynamic and kinematic.

Dynamic rigid bodies are affected by physical forces, gravity, and constraints.

Kinematic rigid bodies interact with other rigid bodies but they are not affected by physical
forces and constraints. The movement and interactions of the kinematic rigid body is fully
managed by the script. When kinematic rigid body collides with a dynamic rigid body, the dynamic
rigid body will be affect by the impact of kinematic body but it will not affect the kinematic
body.

## Gravity

Gravity is a special force in the engine that automatically applies gravitational force to the object:

:::caution Work in progress

At the moment, gravity is always calculated using -9.8 m/s and cannot be modified at this time.

:::
