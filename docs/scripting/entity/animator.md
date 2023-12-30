---
sidebar_position: 600
---

# Animator

Animator API allows changing the animator component of an entity.

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
