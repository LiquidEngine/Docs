---
sidebar_position: 240
---

# Relations

Entities in the scene are stored in a hierarchial way and have a parent-child relation.

## Parent

### Getting parent entity

You can retrieve parent entity by accessing the `parent` field of entity:

```lua
local parentName = entity.parent
```

### Setting parent entity

You can reparent or set a new parent for entity by assigning to `parent` field of entity:

```lua
local entityQuery = game:get('EntityQuery')
local newEntity = entityQuery:getFirstEntityByName('New parent')
entity.parent = newEntity
```

**Constraints**

There several constraints when it comes to reparenting. The following operations are **NOT** possible when reparenting an entity.

- Newly assigned parent **cannot** be a child of entity.
- Newly assigned parent **cannot** be a descendant of entity.
 