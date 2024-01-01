---
sidebar_position: 600
---

# Animator

Animator API allows changing the animator component of an entity.

## Properties

### `normalizedTime: number` *(readonly)* {#prop-normalizedTime}

Current normalized animation time in animator. The normalized value is between `[0.0, 1.0]`. If animator component does not exist, this property returns `nil`.

```lua
local normalizedTime = entity.animator.normalizedTime
```

### `currentState: AnimationState` *(readonly)* {#prop-currentState}

Current animation state in animator. This value is represented by a table that has the following properties:

- `name`: Animation state name. The name is derived from the [names of animation states stored in animator asset](../../manual/asset-pipeline/working-with-animators.md#states).
 
If animator component does not exist, this property returns `nil`.

```lua
local state = entity.animator.currentState
local name = state.name
```

## Methods

### `trigger(event: string): void` {#method-trigger}

Transition to new animation state based on event define in animator asset.

If it is not possible to transition to the state with the given event, the function does
nothing.

```lua
entity.animator:trigger("Move")
```

**Parameters:**

- `event`: Event name defined in animator asset represented as string.

---

### `delete(): void` {#method-delete}

Delete animator component.

```lua
entity.animator:delete()
```
