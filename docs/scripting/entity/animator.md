---
sidebar_position: 6
---

# Animator

Animator API allows changing the animator component of an entity.

## Reference

### `trigger(event: string): void` {#trigger}

Transition to new animation state based on event define in animator asset.

If it is not possible to transition to the state with the given event, the function does
nothing.

```lua
entity.animator:trigger("Move")
```

**Parameters:**

- `event`: Event name defined in animator asset represented as string.

---

### `delete(): void` {#delete}

Delete animator component.

```lua
entity.local_tarnsform:delete()
```
