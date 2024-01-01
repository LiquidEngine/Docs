---
sidebar_position: 5
---

# Working with animators

:::caution WIP Animator UI

Current priority of the engine is to provide a node based UI to define animator states and transitions. In the meantime, you can use the animator by modifying the YAML file directly.

:::

Animators are essential for animations to work in the engine. Animators are state machines that allow transition between different animation states via events. Animator assets are stored as YAML based text files in the assets directory. Because they are text files, it is easier to manage track the state of it in version control.

Here is an example animator file:

```yaml
version: 0.1
type: animator
initial: AttackChop
states:
  AttackChop:
    output:
      type: animation
      animation: f6a58a00b3ed40c1bd55fcae4133adff
    on:
      - type: event
        event: slice-diagonal
        target: AttackSliceDiagonal
      - type: event
        event: slice-horizontal
        target: AttackSliceHorizontal
  AttackSliceDiagonal:
    output:
      type: animation
      animation: d410828fb4454c1c949f5e3c965e4ae8
      speed: 1.5
    on:
      - type: event
        event: slice-horizontal
        target: AttackSliceHorizontal
  AttackSliceHorizontal:
    output:
      type: animation
      animation: 1f1fc120cba24fb282cf353bb385277b
      loopMode: linear
    on:
      - type: event
        event: chop
        target: AttackChop
```

## States

Animators are state machines; so, we we need to define all available states in animator. All states are stored inside a `states` object. Each key in the object represents the **name** of the state. Each state is an object that has two fields -- `output` and `on`.

### Output

`output` represents what happens when the state becomes the active state. This is where you need to provide your animation:

```yaml
output:
  type: animation # Required field
  animation: f6a58a00b3ed40c1bd55fcae4133adff # UUID of animation
  loopMode: linear # Optional
  speed: 1.5 # Optional
```

- `type`: Type is a required field. Currently, only `animation` type is supported
- `animation`: UUID of the animation
- `loopMode` (default: `none`): Loop mode defines what happens when animation in the end reaches the end.
  - `none`: Stops animation when it reaches the end
  - `linear`: Starts animation from the beginning when it reaches the end
- `speed` (default: `1.0`): Represents the animation speed
  - `1.0`: runs animation at the speed that is defined in the animation
  - `< 1.0`: runs animation slower than the speed that is defined in the animation
  - `> 1.0`: runs animation faster than the speed that is defined in the animation
  - **Note:** Negative values are not allowed

:::info Finding UUIDs

In order to make it easier to find UUIDs, you can right click on any asset in the asset browser and click "Copy UUID". This will copy the UUID to your systems clipboard.

:::

### Transitions

List of transitions from the state are defined in the `on` field. Each transition is an object with the following structure:

```yaml
type: event # Required and always "event"
event: chop # Event name
target: AttackChop # Target state
```

**`target`** field **must always** point to the state that exists in the animator YAML file. The `event` field represents the event that that triggers the transition.

:::info Important note on event names

Event names are what allows switching animations from the scripting system. Make sure to write names that are human readable to make it easier to understand.

:::

## Initial state

Every animator **must have** an initial state. If initial state is not provided or is invalid, the first state will automatically be selected as the default initial state.
