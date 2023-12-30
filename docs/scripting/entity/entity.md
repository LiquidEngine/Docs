---
sidebar_position: 300
---

# Entity API

Quoll Engine uses Entity Component System to store and manage the scene. All created and retrieved entities in scripting provide interfaces to work with different components of entities.

Throughout the entity API docs, you will see syntax similar to below being used.

```lua
entity.localTransform:getPosition()
```

It is very important to remember that all the functions that are called from Entity APIs must be called using `:` notation. Otherwise, the script will fail.
